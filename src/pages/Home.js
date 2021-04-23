import React from "react";
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'

function Home() {
    // const classes = useStyles();
    return (
        <div>

            <Typography>Hello!</Typography>

            <Container id="drum-machine">
                <div id="display">

                    <Button
                        className="num"
                        onClick={(e) => this.playSound(e, "value")}
                        value="1"
                    >
                        Q

                    </Button>

                    <Button
                        className="num"
                        onClick={(e) => this.playSound(e, "value")}
                        value="1"
                    >
                        W
                        
                    </Button>

                    <Button
                        className="num"
                        onClick={(e) => this.playSound(e, "value")}
                        value="1"
                    >
                        E
                        
                    </Button>

                    <Button
                        className="num"
                        onClick={(e) => this.playSound(e, "value")}
                        value="1"
                    >
                        A
                        
                    </Button>

                    <Button
                        className="num"
                        onClick={(e) => this.playSound(e, "value")}
                        value="1"
                    >
                        S
                        
                    </Button>

    {/* ---------------------------------------------------------------------------------------------- */}

                    <Button
                        className="num"
                        onClick={(e) => this.playSound(e, "value")}
                        value="1"
                    >
                        D
                        
                    </Button>

                    <Button
                        className="num"
                        onClick={(e) => this.playSound(e, "value")}
                        value="1"
                    >
                        Z
                        
                    </Button>

                    <Button
                        className="num"
                        onClick={(e) => this.playSound(e, "value")}
                        value="1"
                    >
                        X
                        
                    </Button>
                    
                    <Button
                        className="num"
                        onClick={(e) => this.playSound(e, "value")}
                        value="1"
                    >
                        C
                        
                    </Button> 

                </div>

            </Container>

        </div>

    );
}

export default Home;