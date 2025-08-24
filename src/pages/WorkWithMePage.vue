<template>
    <div >
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>
        <div class="first-container">
            <div class="work-with-me-overlay"></div>
            <div class="contact-part">
                <div class="span">
                    <span>CONTACT</span>
                </div>
                <h1 >Work With Me</h1>
            </div>
        </div>
        <div class="second-container">
            <div class="text-container">
               <h2>I would love to hear a few words about your project.</h2>
               <p>Get in touch with me if you have any queries and I'll get back to you as soon as possible.</p>
               <div class="email">
                <a>contact@info.com</a>
               </div>
               <div>
                 <div class="social-icons">
                    <span><a href="https://youtube.com"><i class="fab fa-youtube"></i></a></span>
                    <span><a href="https://facebook.com" ><i class="fab fa-facebook"></i></a></span>
                    <span><a href="https://instagram.com"><i class="fab fa-instagram"></i></a></span>
                    <span><a href="https://twitter.com" ><i class="fab fa-twitter"></i></a></span>
                    
                </div>
               </div>
            </div>
              <div class="contact-form-container">
                    <form v-if="!isSubmitted" @submit.prevent="onSubmit" class="contact-form">
                    <!-- Name Field -->
                    <div class="form-group">
                        <label class="form-label">Name <span class="required">*</span></label>
                        <div class="name-fields">
                        <div class="form-input">
                            <input type="text" v-model="formData.firstName" :class="{ 'error-border': errors.firstName }"/>
                            <small class="sub-label">First</small>
                            <p class="error" v-if="errors.firstName">{{ errors.firstName }}</p>
                        </div>
                        
                        <div class="form-input">
                            <input type="text" v-model="formData.lastName" :class="{ 'error-border': errors.lastName }"/>
                            <small class="sub-label">Last</small>
                            <p class="error" v-if="errors.lastName">{{ errors.lastName }}</p>
                        </div>
                       
                        </div>
                    </div>

                    <!-- Email Field -->
                    <div class="form-group">
                        <label class="form-label" for="email">Email <span class="required">*</span></label>
                        <div class="form-input">
                        <input type="email" v-model="formData.email" :class="{ 'error-border': errors.email }"/>
                        </div>
                        <p class="error" v-if="errors.email">{{ errors.email }}</p>
                    </div>

                    <!-- Message Field -->
                    <div class="form-group">
                        <label class="form-label" for="message">Message <span class="required">*</span></label>
                        <div class="form-input">
                        <textarea id="message" v-model="formData.message" :class="{ 'error-border': errors.message }"></textarea>
                        </div>
                        <p class="error" v-if="errors.message">{{ errors.message }}</p>
                    </div>

                    <!-- Submit Button -->
                    <div class="form-group">
                        <button type="submit" class="submit-btn" >SUBMIT</button>
                    </div>

                    </form>

                    <div v-else class="success-message">
                        <p>Thanks for contacting us! We will be in touch with you shortly.</p>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import { mapActions} from 'vuex';

export default{
    data() {
        return{
            formData:{
                firstName: '',
                lastName: ' ',
                email: '',
                message: '',
            },
            errors:{},
            isSubmitted: false,
        }
    },
    methods:{
        ...mapActions(['submitForm']) ,       

        validateForm(){
            this.errors={}
           if(this.formData.firstName.trim()===''){
                this.errors.firstName = 'This field is required.'; 
           }
           if(this.formData.lastName.trim()===''){
                this.errors.lastName = 'This field is required.'; 
           }
           if(this.formData.email.trim()===''){
                this.errors.email = 'This field is required.'; 
           }
           if(this.formData.message.trim()===''){
                this.errors.message = 'This field is required.'; 
           }

           return Object.keys(this.errors).length;
        },
        resetForm(){
           this.formData.firstName='',
           this.formData.lastName='',
           this.formData.email='',
           this.formData.message=''
        },
        onSubmit() {
            if (this.validateForm()) return;
            this.formData.id = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
            // console.log("Before Action: ", this.formData);
            this.submitForm(JSON.parse(JSON.stringify(this.formData)))
            .then(() => {
                setTimeout(()=> {
                console.log('data saved to localstorage');
                this.resetForm();
                }, 1000);
                this.isSubmitted= true
            })
            .catch(err => console.error(err));
        }
    }
}
</script>

<style scoped>
@import '../styles/WorkWithMePageStyle.css'
</style>