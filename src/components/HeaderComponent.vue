<template>
  <div class="header">
    <div class="header-container">
      <div class="logo-image">
        <router-link to="/">
          <img src="../assets/pictures/logo-regular-dark.png" alt="logo" />
        </router-link>
      </div>
      <button class="menu-icon" @click="toggleMenu"> &#9776;</button>

      <div class="route-links">
        <ul>
            <li>
                <router-link to="/" exact-active-class="router-active-class" class="router-link">HOME</router-link>
            </li>
            <li>
                <router-link to="/category/food" exact-active-class="router-active-class" class="router-link">FOOD</router-link>
            </li>
            <li>
                <router-link to="/category/drink" exact-active-class="router-active-class" class="router-link">DRINK</router-link>
            </li>
            <li>
                <router-link to="/category/restaurant" exact-active-class="router-active-class" class="router-link">BEST RESTAURANTS</router-link>
            </li>
            <li>
                <router-link to="/about" exact-active-class="router-active-class" class="router-link">ABOUT</router-link>
            </li>
            <li>
                <router-link to="/work-with-me" exact-active-class="router-active-class" class="router-link">WORK WITH ME</router-link>
            </li>
        </ul>
      </div>
    </div>

    <div class="route-links" :class="{ 'menu-open': menuOpen }" v-if="menuOpen">
      <ul>
            <li>
                <router-link to="/" exact-active-class="router-active-class" class="router-link">HOME</router-link>
            </li>
            <li>
                <router-link to="/category/food" exact-active-class="router-active-class" class="router-link">FOOD</router-link>
            </li>
            <li>
                <router-link to="/category/drink" exact-active-class="router-active-class" class="router-link">DRINK</router-link>
            </li>
            <li>
                <router-link to="/category/restaurant" exact-active-class="router-active-class" class="router-link">BEST RESTAURANTS</router-link>
            </li>
            <li>
                <router-link to="/about" exact-active-class="router-active-class" class="router-link">ABOUT</router-link>
            </li>
            <li>
                <router-link to="/work-with-me" exact-active-class="router-active-class" class="router-link">WORK WITH ME</router-link>
            </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
.header{
    background-color: #f3f5f7;
}
.header-container{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 140.4px;
    margin-right: 140.4px;
    padding-left: 20px;
    padding-right: 20px;
    border-bottom: 1px solid white;
}
.logo-image{
    padding-right: 13px;
    margin-top: 13px;
    margin-bottom: 13px;
}
img{
    width: 267px;
    height: 70px;
}
.route-links{
    display: flex;
    justify-content: flex-end;
    min-height: 96px;
    width: 712.312px;
    line-height: 27px;
    font-size: 13px;
    color: #000000A6;
    font-weight: 400;
    font-style: normal;
    margin-left: 220px;
}

.router-link:hover{
    color: #b08967;
    text-decoration: none;
}

ul{
    margin: 0;
    padding: 0;
    margin-top: 13px;
}

li{
    list-style: none;
    display: inline-block;
    padding-left: 13px;
    padding-right: 13px;
    height: 70px;
    line-height: 70px;
    color: #000000A6;
}
.router-link{
    color: #000000A6;
}
.router-active-class{
    color: #b08967;
}
.menu-icon{
    display: none;
}

@media (max-width: 920px){
    .header-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 0;
        padding-left: 20px;
        padding-right: 20px;
        position: relative;
    }
    .menu-icon {
        display: flex;
        font-size: 20px;
        width: 20px;
        height: 20px;
        border: none;
        align-items: center;
        justify-content: center;
        padding: 9px;
        color: #b08967;
        background: none;
        margin-left: auto;
        margin-bottom: 0;
    }
    .route-links {
        display: none;
        width: 100%;
        margin-left: 0;
        min-height: 0;
        box-shadow: none;
        position: static;
    }
    .route-links.menu-open {
        display: flex;
        flex-direction: column;
        width: 100%;
        background: white;
        padding: 0;
        position: static;
        margin-top: 0;
    }
    .route-links.menu-open ul {
        flex-direction: column;
        margin: 0;
        padding: 0;
        margin-top: 8px;
        width: 100%;
    }

    .route-links.menu-open li {
        display: block;
        padding: 0 20px;
        height: 35.55px;
        line-height: normal;
        border-bottom: 1px solid #eee;
        color: black;
        font-size: 11.856px;
        text-align: left;
    }

    .logo-image{
        padding-right: 11.856px;
        margin-top: 11.856px;
        margin-bottom: 11.856px;
    }
    
    img{
      width: 175px;
      height: 45.875px;
    }
}

@media (min-width: 921px) and (max-width: 1290px){
    .header-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        white-space: nowrap;
        /* margin-left: 140.4px;
        margin-right: 140.4px; */
        padding-left: 20px;
        padding-right: 20px;
        width: 100%;
    }
    .route-links {
        display: flex;
        justify-content: flex-end;
        flex-wrap: nowrap;
        min-height: 96px;
        width: 712.312px;
        line-height: 27px;
        font-size: 13px;
        color: black;
        margin-left: 80px;
        position: static;
        padding: 0;
    }
}
</style>
