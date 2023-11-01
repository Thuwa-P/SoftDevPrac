import { dbConnect } from "@/db/dbConnect";
import Hospital from "@/db/models/Hospital";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default function AddHospitalForm() {
  const addHospital = async (addHospitalForm: FormData) => {
    "use server";
    const name = addHospitalForm.get("name");
    const address = addHospitalForm.get("address");
    const district = addHospitalForm.get("district");
    const province = addHospitalForm.get("province");
    const postalcode = addHospitalForm.get("postalcode");
    const tel = addHospitalForm.get("tel");
    const picture = addHospitalForm.get("picture");

    try {
      await dbConnect();
      const hospital = await Hospital.create({
        name: name,
        address: address,
        district: district,
        province: province,
        postalcode: postalcode,
        tel: tel,
        picture: picture,
      });
    } catch (error) {
      console.log(error);
    }
    revalidateTag("hospitals");
    redirect("/hospital");
  };

  return (
    <form action={addHospital}>
      <div className="text-xl text-black">Create Hospital</div>
      <div className="flex items-center w-1/2 my-2">
        <label className="w-auto block text-gray-700 pr-4" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          required
          id="name"
          name="name"
          placeholder="Hospital Name"
          className="bg-white border-2 border-teal-500 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
        />
      </div>
      <div className="flex items-center w-1/2 my-2">
        <label className="w-auto block text-gray-700 pr-4" htmlFor="address">
          Address
        </label>
        <input
          type="text"
          required
          id="address"
          name="address"
          placeholder="Hospital Address"
          className="bg-white border-2 border-teal-500 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
        />
      </div>
      <div className="flex items-center w-1/2 my-2">
        <label className="w-auto block text-gray-700 pr-4" htmlFor="district">
          District
        </label>
        <input
          type="text"
          required
          id="district"
          name="district"
          placeholder="District"
          className="bg-white border-2 border-teal-500 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
        />
      </div>
      <div className="flex items-center w-1/2 my-2">
        <label className="w-auto block text-gray-700 pr-4" htmlFor="province">
          Province
        </label>
        <input
          type="text"
          required
          id="province"
          name="province"
          placeholder="Province"
          className="bg-white border-2 border-teal-500 rounded w-auto p-2 text-gray-700 focus:outline-none focus:border-blue-400"
        />
        <label
          className="w-auto block text-gray-700 pr-4 ml-2"
          htmlFor="postalcode"
        >
          Postal Code
        </label>
        <input
          type="text"
          required
          id="postalcode"
          name="postalcode"
          placeholder="Postal Code"
          className="bg-white border-2 border-teal-500 rounded w-auto p-2 text-gray-700 focus:outline-none focus:border-blue-400"
        />
      </div>
      <div className="flex items-center w-1/2 my-2">
        <label className="w-auto block text-gray-700 pr-4" htmlFor="tel">
          Telephone Number
        </label>
        <input
          type="text"
          required
          id="tel"
          name="tel"
          placeholder="Telephone Number"
          className="bg-white border-2 border-teal-500 rounded w-auto p-2 text-gray-700 focus:outline-none focus:border-blue-400"
        />
      </div>
      <div className="flex items-center w-1/2 my-2">
        <label className="w-auto block text-gray-700 pr-4" htmlFor="picture">
          Picture
        </label>
        <input
          type="text"
          required
          id="picture"
          name="picture"
          placeholder="Picture"
          className="bg-white border-2 border-teal-500 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Add New Hospital
      </button>
    </form>
  );
}
