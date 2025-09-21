import express from "express";
import {S3Client, PutObjectCommand} from "@aws-sdk/client-s3";
import {getSignedUrl} from "@aws-sdk/s3-request-presigner";
import pool from "../config/db.js";

const router = express.Router();

const s3 = new S3Client( {
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyID
    }
} )