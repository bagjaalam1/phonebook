import axios from "axios";

export const addContactAPI = async ({ name, phone }) => {
  const { data } = await axios.post("http://localhost:3000/api/phonebook", {
    name,
    phone,
  });
  console.log(data);
  return data.data;
};
