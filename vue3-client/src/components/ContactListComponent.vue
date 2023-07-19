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
            <tr v-if="loading">
                <td colspan="4" class="text-center">Loading...</td>
            </tr>
            <tr v-else v-for="(item, index) in contacts" :key="item.id">
                <th scope="row">{{ index + 1 }}</th>
                <td>
                    <template v-if="editing && indexClick === item.id">
                        <input class="col-sm-12" type="text" v-model="name" />
                    </template>
                    <template v-else>
                        {{ item.name }}
                    </template>
                </td>
                <td>
                    <template v-if="editing && indexClick === item.id">
                        <input class="col-sm-12" type="text" v-model="phone" />
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
import { computed, ref, watchEffect } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'ContactListComponent',
    setup() {
        const store = useStore();

        const contacts = computed(() => store.getters.getContacts);
        const loading = computed(() => store.getters.getLoading);

        watchEffect(() => {
            store.dispatch('fetchContacts');
        });

        const editing = ref(false);
        const name = ref('');
        const phone = ref('');
        const indexClick = ref(null);

        function editContact(item) {
            editing.value = true;
            name.value = item.name;
            phone.value = item.phone;
            indexClick.value = item.id;
        }

        function saveContact(id) {
            editing.value = false;
            store.dispatch('updateContact', {
                id: id,
                name: name.value,
                phone: phone.value
            })
        }

        function deleteContact(id) {
            store.dispatch('deleteContact', {id})
        }

        return {
            editing,
            indexClick,
            name,
            phone,
            editContact,
            saveContact,
            deleteContact,
            contacts,
            loading,
        };
    },
};
</script>
  