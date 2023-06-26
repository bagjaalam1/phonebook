import axios from "axios";

export const addContactAPI = async ({ name, phone }) => {
  try {
    const { data } = await axios.post("http://b5ea-2404-c0-2b10-00-2a8-f017.ngrok-free.app/api/phonebook", {
      name,
      phone,
    });
    console.log(data);
    return data.data; 
  } catch (error) {
    console.error(error);
  }
};