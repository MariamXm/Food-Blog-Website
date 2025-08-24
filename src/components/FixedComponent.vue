<template>
  <div>
    <div class="floating-buttons" v-if="!isShown">
      <button class="buy-now" @click="onClick()">
        <i class="fas fa-shopping-cart"></i> Buy Now
      </button>
      <button class="customize" @click="customizeOption()">
        <i class="fas fa-palette"></i> Customize
      </button>
    </div>
    <div v-if="isShown" class="customize-slide-bar">
      <div class="slide-bar-header">
        <div>
          <p>Food & Drinks Blogger</p>
        </div>
        <div class="close-button-div">
          <button class="close-button" @click="onClose()"><i class="fa fa-close"></i></button>
        </div>
      </div>
      <div class="content-section">
        <p>Use the templates as-is or try different colors and fonts from the options below</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isShown: false,
    }
  },
  methods: {
    onClick() {
      window.open("https://wpastra.com/essential-toolkit-pricing/?utm_source=demos&utm_medium=slide-out","_blank");
    },
    customizeOption(){
      this.isShown= true;
    },
    onClose(){
      this.isShown = false;
    },
  }
}
</script>

<style scoped>
.floating-buttons {
  position: fixed;
  z-index: 1;
  top: 33%;
  right: 0; 
  display: flex;
  flex-direction: column; 
}
.fa-shopping-cart,
.fa-palette {
  margin-top: 3px;
  height: 18px;
  width: 18px;
  object-fit: cover;
}
.buy-now {
  background: #2563eb;
  color: white;
  border: none;
  padding: 16px;
  margin-bottom: 10px;
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  text-align: center;
  display: flex;
  gap: 12px;
}

/* Hover Animated Effect on Buy-Now Button */
.buy-now:hover{
  color: white;
  transition: transform 0.6s ease-in-out;
}
.buy-now:hover i{
  animation: moveIcon .4s ease-in-out 1;
}
@keyframes moveIcon{
0% {
    transform: translateY(0);
    opacity: 1;
}
45% {
    transform: translateY(-100%);
    opacity: 0;
}
  55% {
    transform: translateY(100%);
    opacity: 0;
}

100% {
    transform: translateY(0);
    opacity: 1;
}
}

.floating-buttons button{
  height: 50px;
  max-width: 135px;
}
.customize {
  background: white;
  border: 1px solid #ddd;
  padding: 16px;
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  text-align: center;
  margin-bottom: 10px;
  display: flex;
  gap: 12px;
}
.customize:hover{
  color: blue;
}

/* customize slide bar */
.customize-slide-bar {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  max-width: 328px;
  background-color: white;
}
/* Header section */
.slide-bar-header{
  padding: 20px 25px;
  display: flex;
  justify-content: space-between;
  border: 1px solid rgb(229, 231, 235);
}
.slide-bar-header p{
  font-size: 18px;
  font-family: "DM Sans";
  font-weight: 600;
  color: rgb(75, 85, 99);
  opacity: 1;
  line-height: 18px;
  margin-bottom: 0;
  margin-top: 6px;
  text-align: center;
}
.close-button-div{
  height: 26px;
  max-width: 26px;
  border: 1px solid rgb(209, 213, 219);
  padding: 6px;
  border-radius: 2px;
  text-align: center;
}
.close-button{
  height: 12px;
  width: 12px;
  border: none;
}
.fa-close{
  width: 12px;
  height: 12px;
}
/* Main content section */
.content-section{
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
}
.content-section p{
  line-height: 27px;
  font-size: 14px;
  margin-bottom: 24px;
  color: #1F2937;
}
</style>
