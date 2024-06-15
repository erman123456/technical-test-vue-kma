<template>
  <main>
    <section class="main_wrap">
      <section class="user_title">
        <i class="iconfont icon-denglu"></i>
        <h3>Sign In</h3>
      </section>
      <section class="user">
        <form enctype="multipart/form-data">
          <div class="input">
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
          <div class="submit" @click="signInClick" type="submit" :style="style">
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
  name: 'SignIn',
  data: () => ({
    name: '',
    username: '',
    password: '',
    isLoading: false,
    style: ''
  }),
  methods: {
    async signInClick() {
      if (!this.isLoading) {
        if (this.username != '' && this.password) {
          this.isLoading = true
          this.style = 'background-color:grey'
          const payload = {
            username: this.username,
            password: this.password
          }
          await this.$store.dispatch('signIn', payload)
            .then((res) => {
                this.isLoading = false
                this.style = 'background-color:#1abc9c'
                if (res) {
                  this.$router.push({ path: '/user' })
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
