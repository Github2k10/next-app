import clientPromise from "../../lib/db"

export default async function handler(req, res) {
    try {
      const client = await clientPromise;
      const db = client.db("sample_mflix");
  
      // Fetch data from the "posts" collection
      const posts = await db.collection("users").find({}).toArray();
  
      res.status(200).json(posts);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Unable to fetch posts" });
    }
}