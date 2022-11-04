
import './App.css';
import Home from './views/pages/Home';
import About from './views/pages/About';
import Header from './views/layOut/PublicLayout/Header';
import Login from './views/pages/LogIn';
import Signup from './views/pages/Signup';
import { Switch, Route, Link,  BrowserRouter as Router,
} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./routes/routes"
import AuthMiddleware from './routes';
import { useEffect, useState } from 'react';
import AdminLayout from './views/layOut/AdminLayout';
import PublicLayout from './views/layOut/PublicLayout';
import { LOCAL_STORAGE_AUTH_KEY, LOCAL_STORAGE_KEY } from './const/const';
import Page404 from './views/pages/Page404';
import { useDispatch, useSelector } from 'react-redux';
import { getUserFromLocalStorage } from './Redux/Auth/authSlice';

function App() {
  const [userInfo, setUserInfo]=useState({role:"child"})
const {user}= useSelector(state=> state.auth)
const dispatch = useDispatch()

console.log(user)
// name, email, role

useEffect(()=>{  
  const user= JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY)) 
  dispatch(getUserFromLocalStorage(user))


}, [])

  return (
    <>

<Router>

      
     <Switch>
        {
        privateRoutes.map((route,index)=>{
          return <AuthMiddleware  
          layout={AdminLayout}
          key={index} 
          role={route.role}  
          path={route.path} 
          isProtected={true}
           component={route.component}    />
        })
        }
        {
        publicRoutes.map((route,index)=>{

          return <AuthMiddleware  

          layout={PublicLayout}
          isProtected={false}
          key={index} 
          role={route.role}  
          path={route.path} 
           component={route.component}    />
        })
        }
      
        <Route path="/*" component={Page404} /> 
           
          
            </Switch>
   
    </Router>  
    </>
  );
}

export default App;





