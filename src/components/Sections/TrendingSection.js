import React from "react";
import Card from "../Card";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";

const TrendingSection = () => {
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
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Card />
            </Grid>
            <Grid item xs={3}>
              <Card />
            </Grid>
            <Grid item xs={3}>
              <Card />
            </Grid>
            <Grid item xs={3}>
              <Card />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default TrendingSection;
