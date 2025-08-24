<template>
    <div>
       <div class="about-page">
        <div class="about-me-container">
            <div class="about-page-overlay"></div>
          <div class="about-me-">
            <span>ABOUT ME</span>
            <h1>Hello, I'm Jordan Walsh, a Food and Drinks blogger from Florida. 
                I have started blogging in 2011 lorem ipsum dolor sit amet.</h1>
          </div>
        </div>
          <div class="about-me-paragraphs-flex-container">
            <div class="paragraph-left-container">
                <div> 
                    <h3>I visit different hotels, restaurants, street food places to taste their Food / Drinks.</h3>
                </div>
            </div>
            <div class="paragraph-right-container">
                <div style="margin-bottom: 20px;">
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.</span>
                </div>
                <p id="first-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                    Sed ut perspiciatis unde omnis iste.
                </p>
                <p id="second-paragraph">Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                    id est laborum.
                </p>
            </div>
          </div>
           <div class="achievement-section-inner-container">
                <div class="award-winner-section-heading">
                    <h2>"Association of Food Writers" Award Winner 2018 / 2019</h2>
                </div>
                <div class="award-winner-section-paragraph">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, assumenda quia accusamus laboriosam laudantium officia vero numquam earum iusto, officiis facilis cumque ratione ipsam quod?
                        hic vitae atque dolorum ullam illum dolor similique rem rerum laudantium aliquam ad fugiat! Placeat, aut natus!
                    </p>
                </div>
            </div>
           <div class="achievement-section">
                <div class="second-inner-container"></div>
           </div>
        
            <div class="tag--">
                <div class="tag-container">
                    <div class="sub-container-second">
                        <span>FOOD, DRINK & RESTAURANTS REVIEWS</span>
                        <div id="main-heading">
                            <h1>Join our 100,000+ Subscribers List Today!</h1>
                        </div>
                        <div class="email-button">
                            <input type="email" placeholder="Email Address"/>
                            <div class="second-button">
                                <button type="button" class="subscribe-second-button">SUBSCRIBE NOW</button>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            <div class="featured-container">
                <div id="feature">
                    <span>WHERE WE’VE BEEN FEATURED</span>
                </div>
                <div class="slidebar">
                    <SlideBarComponent/>
                </div>
            </div>
            <div class="fifth-part" >
                <div class="about-page-overlay"></div>
                <div class="fifth-container">
                    <div class="fifth-part-items">
                        <span>ARE YOU A RESTAURANT OWNER?</span>
                        <h2>Contact Jordan Walsh for a meaningful review for your restaurant.</h2>
                        <div style="text-align: center;">
                            <button type="button" class="get-in-touch-button">
                                GET IN TOUCH </button>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </div>
</template>

<script>
import SlideBarComponent from  '../components/SlideBarComponent.vue'
export default{
  components: {
    SlideBarComponent,
  }
}
</script>
<style scoped>
@import '../styles/AboutPageStyles.css'
</style>