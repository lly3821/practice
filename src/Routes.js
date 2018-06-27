import React,{Component} from 'react'
import {Route,Switch} from 'react-router'
import {hot} from 'react-hot-loader'
import Loadable from 'react-loadable'

const Loading = () =>{
    return(<p>Loading</p>)
}
const Routes = () => {
    const Table = Loadable({
        loader: () => import('./pages/Table'),
        loading:Loading
    })
    const Home = Loadable({
        loader:()=> import('./pages/Home'),
        loading:Loading
    })
    const Nav = Loadable({
        loader:()=> import('./Nav'),
        loading:Loading
    })
    return(
        //header
        //nav
        <div>
            <Nav/>
            <Switch>
                <Route path ='/' exact component={Home}/>
                <Route path='/table' component={Table}/>
                <Route path ='/1' component ={Table} />
            </Switch>
        </div>
        
        //footer
    )
}
export default hot(module)(Routes)

