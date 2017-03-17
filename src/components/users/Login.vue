<template>
  <div id='login'>
    <div class="col-sm-4 col-sm-offset-4">
      <h2>Log In</h2>
      <p>Log in to your account to get some great quotes.</p>
      <div class="alert alert-danger" v-if="error">
        <p>{{ error }}</p>
      </div>
      <authfields :name="credentials.name" :email="credentials.email" :password="credentials.password"></authfields>
      <button class="btn btn-primary" @click="submit()">Access</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: function () {
    return {
      credentials: {
        name: '',
        email: '',
        password: ''
      },
      error: ''
    }
  }
}
</script>

<style>
</style>
