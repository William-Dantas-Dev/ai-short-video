/** @type { import("drizzle-kit").Config } */
export default{
    schema: "./src/configs/schema.ts",
    dialect: "postgresql",
    dbCredentials: {
        url: "postgresql://AI-Content-Generator_owner:kJrYwCvL4aV2@ep-icy-wildflower-a5sse9uz.us-east-2.aws.neon.tech/ai-short-video-generator?sslmode=require",
    }
};