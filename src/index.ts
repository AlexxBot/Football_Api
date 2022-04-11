import "./config";
import app from "./app";
import { connectDB } from "./db";
import { PORT } from "./config";

//const PORT = process.env.PORT || 3000;

async function main() {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`server listening on port : ${PORT}`));
  } catch (err) {
    console.error(err);
  }
}

main();
