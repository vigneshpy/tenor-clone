import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";

const defaultCard = (props) => {
  const { trendingKey = "",url="" } = props;
  return (
    <>
      <Card sx={{ maxWidth: 200 }}>
        <CardMedia
          component="img"
          height="100"
          width="200"
          image={url}
          alt={trendingKey}
        />
      </Card>
      <Typography gutterBottom variant="h6">
        {trendingKey}
      </Typography>
    </>
  );
};

export default defaultCard;
