<template>
    <div class="container">
        <b-row>
            <b-col>
                <div class="product-title">
                    <div class="prod-main">
                        <span> {{ $t("featured-products") }}</span>
                        <div class="leaf-d">
                            <svg xmlns="http://www.w3.org/2000/svg" width="104.682" height="101.516"
                                viewBox="0 0 114.682 131.516">
                                <g id="Group_1264" data-name="Group 1264" transform="translate(129.411 28.573) rotate(112)"
                                    opacity="0.24">
                                    <path id="Path_2213" data-name="Path 2213"
                                        d="M0,0C8.9,8.844,48.41,45.692,55.551,35.389,58.174,31.6,35.513.954,0,0Z"
                                        transform="translate(0 28.894)" fill="none" stroke="#89a16d" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="1.5" />
                                    <path id="Path_2214" data-name="Path 2214"
                                        d="M11.374,49.823C-6.072,26.564-1.73,11.416,12.806,0,9.076,18.825,8.34,19.382,17.98,31.829,31.805,49.68,28.238,63.69,23.93,63.965,20.37,64.193,13.424,52.556,11.374,49.823Z"
                                        transform="translate(41.736 0)" fill="none" stroke="#89a16d" stroke-linecap="round"
                                        stroke-linejoi n="round" stroke-width="1.5" />
                                    <path id="Path_2215" data-name="Path 2215"
                                        d="M44.781,19.839C21.9,11.578,16.152-3.848,0,.883,6.631,3.777,11.121,9.948,16.518,14.766,36.492,32.6,71.7,33.417,66.637,23.915,64.909,20.673,59.467,25.14,44.781,19.839Z"
                                        transform="translate(4.599 55.094)" fill="none" stroke="#89a16d"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                    <path id="Path_2216" data-name="Path 2216"
                                        d="M10.435,4.212C19.467-2.672,26.292-.2,46.607,5.055c-5.87,6.718-28.214,2.956-36.41,19.58C8.624,27.825,7.05,36.6,2.351,31.283-4.159,23.914,4.271,8.909,10.435,4.212Z"
                                        transform="translate(78.673 37.877)" fill="none" stroke="#89a16d"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                    <path id="Path_2217" data-name="Path 2217"
                                        d="M.487,15.788C3.341,5.413,13.848,6.173,16.881,0c2.983,14.6-2.529,16.441-7.524,21.331C4.9,25.7,7.527,35.481,3.045,32.32-.32,29.946-.418,19.082.487,15.788Z"
                                        transform="translate(96.212 49.617)" fill="none" stroke="#89a16d"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                    <path id="Path_2218" data-name="Path 2218"
                                        d="M0,0C15.478,5.957,27.411,18.458,41.614,27.02,55.45,35.361,85.931,47.48,85.931,47.48s15.955,6.012,15.851,12.413"
                                        transform="translate(9.079 33.826)" fill="none" stroke="#89a16d"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                    <path id="Path_2219" data-name="Path 2219"
                                        d="M.305,0C-2.356,22.95,13.146,30.26,17.546,42.523c1.634,4.554,3.462,11.3,8.131,14.3"
                                        transform="translate(48.616 15.25)" fill="none" stroke="#89a16d"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                    <path id="Path_2220" data-name="Path 2220"
                                        d="M0,0C43.908,29.657,53.169,18.56,67.621,15.358"
                                        transform="translate(16.928 61.011)" fill="none" stroke="#89a16d"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                    <path id="Path_2221" data-name="Path 2221"
                                        d="M10.11,0C7.52,6.94-6.695,16.053,3.835,30.44"
                                        transform="translate(100.213 56.227)" fill="none" stroke="#89a16d"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                    <path id="Path_2222" data-name="Path 2222"
                                        d="M33.785.079C-.183-1.692-8.05,26.708,7.991,36.064"
                                        transform="translate(83.259 43.357)" fill="none" stroke="#89a16d"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="desc-col">
                <span>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                </span>
            </b-col>
        </b-row>
    </div>
</template>
<script>

export default ({

});
</script>


<style scoped>
.product-title {
    display: flex;
    justify-content: center;
    padding-top: 8px;
}

.desc-col {
    margin-top: 1rem;
    justify-content: center;
}

.product-title span {
    letter-spacing: 0px;
    color: #8C5E1A;
    font-size: 40px;

}

.container {
    margin-top: 5rem;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    opacity: 1;
    justify-content: center;
    text-align: center;
}

.prod-main {
    display: flex;
}

.prod-main span {
    margin-top: 2.5rem;
}

.leaf-d svg {
    display: none;
}

@media only screen and (max-width:480px) {

    .prod-main span {
        margin-top: 0rem;
    }
}
</style>