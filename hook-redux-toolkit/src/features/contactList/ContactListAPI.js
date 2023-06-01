import axios from "axios";

export const fetchContactsAPI = async () => {
  const response = await axios.get("http://localhost:3000/api/phonebook");
  console.log(response.data.data);
  return response.data.data;
};

export const deleteContactAPI = async ({id}) => {
  const response = await axios.delete(`http://localhost:3000/api/phonebook/${id}`);
  return id
};

export const updateContactAPI = async ({ id, name, phone }) => {
  console.log(id, name, phone);
  const response = await axios.put(
    `http://localhost:3000/api/phonebook/${id}`,
    { name, phone }
  );
  return response.data.data;
}
