<template>
    <div class="card">
        <div class="card-header" style="box-shadow: 0 0 3px rgba(0,0,0,0.2)">
            <h5 class="mb-0">Search Form</h5>
        </div>
        <div class="card-body" style="box-shadow: 0 0 3px rgba(0,0,0,0.2)">
            <div class="row row-cols-lg-auto g-3 align-items-center">
                <label for="name">Name</label>
                <div class="col">
                    <input id="name" name="name" class="form-control" placeholder="Name" type="text" v-model="name">
                </div>
                <label for="phone">Phone</label>
                <div class="col">
                    <input id="phone" name="phone" class="form-control" placeholder="Phone" type="text" v-model="phone">
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'SearchComponent',
    data() {
        return {
            searchInputName: '',
            searchInputPhone: '',
        };
    },
    methods: {
        handleSearchInput() {
            this.$emit('search', {
                name: this.searchInputName,
                phone: this.searchInputPhone,
            });
        },
    },
};
</script>
  