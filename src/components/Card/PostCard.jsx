import React from 'react';
import {Card, CardContent, CardMedia, Typography, CardActions, Button} from "@mui/material";


function PostCard() {
    return (
        <Card sx={{maxWidth: 345}} style={{
            marginBottom: "35px"
        }}>
            <CardMedia
              component={"img"}
              height={"194"}
              image="https://cdn.pixabay.com/photo/2016/11/14/05/21/children-1822688__340.jpg"
              alt="football"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Sky Sports Football - Live games, scores,
                    latest football news, transfers, results,
                    fixtures and team news from the Premier
                    to the Champions League.
                </Typography>
                <CardActions
                   style={{
                       display: "flex",
                       justifyContent: "space-between"
                   }}
                  >
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default  PostCard;