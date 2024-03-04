import {
    Login,
  } from "./pages/BeforeLogin";


/* 
    For After auth route
    afterLogin: true,
    For route with not auth effect
    noAuthEffect: true,
   
*/

const page404 = () => {
    return <h1>404</h1>
}

export const routes = [
  {
    path: "/login",
    component: Login,
    exact: true,
  },
  {
    path: page404,
    noAuthEffect: true,
  },
];