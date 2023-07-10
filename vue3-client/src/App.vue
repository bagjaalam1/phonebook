<template>
  <div>
    <TitleComponent />
    <div class="mt-4"></div>
    <div class="container">
      <AddComponent />
      <div class="mt-4"></div>
      <SearchComponent />
      <div class="mt-4"></div>
      <ContactListComponent />
    </div>
  </div>
</template>

<script>
import TitleComponent from './components/TitleComponent.vue';
import AddComponent from './components/AddComponent.vue'
import SearchComponent from './components/SearchComponent.vue'
import ContactListComponent from './components/ContactListComponent.vue'

export default {
  name: 'App',
  components: {
    TitleComponent,
    AddComponent,
    SearchComponent,
    ContactListComponent,
  }
}
</script>
