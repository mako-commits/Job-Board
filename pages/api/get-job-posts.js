// /api/get-job-posts

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;

//* API ROUTE ==> [POST] /api/get-job-posts

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const client = await MongoClient.connect(MONGODB_URI);
      const db = client.db();
      const jobsCollection = db.collection("jobs");
      const data = await jobsCollection.find().toArray();
      console.log(data);
      client.close();
      res.status(201).json({
        status: 201,
        message: "Job created successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
};
export default handler;
