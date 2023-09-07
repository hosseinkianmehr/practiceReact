import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({data}) {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={data.image}
        title={data.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" >
        {data.title.slice(0, 20)}
        </Typography>
        <Typography variant="body2" >
        {data.description.slice(0, 70)}...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}