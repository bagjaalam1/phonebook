import axios from "axios";

export const fetchContactsAPI = async () => {
  try {
    const response = await axios.get("http://b5ea-2404-c0-2b10-00-2a8-f017.ngrok-free.app/api/phonebook");
    return response.data.data;
  } catch (error) {
    console.log(error)
  }
};

export const deleteContactAPI = async ({ id }) => {
  const response = await axios.delete(
    `http://b5ea-2404-c0-2b10-00-2a8-f017.ngrok-free.app/api/phonebook/${id}`
  );
  return id;
};

export const updateContactAPI = async ({ id, name, phone }) => {
  console.log(id, name, phone);
  const response = await axios.put(
    `http://b5ea-2404-c0-2b10-00-2a8-f017.ngrok-free.app/api/phonebook/${id}`,
    { name, phone }
  );
  return response.data.data;
};