<template>
    <div class="container p-4">

        <b-row>
            <b-col class="p-4" cols="12">
                <b-row>
                    <b-col cols="6">
                        <b-form-group id="input-group" style="display: flex;  flex-direction: column;" class="mt-3 mb-3"
                            label="Full Name:">
                            <b-form-input type="text" class="mt-2" id="input" placeholder="Enter Full Name:"
                                required></b-form-input>
                        </b-form-group>
                    </b-col>

                    <b-col cols="6">
                        <b-form-group id="input-group" style="display: flex;  flex-direction: column;" class="mt-3 mb-3"
                            label="Phone:">
                            <b-form-input id="input" class="mt-2" placeholder="Enter Phone" required></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col cols="6">
                        <b-form-group id="input-group" style="display: flex;  flex-direction: column;" class="mt-3 mb-3"
                            label="Adress 1">
                            <b-form-input placeholder="Enter Adress 1" class="mt-2" id="input" required></b-form-input>
                        </b-form-group>
                    </b-col>

                    <b-col cols="6">
                        <b-form-group id="input-group" style="display: flex;  flex-direction: column;" class="mt-3 mb-3"
                            label="Adress 2">
                            <b-form-input placeholder="Enter Adress 2" class="mt-2" id="input" required></b-form-input>
                        </b-form-group>

                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="6">
                        <b-form-group id="input-group" style="display: flex;  flex-direction: column;" class="mt-3 mb-3"
                            label="Country">
                            <b-form-input placeholder="Enter Country Name" id="input" required></b-form-input>
                        </b-form-group>
                    </b-col>

                    <b-col cols="6">
                        <b-form-group id="input-group" style="display: flex;  flex-direction: column;" class="mt-3 mb-3"
                            label="ZIP Code">
                            <b-form-input id="input" class="mt-2" placeholder="Enter ZIP Code" required></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="6">
                        <b-form-group id="input-group" style="display: flex;  flex-direction: column;" class="mt-3 mb-3"
                            label="State">
                            <b-form-input id="input" class="mt-2" placeholder="Enter State" required></b-form-input>
                        </b-form-group>
                    </b-col>

                    <b-col cols="6">
                        <b-form-group id="input-group" style="display: flex;  flex-direction: column;" class="mt-3 mb-3"
                            label="City">
                            <b-form-input id="input" class="mt-2" placeholder="Enter City" required></b-form-input>
                        </b-form-group>

                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="6">
                        <b-input-group class="mt-3 mb-3" label="Desrired Date">
                            <b-form-input id="example-input" v-model="value" type="text" placeholder="YYYY-MM-DD"
                                autocomplete="off"></b-form-input>
                            <b-input-group-append>
                                <b-form-datepicker v-model="value" button-only right locale="en-US"
                                    aria-controls="example-input"></b-form-datepicker>
                            </b-input-group-append>
                        </b-input-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="12">
                        <b-input-group class="mb-3" label="Order Note">
                            <b-form-textarea placeholder="Enter Detailed Information" id="textarea-rows" class="mt-2" rows="8"></b-form-textarea>
                        </b-input-group>
                    </b-col>
                </b-row>
                <b-row>
                    <span>
                        <span class="payment-title">{{ $t("payment-methods") }}</span>
                    </span>
                    <b-col cols="5">
                        <div class="payments-main">
                            <div>
                                <div class="logos-main">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="68" height="44" viewBox="0 0 68 44">
                                        <g id="mastercard-color_large" transform="translate(0.405 -0.396)">
                                            <rect id="card_bg" width="68" height="44" rx="4"
                                                transform="translate(-0.405 0.396)" fill="#f2f0ec" />
                                            <g id="mastercard" transform="translate(6.509 4.479)">
                                                <g id="Group" opacity="0">
                                                    <rect id="Rectangle" width="54.185" height="35.834" fill="#fff" />
                                                </g>
                                                <rect id="Rectangle-2" data-name="Rectangle" width="14.292" height="23.348"
                                                    transform="translate(19.947 6.243)" fill="#f26122" />
                                                <path id="Path"
                                                    d="M18.433,14.852a14.81,14.81,0,0,1,5.6-11.674,14.852,14.852,0,1,0,0,23.348A14.81,14.81,0,0,1,18.433,14.852Z"
                                                    transform="translate(3.053 3.065)" fill="#ea1d25" />
                                                <path id="Shape"
                                                    d="M.7.576H.6V0h.14L.923.406,1.092,0h.14V.573h-.1V.14L.98.518H.868L.7.14V.574ZM.28.574H.2V.1H0V0H.49V.1H.28V.573Z"
                                                    transform="translate(49.398 26.54)" fill="#f69e1e" />
                                                <path id="Path-2" data-name="Path"
                                                    d="M24.02,14.842A14.852,14.852,0,0,1,0,26.516,14.852,14.852,0,0,0,2.492,5.674,14.558,14.558,0,0,0,0,3.168,14.852,14.852,0,0,1,24.02,14.842Z"
                                                    transform="translate(27.086 3.075)" fill="#f69e1e" />
                                            </g>
                                        </g>
                                    </svg>
                                    <svg id="visa-color_large" xmlns="http://www.w3.org/2000/svg" width="66" height="44"
                                        viewBox="0 0 66 44">
                                        <rect id="card_bg" width="66" height="44" rx="4" fill="#2a2a6c" />
                                        <path id="visa-logo"
                                            d="M23.567,13.188a9.872,9.872,0,0,1-3.607-.68l.6-2.77a6.952,6.952,0,0,0,3.292.832h.088c.986-.014,1.981-.409,1.981-1.26.013-.543-.452-.974-1.718-1.593C22.956,7.108,21.3,6.086,21.3,4.239,21.3,1.743,23.583,0,26.844,0a8.884,8.884,0,0,1,3.1.568l-.581,2.77a6.25,6.25,0,0,0-2.66-.6c-.2,0-.408.01-.61.03-.957.127-1.385.627-1.385,1.067,0,.537.686.9,1.555,1.351,1.379.722,3.094,1.62,3.085,3.733l.07-.111c-.014,2.659-2.282,4.377-5.776,4.377Zm9.179-.11h-3.49L34.228,1.206A1.505,1.505,0,0,1,35.614.263h2.77L41.07,13.075l-3.074,0-.4-1.911h-4.17l-.678,1.911Zm3.3-9.351L34.3,8.532h2.756ZM17.592,13.035H14.267L17.038.222h3.324l-2.77,12.812Zm-7.272-.042H6.7L4.059,2.756a1.393,1.393,0,0,0-.79-1.122A13.737,13.737,0,0,0,0,.554L.084.18H5.721a1.549,1.549,0,0,1,1.537,1.3l1.385,7.41L12.093.18h3.6L10.32,12.992Z"
                                            transform="translate(12.688 15.556)" fill="#fff" />
                                    </svg>
                                </div>
                                <div>

                                    <span class="pay-by ">{{ $t("pay-by-card") }}</span>
                                    <span class="payment-text">{{ $t("visa-mastercard") }}</span>
                                </div>
                            </div>

                        </div>

                    </b-col>
                    <b-col cols="5">
                        <div class="payments-main">

                            <div>
                                <div class="logos-main">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="66" height="44" viewBox="0 0 66 44">
                                        <g id="paypal-color-large" transform="translate(0 0)">
                                            <rect id="card_bg" width="66" height="44" rx="4" transform="translate(0 0)"
                                                fill="#fff" />
                                            <path id="card_bg-2"
                                                d="M60.5,44H5.5A5.506,5.506,0,0,1,0,38.5V5.5A5.506,5.506,0,0,1,5.5,0h55A5.506,5.506,0,0,1,66,5.5v33A5.506,5.506,0,0,1,60.5,44ZM5.5,2.75A2.753,2.753,0,0,0,2.75,5.5v33a2.753,2.753,0,0,0,2.75,2.75h55a2.753,2.753,0,0,0,2.75-2.75V5.5A2.753,2.753,0,0,0,60.5,2.75Z"
                                                transform="translate(0 0)" fill="#cccccb" />
                                            <g id="paypal" transform="translate(21.345 8.25)">
                                                <path id="Path"
                                                    d="M5.651,25.63,6.132,22.6H0L3.52.247a.289.289,0,0,1,.1-.179A.33.33,0,0,1,3.809,0h8.539c2.846,0,4.8.591,5.83,1.76A3.781,3.781,0,0,1,19.1,3.506a6.078,6.078,0,0,1,0,2.406V6.6l.481.275a3.424,3.424,0,0,1,.976.729,3.561,3.561,0,0,1,.784,1.774,7.879,7.879,0,0,1-.11,2.557,8.91,8.91,0,0,1-1.059,2.9,5.912,5.912,0,0,1-1.664,1.829,6.958,6.958,0,0,1-2.241,1,10.876,10.876,0,0,1-2.75.33h-.674a2.021,2.021,0,0,0-1.292.467,1.952,1.952,0,0,0-.674,1.21v.275l-.839,5.335v.206a.206.206,0,0,1,0,.11H9.955Z"
                                                    transform="translate(0.971 0.935)" fill="#253d80" />
                                                <path id="Path-2" data-name="Path"
                                                    d="M15.366,0l-.083.509C14.156,6.284,10.292,8.291,5.37,8.291h-2.5a1.224,1.224,0,0,0-1.21,1.031L.378,17.462l-.371,2.31a.646.646,0,0,0,.632.742H5.095a1.072,1.072,0,0,0,1.059-.907v-.22l.839-5.321v-.289a1.059,1.059,0,0,1,1.045-.907h.729c4.3,0,7.686-1.746,8.662-6.875a5.83,5.83,0,0,0-.88-5.129A4.441,4.441,0,0,0,15.366,0Z"
                                                    transform="translate(5.638 6.985)" fill="#189bd7" />
                                                <path id="Path-3" data-name="Path"
                                                    d="M12.43.4,11.907.262,11.33.152A13.832,13.832,0,0,0,9.13,0H2.42a.99.99,0,0,0-.454.1,1.045,1.045,0,0,0-.591.8L0,9.928v.261A1.224,1.224,0,0,1,1.21,9.158h2.5c4.922,0,8.786-2.007,9.914-7.782l.083-.509a6.16,6.16,0,0,0-.921-.385Z"
                                                    transform="translate(7.392 6.118)" fill="#242e65" />
                                                <path id="Path-4" data-name="Path"
                                                    d="M8.767,7.012a1.045,1.045,0,0,1,.591-.8.99.99,0,0,1,.454-.1h6.71a13.832,13.832,0,0,1,2.2.151l.577.11.522.137.261.082A6.16,6.16,0,0,1,21,6.985a5.5,5.5,0,0,0-1.1-4.909C18.529.619,16.274,0,13.332,0H4.779a1.224,1.224,0,0,0-1.21,1.031L.008,23.595a.742.742,0,0,0,.729.852h5.28l1.375-8.4Z"
                                                    transform="translate(0 0)" fill="#253d80" />
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div>
                                    <span class="pay-by">{{ $t("pay-by-paypal") }}</span>
                                </div>
                            </div>

                        </div>

                    </b-col>
                </b-row>

                <b-row>
                    <b-col cols="6">
                        <b-form-group id="input-group" style="display: flex;  flex-direction: column;" class="mt-3 mb-3"
                            label="Card Number">
                            <b-form-input id="input" class="mt-2" placeholder="Enter Card Number" required></b-form-input>
                        </b-form-group>
                    </b-col>

                    <b-col cols="6">
                        <b-form-group id="input-group" style="display: flex;  flex-direction: column;" class="mt-3 mb-3"
                            label="Name On Card">
                            <b-form-input id="input" class="mt-2" placeholder="Enter Name" required></b-form-input>
                        </b-form-group>

                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="6">
                        <b-form-group id="input-group" style="display: flex;  flex-direction: column;" class="mt-3 mb-3"
                            label="Expirey Date">
                            <b-form-input id="input" class="mt-2" placeholder="Enter Expirey Date " required></b-form-input>
                        </b-form-group>
                    </b-col>

                    <b-col cols="3">
                        <b-form-group id="input-group" style="display: flex;  flex-direction: column;" class="mt-3 mb-3"
                            label="CVV:">
                            <b-form-input id="input" required></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="12">
                        <b-form-checkbox class="m-3" id="checkbox-1" name="checkbox-1" value="accepted"
                            unchecked-value="not_accepted">
                            <span class="m-2"> {{ $t("terms-and-use") }}</span>
                        </b-form-checkbox>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value: '',
            formatted: '',
            selected: ''
        }
    },

}
</script>

<style scoped>
#input-group {
    outline: none;
}

.payment-title {
    font-size: 24px;
    color: #6F9642;
    opacity: 1;
    margin: 1rem;
}

.logos-main {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    margin-top: 1rem;
    gap: 0.5rem;
}

.payments-main {
    background: #FFFFFF padding-box;
    border: 2px solid #BCBCBC;
    border-radius: 8px;
    height: 151px;
    opacity: 1;
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.payment-text {
    display: flex;
    justify-content: center;
    font-size: 14px;
    color: #BDBDBD;
}

.pay-by {

    display: flex;
    justify-content: center;
    font-size: 17px;
}

@media only screen and (max-width:480px) {
    .payment-text {
        font-size: 10px;
        color: black;
        text-align: center;
    }

}
</style>