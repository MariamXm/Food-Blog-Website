<template>
    <div>
       <div style="background-color: #f3f5f7">
            <div class="detail-post-container" v-if="post">
                <div class="detail-post" >
                    <div class="detail-post-image" v-if="post">
                        <img :src="post.image" alt="image"/>
                    </div>
                    <div class="detail-post-heading">
                        <h1>{{ post.title }}</h1>
                    </div>
                    <div class="leave-comment-line">
                        <router-link to="/category/detail" class="detail-comment-line">Leave a Comment / </router-link>
                        <router-link to="category/food" class="detail-comment-line">{{ post.category }} / </router-link>
                        <span  class="detail-comment-line">By Alex</span>
                    </div>
                    <div class="detail-page-paragraph">  
                        <p class="post-content">{{post.content}}</p>
                        <p class="post-description">{{ post.description }}</p>
                    </div>
                </div>

                <div class="post-links">
                    <div class="previous-post-div">
                        <button @click="previousPost(post.id)" class="previous-post-button"> Previous Post</button>
                    </div>
                    <div class="next-post-div">
                        <button @click="nextPost(post.id)" class="next-post-button">Next Post</button>
                    </div>  
                </div> 
              <!-- Posted Comments Displayed -->
                <div class="posted-comments" v-if="isPosted">
                    <h3>0 thoughts on "{{ post.title }}"</h3>
                    <div class="section">
                    <div v-if="comment">
                        <div style="padding: 13px 0;">
                           <div class="name-profile-flex-container">
                                <div class="image-container">
                                    <img src="data:image/jpeg;base64,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" alt="profile-image"/>
                                </div>
                                <div class="name-date">
                                    <p>{{ comment.commentName }}</p>
                                    
                                </div>
                           </div >
                           <p id="comment-text">{{ comment.commentText }}</p>
                           <p id="reply">Reply</p>
                           <p style="font-size: 11.375px; text-align: start;">Your comment is awaiting moderation.</p>
                        </div>
                    </div>
                    </div>
                </div>
                
                <div style="margin-bottom: 91px;">
                <div class="comment-section">
                    <h2>Leave a Comment</h2>

                    <form @submit.prevent >
                    <p>Your email will not be published. Required fields are marked *</p>
                    <textarea placeholder="Type here..." v-model="commentData.commentText"></textarea>
                    <div class="comment-details">
                        <span class="input-field"><input placeholder="Name*" v-model="commentData.commentName" type="text"/></span>
                        <span class="input-field"><input placeholder="Email*" v-model="commentData.commentEmail" type="email"/></span>
                        <span class="input-field"><input placeholder="Website*" v-model="commentData.commentWebsite" type="url"/></span>
                    </div>
                    <div class="checkbox-part">
                        <input type="checkbox" id="checkbox"/>
                        <label for="checkbox">Save my name, email, and website in this browser for the next time I comment.</label>
                    </div>
                    <div class="post-comment-button">
                        <button type="submit" @click="onPost()">POST COMMENT ></button>
                    </div>
                    </form>
                </div>
                </div>
            </div>    
       </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default{
    data(){
        return{
            isPosted: false,
            commentData:{
                commentName: '',
                commentEmail: '',
                commentWebsite: '',
                commentText: '',
            },
            errors: '',
        }
    },
    computed:{
        ...mapGetters(['allPosts', 'commentFormData', 'currentPost']),
        commentFormData(){
            return this.$store.getters.commentFormData;
        },
        post () {
            return this.currentPost;
        }
    },
    methods:{
        ...mapActions(['postComment']),

        validateForm(){
            this.errors = ''; 

            if (this.commentData.commentName.trim() === '' || this.commentData.commentEmail.trim() === '' || this.commentData.commentWebsite.trim() === ''|| this.commentData.commentText.trim() === '' ) {
                this.errors = 'Field is required.';
            }
            
            return Object.keys(this.errors).length;
        },
        resetSection() {
            this.commentData.commentName=''
            this.commentData.commentEmail=''
            this.commentData.commentWebsite=''
            this.commentData.commentText=''
        },
        onPost() {
            if (this.validateForm()) {
                const id= this.$route.params.id;
                this.$router.push({ name: 'ErrorPage', params: { id } })
                return;
            }
            else{
            this.commentData.id = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
            // console.log("Before Action: ", this.commentData);
            this.postComment(JSON.parse(JSON.stringify(this.commentData)))
            .then(() => {
                setTimeout(()=> {
                console.log('comment data saved to localstorage');
                this.resetSection();
                }, 1000);
                this.isPosted= true;
                // To display only the latest comment(object) added in array
                const stored = localStorage.getItem('commentFormData');
                if (stored) {
                    this.myArray = JSON.parse(stored);
                    if (this.myArray.length > 0) {
                        this.comment = this.myArray[this.myArray.length - 1];
                    } 

                } 
            })
            .catch(err => console.error(err));
        }
        },
        getPost(id) {
            let post = this.allPosts.find((post) => post.id == id)
            return post;
        },
        previousPost(id) {
            let previousPost = id - 1;
            let post = this.getPost(previousPost);

            if (post) {
                this.$store.commit('SET_CURRENT_POST', post)
            }

            this.$router.push({name: 'DetailPage', params:{id: previousPost}})
        },
        nextPost(id){
            let nextPost = id + 1;
            let post= this.getPost(nextPost);

            if(post) {
                this.$store.commit('SET_CURRENT_POST', post)
            }

            this.$router.push({name: 'DetailPage', params: {id: nextPost}})
        }
    },
    mounted(){
        let post = this.getPost(this.$route.params.id);
        this.$store.commit('SET_CURRENT_POST', post)
    },
}
</script>

<style scoped>
@import '../styles/DetailPageStyle.css'
</style>