<template>
  <div id='authfields'>
    <div class="form-group">
      <label>Name</label>
      <input 
        type="text" 
        class="form-control"
        placeholder="Enter your username"
        v-model="name"
      >
    </div>
    <div class="form-group">
        <label>Email</label>
        <input 
          type="text" 
          class="form-control"
          placeholder="Enter your email"
          v-model="email"
        >
    </div>
    <div class="form-group">
        <label>Password</label>
        <input 
          type="password" 
          class="form-control"
          placeholder="Enter your password"
          v-model="password"
        >
    </div>
  </div>
</template>

<script>
export default {
  name: 'authfields',
  props: {
    name: String,
    email: String,
    password: String
  }
}
</script>

<style>
#authfields {
  text-align: left;
}
</style>
