import { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } from '$env/static/private'
import {
    BedrockRuntimeClient,
    InvokeModelCommand,
  } from "@aws-sdk/client-bedrock-runtime";

 
const AWS_REGION = "us-east-1"
console.log(AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY)
const client = new BedrockRuntimeClient({ region: AWS_REGION,  credentials: {
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY
} })
export default client