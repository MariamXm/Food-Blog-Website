<template>
    <div  class="error-section">
        <div class="error-class">
            <div>
                <p><b>Error:</b> Please fill the requird fields.</p>
                <router-link v-if="$route.params.id" :to="{ name: 'DetailPage', params: { id: $route.params.id }}"> Back</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
 .error-section{
    height: 100vh;
}

.error-class{
    margin-left: 385px;
    margin-right: 385px;
    margin-top: 50px;
    margin-bottom: 32px;
    padding: 16px 32px;
    border: 1px solid grey;
    background-color: whitesmoke;
} 

.error-class p{
    margin-top: 25px;
    margin-bottom: 20px;
    font-size: 13px;
    text-align: start;
}

#back{
    font-size: 14px;
    font-family:'Segoe UI';
    text-decoration: underline;
}
</style>