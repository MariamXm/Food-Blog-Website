<template>
    <div>
        <div class="food-page">
            <div class="food-container">
                <div id="food-container-flex">
                    <div class="food-heading">
                        <h1>Food</h1>
                    </div>
                    <div class="food-post-container" v-for="post in allFoodPosts" :key="post.id">
                        <div class="food-post">
                            <div class="food-post-image">
                                 <img :src="post.image" alt="food-image"/>
                            </div>
                            <div>
                                <router-link :to="{ name: 'DetailPage', params: { id: post.id }}" class="read-more-link">
                                     <h2>{{ post.title }}</h2>
                                </router-link>
                            </div>
                            <div class="leave-comment-line-">
                                <router-link :to="{ name: 'DetailPage', params: { id: post.id }}" class="route-link-comment-line">Leave a Comment / </router-link>
                                <router-link to="/category/food" class="route-link-comment-line">Food</router-link>
                            </div>
                            <div class="food-description">
                                <p>{{ post.description }}</p>
                            </div>
                            <div class="food-detail-page-link">
                                <router-link :to="{ name: 'DetailPage', params: { id: post.id }}" class="read-more-link">
                                    <p>Read More >></p>
                                </router-link>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default{
    computed: {
        ...mapGetters,
        allFoodPosts(){
           return this.$store.getters.allFoodPosts;
        }
    },
}
</script>
<style scoped>
@import '../styles/Category.css'
</style>