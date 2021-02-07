import React, {useEffect} from 'react'
import { Card, Backdrop, Fade, Modal, Grid, Typography, makeStyles, CardContent, Button } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import style from '../recipe.module.css'

function Recipe({ key, title, image, clickAction, process, youtubeLink, tags, ingredients }) {

    // useEffect(() => {clickAction(key)}, [])
        
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const useStyles = makeStyles((theme) => ({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 40,
            marginLeft: '10%',
            marginRight: '10%',
            maxHeight: "calc(100vh - 100px)",
            overflowY: "auto"
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #fff',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }));
    const classes = useStyles();


    return (
        <div>
            <Card key={key} onClick={() => clickAction(key)} className={style.recipe}>
                <CardContent align="center">
                    <span align="center">
                        <img className={style.image} src={image} alt="" />
                        <Typography variant="h6">{title}</Typography>
                        <Button onClick={() => {
                            // clickAction(key);
                            handleOpen() 
                            }} variant="outlined" color="primary">Show Recipe</Button>
                    </span>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={open}
                        className={classes.modal}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={open}>
                            <Card rounded className={classes.paper}>
                                <Button onClick={handleClose} variant="outlined"> <CloseIcon /> </Button>
                                <CardContent>
                                    <Grid container spacing={1}>
                                        <Grid item sm>
                                            <span>
                                                <img className={style.image} src={image} alt="" />
                                            </span>
                                        </Grid>
                                        <Grid item sm>
                                            <ul>
                                            {ingredients? ingredients.map((ingredient) => (<li>{ingredient}</li>)) : ''}
                                            </ul>
                                        </Grid>
                                    </Grid>
                                    <hr />
                                    <Typography>Video Tutorial: <a target="_blank" rel="noreferrer" href={youtubeLink}>{youtubeLink}</a> </Typography>
                                    {tags ? <Typography><strong>Tags: </strong>{tags}</Typography> : <div></div>}
                                    <span>
                                        <Typography variant="h5" id="transition-modal-title"><strong>Process to make {title}</strong></Typography>
                                        <p id="transition-modal-description"><p>{process}</p></p>
                                    </span>
                                </CardContent>
                            </Card>
                        </Fade>
                    </Modal>
                </CardContent>
            </Card>


        </div>
    )
}

export default Recipe;