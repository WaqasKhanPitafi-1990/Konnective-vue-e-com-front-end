<template>
    <div class="page-header">
        <div class="nav-container">
            <b-container>
                <b-row>
                    <b-col lg="8" sm="12" md="7">
                        <div class="header-content">
                            <div class="help-contact">
                                <span>{{ $t("help-and-contact") }}</span>
                                <div class="v-linec"></div>
                                <span>{{ $t("contact") }}</span>
                            </div>

                            <div>
                                <!-- <span class="mlogged-user" v-show="!isLoggedIn"> -->
                                <!-- {{ getCurrentUser.name }} -->
                                <!-- </span> -->
                                <button class="mlogout" v-if="isLoggedIn" @click="handleLogout">Logout</button>
                            </div>
                        </div>
                    </b-col>
                    <b-col class="log-register " cols="4" lg="4" sm="4" md="5">
                        <!-- <div class="c-register"> -->
                        <div v-if="!isLoggedIn" id="login-cont" class="login-button">
                            <svg class="profile-svg" xmlns="http://www.w3.org/2000/svg" width="18" height="20"
                                viewBox="0 0 18 20">
                                <path id="Shape"
                                    d="M16.087,20H1.913a1.971,1.971,0,0,1-1.388-.572A1.786,1.786,0,0,1,0,18.133l.006-.328v-.022c0-.051,0-.1.008-.157l.029-.385A8.291,8.291,0,0,1,1.477,13.21C3,11.08,5.536,10,9,10s6,1.08,7.523,3.21a8.367,8.367,0,0,1,1.45,4.228l.02.367.007.328a1.786,1.786,0,0,1-.526,1.294A1.971,1.971,0,0,1,16.087,20ZM9,12c-2.783,0-4.768.8-5.9,2.376A6.5,6.5,0,0,0,2,18H16a6.5,6.5,0,0,0-1.1-3.624C13.768,12.8,11.783,12,9,12ZM9,8a4,4,0,1,1,4-4A4,4,0,0,1,9,8ZM9,2a2,2,0,1,0,2,2A2,2,0,0,0,9,2Z"
                                    fill="#729f28" />
                            </svg>
                            <!-- <div class="login-reg"> -->
                            <span class="login-text">
                                <b-button class="modal-button" v-b-modal.modal>
                                    {{ $t("sign-in")

                                    }}
                                    <loginPage />
                                </b-button>
                                <span class="slash">/</span>
                                <span class="signup-text">
                                    <b-button class="modal-buttonr" v-b-modal.modal-2>
                                        {{ $t("register") }}
                                        <signupPage />
                                    </b-button>
                                </span>
                            </span>
                            <!-- </div> -->
                        </div>
                        <span class="logged-user" v-if="isLoggedIn">
                            <span v-if="currentUser">{{ currentUser.name }}</span>
                            <span v-else>Loading...</span>
                        </span>
                        <!-- <b-col class="lang-main" cols="2"> -->
                        <span class="v-line"></span>
                        <div class="flag-main d-flex mt-2">
                            <div class="flag-icon">
                                <svg class="uk-icon" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" width="29.561" height="17.243"
                                    viewBox="0 0 29.561 17.243">
                                    <defs>
                                        <clipPath id="clip-path">
                                            <rect id="Rectangle_63" data-name="Rectangle 63" width="29.561" height="17.243"
                                                fill="none" />
                                        </clipPath>
                                    </defs>
                                    <g id="UNITED_KINGDOM" data-name="UNITED KINGDOM"
                                        transform="translate(2385.67 -3275.351)">
                                        <g id="Group_58" data-name="Group 58" transform="translate(-2385.67 3275.351)">
                                            <g id="Group_57" data-name="Group 57">
                                                <g id="Group_56" data-name="Group 56" clip-path="url(#clip-path)">
                                                    <rect id="Rectangle_62" data-name="Rectangle 62" width="29.561"
                                                        height="17.243" fill="#fff" />
                                                    <path id="Path_24" data-name="Path 24"
                                                        d="M-2349.55,3281.585l9.768-5.468v-.767h-.674l-11.137,6.234Z"
                                                        transform="translate(2369.343 -3275.351)" fill="#db1e34" />
                                                    <path id="Path_25" data-name="Path 25"
                                                        d="M-2348.556,3297.15l10.229,5.724v-1.144l-8.185-4.58Z"
                                                        transform="translate(2367.888 -3285.795)" fill="#db1e34" />
                                                    <path id="Path_26" data-name="Path 26"
                                                        d="M-2385.67,3276.818l8.75,4.921h2.044l-10.794-6.066Z"
                                                        transform="translate(2385.67 -3275.505)" fill="#db1e34" />
                                                    <path id="Path_27" data-name="Path 27"
                                                        d="M-2375.339,3297.15l-10.331,5.788v.1h1.867l10.51-5.888Z"
                                                        transform="translate(2385.67 -3285.795)" fill="#db1e34" />
                                                    <path id="Path_28" data-name="Path 28"
                                                        d="M-2342.323,3275.351h-10.35v5.8Z"
                                                        transform="translate(2369.86 -3275.351)" fill="#2a3076" />
                                                    <path id="Path_29" data-name="Path 29"
                                                        d="M-2370.928,3275.351h-10.309l10.309,5.8Z"
                                                        transform="translate(2383.546 -3275.351)" fill="#2a3076" />
                                                    <path id="Path_30" data-name="Path 30"
                                                        d="M-2335.376,3283.681v-3.956l-7.021,3.956Z"
                                                        transform="translate(2364.937 -3277.447)" fill="#2a3076" />
                                                    <path id="Path_31" data-name="Path 31"
                                                        d="M-2335.376,3301.063v-3.914h-7.021Z"
                                                        transform="translate(2364.937 -3285.795)" fill="#2a3076" />
                                                    <path id="Path_32" data-name="Path 32"
                                                        d="M-2380.114,3303.443h9.724v-5.449Z"
                                                        transform="translate(2383.008 -3286.2)" fill="#2a3076" />
                                                    <path id="Path_33" data-name="Path 33"
                                                        d="M-2352.672,3303.443h9.754l-9.754-5.449Z"
                                                        transform="translate(2369.86 -3286.2)" fill="#2a3076" />
                                                    <path id="Path_34" data-name="Path 34"
                                                        d="M-2385.67,3297.15v4.09l7.266-4.09Z"
                                                        transform="translate(2385.67 -3285.795)" fill="#2a3076" />
                                                    <path id="Path_35" data-name="Path 35"
                                                        d="M-2385.67,3283.552h7.266l-7.266-4.1Z"
                                                        transform="translate(2385.67 -3277.318)" fill="#2a3076" />
                                                    <path id="Path_36" data-name="Path 36"
                                                        d="M-2372.138,3275.351v7.258h-13.532v3.074h13.532v6.91h2.741v-6.91h13.287v-3.074H-2369.4v-7.258Z"
                                                        transform="translate(2385.67 -3275.351)" fill="#db1e34" />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <span class="text-eng">{{ $t("eng-title") }}</span>
                            <div class="dropdown">
                                <!-- <b-dropdown id="dropdown-1" variant="none">
                                    <b-dropdown-item href="#">English</b-dropdown-item>
                                    <b-dropdown-item href="#">Urdu</b-dropdown-item>
                                </b-dropdown> -->
                                <b-dropdown id="dropdown-1" dropright variant="none"
                                    >
                                    <b-dropdown-item>English</b-dropdown-item>
                                    <b-dropdown-item>Urdu</b-dropdown-item>
                                </b-dropdown>
                            </div>
                            <div>
                                <button class="logout" v-if="isLoggedIn" @click="handleLogout">Logout</button>
                            </div>
                            <b-modal :hide-header="true" :hide-footer="true" v-model="showModal" title="Logout Successful"
                                ok-only @ok="handleLogout">
                                <p class="product-message"> You have been successfully logged out</p>
                            </b-modal>
                        </div>
                    </b-col>
                </b-row>

            </b-container>

        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import loginPage from './loginPage.vue';
import signupPage from './signupPage.vue';
export default {
    data() {
        return {
            showModal: false,
        };
    },
    computed: {
        ...mapGetters("registrationModule", ['isLoggedIn', 'getCurrentUser']),
        currentUser() {
            return this.getCurrentUser; // Rename to match the getter
        },
    },
    methods: {
        ...mapActions("registrationModule", ['loginUserAction', 'logoutUser']),

        handleLogout() {

            if (this.logoutUser()) {
                localStorage.removeItem('shopApiData')
                this.showModal = true; // Hide the message after a certain time
                if (this.$route.path !== '/') {
                    this.$router.push('/');
                }
                setTimeout(() => {
                    this.showModal = false; // Hide the modal
                }, 2000); 
            }

        },


    },
    components: {
        loginPage,
        signupPage
    },

}
</script>
<style scoped>
.page-header {
    border-bottom: 1px solid gainsboro;
}

.logout-message {
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    padding: 10px;
    margin-top: 20px;
    border-radius: 5px;
}

.logout {
    background: none;
    border: none;
    outline: none;
    color: #729F28;
    font-size: 17px;
    margin-left: 1rem;
}

.logout:hover {
    /* background: #729F28; */
    /* border: #729F28; */
    outline: none;
    color: red;
    font-size: 17px;
    margin-left: 1rem;
}

.product-message {
    font-weight: bold;
    font-size: 20px;
    margin-top: 3rem;
    color: #729F28;
    text-align: center;
    text-transform: uppercase;
}
#dropdown-1{
    width: 10%;
}
.logged-user {
    color: #729F28;
    font-size: 17px;
    margin-right: 2rem;
    text-transform: capitalize;
}

.header-content {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin: auto;
    padding: 9px;
}

.help-contact {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    color: #787878;
}

.v-line {
    border-left: 0.5px solid #787878;
    height: 20px;
    margin-right: 1rem;
}

.v-linec {
    border-left: 0.5px solid #787878;
    height: 25px;
    margin-right: 1rem;
}

.lang-main {
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-button {
    display: flex;
    flex-direction: row;
    width: 100%;

}

hr {
    height: 25px;
    margin: 0px;
}

.log-register {
    display: flex;
    justify-content: center;
    align-items: center;
}

.profile-svg {
    margin-top: 3px;
}

.flag-icon {
    margin-right: 10px;
}

.text-eng {
    margin-top: 2px;
    font-size: 15px;
}


.login-text {
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
}

#dropdown-right {
    /* text-decoration: none; */
    border: none;
    text-shadow: none;
    margin-left: 6px;
    outline: none;
}


.reg-text {
    margin-left: 5px
}

.modal-button {
    border: none;
    background: none;
    color: #787878;
    padding: 0px;
    margin-left: 0.5rem;
    margin-right: 0.3rem;
}

.modal-buttonr {
    border: none;
    background: none;
    color: #787878;
    padding: 0px;
    margin-left: 0.3rem;
}

@media only screen and (max-width: 2550px) and (min-width: 1199px) {


    .login-button {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        justify-content: flex-end;
        margin-right: 1rem;
    }

    .mlogout {
        display: none;
    }
}

@media only screen and (max-width: 1199px) and (min-width: 991px) {



    .mlogout {
        display: none;
    }

    .login-button {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        justify-content: flex-end;
        margin-right: 1rem;
    }

}

@media only screen and (max-width: 991px) and (min-width: 768px) {
    .help-contact {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        color: #787878;
        font-size: 14px;
    }



    .mlogout {
        display: none;
    }

    .header-content {
        display: flex;
        justify-content: space-between;
        margin: auto;
        padding: 12px;
    }

    .modal-button {
        border: none;
        background: none;
        color: #787878;
        padding: 0px;
        margin-left: 0.5rem;
        margin-right: 0.3rem;
        margin-top: 2px;
        font-size: 14px;
    }

    .modal-buttonr {
        border: none;
        background: none;
        color: #787878;
        padding: 0px;
        font-size: 14px;
        margin-left: 0.4rem;
    }

    .uk-icon {
        width: 17.561;
        height: 17.243
    }

    .logged-user {
        color: #729F28;
        font-size: 14px;
        margin-right: 1rem;
        text-transform: capitalize;
    }


    .logout {
        color: #729F28;
        font-size: 15px;
        margin-left: 1rem;
    }

}

@media only screen and (max-width:480px) {
    .help-contact {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        color: #787878;
        font-size: 10px;
        color: black;

    }

    .header-content {
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;

    }

    .modal-button {
        display: none;
    }

    .modal-buttonr {
        border: none;

    }

    .uk-icon {
        width: 22.561;
        height: 17.243
    }

    .v-line,
    .slash,
    .profile-svg,
    .log-register {
        display: none;

    }

    .mlogged-user {
        display: block;
        font-size: 12px;
        color: #729F28;
    }

    .v-linec {
        border-left: 0.5px solid #787878;
        height: 20px;
    }

    .mlogout {
        background: none;
        border: none;
        outline: none;
        color: #729F28;
        font-size: 14px;
        margin-left: 1rem;
    }
}
</style>