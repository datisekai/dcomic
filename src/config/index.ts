export const BASE_URL = "https://dcomic.vercel.app";
export const API_URL = "http://nhattruyenmoi.com";

export const getImage = (img: string) => {
  return `${BASE_URL}/api/handler?url=${encodeURIComponent(img)}`;
};
