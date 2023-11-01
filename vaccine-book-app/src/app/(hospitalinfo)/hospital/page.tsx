import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getHospitals from "@/app/libs/getHospitals";
import getUserProfile from "@/app/libs/getUserProfile";
import AddHospitalForm from "@/components/AddHospitalForm";
import HospitalCatalog from "@/components/hospitalCatalog";
import { LinearProgress } from "@mui/material";
import { getServerSession } from "next-auth";
import { Suspense } from "react";

export default async function Hospital() {
  const hospitals = getHospitals();
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;
  const profile = await getUserProfile(session.user.token);
  return (
    <main className="text-center p-5">
      <h1 className="text-xl font-medium p-5 font-serif">
        Select Your Hospital
      </h1>
      <Suspense
        fallback={
          <p>
            {" "}
            Loading ..... <LinearProgress />
          </p>
        }
      >
        <HospitalCatalog hospitalJson={hospitals} />
      </Suspense>
      {profile.data.role == "admin" ? <AddHospitalForm /> : null}
    </main>
  );
}
