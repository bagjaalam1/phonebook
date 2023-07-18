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
                            <button class="btn btn-danger btn-sm">
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

        const contacts = computed(()=> store.getters.getContacts)
        const loading = computed(()=> store.getters.getLoading)

        console.log(contacts)

        watchEffect(()=> {
            store.dispatch('fetchContacts')
        })

        const state = {
            editing: ref(false),
            name: ref(''),
            phone: ref(''),
            indexClick: ref(null),
        };

        function editContact(item) {
            watchEffect(() => {
                console.log(state.editing.value)
                state.editing.value = true;
                state.name.value = item.name;
                state.phone.value = item.phone;
                state.indexClick.value = item.id;
                console.log(state.name)
                console.log(state.phone)
                console.log(state.editing)
                console.log(state.editing.value)
                console.log(state.indexClick.value)
            })
        }

        function saveContact() {
            state.editing = false;
        }

        return {
            editing: state.editing.value,
            indexClick: state.indexClick.value,
            name: state.name.value,
            phone: state.phone.value,
            editContact,
            saveContact,
            contacts,
            loading,
        };
    },
};
</script>
  