import axios from "axios";
export const getUserData = async () => {
  const res = await axios.get(
    "https://623abb71b5292b8bfcb8eeff.mockapi.io/TT-todo"
  );
  return res.data;
};
export const postUserData = async (data: any) => {
  await axios.post("https://623abb71b5292b8bfcb8eeff.mockapi.io/TT-todo", data);
};
