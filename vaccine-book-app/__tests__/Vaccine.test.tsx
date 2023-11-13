import HospitalCatalog from "@/components/hospitalCatalog";
import { render, screen, waitFor } from "@testing-library/react";

const mockResult = {
  success: true,
  count: 4,
  pagination: {},
  data: [
    {
      _id: "65279be84584398c83626a9a",
      name: "Chulalongkorn Hospital",
      address: "1873 Rama IV Rd",
      district: "Pathumwan",
      province: "Bangkok",
      postalcode: "10330",
      tel: "026794000",
      picture:
        "https://drive.google.com/uc?id=1nekIjHnFtGMdbmsYrBao55dGvtYER62P",
      __v: 0,
      id: "65279be84584398c83626a9a",
    },
    {
      _id: "65279c494584398c83626a9d",
      name: "Rajavithi Hospital",
      address: "2 Phaya Thai Rd, Thung Phaya Thai",
      district: "Ratchathewi",
      province: "Bangkok",
      postalcode: "10400",
      tel: "022062900",
      picture:
        "https://drive.google.com/uc?id=15kWfVT9wchkH3I9BHKeqftTmj0bFgJtu",
      __v: 0,
      id: "65279c494584398c83626a9d",
    },
    {
      _id: "65279ccb4584398c83626aa0",
      name: "Thammasat University Hospital",
      address: "95 Moo 8 Phaholyothin Frontage Rd, Khlong Nueng",
      district: "Khlong Luang",
      province: "Pathum Thani",
      postalcode: "12120",
      tel: "029269999",
      picture:
        "https://drive.google.com/uc?id=1jit7S4cRATEfDi64YjjK1ur2jGlZYs2e",
      __v: 0,
      id: "65279ccb4584398c83626aa0",
    },
    {
      _id: "65426e8b3b65f3e206eb94b0",
      name: "Vajira Hospital",
      address: " 681 Samsen Road",
      district: "Dusit",
      province: "Bangkok",
      postalcode: "10300",
      tel: "022443000",
      picture:
        "https://drive.google.com/uc?id=1YLciRsApgCzbozEZQpnu_5hz5g0HsIwP",
      __v: 0,
      id: "65426e8b3b65f3e206eb94b0",
    },
  ],
};

describe("HotpitalCatalog", () => {
  it("should have correct number of hospital images", async () => {
    const hotpitalCatalog = await HospitalCatalog({ hospitalJson: mockResult });
    render(hotpitalCatalog);
    await waitFor(() => {
      const hotpitalImages = screen.queryAllByRole("img");
      expect(hotpitalImages.length).toBe(4);
    });
  });
});
