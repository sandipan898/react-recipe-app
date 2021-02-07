import React from 'react'
import {Container, Typography} from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
    return (
        <div>
            {/* <Container color="primary" align="center" style={{ backgroundColor: '#ff8a65', minWidth: "950px", maxWidth: window.screen.width, height: "5vh"}} > */}
            <Container >
                <Typography>Made by Sandipan Das <a target="_blank" rel="noreferrer" href="https://github.com/sandipan898/react-recipe-app"> <GitHubIcon color="secondary" /></a> </Typography>
                <br />
            </Container>
        </div>
    )
}

export default Footer
