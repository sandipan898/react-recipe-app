import React, { useEffect, useState, useRef } from 'react'
import { Card, Grid, Button, Typography, makeStyles, CardMedia, CardContent } from "@material-ui/core";
import '../category.css';

function Category({ key, name, image, clickAction }) {

    return (
        <Card className="">
            <span>
                <img src={image} alt=""></img>
            </span>
            <Typography>{name}</Typography>
            <Button onClick={() => clickAction(key)} variant="contained" color="primary" >Explore</Button>
            <span className="card">
            </span>
        </Card>
    )
}

export default Category
