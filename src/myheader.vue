<template>
  <div id="myheader">
    <div class='header'>
      <ul>
        <li>Login</li>
        <li>SignUp</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myheader',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
