import User from "@/models/user";
import { connectMongoDB } from "@/utils/connectDB";

export const GET = async (req, { params: { email } }) => {
  try {
    connectMongoDB();

    const user = await User.findOne({ email });

    return new Response(JSON.stringify(user), { status: 200 });
  } catch {
    return new Response("Failed to get the user details", { status: 500 });
  }
};
