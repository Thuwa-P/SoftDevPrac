import Link from "next/link";
import ProductCard from "./ProductCard";

export default async function HospitalCatalog({
  hospitalJson,
}: {
  hospitalJson: Object;
}) {
  const hospitalJsonReady = await hospitalJson;
  return (
    <div>
      <div className="font-serif p-5 text-lg">
        There are {hospitalJsonReady.count} hospitals availiable currently.
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          padding: "10px",
        }}
      >
        {hospitalJsonReady.data.map((hospitalItem: Object) => (
          <Link href={`/hospital/${hospitalItem.id}`} className="w-1/5">
            <ProductCard
              hospitalName={hospitalItem.name}
              imgSrc={hospitalItem.picture}
              onCompare={hospitalItem.name}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
