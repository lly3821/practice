import React from 'react'
import data from './assets/data/nav'
import './nav.css'
import {NavLink} from 'react-router-dom'

export default class Nav extends React.Component {
        onMenuClicked  = (e) =>{
            if(e.target.nextSibling.style.display===''||e.target.nextSibling.style.display==='none')
                e.target.nextSibling.style.display='block'
            else if(e.target.nextSibling.style.display='block')
                e.target.nextSibling.style.display='none'
        }

        handleClick =(e)=>{
                e.target.parentNode.parentNode.style.display='block'

        }
        getMenu(menuObj) {
            let menu = [];
            if (menuObj instanceof Array) {
                let list = [];
                for (let item of menuObj) {
                    list.push(this.getMenu(item));
                }
                menu.push(
                    <ul key='menu'>
                        {list}
                    </ul>
                );
            } else {
                const pathname='/'+`${menuObj.key}`
                menu.push(
                    <li key={menuObj.key}>
                    {
                        menuObj.haschildren === true ?
                        <a onClick={this.onMenuClicked}>
                        {menuObj.name}
                        </a>:
                        <NavLink onClick={this.handleClick} to={pathname}>
                            {menuObj.name}
                        </NavLink>
                    }
                        {this.getMenu(menuObj.children)}
                    </li>
                );
            }
            return menu;
        }
        render() {
            let Contents = this.getMenu(data)
            return (
                <div className='nav'>
                    {Contents}
                </div>
            );
        }
    }