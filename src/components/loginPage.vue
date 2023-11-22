<template>
    <div>
        <div class="modal-container">
            <!-- <b-button @click="closeModal" class="close-button">Close</b-button> -->

            <b-modal size="lg" hide-footer id="modal">
                <div class="heading-texts">
                    <span class="login-heading">{{ $t("nav-title") }}</span>
                    <span class="signup-heading">{{ $t("sign-in") }}</span>
                    <span class="account">{{ $t("account") }}</span>
                </div>
                <div @submit="userLogin" class="login-form">
                    <b-form-group id="fieldset-horizontal" label-cols-sm="4" label-cols-lg="2" content-cols-sm
                        content-cols-lg="10">
                        <div class="inputs">
                            <b-form-input v-model="email" class="input-fields" placeholder="Email or Mobile Number"
                                id="input-horizontal" @input="validateEmail">
                            </b-form-input>
                            <div v-if="emailError" class="error-message">{{ emailError }}</div>
                            <b-form-input @input="validatePassword" v-bind:type="showPassword ? 'text' : 'password'"
                                v-model="password" class="input-fields" placeholder="Password"
                                id="input-horizontal"></b-form-input>
                            <div v-if="passwordError" class="error-message">{{ passwordError }}</div>
                        </div>
                    </b-form-group>
                </div>
                <div class="terms-text">
                    <span class="policies-text">
                        {{ $t("have-an-account") }}<a class="conditions-privacy">
                            <span @click="$bvModal.hide('modal')" class="signup-text">
                                <span class="modal-button" v-b-modal.modal-2>
                                    {{ $t("register") }}
                                    <signupPage />
                                </span>
                            </span>
                        </a>
                    </span>
                </div>
                <div class="b-main">
                    <div class="form-button">
                        <b-button v-b-modal.modal-center :disabled="isLoading" @click="userLogin" class="button">{{
                            $t("sign-in") }}</b-button>
                    </div>
                </div>

            </b-modal>
            <Pageloader :isLoading="isLoading" />
            <!-- <div class="overlay" v-if="isLoading">
                <div class="loader-container">
                    <div class="loader-bar"></div>
                    <div class="loader-bar"></div>
                    <div class="loader-bar"></div>
                </div>
            </div> -->
            <div>
                <b-alert v-model="logAlert" @dismissed="logAlert = false" variant="primary">Successfully Logged In</b-alert>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';
import signupPage from './signupPage.vue';
import Pageloader from './Pageloader.vue';
export default {
    data() {
        return {
            email: '',
            password: '',
            loginData: '',
            emailError: '',
            showPassword: '',
            passwordError: '',
            isLoading: false,
            fullPage: true,
            logAlert: false,
        }
    },
    components: {
        signupPage,
        Pageloader
    },
    methods: {
        validateEmail() {
            this.emailError = '';
            const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
            if (!emailRegex.test(this.email)) {
                this.emailError = 'Please enter a valid email address.';
            }
        },
        validatePassword() {
            // Reset errors
            this.passwordError = "";
            // Check password 
            if (this.password == '') {
                this.passwordError = `please Enter Your Password.`;
            }

        },
        ...mapActions("registrationModule", ['loginUserAction']),

        async userLogin(e) {
            try {
                // const userData = -
                e.preventDefault();
                this.isLoading = true;
                let response = await axios.post(process.env.VUE_APP_API_V1_BASE_URL + "/auth/login", {
                    email: this.email,
                    password: this.password,
                    "panel": "user",
                    "adminId": "64819e7fb5d0a722e484a4af",
                    error: false,
                    errorMsg: `An error occurred, please try again`
                });

                if (response.data && response.status == 200) {
                    // Login successful, update the Vuex store with user and token
                    console.log(response.data, "THis is login Api Response")
                    this.loginUserAction({
                        user: response.data.user,
                        token: response.data.accessToken,
                    });
                    localStorage.setItem('shopApiData', JSON.stringify({
                        user: response.data.user,
                        token: response.data.accessToken
                    }));
                    this.email = '';
                    this.password = '';
                    this.$bvModal.hide('modal');
                    this.$router.push('Shop');
                    setTimeout(() => {
                        this.isLoading = false;
                    }, 1000)
                } else {
                    // Show error message to the user
                    alert('Invalid credentials. Please try again.');
                }
            } catch (error) {
                console.error('An error occurred during login:', error);
                alert('An error occurred during login. Please try again later.');
                this.isLoading = false;
                this.logAlert = false;
            }
        }
    },
    async created() {
        const storedUserData = localStorage.getItem('shopApiData');
        if (storedUserData) {
            const { user, token } = JSON.parse(storedUserData);
            this.loginUserAction({ user, token });
        }
    }
}
</script>

<style>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    /* Semi-transparent black background */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.loader-container {
    display: flex;
    align-items: flex-end;
}

.loader-bar {
    width: 10px;
    height: 0;
    margin: 0 5px;
    background-color: #3498db;
    /* Blue color for the bars */
    animation: wave 1.5s ease-in-out infinite;
}

@keyframes wave {

    0%,
    100% {
        height: 0;
    }

    50% {
        height: 50px;
    }
}

.modal-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

body.modal-open {
    overflow: hidden;
}

.heading-texts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.modal-header {
    border: none;
}

.login-heading {
    color: #729F28;
    opacity: 1;
    font-size: 50px;
    /* margin-top: 3rem; */
}

.product-message {
    font-weight: bold;
    font-size: 20px;
    color: #729F28;
    text-align: center;
    display: flex;
    align-items: center;
    text-transform: uppercase;
}

.signup-heading {
    font-size: 30px;
}

.account {
    color: #6D6D6D;
    opacity: 1;
}

.conditions-privacy {
    outline: none;
    color: blue;
    text-decoration: none;
}

.login-form {
    display: flex;
    flex-direction: column;
    margin-left: 6rem;
}

.input-fields {
    margin-top: 1rem;
    width: 100%;
    border: 1px solid
}

.terms-text {
    display: flex;
    align-items: center;
    width: 100%;
    margin-left: 6rem;
    margin-top: 0.5rem;

}

.b-main {
    display: flex;
    justify-content: center;
}

.form-button {
    width: 60%;
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    margin-left: 0rem;
    background: #729F28 0% 0% no-repeat padding-box;
    border-radius: 28px;
    opacity: 1;
}

.button {
    width: 100%;
    background: #729F28 0% 0% no-repeat padding-box;
    border-radius: 28px;
    opacity: 1;
    border: none;
}

.button:hover {
    background: #729F28 0% 0% no-repeat padding-box;
    border-radius: 28px;
    opacity: 1;
}

.info {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    margin-bottom: 2rem;
}

@media only screen and (max-width:480px) {
    .login-form {
        margin-left: 0rem;
    }

    .form-button {
        width: 80%;
        margin-left: 0rem;
    }

    .input-fields {
        margin-top: 1rem;
        width: 100%;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border: 1px solid #BCBCBC;
        border-radius: 8px;
        opacity: 1;
    }

    .modal-content {
        width: 100%;
    }

    .terms-text {
        display: flex;
        align-items: center;
        width: 100%;
        margin-left: 0rem;
        margin-top: 0.5rem;
        font-size: 12px;
    }

    .form-button {
        width: 100%;
        margin-left: 0rem;
    }

    .terms-text {
        margin-left: 0rem;
    }
}

@media only screen and (max-width:991px) and (min-width:767px) {
    .login-form {
        margin-left: 0rem;
    }

    .form-button {
        width: 100%;
        margin-left: 0rem;
    }

    .terms-text {
        margin-left: 0rem;
    }

    .modal-content {
        padding: 2rem;
    }
}

@media only screen and (max-width: 2560px) and (min-width:1199px) {
    .modal-content {
        padding-bottom: 3rem;
    }
}

@media only screen and (max-width: 1199px) and (min-width: 991px) {
    .modal-content {
        padding-bottom: 2rem;
    }


}
</style>