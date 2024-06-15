<template>
  <main>
    <section class="main_wrap">
      <section class="user_title">
        <i class="iconfont icon-denglu"></i>
        <h3>Sign Up</h3>
      </section>
      <section class="user">
        <form enctype="multipart/form-data">
          <div class="input">
            <div class="input_wrap">
              <label for="name">Name</label>
              <input
                required
                id="name"
                type="text"
                v-model.trim="name"
                @keyup.enter="signin"
                name="name"
                placeholder="Please type something for name"
              />
            </div>
            <div class="input_wrap">
              <label for="username">Username</label>
              <input
                required
                id="username"
                type="text"
                v-model.trim="username"
                @keyup.enter="signin"
                name="username"
                placeholder="Please type something for username"
              />
            </div>
            <div class="input_wrap">
              <label for="password">Password</label>
              <input
                required
                id="password"
                type="password"
                v-model="password"
                @keyup.enter="signin"
                name="password"
                placeholder="Please type something for pasword"
              />
            </div>
          </div>
          <div class="submit" @click="signUpClick" type="submit" :style="style">
            {{ isLoading ? 'Loading ...' : 'Submit' }}
          </div>
        </form>
      </section>
    </section>
  </main>
</template>

<script>
import { mapActions, useStore } from 'vuex'

const store = useStore()
export default {

  props: ['color'],
  computed: {
    isDisabled: function() {
      alert('isdisable')
    }
  },
  name: 'SignUp',
  data: () => ({
    name: '',
    username: '',
    password: '',
    isLoading: false,
    style: ''
  }),
  methods: {
    async signUpClick() {
      if (!this.isLoading) {
        if (this.username != '' && this.password != '' && this.name) {
          this.isLoading = true
          this.style = 'background-color:grey'
          const payload = {
            username: this.username,
            password: this.password,
            name: this.name
          }
          await this.$store.dispatch('signUp', payload)
            .then((res) => {
                this.isLoading = false
                this.style = 'background-color:#1abc9c'
                if (res) {
                  this.$router.push({ path: '/signIn' })
                }
              }
            ).catch((e) => console.log(e))
        } else {
          alert('Please fill the text!')
        }
      } else {
        alert('Please wait until the process completed!')
      }
    }
  }
}
</script>
