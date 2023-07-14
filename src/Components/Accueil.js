import * as React from "react";
import Container from "@mui/material/Container";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Typewriter from "./Typewriter";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";

import Tooltip from "@mui/material/Tooltip";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme,
  padding: 2,
  textAlign: "center",
  color: "secondary",
}));

const Accueil = () => {
  return (
    <Container sx={{ bgcolor: "#141414", height: "120vh" }}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={4}
        style={{ padding: "10% 0% 0% 10%" }}
      >
        <Grid item lg="auto">
          <img
            src="profil.png"
            className="d-block"
            style={{ width: "300px", minHeight: "400" }}
          />
        </Grid>

        <Grid item xs={8}>
          <Typography variant="h1" gutterBottom style={{ color: "white" }}>
            Hi, I'm <b>MZBF</b>
          </Typography>
          <Typewriter />

          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            style={{ margin: 10 }}
          >
            <Grid item xs="auto">
              <Tooltip title="LinkedIn" placement="top">
                <Item theme="#003a8c">
                  <LinkedInIcon sx={{ color: "white", fontSize: "50px" }} />
                </Item>
              </Tooltip>
            </Grid>
            <Grid item xs="auto">
              <Tooltip title="GitHub" placement="top">
                <Item theme="#000000">
                  <GitHubIcon sx={{ color: "white", fontSize: "50px" }} />
                </Item>
              </Tooltip>
            </Grid>
            <Grid item xs="auto">
              <Tooltip title="Email" placement="top">
                <Item theme="#f5222d">
                  <EmailIcon sx={{ color: "white", fontSize: "50px" }} />
                </Item>
              </Tooltip>
            </Grid>
            <Grid item xs="auto">
              <Tooltip title="Twitter" placement="top">
                <Item theme="#4096ff">
                  <TwitterIcon sx={{ color: "white", fontSize: "50px" }} />
                </Item>
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Accueil;
