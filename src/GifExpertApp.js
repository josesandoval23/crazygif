import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import './GifExpertApp.css';
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faFacebook} from '@fortawesome/free-brands-svg-icons';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Random']);
  

  return (
    <div>
      <h2 className="titulo animate__animated animate__bounce">Crazy-Gif</h2>
      <a href="https://www.instagram.com/julian_mstar/" Target="_blank" className= "icono">
        <FontAwesomeIcon icon={faInstagram}/>
      </a>
      <a href="https://www.facebook.com/juliansc23/" Target="_blank" className="icono2">
        <FontAwesomeIcon icon={faFacebook}/>
        </a>
      <AddCategory setCategories={setCategories} misCategorias={categories} />
      <hr />
      <ol>
        {
          categories.map((category, index) => {
            return <GifGrid key={category} category={category} />
          })
        }
      </ol>
      <h1 className="p1">
      <div className="p2">Desarrollado por Julian Sandoval</div>
      </h1>
    </div>
    
  )
}


