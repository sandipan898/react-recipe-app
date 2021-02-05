import React from 'react'
import { Card, Container, Typography, CardMedia, CardContent } from "@material-ui/core";
import style from '../recipe.module.css'

function Recipe({ key, title, image, clickAction, process }) {


    return (
        <Card onClick={() => clickAction(key)} className={style.recipe}>
            <span>
                <img className={style.image} src={image} alt="" />
                <Typography>{title}</Typography>
                {{
                    if(process) {
                        return (
                            <p>{process}</p>
                        )
                    }
                }}
            </span>
        </Card>

    )
}

export default Recipe;