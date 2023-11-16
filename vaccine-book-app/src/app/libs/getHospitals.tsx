export default async function getHospitals() {
  try {
    const response = await fetch("http://localhost:5000/api/v1/hospitals", {
      method: "GET",
      next: { tags: ["hospitals"] },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch hospitals");
    }
    //console.log(await response.json());
    const res = await response.json();
    //console.log(res);
    return res;
  } catch (error) {
    console.error(error);
  }
}
