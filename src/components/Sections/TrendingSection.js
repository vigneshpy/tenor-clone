import React, { useState, useEffect } from "react";
import Card from "../Card";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import ItemsCarousel from "react-items-carousel";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import axios from "axios";
import { makeUrl } from "../../Utilities";
import { map, pathOr } from "ramda";
const TrendingSection = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [featured, setFeatured] = React.useState([]);

  useEffect(() => {
    getFeatured();
  }, []);

  const getFeatured = () => {
    axios.get(makeUrl("featured", 10)).then((response) => {
      setFeatured(pathOr([], ["data", "results"], response));
    });
  };
  const renderTrendingGifs = () => {
    return map((featuredGif) => {
      const gifUrl = pathOr("", ["media_formats", "gif", "url"], featuredGif);
      const term = pathOr("", ["tags", 0], featuredGif);
      return <Card trendingKey={term} url={gifUrl} />;
    }, featured);
  };
  return (
    <Box>
      <Typography
        variant="h5"
        style={{ flex: 1, float: "left", margin: "29px 0px 30px 60px" }}
      >
        Trending Tenor Searches
      </Typography>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={5}
            gutter={10}
            leftChevron={
              <Box style={{ marginTop: "35px" }}>
                <ChevronLeftIcon />{" "}
              </Box>
            }
            rightChevron={
              <Box style={{ marginTop: "35px" }}>
                <ChevronRightIcon />{" "}
              </Box>
            }
            outsideChevron
            chevronWidth={40}
          >
            {renderTrendingGifs()}
          </ItemsCarousel>
        </Box>
      </Container>
    </Box>
  );
};

export default TrendingSection;
