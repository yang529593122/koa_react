import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import  Home from "./pages/Home"
import  Login from "./pages/Login"

function App() {
  return (
   <>
       <BrowserRouter>
           <Switch>
               <Route path='/home'  component={Home}></Route>
               <Route path='/login'  component={Login}></Route>
               <Redirect to="/home" from='/' />
           </Switch>
       </BrowserRouter>
   </>
  );
}

export default App;
