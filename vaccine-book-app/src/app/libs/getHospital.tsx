export default async function getCar(id: String) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch(
      `http://localhost:5000/api/v1/hospitals/${id}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch hospitals");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
