import React from 'react'
import { Card, Backdrop, Fade, Modal, Typography, makeStyles, CardContent, Button } from "@material-ui/core";
import style from '../recipe.module.css'

function Recipe({ key, title, image, clickAction, process }) {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const useStyles = makeStyles((theme) => ({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }));


    return (
        <div>

            <Card key={key} onClick={() => clickAction(key)} className={style.recipe}>
                <CardContent align="center">
                    <span align="center">
                        <img className={style.image} src={image} alt="" />
                        <Typography>{title}</Typography>
                        <Button onClick={handleOpen} variant="outline" color="primary">Show Process</Button>
                    </span>
                    <span>
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className={useStyles.modal}
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 500,
                            }}
                        >
                            <Fade in={open}>
                                <div className={useStyles.paper}>
                                    <h2 id="transition-modal-title">{title}</h2>
                                    <p id="transition-modal-description"><p>{process}</p></p>
                                </div>
                            </Fade>
                        </Modal>
                    </span>
                </CardContent>
            </Card>


        </div>
    )
}

export default Recipe;