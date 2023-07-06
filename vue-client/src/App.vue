<template>
  <div>
    <TitleComponent />
    <div style="margin-top: 25px;"></div>
    <b-container>
      <AddComponent />
      <div style="margin-top: 25px;"></div>
      <SearchComponent />
      <div style="margin-top: 25px;"></div>
      <ContactListComponent />
    </b-container>
  </div>
</template>

<script>
import TitleComponent from './components/TitleComponent.vue'
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
