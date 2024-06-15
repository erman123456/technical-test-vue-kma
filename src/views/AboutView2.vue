<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>Made By Getters</h1>
    <div v-for="user in getUsers" :key="user.id">
      {{ user.id }} {{ user.name }} {{ user.address }}
    </div>
    <h1>Made By Actions</h1>
    <div v-for="user in users" :key="user.id">
      {{ user.id }} {{ user.name }} {{ user.address }}
    </div>
    <h1>{{ access_token }}</h1>
    <h1>{{ access_token2 }}</h1>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const msg = ref("Welcome to my Vuex Store");
const getUsers = computed(() => {
  return store.getters.getUsers;
});
const users = computed(() => {
  return store.state.users;
});
const access_token = computed(() => {
  console.log('get token')
  console.log(store.getters.getToken)
  return store.getters.getToken;
});
const access_token2 = computed(() => {
  console.log('get token2')
  return store.state.access_token;
});
onMounted(async () => {
 await store.dispatch("signUp", {"username": "s1ddfddddsfdssd1dddddfsd1dd", "password": "sfsdfds", "name": "dsfs"});
  store.dispatch("fetchUsers");
});
</script>
