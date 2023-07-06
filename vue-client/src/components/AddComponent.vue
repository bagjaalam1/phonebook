<template>
    <div>
        <button v-if="!isAddFormVisible" @click="toggleAddForm" class="btn btn-primary"
            style="box-shadow: 0 0 10px rgba(0,0,0,0.2)">
            <i class="fa fa-plus"></i> Add
        </button>
        <form v-else @submit.prevent="handleSubmit">
            <div class="card">
                <div class="card-header" style="box-shadow: 0 0 3px rgba(0,0,0,0.2)">
                    <h5 class="mb-0">Adding Form</h5>
                </div>
                <div class="card-body" style="box-shadow: 0 0 3px rgba(0,0,0,0.2)">
                    <div class="row row-cols-lg-auto g-3 align-items-center">
                        <label for="name">Name</label>
                        <div class="col">
                            <input id="name" name="name" class="form-control" placeholder="Name" type="text" v-model="name">
                        </div>
                        <label for="phone">Phone</label>
                        <div class="col">
                            <input id="phone" name="phone" class="form-control" placeholder="Phone" type="text"
                                v-model="phone">
                        </div>
                        <button class="btn btn-success text-white" type="submit">
                            <i class="fa fa-pencil-alt mr-2"></i> Save
                        </button>
                        <button class="btn btn-warning text-white" @click="toggleAddForm">
                            <i class="fa fa-ban mr-2"></i> Cancel
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'AddComponent',
    data() {
        return {
            isAddFormVisible: false,
            name: '',
            phone: '',
        };
    },
    methods: {
        toggleAddForm() {
            this.isAddFormVisible = !this.isAddFormVisible;
        },
        handleSubmit() {
            this.$store.dispatch('addContact', { name: this.name, phone: this.phone });
            console.log(this.name, this.phone);
            // reset form values
            this.name = '';
            this.phone = '';
        },
    },
};
</script>