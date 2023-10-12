import getHospitals from "@/app/libs/getHospitals";
import CardPanel from "@/components/CardPanel";
import HospitalCatalog from "@/components/hospitalCatalog";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";

export default function Hospital() {
  const hospitals = getHospitals();
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
    </main>
  );
}
