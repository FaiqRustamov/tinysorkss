import {createWebHistory,createRouter} from 'vue-router'
import Home from './main-components/Home'
import About from './main-components/About'
import Contact from './main-components/Contact'
import Login from './main-components/Login'
import Products from './main-components/Products'
import Register from './main-components/Register'
import Stores from './main-components/Stores'
import StoresPage from './main-components/StoresPage'
import StoresRegister from './main-components/StoresRegister'
import ViewProduct from './main-components/ViewProduct'
import UserProfile from './main-components/UserProfile'
import PorductRegister from './main-components/ProductRegister'

const routes=[
    {name:"Home",
      path:"/",
      component:Home
     },
     {name:"About",
      path:"/about",
      component:About
     },
     {name:"Contact",
      path:"/contact",
      component:Contact
     },
     {name:"Login",
     path:"/login",
     component:Login
    },
    {name:"Products",
     path:"/products",
     component:Products
    },
    {name:"Register",
     path:"/register",
     component:Register
    },
    {name:"Stores",
    path:"/stores",
    component:Stores
   },
   {name:"StoresPage",
    path:"/stores-page",
    component:StoresPage
   },
   {name:"StoresRegister",
   path:"/stores-register",
   component:StoresRegister
  },
  {name:"ViewProduct",
   path:"/view-product",
   component:ViewProduct
  },
  {name:"UserProfile",
   path:"/user-profile",
   component:UserProfile
  },
  {
    name:"ProductRegister",
    path:"/product-register",
    component:PorductRegister
  }
    ]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;