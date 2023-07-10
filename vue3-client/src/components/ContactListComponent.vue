<template>
    <table class="table table-striped">
        <thead style="box-shadow: 0 0 3px rgba(0,0,0,0.2)">
            <tr>
                <th>#</th>
                <th class="col-sm-4">First Name</th>
                <th class="col-sm-4">Phone</th>
                <th class="col-sm-4">Action</th>
            </tr>
        </thead>
        <tbody style="font-size: 14px">
            <tr v-for="(item, index) in contacts" :key="item.id">
                <th scope="row">{{ index + 1 }}</th>
                <td>
                    <template v-if="editing && indexClick === item.id">
                        <input class="col-sm-12" type="text" v-model="name" @input="handleNameChange($event, item.id)" />
                    </template>
                    <template v-else>
                        {{ item.name }}
                    </template>
                </td>
                <td>
                    <template v-if="editing && indexClick === item.id">
                        <input class="col-sm-12" type="text" v-model="phone" @input="handlePhoneChange($event, item.id)" />
                    </template>
                    <template v-else>
                        {{ item.phone }}
                    </template>
                </td>
                <td>
                    <template v-if="editing && indexClick === item.id">
                        <button class="btn btn-success btn-sm" @click="saveContact(item.id)">
                            <i class="fa fa-check-circle"></i> Save
                        </button>
                    </template>
                    <template v-else>
                        <div>
                            <button class="btn btn-success btn-sm me-2" @click="editContact(item)">
                                <i class="fa fa-pencil-alt"></i> Edit
                            </button>
                            <button class="btn btn-danger btn-sm" @click="deleteContact(item.id)">
                                <i class="fa fa-trash"></i> Delete
                            </button>
                        </div>
                    </template>
                </td>
            </tr>
        </tbody>
    </table>
</template>
  
<script>
// import gql from 'graphql-tag';

export default {
    name: 'ContactListComponent',
    data() {
        return {
            editing: false,
            name: '',
            phone: '',
            indexClick: null,
        };
    },
    // apollo: {
    //     // Mengambil data menggunakan query
    //     contacts: {
    //         query: gql`
    //     query {
    //       getContacts {
    //         id
    //         name
    //         phone
    //       }
    //     }
    //   `
    //     }
    // },
    computed: {
        contacts() {
            return [
                {
                    "id": "77",
                    "name": "add1",
                    "phone": "1"
                },
                {
                    "id": "97",
                    "name": "graphql add2",
                    "phone": "123"
                },
                {
                    "id": "83",
                    "name": "add7",
                    "phone": "7"
                },
                {
                    "id": "103",
                    "name": "graphql add10",
                    "phone": "10"
                },
                {
                    "id": "104",
                    "name": "react add graph",
                    "phone": "1"
                },
                {
                    "id": "105",
                    "name": "graphql add10",
                    "phone": "10"
                },
                {
                    "id": "106",
                    "name": "react add graph",
                    "phone": "2"
                },
                {
                    "id": "107",
                    "name": "react add graph 3",
                    "phone": "3"
                },
                {
                    "id": "109",
                    "name": "react add graph 5",
                    "phone": "5"
                },
                {
                    "id": "94",
                    "name": "addnativewithsearch",
                    "phone": "222"
                },
                {
                    "id": "84",
                    "name": "add8edit",
                    "phone": "888"
                },
                {
                    "id": "110",
                    "name": "hahaha",
                    "phone": "234"
                },
                {
                    "id": "76",
                    "name": "tesadd1",
                    "phone": "1"
                },
                {
                    "id": "44",
                    "name": "bagjaedit",
                    "phone": "2223"
                },
                {
                    "id": "111",
                    "name": "hahahahe",
                    "phone": "2342"
                },
                {
                    "id": "112",
                    "name": "hahahaho",
                    "phone": "11"
                },
                {
                    "id": "91",
                    "name": "alamadd2",
                    "phone": "2"
                }
            ]
        },
    },
    methods: {
        editContact(item) {
            this.editing = true;
            this.name = item.name;
            this.phone = item.phone;
            this.indexClick = item.id;
        },
        saveContact() {
            this.editing = false;
            // Lakukan logika penyimpanan kontak sesuai dengan itemId, name, dan phone yang diubah
        },
        // deleteContact(itemId) {
        //     // Lakukan logika penghapusan kontak sesuai dengan itemId
        // },
        // handleNameChange(event, itemId) {
        //     const newName = event.target.value;
        //     // Lakukan logika perubahan nama kontak sesuai dengan itemId dan newName
        // },
        // handlePhoneChange(event, itemId) {
        //     // const newPhone = event.target.value;
        //     // Lakukan logika perubahan nomor telepon kontak sesuai denganitemId dan newPhone
        // },
    },
};
</script>
  