import React from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import {Register}  from '../pages/Register';
import { Login }  from '../pages/login';
import {ForgetPassword} from '../pages/ForgetPassword';
import {Post} from '../components/Postcard';
import {homepage} from '../pages/homepage';
import {trends} from '../pages/trending';
import {profile} from '../pages/profile';
import {topics} from '../pages/topicpage';
import {Addpost} from '../components/Modalpost';
import {CommentBox} from '../components/Comment';
import {Box} from '../components/CommentBox';
import {postpage} from '../pages/Postpage';
import {Postbutton} from '../components/addpostbutton';
import {Topicbutton} from '../components/topicbutton';
import {Fullpostcard} from '../components/fullpostcard';
import {Slidepage} from '../pages/slidepage';
import {SearchButton} from '../components/Searchbutton';
import {BrowseHistory,router,indexedRoute} from 'react-router';




export const Routers =() => 
    <BrowserRouter>
        <Switch>
        <Route exact path='/' component={homepage} />
        <Route exact path='/reg/:user' component={homepage} />
        <Route exact path='/ForgetPassword' component={ForgetPassword} />
         <Route exact path='/Post' component={Post} />
         <Route exact path='/trends' component={trends} />
         <Route  path='/topics/:value' component={topics} />
         <Route exact path='/Addpost' component={Addpost} />
         <Route exact path='/CommentBox' component={CommentBox} />
         <Route exact path='/Box' component={Box} />
         <Route exact path='/postpage' component={postpage} />
         <Route exact path='/postpage/:valued' component={postpage} />
         <Route exact path='/Postbutton' component={Postbutton} />
         <Route exact path='/Topicbutton' component={Topicbutton} />
         <Route exact path='/Fullpostcard' component={Fullpostcard} />
         <Route exact path='/Slidepage' component={Slidepage} />
         <Route exact path='/SearchButton' component={SearchButton} />
        </Switch>
    </BrowserRouter>