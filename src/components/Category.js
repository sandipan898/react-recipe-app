import React, { useEffect, useState, useRef } from 'react'
import { Card, Button, Typography, CardMedia, Box, CardContent, makeStyles } from "@material-ui/core";
import '../category.css';

function Category({ key, name, image, clickAction }) {
    const useStyles = makeStyles({
        root: {
          minWidth: 275,
        },   
    })

    return (
        <Box>
        <Card className="">
            <CardContent className={useStyles.root} align="center">
                <Typography variant="h5" className="">{name}</Typography>
                <img className="img" src={image} alt=""></img>
                <div className="">
                    <Button className="btn" onClick={() => clickAction(key)} variant="contained" color="secondary" >Explore Dishes</Button>
                </div>
            </CardContent>
        </Card>
        </Box>
    )
}

export default Category
