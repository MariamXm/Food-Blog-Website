<template>
    <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>
        <div class="main-footer-container">
            <div style=" padding-top: 100px; padding-bottom: 20px; text-align: center;">
                <img src="../assets/pictures/logo-regular-light.png" alt="logo"/>
            </div>
            <div class="footer-menu">
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
            <div class="social-icon-links">
                <div style="margin: 0px 160.4px; display: grid; place-items: center; height: 80px">
                <div class="social-icons">
                    <a href="https://youtube.com"><i class="fab fa-youtube"></i></a>
                    <a href="https://facebook.com" ><i class="fab fa-facebook"></i></a>
                    <a href="https://instagram.com"><i class="fab fa-instagram"></i></a>
                    <a href="https://twitter.com" ><i class="fab fa-twitter"></i></a>
                    
                </div>
                <div style="display: block; text-align: center; color: white; font-size: 13px; font-family: Poppins, sans-serif; line-height: 24.1429px; max-width: 100%;">
                    <p style="margin: 0;">Copyright © 2025 Food & Drinks Blogger | Powered by Food & Drinks Blogger</p>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style scoped>
.main-footer-container{
    background-color: black;

}
.footer-menu{
    padding: 75px 0;
}
ul{
    text-decoration: none;
    display: flex;
    align-content: center;
    justify-content: center;
    margin: 0;
   
}
li{
    list-style: none;
    padding: 20px;
    font-size: 13px;
    font-family: Poppins, sans-serif;
    height: 64px;
    display: flex;
    align-items: center;
}
.router-link{
    color: white;
    text-align: center;
    text-decoration: none;
}
.router-link:hover{
     color: #b08967;
}
.social-icon-links{
    border-top: 1px solid white;
    padding-top: 20px;
    padding-bottom: 20px;
}
.social-icons{
    margin-bottom: 8px;
}
.router-active-class{
    color: #b08967;
}
.social-icons i{
    font-size: 16.5px;     
    width:  18px;         
    height: 18px;       
    color: white; 
}

.social-icons a i{ 
    max-height: auto;
    width: 100%;
    margin-left: 6px;
    margin-right: 6px;  
    text-decoration: none;
}

@media screen and (max-width: 900px){
    .main-footer-container p{
        font-size: 11px;
    }
    .footer-menu{
        padding: 50px 0;
    }
}

</style>
