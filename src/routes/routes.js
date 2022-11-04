import About from "../views/pages/About"
import Admin from "../views/pages/admin/Admin";
import LogIn from "../views/pages/LogIn"
import Signup from "../views/pages/Signup"
import Forgetpassword from "../views/pages/Forgetpassword/Forgetpassword";
import Parentpage from "../views/pages/parent/Parentpage";
import Childpage from "../views/pages/child/Childpage";

export  const privateRoutes=[

    {
         path:"/admin",
         name:"home",
         component:Admin,
         role:["admin"]
        
    },
    {
         path:"/moderator",
         name:"moderator",
         component:About,
         role:[ "moderator"]
        
    },
    {

         path:"/parent",
         name:"parent",
         component:Parentpage,
         role:[ "parent"]
        
    },
    {
         path:"/child",
         name:"child",
         component:Childpage,
         role:[ "child"]
        
    },

]

export const  publicRoutes=[

        {

            path:"/login",
            name:"login",
            component:LogIn,
            role:[ "login"]

    },
    {

        path:"/signup",
        name:"signup",
        component:Signup,
        role:[ "*"]

},
{

    path:"/Forgetpassword",
    name:"signup",
    component:Forgetpassword,
    role:[ "*"]

},
]