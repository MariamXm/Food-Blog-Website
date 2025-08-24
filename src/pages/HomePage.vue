<template>
    <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <div class="home-page">
        <div class="first-part">
            <div class="homepage-overlay"></div>
                <div class="main-container">
                    <div class="sub-container">
                        <span>FOOD, DRINK & RESTAURANTS REVIEWS</span>
                        <div class="first-heading">
                            <h1>Join our 100,000+ Subscribers List Today!</h1>
                        </div>
                        <div class="email-button">
                            <input type="email" placeholder="Email Address" v-model="email"/>
                            <div class="button">
                            <button type="button" class="subscribe-button">SUBSCRIBE NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
                <div class="second-part">
                    <div class="flex-container">
                        <span id="feature">WHERE WE’VE BEEN FEATURED</span>
                        <div class="slidebar">
                            <SlideBarComponent/>
                        </div>
                        <div class="blog-heading">
                           <span>LATEST BLOG POSTS</span>
                        </div>
                        <div class="category">
                            <div class="post">
                                <div class="post-image">
                                <img src="https://websitedemos.net/food-drinks-blog-04/wp-content/uploads/sites/896/2021/06/blog-07.jpg" alt="drink-img"/>
                                </div>
                                <div class="link-description">
                                    <router-link to="/category/drink" class="link">DRINK</router-link>
                                    <div class="description">
                                        <span class="title">20 Easy Vodka Drinks with 4 Ingredients or Less</span>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum deserunt repellat quod nobis 
                                            eligendi enim non in quidem molestias et, id ut fuga ex, voluptate nesciunt totam earum ipsum at.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="post">
                                <div class="post-image">
                                <img src="https://websitedemos.net/food-drinks-blog-04/wp-content/uploads/sites/896/2021/06/blog-01.jpg" alt="food-image"/>
                                </div>
                                <div class="link-description">
                                    <router-link to="/category/food" class="link">FOOD</router-link>
                                    <div class="description">
                                        <span class="title">Honey Lime Rainbow Food Salad</span>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nihil repellat modi at quas, 
                                            quisquam odio beatae libero minima qui perferendis molestiae deserunt vitae ducimus perspiciatis, ipsa sequi enim vero?</p>
                                    </div>
                                </div>
                            </div>
                            <div class="post"> 
                                <div class="post-image">
                                <img src="https://websitedemos.net/food-drinks-blog-04/wp-content/uploads/sites/896/2021/06/blog-02.jpg" alt="food-image"/>
                                </div>
                                <div class="link-description">
                                    <router-link to="/category/food" class="link">FOOD</router-link>
                                    <div class="description">
                                        <span class="title">Spaghetti Sauce With Ground Beef</span>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus vero amet ducimus corrupti doloremque libero quasi
                                            similique. Officia facere distinctio, itaque, deleniti est tempore earum rerum veniam eius, cum ea?</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="restuarant-part">
                            <span>BEST RESTAURANTS TO VISIT</span>
                        </div>
                        <div >
                    </div>

                            
                                <div class="restaurant-posts">
                                    <div class="restaurant-img">
                                        <router-link to="/category/restaurant">
                                            <img src="https://websitedemos.net/food-drinks-blog-04/wp-content/uploads/sites/896/2021/06/blog-004-1.jpg" class="img-fluid" alt="restaurant-image"/>
                                            <div class="restaurant-image-text">
                                                <h4>BEST RESTAURANTS</h4>
                                                <h2>John's Restaurant</h2>
                                                <p>JUNE 28, 2021</p>
                                            </div>
                                        </router-link>
                                    </div>
                                    <div class="restaurant-img">
                                        <router-link to="/category/restaurant">
                                            <img src="https://websitedemos.net/food-drinks-blog-04/wp-content/uploads/sites/896/2021/06/blog-005-1.jpg" class="img-fluid" alt="restaurant-image"/>
                                            <div class="restaurant-image-text">
                                                <h4>BEST RESTAURANTS</h4>
                                                <h2>Bottega Zenallo</h2>
                                                <p>JUNE 28, 2021</p>
                                            </div>
                                        </router-link>
                                    </div>
                                    <div class="restaurant-img">
                                        <router-link to="/category/restaurant">
                                            <img src="https://websitedemos.net/food-drinks-blog-04/wp-content/uploads/sites/896/2021/06/blog-006-1.jpg" class="img-fluid" alt="restaurant-image"/>
                                            <div class="restaurant-image-text">
                                                <h4>BEST RESTAURANTS</h4>
                                                <h2>Julliana's Place</h2>
                                                <p>JUNE 28, 2021</p>
                                            </div>
                                        </router-link>
                                    </div>
                                   
                                </div>
                            
                        
                        </div>
                        <div class="tag">
                            <div class="overlay-tag-container"></div>
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
                    
                </div>

            <div class="third-part-flex">
                <div class="review-videos">
                    <span>FEATURED REVIEW VIDEOS</span>
                    <div class="review-paragraph">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam enim voluptatibus animi nisi 
                            quae minima odio.</p>
                    </div>
                </div>

                <div class="videos-container">
                    <div class="video-part">
                        <iframe width="346" height="194.4" src="https://www.youtube.com/embed/XHOmBV4js_E?si=SWl5RG-tySXeMK0K" 
                                title="YouTube video player" frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                        </iframe>
                        <div class="summer-food-heading">
                            <h3>The Perfect Summer Food Salad For Your Energy</h3>
                        </div>
                        <div class="review-stars">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star-half-o checked"></span>
                        </div>
                    </div>
                    <div class="video-part">
                        <iframe width="346" height="194.4" src="https://www.youtube.com/embed/XHOmBV4js_E?si=SWl5RG-tySXeMK0K" 
                                title="YouTube video player" frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                        </iframe>
                        <div class="summer-food-heading">
                        <h3>Grilled Marinated Carrots, Strained Yoghurt and Curry Leaves</h3>
                        </div>
                        <div class="review-stars">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star-half-o checked"></span>
                        </div>
                    </div>
                    <div class="video-part">
                       <iframe width="346" height="194.4" src="https://www.youtube.com/embed/XHOmBV4js_E?si=SWl5RG-tySXeMK0K" 
                                title="YouTube video player" frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                        </iframe>
                        <div class="summer-food-heading">
                        <h3>Blood Orange Margarita Wth a Little Extra Something</h3>
                        </div>
                        <div class="review-stars">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star-half-o checked"></span>
                        </div>
                    </div>
                    <div class="video-part">
                        <iframe width="346" height="194.4" src="https://www.youtube.com/embed/XHOmBV4js_E?si=SWl5RG-tySXeMK0K" 
                                title="YouTube video player" frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                        </iframe>
                        <div class="summer-food-heading">
                        <h3>The Ultimate Steak & Fries Recipe You'll Need</h3>
                        </div>
                        <div class="review-stars">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star-half-o checked"></span>
                        </div>
                    </div>
                </div>
            </div>
        

            <div class="fourth-part">
                <div class="fourth-part-container">
                    <div class="about-me">
                        <div>
                            <span>ABOUT ME</span>
                        </div>
                        <div>
                            <h2>Hello, I'm Jordan Walsh, a Food and Drinks blogger from Florida. 
                                I have started blogging in 2011 lorem ipsum dolor sit amet.</h2>
                        </div>
                    </div>
                    <div class="img-para">
                        <div  id="img-container">
                        <div style="height:461px; width: 461px; " >
                            <img src="https://websitedemos.net/food-drinks-blog-04/wp-content/uploads/sites/896/2021/06/about-01.jpg" alt="porfile-image"/>
                        </div>
                        </div>
                        <div class="fourth-part-paragraph">
                            <div>
                                <h3>I visit different hotels, restaurants, street food places to taste their Food / Drinks.</h3>
                            </div>
                            <h4 >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Nostrum ex quaerat itaque eos similique hic eveniet eaque corrupti vitae 
                                voluptatem quam expedita enim sunt, sapiente exercitationem nam asperiores laboriosam aliquam. 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsa nemo omnis excepturi maxime, 
                                illum nisi totam eaque assumenda repellendus id, alias fugiat atque obcaecati? 
                            </p>
                            <a style="letter-spacing: 1px; font-family: Poppins, sans-serif; color: #000000A6 ">READ MORE</a>
                        </div>
                    </div>

                </div>
            </div>

            <div class="fifth-part" style="background-color: grey;">
                <div class="backgroud-overlay"></div>
                <div class="fifth-container">
                    <div class="fifth-part-items">
                        <span>ARE YOU A RESTAURANT OWNER?</span>
                        <h2>Contact Jordan Walsh for a meaningful review for your restaurant.</h2>
                        <div style="text-align: center;">
                            <router-link to="/" >
                            <button type="button" class="get-in-touch-button">
                                GET IN TOUCH </button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </div>
</template>

<script>
import SlideBarComponent from '../components/SlideBarComponent.vue'
export default{
    components: {
       SlideBarComponent,
    },
    data() {
        return{
          email: '',
        }
        
    },
}
</script>

<style scoped>
@import '../styles/HomePageStyle.css'
</style>

