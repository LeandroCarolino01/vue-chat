<template>
  <div>
    <h1>Welcome</h1>
    <form @submit.prevent="enterChat">
      <label for="name">Enter your name</label>
      <input type="text" name="name" v-model="name">
      <p v-if="feedback">{{ feedback }}</p>
      <button>Enter chat</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      name: null,
      feedback: null
    }
  },
  methods: {
    enterChat(){
      if(this.name){
        this.$router.push({ name: 'Chat', params: { name: this.name } })
      } else {
        this.feedback = 'You must enter a name'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
