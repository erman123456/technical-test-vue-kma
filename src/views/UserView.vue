<script></script>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>Fetch Data Users</h1>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
      </thead>
      <tbody v-for="user in users" :key="user.id">
      <tr>
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.username }}</td>
      </tr>
      </tbody>
    </table>

  </div>


</template>
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
<script setup>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const msg = ref('Wellcome ' + localStorage.username + '!')
const getUser = computed(() => {
  return store.getters.getUsers
})
const users = computed(() => {
  return store.state.users
})
const username = computed(() => {
  return store.getters.getUsername
})
onMounted(async () => {
  store.dispatch('fetchUsers')
})
</script>
