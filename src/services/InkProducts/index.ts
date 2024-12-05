import envConfig from "@/app/config/envConfig";

export const getInkProducts = async () => {
  const res = await fetch(`${envConfig.baseApi}/product?category=Ink Work`);

  return res.json();
};
