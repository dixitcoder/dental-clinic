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

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/dashboard-default",
  },
  {
    path:'/reportEdit/:edit/:index',
    name:'ReportEdit',
    component: reportEdit
  },
  {
    path:'/:array',
    name:'store',
    component:Array
  },
  {
    path:'/form',
    name:'register-form',
    component:RegistrationForm
  },
  {
    path: "/dashboard-default",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,

  },  
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/Apportionment",
    name: "Appotioment",
    component: Apportionment,
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
  },
  {
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
  },
  {
    path: "/rtl-page",
    name: "RTL",
    component: RTL,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
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
  },
  {
    path:"/formEdit/:id",
    name:'pasentUpdate',
    component:formEdit
  }
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
