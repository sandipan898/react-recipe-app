import React from 'react'
import style from '../recipe.module.css'

function Recipe({key, title, image, clickAction}) {
    return (
        <div onClick={()=> clickAction(key)} className={style.recipe}>
            <img className= {style.image} src={image} alt="" />
            <h1>{title}</h1>
        </div> 
    )
}

export default Recipe;