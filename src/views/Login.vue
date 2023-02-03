<template>
    <div class="container">
      <form @submit.prevent="login">
        <h2 class="alternative-option">Login</h2>
        <div class="alternative-option input">
          <label for="email">Email address</label>
          <input
            class="form-control"
            type="text"
            name="email"
            placeholder="email@adress.com"
          />
        </div>
        <div class="alternative-option input">
          <label for="password">Password</label>
          <input
            class="form-control"
            type="password"
            name="password"
            placeholder="password123"
          />
        </div>
        <div class="alternative-option mt-4">
           Don't have an account? <span @click="moveToRegister">Register</span>
        </div>
        <button type="submit" class="mt-4 btn-pers" id="login_button">
          Login
        </button>
        <div
          class="alternative-option alert alert-warning alert-dismissible fade show mt-5 d-none"
          role="alert"
          id="alert_1"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </form>
    </div>
</template>
  
  <script>
  // import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
    export default {
        data() {
        return {
            email: "",
            password: "",
        };
        },
        
        methods:{
            login(submitEvent){
                this.email = submitEvent.target.elements.email.value;
                this.password = submitEvent.target.elements.password.value;
            }

        },
  };
/**
    methods: {
      login(submitEvent) {
        this.email = submitEvent.target.elements.email.value;
        this.password = submitEvent.target.elements.password.value;
        const auth = getAuth();
        signInWithEmailAndPassword(auth, this.email, this.password)
          .then(() => {
            this.$router.push("/");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            let alert_1 = document.querySelector("#alert_1");
            alert_1.classList.remove("d-none");
            alert_1.innerHTML = errorMessage;
            console.log(alert_1);
          });
      },
      moveToRegister() {
        this.$router.push("/");
      },
    },
  };
*/
</script>

<style>
    #content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid lightgray;
    padding: 4rem 4rem;
    border-radius: 5px;
    background: #fefefe;
    }
    .background {
    width: 100vw;
    height: 100vh;
    position: absolute;
    background: rgb(250, 250, 250);
    }
    .nav {
    width: 80%;
    min-width: 400px;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #fafafa;
    }
    #name_project {
    font-weight: 700;
    }
    .container {
    width: 400px;
    max-width: 95%;
    }
    .input {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    }
    .input > label {
    text-align: start;
    }
    .input > input {
    margin-top: 6px;
    height: 38px !important;
    }
    /* From uiverse.io */
    .btn-pers {
    position: relative;
    left: 50%;
    padding: 1em 2.5em;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 700;
    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    transform: translateX(-50%);
    }
    .btn-pers:hover {
    background-color: #F47521;
    box-shadow: 0px 15px 20px #97440c;
    color: #fff;
    transform: translate(-50%, -7px);
    }
    .btn-pers:active {
    transform: translate(-50%, -1px);
    }

    .alternative-option {
        color: #ffff;
        text-align: center;
    }
    .alternative-option > span {
    color: #F47521;
    cursor: pointer;
    }
    #sign_out {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    }
</style>