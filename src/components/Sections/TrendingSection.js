import React, { useState } from "react";
import Card from "../Card";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import ItemsCarousel from "react-items-carousel";
import Icon from "@mui/material/Icon";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const TrendingSection = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  return (
    <Box>
      <Typography
        variant="h5"
        style={{ flex: 1, float: "left", margin: "15px 0px 0px 30px" }}
      >
        Trending Tenor Searches
      </Typography>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={4}
            gutter={20}
            leftChevron={<ChevronLeftIcon />}
            rightChevron={<ChevronRightIcon />}
            outsideChevron
            chevronWidth={40}
          >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </ItemsCarousel>
        </Box>
      </Container>
    </Box>
  );
};

export default TrendingSection;
