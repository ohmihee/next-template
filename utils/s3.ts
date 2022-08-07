// import { OBJECT_URL, S3_REGION, S3_ACCESSKEYID, S3_SECRETKEY, S3_BUCKET } from '../utils/config';
import aws from 'aws-sdk';
import { randomUUID } from 'crypto';

const objectUrl = process.env.OBJECT_URL as string;
const s3Region = process.env.OBJECT_URL as string;
const accessKey = process.env.OBJECT_URL as string;
const s3SecretKey = process.env.OBJECT_URL as string;
const s3Bucket = process.env.OBJECT_URL as string;

export const s3 = new aws.S3({
    region:s3Region,
    accessKeyId:accessKey,
    secretAccessKey: s3SecretKey,
})

export const returnParams = (body: string, folder: string) => ({
    Bucket: s3Bucket,
    Key:`${folder}/${randomUUID()}`,
    Body: body,
    ContentType: 'image/png',
    ACL: "public-read"
})