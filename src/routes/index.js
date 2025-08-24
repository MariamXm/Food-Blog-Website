import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import FoodPage from '../pages/FoodPage.vue'
import DrinkPage from '../pages/DrinkPage.vue'
import RestaurantPage from '../pages/RestaurantPage.vue'
import WorkWithMePage from '../pages/WorkWithMePage.vue'
import DetailPage from '../pages/DetailPage.vue'
import ErrorPage from '../pages/ErrorPage.vue'



const routes=[
    {path: '/', component: HomePage, name: "HomePage"},
    {path: '/about', component: AboutPage, name: "AboutPage"},
    {path: '/category/food', component: FoodPage, name: "FoodPage"},
    {path: '/category/drink', component: DrinkPage, name: "DrinkPage"},
    {path: '/category/restaurant', component: RestaurantPage, name: "RestaurantPage"},
    {path: '/work-with-me', component: WorkWithMePage, name: "WorkWithMePage"},
    {path: '/category/detail/:id', component: DetailPage, name: "DetailPage"},
    {path: '/error/:id?', component: ErrorPage, name: "ErrorPage"},


]

export default routes;