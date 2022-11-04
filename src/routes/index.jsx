import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const AuthMiddleware = ({ layout:Layout, component: Page, isProtected, role, ...rest }) => {
const {user}= useSelector(state=> state.auth)

console.log(user,"")

  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          if (!user &&  isProtected) {
            return (
              <Redirect
                to={{ pathname: "/login", state: { from: props.location } }}
              />
            );
          }else if( user && !isProtected){  

            return  <Redirect
            to={{ pathname:`/${user?.role}`, state: { from: props.location } }}
          />
          }

          return (
            <Layout>
              <Page {...props} />
            </Layout>
          );
        }}
      />
      
    </>
  );
};

export default AuthMiddleware;

