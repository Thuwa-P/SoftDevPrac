import BookingForm from "@/components/BookingForm";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import getUserProfile from "../libs/getUserProfile";

export default async function Booking() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;

  const profile = await getUserProfile(session.user.token);
  var createdAt = new Date(profile.data.createdAt);
  return (
    <main className="relative bg-gray h-screen">
      <div className="relative  text-xl text-center font-serif italic font-semibold my-8">
        <div className="text-2xl">{profile.data.name}</div>
        <table className="table-auto border-separate border-spacing-2 bg-blue-200 flex flex-col items-center m-4 p-2 rounded border border-slate-700 ">
          <tbody>
            <tr>
              <td>Email</td>
              <td>{profile.data.email}</td>
            </tr>
            <tr>
              <td>Tel</td>
              <td>{profile.data.tel}</td>
            </tr>
            <tr>
              <td>Member Since .</td>
              <td>{createdAt.toString()}</td>
            </tr>
          </tbody>
        </table>
        <BookingForm></BookingForm>
      </div>
    </main>
  );
}
