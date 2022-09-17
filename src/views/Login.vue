<template>
  <div align="center">
    <q-btn @click="login()">login via gmail</q-btn>
  </div>
</template>

<script>
import firebaseInstance from '../middleware/firebase';

export default {
  name: "Login",
  methods: {
    login() {
      const provider = new firebaseInstance.firebase.auth.GoogleAuthProvider();
      firebaseInstance.firebase.auth().signInWithPopup(provider)
          .then((result) => {
            const credential = result.credential;
            const token = credential.accessToken;
            const user = result.user;
            window.user = result.user;
            this.$router.push('/Home')
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;

          });
    }
  },
  created() {
    if (window.user) {
      this.$router.push('/Home')
    }
  }
}
</script>

<style scoped>

</style>