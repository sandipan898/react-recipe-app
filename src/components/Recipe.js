import React from 'react'
import { Card, Backdrop, Fade, Modal, ModalBody, ModalHeader,  Typography, makeStyles, CardContent, Button } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
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
            margin: 100
            // padding: '100px'
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
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={open}>
                            <Card rounded className={useStyles.paper}>
                                <CardContent>
                                    <span>
                                        <img className={style.image} src={image} alt="" />
                                    </span>
                                    <span>
                                        <Typography variant="h5" id="transition-modal-title">Process to make <strong>{title}</strong></Typography>
                                        <p id="transition-modal-description"><p>{process}</p></p>
                                    </span>
                                </CardContent>
                                <Button onClick={handleClose} variant="outlined">Close</Button>
                            </Card>
                        </Fade>
                    </Modal>
                </CardContent>
            </Card>


        </div>
    )
}

export default Recipe;