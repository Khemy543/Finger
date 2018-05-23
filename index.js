import React from 'react';

import ReactDOM from 'react-dom';

import './index.css';

import App from './App';

import {Router,Route,hashHistor} from 'react-router';

import {Register}  from '../src/pages/Register';

import { Login }  from '../src/pages/login';

import {Homepage} from '../src/pages/homepage';


// import {IndexRouter,browserHistor} from 'react-router';

import { Routers } from '../src/pages/routes';



/*const router =() => {
<Router history={hashHistory}>
    <Route path="/" component={Register}>   
        <Route path="/view/:postId" component={Login}></Route>
    </Route>
</Router>
};
*/
ReactDOM.render(<Routers />, 
    document.getElementById('root'));


//ReactDOM.render(<Routers />, document.getElementById('root'));


/*import React from 'react';
import ReactDOM from 'react-dom';
import router from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Register}  from '../src/pages/Register';
import { Login }  from '../src/pages/login';
import {Homepage} from '../src/pages/Homepage';

import {Router,Route,IndexRouter,browserHistory} from 'react-router';

//const router =(
//<Router history={hashHistory}>
//<Route path="/" component={Register}>
//<Route path="/view/:postId" component={Login}></Route>
//</Route>
//</Router>

//)

ReactDOM.render(<app />, document.getElementById('root'));

registerServiceWorker();*/
