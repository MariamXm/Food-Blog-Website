import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        contactFormData: JSON.parse(localStorage.getItem('contactFormData')) || [],
        commentFormData: JSON.parse(localStorage.getItem('commentFormData')) || [],
        posts:[
            {id: 0, 
             image: "https://websitedemos.net/food-drinks-blog-04/wp-content/uploads/sites/896/2021/06/blog-02.jpg",
             title: "Spaghetti Sauce With Ground Beef", 
             description: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
             content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis.", 
             category: "Food",
             isFeature: true},
            {id: 1, 
             image: "https://websitedemos.net/food-drinks-blog-04/wp-content/uploads/sites/896/2021/06/blog-03.jpg",
             title: "Garlic-Butter Steak", 
             description: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", 
             content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odio reiciendis voluptates accusantium, quibusdam sit dignissimos, voluptatum vero magni, illum dolor reprehenderit ipsum. Mollitia molestiae, saepe cupiditate error obcaecati laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odio reiciendis voluptates accusantium, quibusdam sit dignissimos, voluptatum vero magni, illum dolor reprehenderit ipsum. Mollitia molestiae, saepe cupiditate error obcaecati laboriosam.", 
             category: "Food",
             isFeature: true},
            {id: 2, 
             image: "https://websitedemos.net/food-drinks-blog-04/wp-content/uploads/sites/896/2021/06/blog-01.jpg",
             title: "Honey Lime Rainbow Fruit Salad", 
             description: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", 
             content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odio reiciendis voluptates accusantium, quibusdam sit dignissimos, voluptatum vero magni, illum dolor reprehenderit ipsum. Mollitia molestiae, saepe cupiditate error obcaecati laboriosam.",
             category: "Food", 
             isFeature: true},
            {id: 3, 
             image: "https://websitedemos.net/food-drinks-blog-04/wp-content/uploads/sites/896/2021/06/blog-07.jpg",
             title: "10 Festive Pride Cocktails To Party With", 
             description: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", 
             content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odio reiciendis voluptates accusantium, quibusdam sit dignissimos, voluptatum vero magni, illum dolor reprehenderit ipsum. Mollitia molestiae, saepe cupiditate error obcaecati laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odio reiciendis voluptates accusantium, quibusdam sit dignissimos, voluptatum vero magni, illum dolor reprehenderit ipsum. Mollitia molestiae, saepe cupiditate error obcaecati laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odio reiciendis voluptates accusantium, quibusdam sit dignissimos, voluptatum vero magni, illum dolor reprehenderit ipsum. Mollitia molestiae, saepe cupiditate error obcaecati laboriosam.", 
             category: "Drink",
             isFeature: true},
            {id: 4, 
             image: "https://websitedemos.net/food-drinks-blog-04/wp-content/uploads/sites/896/2021/06/blog-08.jpg",
             title: "20 Easy Vodka Drinks With 4 Ingredients Or Less", 
             description: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. ", 
             content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odio reiciendis voluptates accusantium, quibusdam sit dignissimos, voluptatum vero magni, illum dolor reprehenderit ipsum. Mollitia molestiae, saepe cupiditate error obcaecati laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odio reiciendis voluptates accusantium, quibusdam sit dignissimos, voluptatum vero magni, illum dolor reprehenderit ipsum. Mollitia molestiae, saepe cupiditate error obcaecati laboriosam.", 
             category: "Drink",
             isFeature: true},
            {id: 5, 
             image: "https://websitedemos.net/food-drinks-blog-04/wp-content/uploads/sites/896/2021/06/blog-09.jpg",
             title: "25 Sophisticated Drinks To Get You Feeling Fancy", 
             description: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", 
             content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odio reiciendis voluptates accusantium, quibusdam sit dignissimos, voluptatum vero magni, illum dolor reprehenderit ipsum. Mollitia molestiae, saepe cupiditate error obcaecati laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odio reiciendis voluptates accusantium, quibusdam sit dignissimos, voluptatum vero magni, illum dolor reprehenderit ipsum. Mollitia molestiae, saepe cupiditate error obcaecati laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odio reiciendis voluptates accusantium, quibusdam sit dignissimos, voluptatum vero magni, illum dolor reprehenderit ipsum. Mollitia molestiae, saepe cupiditate error obcaecati laboriosam.", 
             category: "Drink",
             isFeature: true},
            {id: 6, 
             image: "https://websitedemos.net/food-drinks-blog-04/wp-content/uploads/sites/896/2021/06/blog-004-1.jpg",
             title: "John's Restaurant", 
             description: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", 
             content: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur elit, Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur elit, Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur elit, ", 
             category: "Restaurant",
             isFeature: true},
            {id: 7, 
             image: "https://websitedemos.net/food-drinks-blog-04/wp-content/uploads/sites/896/2021/06/blog-005-1.jpg",
             title: "Bottega Zenallo", 
             description: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", 
             content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odio reiciendis voluptates accusantium, quibusdam sit dignissimos, voluptatum vero magni, illum dolor reprehenderit ipsum. Mollitia molestiae, saepe cupiditate error obcaecati laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odio reiciendis voluptates accusantium, quibusdam sit dignissimos, voluptatum vero magni, illum dolor reprehenderit ipsum. Mollitia molestiae, saepe cupiditate error obcaecati laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odio reiciendis voluptates accusantium, quibusdam sit dignissimos, voluptatum vero magni, illum dolor reprehenderit ipsum. Mollitia molestiae, saepe cupiditate error obcaecati laboriosam.", 
             category: "Restaurant",
             isFeature: true},
            {id: 8, 
             image: "https://websitedemos.net/food-drinks-blog-04/wp-content/uploads/sites/896/2021/06/blog-006-1.jpg",
             title: "Julliano's Place", 
             description: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", 
             content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odio reiciendis voluptates accusantium, quibusdam sit dignissimos, voluptatum vero magni, illum dolor reprehenderit ipsum. Mollitia molestiae, saepe cupiditate error obcaecati laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odio reiciendis voluptates accusantium, quibusdam sit dignissimos, voluptatum vero magni, illum dolor reprehenderit ipsum. Mollitia molestiae, saepe cupiditate error obcaecati laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odio reiciendis voluptates accusantium, quibusdam sit dignissimos, voluptatum vero magni, illum dolor reprehenderit ipsum. Mollitia molestiae, saepe cupiditate error obcaecati laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odio reiciendis voluptates accusantium, quibusdam sit dignissimos, voluptatum vero magni, illum dolor reprehenderit ipsum. Mollitia molestiae, saepe cupiditate error obcaecati laboriosam.", 
             category: "Restaurant",
             isFeature: true},
        ],
        currentPost: {},
    },

    getters: {
        contactFormData(state) {
            return state.contactFormData;
        },
        allPosts(state){
            return state.posts;
        },
        allFoodPosts(state){
            return state.posts.filter((post)=> post.category==="Food");
        },
        allDrinkPosts(state){
            return state.posts.filter((post)=> post.category==="Drink");
        },
        allRestaurantPosts(state){
            return state.posts.filter((post)=>post.category==="Restaurant");
        },
        commentFormData(state) {
            return state.commentFormData;
        },
        currentPost(state) {
            return state.currentPost
        }
    },
    mutations: {
        ADD_SUBMISSION(state, formData) {
            state.contactFormData.push(formData);
            localStorage.setItem('contactFormData', JSON.stringify(state.contactFormData));
        },
        ADD_COMMENT(state, commentData) {
            state.commentFormData.push(commentData);
            localStorage.setItem('commentFormData', JSON.stringify(state.commentFormData));
        },
        SET_CURRENT_POST (state, payload) {
            state.currentPost = payload
        }
    },
    actions: {
        async submitForm({ commit }, formData) {
            console.log("Submit Data: ", formData)
            commit('ADD_SUBMISSION', formData);
        },
        async postComment({commit}, commentData){
            console.log("Submit comment Data: ", commentData)
            commit('ADD_COMMENT', commentData);
        }
    }
})