import axios from "axios"

export const fetchContacts = async () => {
    const response = await axios.get('http://localhost:3000/api/phonebook')
    return response.data.data
}

export const deleteContacts = async (id) => {
    const response = await axios.delete(`http://localhost:3000/api/phonebook/${id}`)
    console.log(response)
    return response.data
}

export const addContact = async (name, phone) => {
    const response = await axios.post('http://localhost:3000/api/phonebook', {
        name,
        phone,
    })
    console.log(response)
    return response.data
}

export const updateContact = async (id, name, phone) => {
    const response = await axios.put(`http://localhost:3000/api/phonebook/${id}`, {
        name,
        phone,
    })
    return response.data
}