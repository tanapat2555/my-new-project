const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://admin:mcUbdDjlBr5FGY67@cluster0.g1xzp.mongodb.net/SutRLAdmin"; // ระบุชื่อฐานข้อมูลที่นี่
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        // ทำการดำเนินการกับฐานข้อมูลที่นี่ เช่น ดึงข้อมูล หรือเพิ่มข้อมูล
        const database = client.db("SutRLAdmin"); // ระบุชื่อฐานข้อมูลที่นี่
        const collection = database.collection("UserLogin"); // ระบุชื่อ collection ที่คุณต้องการทำงานด้วย
        
        // ตัวอย่างการดึงข้อมูล
        const users = await collection.find().toArray();
        console.log(users);

    } catch (err) {
        console.error("Connection failed", err);
    } finally {
        await client.close(); // ปิดการเชื่อมต่อเมื่อเสร็จสิ้น
    }
}

run().catch(console.dir);
