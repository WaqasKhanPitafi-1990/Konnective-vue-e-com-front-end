<template>
    <div class="overlay" v-if="isLoading">
      <div class="loader-container">
        <div class="loader-bar"></div>
        <div class="loader-bar"></div>
        <div class="loader-bar"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isLoading: Boolean
    }
  };
  </script>
  
  <style scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
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
    background-color: #3498db; /* Blue color for the bars */
    animation: wave 1.5s ease-in-out infinite;
  }
  
  @keyframes wave {
    0%, 100% {
      height: 0;
    }
    50% {
      height: 50px;
    }
  }
  </style>
  