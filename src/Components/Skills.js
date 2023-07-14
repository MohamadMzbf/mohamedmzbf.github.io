import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TwitterIcon from "@mui/icons-material/Twitter";

import Tooltip from "@mui/material/Tooltip";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme,
  textAlign: "center",
  color: "secondary",
}));

const Skills = () => {
  return (
    <Box sx={{ bgcolor: "#ffffff", height: "120vh" }}>
      <Grid
        item
        xs
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h3">Skills</Typography>
      </Grid>

      <Box sx={{ flexGrow: 1, padding: "2% 5% 0% 5%" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={6} sm={6} md={6}>
            <img
              src="skills.jpg"
              style={{ width: "400px", minHeight: "500" }}
            />
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-end"
            spacing={2}
            xs={6}
            sm={6}
            md={6}
          >
            <Grid item>
              <Typography variant="h5">Languages</Typography>
              <Tooltip title="LinkedIn" placement="top">
                <Item theme="#003a8c">
                  <TwitterIcon sx={{ color: "white", fontSize: "10px" }} />
                </Item>
              </Tooltip>
            </Grid>

            <Grid item>
              <Typography variant="h5">Languages</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">Languages</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">Languages</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">Languages</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">Languages</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Skills;
