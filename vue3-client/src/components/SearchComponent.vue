<template>
  <div>
    <div class="card">
      <div class="card-header" style="box-shadow: 0 0 3px rgba(0,0,0,0.2)">
        <h5 class="mb-0">Search Form</h5>
      </div>
      <div class="card-body" style="box-shadow: 0 0 3px rgba(0,0,0,0.2)">
        <div class="row row-cols-lg-auto g-3 align-items-center">
          <label for="name">Name</label>
          <div class="col">
            <input id="name" name="name" class="form-control" placeholder="Name" type="text" v-model="searchInputName"
              @input="handleSearchInputName" />
          </div>
          <label for="phone">Phone</label>
          <div class="col">
            <input id="phone" name="phone" class="form-control" placeholder="Phone" type="text" v-model="searchInputPhone"
              @input="handleSearchInputPhone" />
          </div>
          <div class="col"></div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'SearchComponent',
  setup() {
    const store = useStore()
    const searchInputName = ref('');
    const searchInputPhone = ref('');

    const handleSearchInputName = (event) => {
      const keyword = event.target.value;
      searchInputName.value = keyword;
      console.log(searchInputName.value);
      store.dispatch('searchContacts', {
        name: keyword,
        phone: searchInputPhone.value
      })
    };

    const handleSearchInputPhone = (event) => {
      const keyword = event.target.value;
      searchInputPhone.value = keyword;
      console.log(searchInputPhone.value);
      store.dispatch('searchContacts', {
        name: searchInputName.value,
        phone: keyword
      })
    };

    return {
      searchInputName,
      searchInputPhone,
      handleSearchInputName,
      handleSearchInputPhone,
    };
  },
};
</script>
  
<style>
.card {
  margin-bottom: 20px;
  border-radius: 0.25rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
}

.card-header {
  background-color: #f8f9fa;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}

.card-body {
  padding: 1.25rem;
}

.row-cols-lg-auto {
  margin-bottom: 1rem;
}
</style>
  