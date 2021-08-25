import React from 'react';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import classNames from 'classnames';

import useStyles from './styles';

const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, i, activeArticle }) => {
 const classes = useStyles();
 return (
  <Card className={classNames(classes.card, activeArticle === i ? classes.activeCard : null)}>
   <CardActionArea href={url} target="_blank">
    <CardMedia className={classes.media} image={urlToImage || 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.itsmfusa.org%2Fnews%2F&psig=AOvVaw1jGl_4u8RxI1rgehF34QAu&ust=1629524700843000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJDP_eDyvvICFQAAAAAdAAAAABAD'} />
    <div className={classes.details}>
     <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
     <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
    </div>
    <Typography className={classes.title} gutterBottom variant="h5">{title}</Typography>
    <CardContent>
     <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
    </CardContent>
   </CardActionArea>
   <CardActions className={classes.cardActions}>
    <Button size="small" color="primary">Learn More</Button>
    <Typography variant="h5" color="textSecondary">{i + 1}</Typography>
   </CardActions>
  </Card>
 );
};

export default NewsCard;
