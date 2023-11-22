<template>
  <div class="footer-main" style="margin-top: 5rem;">
    <b-row style="margin:auto; display: flex; justify-content: center;">
      <b-col class="footer-column" lg="5" sm="12" md="6" style="display: flex; flex-direction: column;">
        <div class="footer-title">
          <span class="title">{{ $t("nav-title") }}</span>
        </div>
        <div class="footer-desc">
          <span> Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat</span>
        </div>

        <div class="footer-contact">
          <span class="p-text"> {{ $t("Phone") }}</span>
          <div class="phone-cont">
            <svg xmlns="http://www.w3.org/2000/svg" width="26.594" height="25.458" viewBox="0 0 26.594 35.458">
              <path id="phone-volume"
                d="M6.741,35.11a23.012,23.012,0,0,1,0-32.545A1.191,1.191,0,0,1,8.213,2.4L12.7,5.2a1.19,1.19,0,0,1,.474,1.451l-2.244,5.611a1.19,1.19,0,0,1-1.224.742l-3.865-.386a18.4,18.4,0,0,0,0,12.432l3.865-.387a1.19,1.19,0,0,1,1.224.742l2.244,5.611a1.19,1.19,0,0,1-.474,1.451L8.213,35.278A1.19,1.19,0,0,1,6.741,35.11Zm10.374-28.5a4.436,4.436,0,0,1,0,4.505.835.835,0,0,1-1.3.179l-.414-.4a.837.837,0,0,1-.157-1,2.221,2.221,0,0,0,0-2.074.837.837,0,0,1,.157-1l.414-.4A.835.835,0,0,1,17.115,6.612ZM23.471.3a13.316,13.316,0,0,1,0,17.136.834.834,0,0,1-1.216.065l-.4-.385a.833.833,0,0,1-.064-1.134,11.1,11.1,0,0,0,0-14.226A.833.833,0,0,1,21.854.617l.4-.385A.834.834,0,0,1,23.471.3ZM20.287,3.409a8.878,8.878,0,0,1,0,10.911.835.835,0,0,1-1.237.09l-.4-.386a.83.83,0,0,1-.089-1.1,6.657,6.657,0,0,0,0-8.112.83.83,0,0,1,.089-1.1l.4-.386A.835.835,0,0,1,20.287,3.409Z"
                transform="translate(0)" fill="#8c5e1a" />
            </svg>
            <span class="p-number"> +91 962 504 9297</span>

          </div>
          <div class="email-cont">
            <div class="email-title">
              <span class="p-email">{{ $t("email") }}</span>
            </div>
            <div class="email-icon">
              <svg class="email-svg" xmlns="http://www.w3.org/2000/svg" width="26.253" height="25.689"
                viewBox="0 0 34.253 25.689">
                <path id="envelope"
                  d="M33.6,72.483a.4.4,0,0,1,.649.314V86.478a3.212,3.212,0,0,1-3.211,3.211H3.211A3.212,3.212,0,0,1,0,86.478V72.8a.4.4,0,0,1,.649-.314c1.5,1.164,3.485,2.643,10.309,7.6,1.412,1.03,3.793,3.2,6.168,3.184,2.388.02,4.817-2.194,6.175-3.184C30.125,75.132,32.105,73.647,33.6,72.483ZM17.126,81.126c1.552.027,3.787-1.953,4.91-2.77,8.878-6.442,9.553-7,11.6-8.61a1.6,1.6,0,0,0,.615-1.264V67.211A3.212,3.212,0,0,0,31.042,64H3.211A3.212,3.212,0,0,0,0,67.211v1.271a1.611,1.611,0,0,0,.615,1.264c2.047,1.6,2.723,2.168,11.6,8.61C13.34,79.173,15.574,81.153,17.126,81.126Z"
                  transform="translate(0 -64)" fill="#8c5e1a" />
              </svg>
              <span class="email-text"> {{ $t("e-adress") }}</span>
            </div>
          </div>
        </div>
      </b-col>
      <b-col class="footer-column" lg="5" md="6" sm="12" style=" display: flex;">
        <div class="signup-heading">
          <span class="signup-text">{{ $t("sign-up-save") }}</span>
        </div>

        <div class="description-text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        </div>
        <div class="input-button">
          <b-input-group class="append">
            <b-input placeholder="Email"></b-input>
            <b-input-group-append>
              <b-button @click="showAlert" class="btn-sub">Subscribe</b-button>
            </b-input-group-append>
          </b-input-group>
        </div>
        <span class="follow-text">{{ $t("follow-us") }}</span>
        <div class="social-icons">

          <div class="social">
            <b-link href="https://www.facebook.com" target="_blank">
              <svg class="face-book" width="84.111" height="54.111" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 84.111 84.111">
                <path id="Subtraction_1" data-name="Subtraction 1"
                  d="M42.055,84.111A42.056,42.056,0,0,1,12.317,12.317,42.055,42.055,0,1,1,71.793,71.793,41.78,41.78,0,0,1,42.055,84.111ZM29.341,35.554v8.508h6.952V65.469h8.524V44.064h6.67l1.06-8.508H44.816V29.694c0-2.485.7-4.141,4.09-4.141h4.369V17.941a56.438,56.438,0,0,0-6.366-.336c-6.548,0-10.616,4.309-10.616,11.246v6.7Z"
                  fill="#8c5e1a" />
              </svg>
            </b-link>
            <b-link href="https://www.instagram.com" target="_blank">

              <svg class="insta-gram" width="84.322" height="54.322" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 84.322 84.322">
                <g id="Group_187" data-name="Group 187" transform="translate(0 0)">
                  <path id="Path_420" data-name="Path 420"
                    d="M467.14,459.07a8.07,8.07,0,1,1-8.07-8.07,8.07,8.07,0,0,1,8.07,8.07Zm0,0"
                    transform="translate(-416.909 -416.909)" fill="#8c5e1a" />
                  <path id="Path_421" data-name="Path #729F2822"
                    d="M286.161,244a42.161,42.161,0,1,0,42.161,42.161A42.166,42.166,0,0,0,286.161,244Zm24.064,52.142a17.762,17.762,0,0,1-1.125,5.877,12.379,12.379,0,0,1-7.08,7.08,17.775,17.775,0,0,1-5.876,1.125c-2.582.118-3.406.146-9.981.146s-7.4-.028-9.982-.146A17.773,17.773,0,0,1,270.3,309.1a12.38,12.38,0,0,1-7.08-7.08,17.761,17.761,0,0,1-1.125-5.876c-.119-2.582-.147-3.407-.147-9.982s.028-7.4.146-9.981a17.762,17.762,0,0,1,1.125-5.877,12.388,12.388,0,0,1,7.081-7.08,17.779,17.779,0,0,1,5.877-1.125c2.582-.118,3.406-.146,9.981-.146s7.4.028,9.981.147a17.784,17.784,0,0,1,5.877,1.124,12.383,12.383,0,0,1,7.08,7.081,17.762,17.762,0,0,1,1.126,5.877c.118,2.582.145,3.406.145,9.981s-.028,7.4-.146,9.981Zm0,0"
                    transform="translate(-244 -244)" fill="#8c5e1a" />
                </g>
              </svg>
            </b-link>
            <b-link href="https://www.twitter.com" target="_blank">
              <svg class="twitter" width="84.322" height="54.322" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 84.322 84.322">
                <g id="Group_189" data-name="Group 189" transform="translate(0 0)">
                  <path id="Path_423" data-name="Path 423"
                    d="M286.161,244a42.161,42.161,0,1,0,42.161,42.161A42.166,42.166,0,0,0,286.161,244Zm19.25,32.873q.028.622.028,1.25c0,12.788-9.734,27.533-27.534,27.534h0a27.392,27.392,0,0,1-14.833-4.347,19.68,19.68,0,0,0,2.308.134A19.417,19.417,0,0,0,277.4,297.3a9.688,9.688,0,0,1-9.041-6.722,9.642,9.642,0,0,0,4.371-.166,9.68,9.68,0,0,1-7.764-9.486c0-.044,0-.083,0-.124a9.611,9.611,0,0,0,4.383,1.21,9.685,9.685,0,0,1-3-12.919A27.475,27.475,0,0,0,286.3,279.207a9.682,9.682,0,0,1,16.49-8.825,19.411,19.411,0,0,0,6.145-2.349,9.714,9.714,0,0,1-4.256,5.353,19.3,19.3,0,0,0,5.557-1.524,19.668,19.668,0,0,1-4.827,5.012Zm0,0"
                    transform="translate(-244 -244)" fill="#8c5e1a" />
                </g>
              </svg>
            </b-link>
            <b-link href="https://www.youtube.com" target="_blank">
              <svg class="you-tube" width="84.322" height="54.322" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 84.322 84.322">
                <g id="Group_190" data-name="Group 190" transform="translate(0 0)">
                  <path id="Path_424" data-name="Path 424" d="M468.113,467.836l13.715-7.9-13.715-7.9Zm0,0"
                    transform="translate(-431.204 -417.777)" fill="#8c5e1a" />
                  <path id="Path_425" data-name="Path 425"
                    d="M286.161,244a42.161,42.161,0,1,0,42.161,42.161A42.166,42.166,0,0,0,286.161,244Zm26.344,42.2s0,8.55-1.085,12.674a6.6,6.6,0,0,1-4.644,4.643c-4.123,1.085-20.615,1.085-20.615,1.085s-16.449,0-20.615-1.128a6.6,6.6,0,0,1-4.644-4.644c-1.085-4.079-1.085-12.673-1.085-12.673s0-8.55,1.085-12.673a6.736,6.736,0,0,1,4.644-4.687c4.123-1.085,20.615-1.085,20.615-1.085s16.492,0,20.615,1.128a6.6,6.6,0,0,1,4.644,4.644c1.129,4.123,1.085,12.716,1.085,12.716Zm0,0"
                    transform="translate(-244 -244)" fill="#8c5e1a" />
                </g>
              </svg>
            </b-link>
          </div>
          <div>
            <div class="footer-nav">
              <b-nav>
                <b-nav-item class="nav-items">
                  <router-link class="r-link" :to="{ name: 'homepage' }">
                    {{ $t("nav-home")
                    }}</router-link>
                </b-nav-item>
                <b-nav-item class="nav-items">
                  <router-link class="r-link" :to="{ name: 'shop' }">
                    {{ $t("nav-shop") }}
                  </router-link>
                </b-nav-item>
                <b-nav-item class="nav-items">
                  <router-link class="r-link" :to="{ name: 'about' }">
                    {{ $t("nav-about") }}
                  </router-link>
                </b-nav-item>
                <b-nav-item class="nav-items r-link">{{ $t("terms-condition") }}</b-nav-item>
                <b-nav-item class="nav-items r-link">{{ $t("privacy-policy") }}</b-nav-item>
              </b-nav>
            </div>

          </div>
        </div>
      </b-col>
    </b-row>


  </div>
</template>

<script>
export default {
  methods: {
    showAlert() {
      window.alert('Wohooo! Successfully Subsribed ')
    }
  }
}
</script>

<style scoped>
.footer-main {
  height: 500px;
  padding-top: 3rem;
  margin-left: 4rem;
}

.footer-column {
  height: 400px;
}

.title {
  font-size: 65px;
  font: normal normal  59px/74px SF Arch Rival;
  letter-spacing: 0px;
  color: #729F28;
  opacity: 1;
}

.footer-desc {
  font: normal normal normal Lato;
  color: #9A9A9A;
  width: 80%;
  line-height: 2rem;
  opacity: 1;
}

.footer-contact {
  margin-top: 2rem;
}

.phone-cont {
  display: flex;
  margin-top: 1rem;
}

.email-icon {
  margin-top: 1rem;
}

.p-text {
  margin-bottom: 1rem;
}

.email-text {
  margin-left: 1rem;
}

.email-cont {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
}

.btn-sub {
  background: #729F28;
  border-top-left-radius: 0;
  border: 1px solid #ced4da !important;
  border-bottom-left-radius: 0px;
}

.btn-sub:hover {
  background: #729F28;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0px;
}

.nav-items {
  color: black;
}

.p-email {
  margin-bottom: 1rem;
}

.footer-column {
  display: flex;
  flex-direction: column;
}

.p-number {
  margin-left: 0.5rem;
}

.social {
  margin-top: 1rem;
}

.follow-text {
  margin-top: 2rem;
  margin-left: 1rem;
}

.signup-heading {
  text-align: left;
  font: normal normal bold Lato;
  color: #8C5E1A;
  font-size: 25px;
  text-transform: uppercase;
  margin-top: 1rem;
  opacity: 1;
  padding-top: 2rem;
  padding-left: 1rem;
}

.r-link {
  color: black;
}

.description-text {
  width: 70%;
  margin-left: 1rem;
  margin-top: 1rem;
  font: normal normal normal Lato;
  color: #9A9A9A;
  opacity: 1;
}

.email-input {
  width: 70%
}

.append {
  width: 60%;
  border: none;
  outline: none;
}

.input-button {
  margin-top: 1rem;
  margin-left: 1rem;
}

.nav-items:hover {
  color: black;
  font-size: 10px;
}

@media only screen and (max-width:1199px) and (min-width:991px) {

  .title {
    font-size: 60px;
    font: normal normal bold Arch Rival;
    letter-spacing: 0px;
    color: #729F28;
    opacity: 1;
  }

  .face-book {
    width: 44px;
    height: 44px
  }

  .twitter {
    width: 44px;
    height: 44px
  }

  .insta-gram {
    width: 44px;
    height: 44px
  }

  .you-tube {
    width: 44px;
    height: 44px
  }

  .footer-desc {
    font: normal normal normal Lato;
    color: #9A9A9A;
    width: 100%;
    line-height: 2rem;
    opacity: 1;
    font-size: 14px;
  }

  .footer-nav {
    margin-top: 1rem;
  }

  .r-link {
    text-decoration: none;
  }

  .signup-heading {
    text-align: left;
    font: normal normal bold Lato;
    color: #8C5E1A;
    font-size: 25px;
    text-transform: uppercase;
    opacity: 1;
    padding-top: 2rem;
    padding-left: 1rem;
  }

  .input-button {
    margin-top: 1rem;
    margin-left: 1rem;
  }

  .social {
    margin-top: 1rem;
    display: flex;
    gap: 1.5rem;
    margin-left: 0.8rem;
  }

  .description-text {
    width: 100%;
    margin-left: 1rem;
    margin-top: 1rem;
    font: normal normal normal Lato;
    color: #9A9A9A;
    opacity: 1;
  }

  .append {
    width: 100%;
    border: none;
    outline: none;
  }

}

/* mobile view */
@media only screen and (max-width: 480px) {


  .footer-main {
    height: 500px;
    padding-top: 1rem;
    margin-left: 3rem;
  }

  .footer-contact {
    margin-top: 0rem;
  }

  .append {
    width: 80%;
    border: none;
    outline: none;
  }

  .footer-column {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .signup-heading {
    text-align: left;
    font: normal normal bold Lato;
    color: #8C5E1A;
    font-size: 25px;
    text-transform: uppercase;
    margin-top: 1rem;
    opacity: 1;
    padding-top: 2rem;
    padding-left: 0rem;
  }

  .description-text,
  .input-button,
  .follow-text {
    margin-left: 0rem;
  }

  .row {
    display: flex;
    flex-direction: column;
  }

  .footer-column {
    display: flex;
    flex-direction: column;
  }

  .r-link {
    color: black;
    font-size: 10px;
    text-decoration: none;
    outline: none;
    gap: 0px;
  }

  .nav-link {
    color: black;
    font-size: 10px;
    margin: none;
    padding: 5px;
    /* padding: none; */
  }

  .face-book {
    width: 34px;
    height: 44px;

  }

  .twitter {
    width: 34px;
    height: 44px;
    margin-left: 1rem
  }

  .insta-gram {
    width: 34px;
    height: 44px;
    margin-left: 1rem
  }

  .you-tube {
    width: 34px;
    height: 44px;
    margin-left: 1rem
  }

  .p-text,
  .p-email {
    display: none;
  }

  .phone-cont {
    margin-top: 1rem;
  }

  .email-cont {
    margin-top: 0rem;
  }

  .email-svg {
    width: 20px;
    height: 15px;
  }

  .signup-heading {
    margin-top: 0rem;
    padding-left: 0rem;
  }
}

/* tablet views */
@media only screen and (max-width: 991px) and (min-width: 768px) {
  .title {
    font-size: 60px;
    font: normal normal bold Arch Rival;
    letter-spacing: 0px;
    color: #729F28;
    opacity: 1;
  }

  .r-link {
    text-decoration: none;
  }

  .footer-desc {
    font: normal normal normal Lato;
    color: #9A9A9A;
    width: 100%;
    line-height: 2rem;
    opacity: 1;
    font-size: 14px;
  }

  .signup-heading {
    text-align: left;
    font: normal normal bold Lato;
    color: #8C5E1A;
    font-size: 25px;
    text-transform: uppercase;
    opacity: 1;
    padding-top: 0rem;
    padding-left: 0rem;
  }

  .input-button {
    margin-top: 1rem;
    margin-left: 0rem;
  }

  .social {
    margin: 0.5rem;
    display: flex;
    gap: 1rem;
  }

  .description-text {
    width: 100%;
    margin-left: 0rem;
    margin-top: 1rem;
    font: normal normal normal Lato;
    color: #9A9A9A;
    opacity: 1;
  }

  .append {
    width: 100%;
    border: none;
    outline: none;
  }

  .face-book {
    width: 44px;
    height: 44px
  }

  .twitter {
    width: 44px;
    height: 44px
  }

  .insta-gram {
    width: 44px;
    height: 44px
  }

  .you-tube {
    width: 44px;
    height: 44px
  }

}

@media only screen and (max-width: 2560px) and (min-width:1199px) {
  .r-link {
    text-decoration: none;
  }
  .social {
    gap: 1.4rem;
    display: flex;
    gap: 1.3rem;
    margin-left: 1rem;
    margin-bottom: 0.5rem;
}
  .face-book {
    width: 44px;
    height: 44px
  }

  .twitter {
    width: 44px;
    height: 44px
  }

  .insta-gram {
    width: 44px;
    height: 44px
  }

  .you-tube {
    width: 44px;
    height: 44px
  }
}
</style>