// /api/new-meet-up

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;

//* API ROUTE ==> [POST] /api/new-meet-up

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    try {
      const client = await MongoClient.connect(MONGODB_URI);
      const db = client.db();
      const jobsCollection = db.collection("jobs");
      const result = await jobsCollection.insertOne(data);
      console.log(res);
      client.close();
      res.status(201).json({
        status: 201,
        message: "Job created successfully",
      });
    } catch {
      res.status(500).json({
        message: "Something went wrong",
      });
    }
  }
};
export default handler;
