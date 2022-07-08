import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';



const defaultCard= ()=> {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image="https://media.tenor.com/images/173836eab2d8951094d85c996bbfbc96/tenor.gif"
        alt="Paella dish"
      />
    </Card>
  );
}

export default defaultCard;