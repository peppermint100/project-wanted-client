import React from 'react'
import styled from "styled-components"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: "300px",
        position: "relative"
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});
export default function Post() {
    const classes = useStyles()
    return (
        <Container>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        2020-07-24
                    </Typography>
                    <Typography variant="h5" component="h2">
                        제목
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        작성자
                    </Typography>
                    <Typography variant="body2" component="p">
                        내용
                    <br />
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Container>
    )
}

const Container = styled.div`

`
