import React, { useEffect, useState, useRef } from 'react'
import { Card, Button, Typography, CardMedia, CardContent } from "@material-ui/core";
import '../category.css';

function Category({ key, name, image, clickAction }) {

    return (
        <Card className="">
            <CardContent align="center">
                <Typography variant="h5" className="">{name}</Typography>
                <img src={image} alt=""></img>
                <div className="">
                    <Button className="btn" onClick={() => clickAction(key)} variant="contained" color="secondary" >Explore Dishes</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default Category
