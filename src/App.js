import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store";
import Home from "./pages/Home"
import Login from "./pages/Login"
import JavaScriptPages from "./pages/JavaScriptPages"
import HtmlPages from "./pages/HtmlPages"
import NodePages from "./pages/NodePages"
import CssStylePages from "./pages/CssStylePages"
import Registered from "./pages/registered"

function App() {
  return (
       <Provider store={store}>
           <BrowserRouter>
               <Switch>
                   <Route path='/home'  component={Home} />
                   <Route path='/js'  component={JavaScriptPages} />
                   <Route path='/html'  component={HtmlPages} />
                   <Route path='/node'  component={NodePages} />
                   <Route path='/css'  component={CssStylePages} />
                   <Route path='/login'  component={Login} />
                   <Route path='/registered'  component={Registered} />
                   <Redirect to="/login" from='/' />
               </Switch>
           </BrowserRouter>
       </Provider>
  );
}
export default App;
