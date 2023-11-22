<template>
    <div class="details-container">
        <b-row>

            <div>
                <b-tabs active-nav-item-class="font-weight-bold text-uppercase text-success"
                    active-tab-class="font-weight-bold text-success" content-class="mt-3">
                    <b-tab title="Description" active>
                        <b-row class="main-row">
                            <b-col class="desciption-column" sm="12" md="12" lg="9">
                                <b-row>
                                    <b-col sm="8" md="8" lg="9">
                                        <div class="top-paragraph">
                                            <span>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt
                                                arcu
                                                cursus
                                                vitae congue mauris. Sagittis id consectetur purus ut. Tellus rutrum tellus
                                                pelle Vel
                                                pretium
                                                lectus
                                                quam id leo in vitae turpis massa.
                                            </span>
                                        </div>
                                        <div class="data-main">
                                            <div class="product-data">
                                                <span class="text-detail"><i class=" fa fa-solid  fa-check icons"></i>Nunc
                                                    nec porttitor
                                                    turpis. In
                                                    eu
                                                    risus enim. In vitae
                                                    mollis elit. </span>
                                                <span class="text-detail"><i class=" fa fa-solid fa-check icons"></i>
                                                    Vivamus finibus vel
                                                    mauris ut
                                                    vehicula..</span>
                                                <span class="text-detail"><i class=" fa fa-solid fa-check icons"></i>Nullam
                                                    a magna
                                                    porttitor,
                                                    dictum
                                                    risus
                                                    nec, faucibus sapien.</span>
                                                <span class="text-detail"><i
                                                        class=" fa fa-solid fa-check icons"></i>Ultrices eros in cursus
                                                    turpis
                                                    massa
                                                    tincidunt ante in nibh mauris.</span>
                                                <span class="text-detail"><i class=" fa fa-solid fa-check icons"></i>Cras
                                                    ornare arcu dui
                                                    vivamus
                                                    arcu
                                                    felis
                                                    bibendum ut tristique</span>
                                                <span class="text-detail"><i
                                                        class=" fa fa-solid fa-check icons"></i>Pulvinar elementum
                                                    integer enim
                                                    neque
                                                    volutpat.</span>
                                            </div>
                                            <div class="bottom-paragraph">
                                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor
                                                    incididunt arcu
                                                    cursus
                                                    vitae congue mauris. Sagittis id consectetur purus ut. Tellus rutrum
                                                    tellus pelle Vel
                                                    pretium lectus
                                                    quam id leo in vitae turpis massa.</span>
                                            </div>
                                            <div class="product-faq">
                                                <span class="product-q">{{ $t('have-question') }}</span>
                                                <span class="product-q"> {{ $t('qa-reviews') }}</span>
                                            </div>
                                            <div class="search-bar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21.207" height="21.207"
                                                    viewBox="0 0 21.207 21.207">
                                                    <path id="search"
                                                        d="M17,17l5,5M19.5,10.75A8.75,8.75,0,1,1,10.75,2,8.75,8.75,0,0,1,19.5,10.75Z"
                                                        transform="translate(-1.5 -1.5)" fill="none" stroke="#787878"
                                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                                                </svg>
                                                <b-input class="input"
                                                    placeholder="Type your question or keyword"></b-input>
                                            </div>
                                        </div>
                                    </b-col>
                                    <b-col sm="4" md="4" lg="3">
                                        <div class="image-div">
                                            <template>
                                                <img class="prod-image" src="@/assets/images/Group 275.png" />
                                            </template>
                                        </div>
                                    </b-col>
                                </b-row>
                            </b-col>
                            <b-col class="shipping-column" sm="12" md="12" lg="3">
                                <div class="shippings">
                                    <div class="deliever-to">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" viewBox="0 0 14 20">
                                            <path id="ic_location_on_24px"
                                                d="M12,2A7,7,0,0,0,5,9c0,5.25,7,13,7,13s7-7.75,7-13A7,7,0,0,0,12,2Zm0,9.5A2.5,2.5,0,1,1,14.5,9,2.5,2.5,0,0,1,12,11.5Z"
                                                transform="translate(-5 -2)" fill="#ccc" />
                                        </svg>
                                        <span class="svg-text">
                                            {{ $t('deliever-to-usa') }}
                                        </span>
                                    </div>
                                    <div class="locations">
                                        <svg id="Home" xmlns="http://www.w3.org/2000/svg" width="15" height="15.789"
                                            viewBox="0 0 15 15.789">
                                            <path id="Home-2" data-name="Home"
                                                d="M5.238,14.821V12.407a1.12,1.12,0,0,1,1.124-1.116H8.631a1.128,1.128,0,0,1,.795.327,1.112,1.112,0,0,1,.329.789v2.414a.958.958,0,0,0,.281.684.972.972,0,0,0,.687.284h1.548A2.732,2.732,0,0,0,14.2,15a2.692,2.692,0,0,0,.8-1.913V6.211a1.952,1.952,0,0,0-.707-1.5L9.027.534A2.445,2.445,0,0,0,5.91.59L.763,4.709A1.953,1.953,0,0,0,0,6.211v6.87a2.719,2.719,0,0,0,2.729,2.709H4.241a.972.972,0,0,0,.975-.961Z"
                                                transform="translate(0 0)" fill="#ccc" />
                                        </svg>
                                        <span class="svg-text">
                                            {{ $t('home-delievery') }}
                                        </span>

                                    </div>
                                    <div class="shipping-avail">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20.61" height="14.989"
                                            viewBox="0 0 20.61 14.989">
                                            <path id="ic_local_shipping_24px"
                                                d="M18.8,7.747H15.989V4H2.874A1.879,1.879,0,0,0,1,5.874V16.179H2.874a2.811,2.811,0,0,0,5.621,0h5.621a2.811,2.811,0,0,0,5.621,0H21.61V11.495ZM5.684,17.584a1.405,1.405,0,1,1,1.405-1.405A1.4,1.4,0,0,1,5.684,17.584ZM18.331,9.153l1.836,2.342H15.989V9.153Zm-1.405,8.432a1.405,1.405,0,1,1,1.405-1.405A1.4,1.4,0,0,1,16.926,17.584Z"
                                                transform="translate(-1 -4)" fill="#ccc" />
                                        </svg>

                                        <span class="svg-text">
                                            {{ $t('shipping-available') }}
                                        </span>
                                    </div>
                                </div>
                                <span class="return-heading">Return & Warranty</span>
                                <div class="return-warranty">
                                    <div class="free-shipping">

                                        <div class="svg-main">
                                            <svg class="svgs" xmlns="http://www.w3.org/2000/svg" width="41.45"
                                                height="26.787" viewBox="0 0 41.45 26.787">
                                                <g id="Group_95" data-name="Group 95" transform="translate(0 -90.563)">
                                                    <path id="Path_402" data-name="Path 402"
                                                        d="M359.866,313.165a4.769,4.769,0,1,1,4.769-4.769A4.774,4.774,0,0,1,359.866,313.165Zm0-6.864a2.095,2.095,0,1,0,2.095,2.095A2.1,2.1,0,0,0,359.866,306.3Z"
                                                        transform="translate(-326.349 -195.815)" fill="#729f28" />
                                                    <path id="Path_403" data-name="Path 403"
                                                        d="M5.527,113.829H1.337A1.337,1.337,0,0,1,0,112.491V91.9a1.337,1.337,0,0,1,1.337-1.337H26.653A1.337,1.337,0,0,1,27.99,91.9v20.591H25.316V93.237H2.674v17.917H5.527Z"
                                                        transform="translate(0 0)" fill="#729f28" />
                                                    <rect id="Rectangle_80" data-name="Rectangle 80" width="18.006"
                                                        height="2.674" transform="translate(12.078 111.154)"
                                                        fill="#729f28" />
                                                    <path id="Path_404" data-name="Path 404"
                                                        d="M54.317,313.165a4.769,4.769,0,1,1,4.769-4.769A4.774,4.774,0,0,1,54.317,313.165Zm0-6.864a2.095,2.095,0,1,0,2.095,2.095A2.1,2.1,0,0,0,54.317,306.3Z"
                                                        transform="translate(-45.537 -195.815)" fill="#729f28" />
                                                    <path id="Path_405" data-name="Path 405"
                                                        d="M342.682,239.815h-3.254V237.14h1.917v-6.819H329.222v-2.674h13.46a1.337,1.337,0,0,1,1.337,1.337v9.493A1.337,1.337,0,0,1,342.682,239.815Z"
                                                        transform="translate(-302.569 -125.986)" fill="#729f28" />
                                                    <path id="Path_406" data-name="Path 406"
                                                        d="M339.728,158.793l-3.051-5.547h-7.455v-2.674h8.245a1.338,1.338,0,0,1,1.172.693l3.432,6.24Z"
                                                        transform="translate(-302.569 -55.151)" fill="#729f28" />
                                                </g>
                                            </svg>

                                            <span class="shippings-text">
                                                {{ $t('free-shipping-returns') }}
                                            </span>
                                        </div>
                                        <span class="shippings-light">{{ $t('for-all-orders') }}</span>
                                    </div>
                                    <div class="free-shipping">
                                        <div class="svg-main" style="display: flex; flex-direction: row;">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="41.45" height="26.787"
                                                viewBox="0 0 37.471 32.787">
                                                <g id="Group_96" data-name="Group 96" transform="translate(0 -32.008)">
                                                    <path id="Path_407" data-name="Path 407"
                                                        d="M36.3,142.052a1.171,1.171,0,0,0-1.171,1.171v8.2H2.342V137.368H15.223a1.171,1.171,0,1,0,0-2.342H2.342v-4.684H15.223a1.171,1.171,0,0,0,0-2.342H2.342A2.343,2.343,0,0,0,0,130.342v21.077a2.343,2.343,0,0,0,2.342,2.342H35.129a2.343,2.343,0,0,0,2.342-2.342v-8.2A1.171,1.171,0,0,0,36.3,142.052Z"
                                                        transform="translate(0 -88.967)" fill="#729f28" />
                                                    <path id="Path_408" data-name="Path 408"
                                                        d="M65.171,320a1.171,1.171,0,1,0,0,2.342h4.684a1.171,1.171,0,1,0,0-2.342Z"
                                                        transform="translate(-59.316 -266.915)" fill="#729f28" />
                                                    <path id="Path_409" data-name="Path 409"
                                                        d="M274.026,35.614l-8.2-3.513a1.2,1.2,0,0,0-.925,0l-8.2,3.513A1.174,1.174,0,0,0,256,36.691v4.684c0,6.443,2.382,10.209,8.785,13.9a1.177,1.177,0,0,0,1.166,0c6.4-3.679,8.785-7.445,8.785-13.9V36.691A1.172,1.172,0,0,0,274.026,35.614Zm-1.632,5.761c0,5.408-1.789,8.384-7.026,11.522-5.237-3.145-7.026-6.122-7.026-11.522V37.464l7.026-3.012,7.026,3.012Z"
                                                        transform="translate(-237.264)" fill="#729f28" />
                                                    <path id="Path_410" data-name="Path 410"
                                                        d="M322.156,130.883a1.17,1.17,0,1,0-1.948,1.3l2.342,3.513a1.18,1.18,0,0,0,.925.522h.049a1.171,1.171,0,0,0,.916-.44l4.684-5.855a1.171,1.171,0,0,0-1.829-1.464l-3.681,4.6Z"
                                                        transform="translate(-296.591 -88.986)" fill="#729f28" />
                                                </g>
                                            </svg>
                                            <span class="shippings-text">
                                                Secure Payment
                                            </span>
                                        </div>
                                        <span class="shippings-light">{{ $t('ensure-secure-payment') }}</span>
                                    </div>
                                    <div class="free-shipping">

                                        <div class="svg-main" style="display: flex; flex-direction: row;">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="41.45" height="26.787"
                                                viewBox="0 0 33.295 33.287">
                                                <g id="Group_97" data-name="Group 97"
                                                    transform="translate(-1077.766 -315.318)">
                                                    <path id="Path_411" data-name="Path 411"
                                                        d="M1084.479,321.713h3.468a3.409,3.409,0,0,1,.4.011,1.015,1.015,0,0,1,.932,1.065,1,1,0,0,1-1.027.971c-1.412.009-2.824,0-4.236,0-.612,0-1.223,0-1.834,0a1.022,1.022,0,0,1-1.094-1.081q-.012-3.018,0-6.036a1.026,1.026,0,1,1,2.049.021c.005,1.1,0,2.2.007,3.3a.469.469,0,0,0,.017.066,2.333,2.333,0,0,0,.205-.149,15.61,15.61,0,0,1,9.5-4.23,15.964,15.964,0,0,1,14.767,6.664,15.5,15.5,0,0,1,3.1,11.1,16.431,16.431,0,0,1-17.792,14.865,16.386,16.386,0,0,1-14.606-13.2,25.038,25.038,0,0,1-.312-2.978,1.01,1.01,0,0,1,1-1.167,1.033,1.033,0,0,1,1.05,1.156,14.338,14.338,0,1,0,18.759-13.756,13.837,13.837,0,0,0-14.112,3.071c-.067.059-.128.124-.189.188A.549.549,0,0,0,1084.479,321.713Z"
                                                        transform="translate(0 0)" fill="#729f28" stroke="#729f28"
                                                        stroke-width="0.5" />
                                                    <path id="Path_412" data-name="Path 412"
                                                        d="M1221.171,431.5c0,.288.005.6,0,.907a1.019,1.019,0,1,1-2.035.014c-.007-.309,0-.619,0-.981h-1.21c-.256,0-.511,0-.767,0a1.034,1.034,0,0,1-1.1-1.044,1.023,1.023,0,0,1,1.093-1.012c1.334,0,2.668.007,4,0a1.013,1.013,0,0,0,.921-1.5,1.052,1.052,0,0,0-1-.548c-.678,0-1.357.014-2.034,0a3.063,3.063,0,0,1-.865-5.979c.293-.094.6-.133.955-.208,0-.288,0-.6,0-.9a1.02,1.02,0,1,1,2.036-.016c.006.308,0,.617,0,.965.688,0,1.341-.005,1.993,0a1.033,1.033,0,0,1,1.068.86,1.02,1.02,0,0,1-1.063,1.194c-1.334.007-2.668,0-4,0a1.015,1.015,0,0,0-.929,1.517,1.067,1.067,0,0,0,1.007.534c.678,0,1.357-.015,2.034,0a3.061,3.061,0,0,1,1.018,5.915A9.862,9.862,0,0,1,1221.171,431.5Z"
                                                        transform="translate(-125.742 -94.35)" fill="#729f28"
                                                        stroke="#729f28" stroke-width="0.5" />
                                                </g>
                                            </svg>
                                            <span class="shippings-text">
                                                {{ $t('money-back-guarantee') }}
                                            </span>
                                        </div>
                                        <span class="shippings-light">{{ $t("any-back") }}</span>
                                    </div>
                                    <div class="free-shipping">
                                        <div class="svg-main" style="display: flex; flex-direction: row;">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="41.45" height="26.787"
                                                viewBox="0 0 28.904 32.887">
                                                <g id="Group_98" data-name="Group 98" transform="translate(-31)">
                                                    <path id="Path_413" data-name="Path 413"
                                                        d="M93.89,210A2.894,2.894,0,0,0,91,212.89v7.836a2.89,2.89,0,1,0,5.781,0V212.89A2.894,2.894,0,0,0,93.89,210Z"
                                                        transform="translate(-56.146 -196.511)" fill="#729f28" />
                                                    <path id="Path_414" data-name="Path 414"
                                                        d="M33.009,242.366A2.885,2.885,0,0,0,31,245.1v3.982a2.885,2.885,0,0,0,2.009,2.738,4.78,4.78,0,0,1-.082-.812v-7.836A4.78,4.78,0,0,1,33.009,242.366Z"
                                                        transform="translate(0 -226.798)" fill="#729f28" />
                                                    <path id="Path_415" data-name="Path 415"
                                                        d="M221.6,210a2.894,2.894,0,0,0-2.89,2.89v7.836a2.894,2.894,0,0,0,2.89,2.89,2.851,2.851,0,0,0,.828-.135,2.885,2.885,0,0,1-2.755,2.062H216.6a2.89,2.89,0,1,0,0,1.927h3.068a4.823,4.823,0,0,0,4.817-4.817V212.89A2.894,2.894,0,0,0,221.6,210Z"
                                                        transform="translate(-168.438 -196.511)" fill="#729f28" />
                                                    <path id="Path_416" data-name="Path 416"
                                                        d="M449.722,242.366a4.78,4.78,0,0,1,.082.812v7.836a4.78,4.78,0,0,1-.082.812,2.885,2.885,0,0,0,2.009-2.738V245.1A2.885,2.885,0,0,0,449.722,242.366Z"
                                                        transform="translate(-391.827 -226.798)" fill="#729f28" />
                                                    <path id="Path_417" data-name="Path 417"
                                                        d="M45.452,0A14.468,14.468,0,0,0,31,14.452v.025a4.771,4.771,0,0,1,1.971-.9,12.51,12.51,0,0,1,24.962,0,4.772,4.772,0,0,1,1.971.9v-.025A14.468,14.468,0,0,0,45.452,0Z"
                                                        fill="#729f28" />
                                                </g>
                                            </svg>

                                            <span class="shippings-text">
                                            </span>
                                        </div>
                                        <span class="shippings-light">{{ $t('call-email') }}</span>
                                    </div>
                                </div>
                            </b-col>
                        </b-row>
                    </b-tab>
                    <b-tab title="Customer Services">
                        <b-row>
                            <b-col class="services-left" lg="6" md="6" sm="6">
                                <span class="title-text">We're here </span>
                                <span>Our door is always open for your good services</span>
                            </b-col>
                            <b-col class="services-right" lg="6" md="6" sm="6">
                                <span  class="query-text">Lets Talk </span>
                                <span style="font-size: 26px;">Share Your Queries With Us at</span>
                                <span style="font-size: 26px;">Queries@devbatch.com</span>
                            </b-col>
                        </b-row>
                    </b-tab>
                </b-tabs>
            </div>


            <!-- <b-col sm="9" md="9" lg="9">
                <div class="headings">
                </div>
                <hr>
            </b-col>
            <b-col sm="4" md="4" lg="4">
                <span class="delievery">{{ $t('delievry-options') }}</span>
            </b-col> -->
        </b-row>


    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.product-data {
    display: flex;
    flex-direction: column;

}

.svg-main {
    display: flex;
    flex-direction: row;
}

.product-faq {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
}

.services-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 400px;
}

.services-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: skyblue;
    height: 400px;
}

.query-text {
    font-size: 6rem;
    color: white;
}

.title-text {
    font-size: 6rem;
}

.product-q {
    margin-top: 1rem;
}

.svg-text {
    margin-left: 0.5rem;
    color: #729F28;
    font-family: Tahoma, sans-serif;
}

.prod-image {
    width: 100%;
}

.shippings-text {
    font-size: 14px;
    margin-left: 0.5rem;
}

.search-bar {
    padding-left: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #FFFFFF;
    border: 1px solid #C5C5C5;
    border-radius: 6px;
    opacity: 1;
    margin-top: 1rem;
}

.shipping-column {
    display: flex;
    flex-direction: column;
    align-items: center;

}

.return-heading {
    color: #8C5E1A;
    opacity: 1;
    margin-top: 1rem;
}

.input {
    border: none;
    outline: none;
    margin-left: 0.5rem;
}

.icons {
    color: #729F28;
    margin-right: 0.4rem;
}

.top-paragraph {
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: #787878;
    opacity: 1;
    width: 100%;

}

.shippings-light {
    text-align: left;
    font-size: 14px;
    letter-spacing: 0px;
    color: #CCCCCC;
    opacity: 1;
    margin-left: 3rem;
}

.bottom-paragraph {
    color: #787878;
    opacity: 1;
    margin-top: 1rem;
}

.text-detail {
    color: #787878;
    opacity: 1;
    margin-top: 0.5rem;
}

.desciption-column {
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
    align-items: center;
}

.description {
    height: 29px;
    letter-spacing: 0px;
    color: #729F28;
    opacity: 1;
}

.free-shipping {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    margin-left: 0.8rem;
}

.delievery {
    color: #8C5E1A;
    font-size: 14px;
    opacity: 1;
}

.services {
    height: 29px;
    color: #8C5E1A;
    opacity: 0.67;
    margin-left: 5rem;
}

.prod-image {
    width: 100%;
}

.headings {
    display: flex;
    flex-direction: row;
}

.details-container {
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
}


.desciption-row {
    display: flex;
    margin-top: 2rem;
    flex-direction: column;
}

.shippings {
    border: 1px solid;
    display: flex;
    flex-direction: column;
    height: 180px;
    width: 250px;
    margin-top: 0px;
    padding-top: 0px;
    border: 1px solid #C1C1C1;
    border-radius: 6px;
    opacity: 1;
}

.return-warranty {
    border: 1px solid;
    display: flex;
    flex-direction: column;
    height: 300px;
    width: 250px;
    margin-top: 1rem;
    padding-top: 0px;
    border: 1px solid #C1C1C1;
    border-radius: 6px;
    opacity: 1;
}

.deliever-to {
    margin: 1rem;
}

.locations {
    margin: 1rem;
}

.shipping-avail {
    text-align: left;
    font: normal normal normal 16px/19px Lato;
    letter-spacing: 0px;
    color: #49B05E;
    opacity: 1;
    margin: 1rem;
}

@media only screen and (max-width:480px) {
    .shipping-column {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 3rem;
    }

    .prod-image {
        margin-top: 4rem;
    }


    .main-row {
        padding: 1rem;
    }

    .return-warranty {
        height: 300px;
        width: 360px;
    }

    .shippings {
        height: 180px;
        width: 360px;
    }
}



@media only screen and (max-width:991px) and (min-width:768px) {
    .shipping-column {
        display: flex;
        flex-direction: row;
        align-items: start;
        margin-top: 3rem;
        gap: 2rem;
        justify-content: center;

    }


    .return-warranty {
        height: 300px;
        width: 300px;
    }

    .shippings {
        height: 300px;
        width: 300px;
        margin-top: 1rem;
    }

    .return-heading {
        margin-top: 1rem;
        display: none;
    }
}
</style>