<template>
  <div class="container">
    <div>
      <logo/>
      <form @submit.prevent="signUser">
        <input v-model="user" type="text">
        <input v-model="pass" type="password">
        <button>Login</button>
      </form>
      <button>pay</button>
    </div>
    <div id="app">
      <h1>Please give us your payment details:</h1>
      <card
        class="stripe-card"
        :class="{ complete }"
        stripe="pk_test_vQn6OGnApEsamNXvrUBbsX7U00c7uBhfob"
        :options="stripeOptions"
        @change="complete = $event.complete"
      />
      <button class="pay-with-stripe" @click="pay" :disabled="!complete">Pay with credit card</button>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import { mapGetters, mapActions } from "vuex";
import { Card, createToken } from "vue-stripe-elements-plus";

export default {
  components: {
    Logo,
    Card
  },
  data() {
    return {
      user: "",
      pass: "",
      complete: false,
      stripeOptions: {
        // see https://stripe.com/docs/stripe.js#element-options for details
      }
    };
  },
  methods: {
    async readFromFirestore() {
      const ref = this.$fireStore.collection("books");

      ref.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
      });
      this.readSuccessful = true;
    },
    async signUser() {
      this.$fireAuth
        .signInWithEmailAndPassword(this.user, this.pass)
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });

      this.$fireAuth.onAuthStateChanged(user => {
        if (user) {
          this.login(user.email);
        } else {
          // No user is signed in.
        }
      });
    },
    ...mapActions({
      login: "user/setUser"
    }),
    pay() {
      // createToken returns a Promise which resolves in a result object with
      // either a token or an error key.
      // See https://stripe.com/docs/api#tokens for the token object.
      // See https://stripe.com/docs/api#errors for the error object.
      // More general https://stripe.com/docs/stripe.js#stripe-create-token.
      createToken().then(data => console.log(data.token));
    }
  },
  head() {
    let script = [];

    script.push({
      src: "https://js.stripe.com/v3/",
      body: true
    });

    return { script };
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
