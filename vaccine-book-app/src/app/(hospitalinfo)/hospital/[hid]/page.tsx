import Image from "next/image";

export default function HospitalDetailPage({
  params,
}: {
  params: { hid: string };
}) {
  /**
   * Mock Data
   */
  const mockHospitalRepo = new Map();
  mockHospitalRepo.set("001", {
    name: "Chulalongkorn Hospital",
    image: "/img/chula.jpg",
  });
  mockHospitalRepo.set("002", {
    name: "Rajavithi Hospital",
    image: "/img/rajavithi.jpg",
  });
  mockHospitalRepo.set("003", {
    name: "Thammasat Unitversity Hospital",
    image: "/img/thammasat.jpg",
  });

  return (
    <div className="text-center p-5">
      <h1 className="text-lg font-medium">Hospital ID {params.hid}</h1>
      <div className="flex flex-row my-5">
        <Image
          src={mockHospitalRepo.get(params.hid).image}
          alt="Hospital Picture"
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-lg w-[30%] bg-black"
        />
        <div className="text-md mx-5">
          {mockHospitalRepo.get(params.hid).name}
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return [{ hid: "001" }, { hid: "002" }, { hid: "003" }];
}
