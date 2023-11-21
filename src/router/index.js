import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Tables from "../views/Tables.vue";
import Billing from "../views/Billing.vue";
import VirtualReality from "../views/VirtualReality.vue";
import RTL from "../views/Rtl.vue";
import Profile from "../views/Profile.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";
import Apportionment from '../views/components/Apportionment.vue'
import RegistrationForm from '../views/components/RegistrationForm.vue'
import formEdit from '@/views/components/formEdit'
import Array from "../views/components/ArryForm.vue";
import reportEdit from '@/views/components/reportEdit'
import Home from "../pages/Home.vue"
// import {auth , onAuthStateChanged} from "firebase/auth"
import authService from "../authService";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",  
      name: "/",
      redirect: "/Home",
      beforeEnter: authenticateRoute,
    },
    {
      path:'/reportEdit/:edit/:index',
      name:'ReportEdit',
      component: reportEdit,
      beforeEnter: authenticateRoute,

    },
      {
      path:'/home',
      name:'Home',
      component: Home
    },
    {
      path:'/:array',
      name:'store',
      component:Array,
      beforeEnter: authenticateRoute,

    },
    {
      path:'/form',
      name:'register-form',
      component:RegistrationForm,
      beforeEnter: authenticateRoute,
    },
    {
      path: "/dashboard-default",
      name: "Dashboard",
      component: Dashboard,
      beforeEnter: authenticateRoute,
    },
    {
      path: "/tables",
      name: "Tables",
      component: Tables,
      beforeEnter: authenticateRoute,

  
    },  
    {
      path: "/tables",
      name: "Tables",
      component: Tables,
      beforeEnter: authenticateRoute,

    },
    {
      path: "/Apportionment",
      name: "Appotioment",
      component: Apportionment,
      beforeEnter: authenticateRoute,

    },
    {
      path: "/billing",
      name: "Billing",
      component: Billing,
      beforeEnter: authenticateRoute,

    },
    {
      path: "/virtual-reality",
      name: "Virtual Reality",
      component: VirtualReality,
      beforeEnter: authenticateRoute,

    },
    {
      path: "/rtl-page",
      name: "RTL",
      component: RTL,
      beforeEnter: authenticateRoute,
      
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
      beforeEnter: authenticateRoute,

    },
    {
      path: "/signin",
      name: "Signin",
      component: Signin,
      
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup,
      beforeEnter: authenticateRoute,

    },
    {
      path:"/formEdit/:id",
      name:'pasentUpdate',
      component:formEdit,
      beforeEnter: authenticateRoute,

    }
    
  ],
});

function authenticateRoute(to, from, next) {
  authService.onAuthStateChanged((user) => {
    if (user) {
      // User is authenticated, allow access to the route
      next();
    } else {
      // User is not authenticated, redirect to login or another page
      next("/signin"); // Adjust the path as needed
    }
  });
}

 export default router