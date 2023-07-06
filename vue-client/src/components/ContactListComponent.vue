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
                            <button class="btn btn-success btn-sm" @click="editContact(item)">
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
    computed: {
        
    },
    methods: {
        editContact(item) {
            this.editing = true;
            this.name = item.name;
            this.phone = item.phone;
            this.indexClick = item.id;
        },
        // saveContact(itemId) {
        //     this.editing = false;
        //     // Lakukan logika penyimpanan kontak sesuai dengan itemId, name, dan phone yang diubah
        // },
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
  