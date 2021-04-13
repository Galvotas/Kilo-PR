import { BASE_URL } from "../constants";

export const postRequest = async (
  x: string | number,
  y: string | number,
  name: string | null,
  color: string | null
): Promise<any> => {
  await fetch(`${BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      x,
      y,
      name,
      color,
    }),
  });
};