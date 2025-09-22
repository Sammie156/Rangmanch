import express from "express";
import AWS from "aws-sdk";
import dotenv from "dotenv";
import pool from "../config/db.js";

dotenv.config();
const router = express.Router();

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

// Generating a presigned URL
router.get("/generate-presigned-url", async (req, res) => {
  try {
    const { fileName, fileType } = req.query;

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `uploads/${Date.now()}-${fileName}`,
      Expires: 60, // URL valid for 60s
      ContentType: fileType,
    };

    const url = await s3.getSignedUrlPromise("putObject", params);

    res.json({
      uploadUrl: url,
      fileUrl: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${params.Key}`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate URL" });
  }
});

// Save post metadata
router.post("/", async (req, res) => {
  try {
    const { title, text_content, image_url, user_id } = req.body;

    const sql = `
      INSERT INTO posts (user_id, title, text_content, image_url)
      VALUES (?, ?, ?, ?)
    `;
    const [result] = await pool.execute(sql, [
      user_id,
      title,
      text_content,
      image_url,
    ]);

    const insertedPost = {
      post_id: result.insertId,
      user_id,
      title,
      text_content,
      image_url,
      created_at: new Date(),
    };

    res.status(201).json(insertedPost);
  } catch (error) {
    console.error("Error inserting post:", error);
    res.status(500).json({ error: "Failed to create post" });
  }
});

export default router;
