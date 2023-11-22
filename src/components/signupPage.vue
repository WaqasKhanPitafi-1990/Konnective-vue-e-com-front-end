<template>
    <div>
        <div hidden class="modal-container">
            <b-modal size="lg" hide-footer id="modal-2">
                <div class="heading-texts">
                    <span class="login-heading">{{ $t("nav-title") }}</span>
                    <span class="signup-heading">{{ $t("sign-up") }}</span>
                    <span class="account">{{ $t("create-your-account") }}</span>
                </div>
                <div class="login-form">
                    <b-form-group id="fieldset-horizontal" label-cols-sm="4" label-cols-lg="2" content-cols-sm
                        content-cols-lg="10">
                        <div class="inputs">
                            <b-form-input class="input-fields" placeholder="Full Name" v-model="name" id="input-horizontal"
                                @input="validateName">
                            </b-form-input>
                            <div v-if="nameError" class="error-message">{{ nameError }}</div>
                            <b-form-input v-model="email" type="email" class="input-fields"
                                placeholder="Email or Mobile Number" id="input-horizontal"
                                @input="validateEmail"></b-form-input>
                            <div v-if="emailError" class="error-message">{{ emailError }}</div>
                            <b-form-input v-bind:type="showPassword ? 'text' : 'password'" v-model="password"
                                class="input-fields" required @input="validatePassword" placeholder="Password"
                                id="input-horizontal">
                            </b-form-input>
                            <div v-if="passwordError" class="error-message">{{ passwordError }}</div>
                            <b-form-input v-model="confirmPassword" @input="validatePassword"
                                v-bind:type="showPassword ? 'text' : 'password'" class="input-fields"
                                placeholder="Confirm Password" id="input-horizontal">
                            </b-form-input>
                            <div v-if="confirmPasswordError" class="error-message">{{ confirmPasswordError }}</div>
                        </div>
                    </b-form-group>
                </div>
                <div class="terms-text">
                    <span class="policies-text">
                        {{ $t("policies-text") }} <a class="conditions-privacy">{{ $t("condition-of-use") }}</a>
                        and
                        <a class="conditions-privacy"> {{ $t("privacy") }} </a>.
                    </span>
                </div>
                <div class="b-main">

                    <div class="form-button">
                        <b-button @click="formSubmit" class="button">{{ $t("sign-up") }}</b-button>
                    </div>
                </div>
                <span class="policies-texts">
                    {{ $t("have-an-account") }}<a class="conditions-privacy">
                        <span @click="$bvModal.hide('modal-2')" class="signup-text">
                            <span class="modal-button" v-b-modal.modal>
                                {{ $t("sign-in") }}
                                <loginPage />
                            </span>
                        </span>
                    </a>
                </span>

                <!-- <div class="info">
                    <span>{{ $t("already-account") }}
                        <a>Sign In</a>
                    </span>
                </div> -->
            </b-modal>
            <div>
                <Pageloader :isLoading="isLoading" />
            </div>
        </div>
        <!-- <b-modal :hide-header="true" :hide-footer="true" v-model="signupModal" ok-only @ok="formSubmit">
            <div class="warning-main">
                <span class="product-message">
                    Successfully Registered
                </span>
            </div>
        </b-modal> -->
    </div>
</template>

<script>
import axios from 'axios'
import loginPage from '../components/loginPage.vue';
import Pageloader from './Pageloader.vue';
import { mapMutations } from 'vuex';
export default {
    data() {
        return {
            // postData: '',
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            showPassword: false,
            passwordError: "",
            nameError: "",
            confirmPasswordError: "",
            emailError: "",
            // signupModal: false,
            isLoading: false
        }
    },

    computed: {
        passwordMatch() {
            return this.password === this.confirmPassword;
        },
    },
    components: {
        loginPage,
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
        validateName() {
            this.nameError = "";
            var len = this.name.length;
            if (len < 5 || len > 20) {
                this.nameError = 'Name must be between 5 to 20 characters long.';
                // this.errors.push({
                //     'message':
                // });
            }
        },
        validatePassword() {
            // Reset errors
            this.passwordError = "";
            this.confirmPasswordError = "";

            // Password validation rules
            const minLength = 8;
            const maxLength = 15;
            const containsNumber = /\d/;
            const containsUpperCase = /[A-Z]/;

            // Check password length
            if (this.password.length < minLength) {
                this.passwordError = `Password must be at least ${minLength}characters long.`;
            }
            // Check password length
            if (this.password.length > maxLength) {
                this.passwordError = `Password must be less than ${maxLength} characters.`;
            }
            // Check if password contains at least one number
            if (!containsNumber.test(this.password)) {
                this.passwordError = "Password must contain at least one number.";
            }

            // Check if password contains at least one uppercase letter
            if (!containsUpperCase.test(this.password)) {
                this.passwordError = "Password must contain at least one uppercase letter.";
            }

            // Check if confirm password matches password
            if (this.confirmPassword !== this.password) {
                this.confirmPasswordError = "Passwords do not match.";
            }
        },
        ...mapMutations("registrationModule", ['registerUsers']),
        async formSubmit(e) {
            e.preventDefault();
            // this.validateEmail()
            this.isLoading = true;
            const payload = {
                name: this.name,
                email: this.email,
                password: this.password,
                confirmPassword: this.confirmPassword,
                "panel": "user",
                "adminId": "64819e7fb5d0a722e484a4af",
                error: false,
                errorMsg: `An Error occurred, please try again`
            }

            await axios.post(process.env.VUE_APP_API_V1_BASE_URL + "auth/register", payload)
                .then((resp) => {
                    let response = resp.data;
                    this.registerUsers({ payload, user: response.user, token: response.accessToken })
                    this.signupModal = true;
                    this.$router.push('Shop');
                    setTimeout(() => {
                        this.isLoading = true;
                    }, 1000)
                }).catch((error) => {
                    this.errorMessage = error.message;
                    // this.isLoading = false;
                    console.log(error)
                })
        }

    },
    mounted() {
        const savedFormData = localStorage.getItem('formData');
        if (savedFormData) {
            const formData = JSON.parse(savedFormData);
            this.name = formData.name;
            this.email = formData.email;
            this.password = formData.password;
            this.confirmPassword = formData.confirmPassword;
        }
    }

}
</script>

<style>
.modal-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}


.heading-texts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.product-message {
    font-weight: bold;
    font-size: 20px;
    color: black;
    text-align: center;
    text-transform: uppercase;
}

.login-heading {
    color: #729F28;
    opacity: 1;
    font-size: 50px;
}

.signup-heading {
    font-size: 30px;
}

.account {
    color: #6D6D6D;
    opacity: 1;
}

.policies-texts {
    justify-content: center;
    display: flex;
    margin: 0.5rem;
}

.modal-header {
    border: none;
}

.conditions-privacy {
    outline: none;
    color: blue;
    text-decoration: none;
}

.login-form {
    display: flex;
    flex-direction: column;
}

.b-main {
    display: flex;
    justify-content: center;
}

.input-fields {
    margin-top: 1rem;
    width: 100%;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #BCBCBC;
    border-radius: 8px;
    opacity: 1;

}

.terms-text {
    display: flex;
    align-items: center;
    width: 70%;
    margin-left: 6rem;
    margin-top: 0.5rem;

}

.form-button {
    width: 73%;
    margin-left: 6rem;
    margin-top: 1rem;
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
        width: 100%;
        margin-left: 0rem;
    }

    .terms-text {
        display: flex;
        align-items: center;
        width: 100%;
        margin-left: 0rem;
        margin-top: 0.5rem;
    }

    .modal {
        left: -3;
    }
}


@media only screen and (max-width: 991px) and (min-width: 768px) {
    .login-form {
        margin-left: 0rem;
    }

    .form-button {
        width: 100%;
        margin-left: 0rem;
    }

    .login-heading {

        margin-top: 0rem;
    }

    .terms-text {
        display: flex;
        align-items: center;
        width: 100%;
        margin-left: 6rem;
        margin-top: 0.5rem;
    }
}
</style>