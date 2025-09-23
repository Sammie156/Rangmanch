import express from "express";
import AWS from "aws-sdk";
import dotenv from "dotenv";
import pool from "../config/db.js";

dotenv.config();
const post_router = express.Router();

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

// 1️⃣ Generate presigned URL
post_router.get("/generate-presigned-url", async (req, res) => {
  try {
    const { fileName, fileType } = req.query;

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `uploads/${Date.now()}-${fileName}`,
      Expires: 60, // 1 minute
      ContentType: fileType,
    };

    const uploadUrl = await s3.getSignedUrlPromise("putObject", params);
    const fileUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${params.Key}`;

    res.json({ uploadUrl, fileUrl });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate URL" });
  }
});

// 2️⃣ Save post metadata to DB
post_router.post("/", async (req, res) => {
  console.log("Received Body: ", req.body);

  try {
    const { title, description, fileUrl, userId } = req.body;

    const sql = `
      INSERT INTO posts (user_id, title, text_content, image_url)
      VALUES (?, ?, ?, ?)
    `;
    const [result] = await pool.execute(sql, [
      userId,
      title,
      text_content,
      image_url,
    ]);

    const insertedPost = {
      post_id: result.insertId,
      user_id: userId,
      title,
      text_content: description,
      image_url: fileUrl,
      created_at: new Date(),
    };

    res.status(201).json(insertedPost);
  } catch (error) {
    console.error("Error inserting post:", error);
    res.status(500).json({ error: "Failed to create post" });
  }
});

export default post_router;
