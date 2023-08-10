import React from 'react'
import { Data } from '../helpers/Data'
import MenuItem  from '../components/MenuItem';
import '../styles/Menu.css'

export const Menu = () => {
  return (
    <div className='menu'>
        <h1 className='menu-title'>Burgerlerimiz</h1>
        <div className='menu-list'>
            {
                Data.map((menuItem, index) => {
                    return (
                        <MenuItem
                            key={index}
                            image = {menuItem.image}
                            name = {menuItem.name}
                            content={menuItem.content}
                            price = {menuItem.price}/>
                    );
                })
            }
        </div>
    </div>
  )
}
