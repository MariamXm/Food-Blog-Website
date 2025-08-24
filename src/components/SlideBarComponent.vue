<template>
    <carousel :per-page="1" :items="5" :mouse-drag="true" :margin="10" :loop="true" :touchDrag="true" :mouseDrag="true">
    <div>
        <img src="https://websitedemos.net/food-drinks-blog-04/wp-content/uploads/sites/896/2021/06/featured-logo-04.png" alt=""/>
    </div>
    <div>
        <img src="https://websitedemos.net/food-drinks-blog-04/wp-content/uploads/sites/896/2021/06/featured-logo-05.png" alt=""/>
    </div>
    <div>
        <img src="https://websitedemos.net/food-drinks-blog-04/wp-content/uploads/sites/896/2021/06/featured-logo-01.png" alt=""/>
    </div>
    <div>
        <img src="https://websitedemos.net/food-drinks-blog-04/wp-content/uploads/sites/896/2021/06/featured-logo-02.png" alt=""/>
    </div>
    <div>
        <img src="https://websitedemos.net/food-drinks-blog-04/wp-content/uploads/sites/896/2021/06/featured-logo-03.png" alt=""/>
    </div>
  </carousel>
</template>
<script>
import { Carousel } from 'vue-carousel';
 
export default {
  components: {
    Carousel,
  }
  
};
</script>
