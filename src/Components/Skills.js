import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {
  TbBrandJavascript,
  TbBrandPython,
  TbBrandTypescript,
  TbSql,
  TbBrandRedux,
  TbBrandReact,
  TbBrandBootstrap,
  TbBrandPhp,
  TbBrandLaravel,
  TbBrandMongodb,
  TbBrandDocker,
} from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import {
  SiMui,
  SiSpring,
  SiNestjs,
  SiMysql,
  SiPostgresql,
  SiKubernetes,
} from "react-icons/si";

import Tooltip from "@mui/material/Tooltip";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme,
  padding: 2,
  textAlign: "center",
  color: "secondary",
}));

const Skills = () => {
  return (
    <Box sx={{ bgcolor: "#ffffff", height: "100%", width: "100%" }}>
      <Box sx={{ flexGrow: 1, padding: "5% 10% 10% 10%" }}>
        <Grid
          container
          spacing={{ xs: 0.5, md: 0.5 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid
            item
            container
            xs={12}
            sm={12}
            md={6}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h2">Skills</Typography>
            </Grid>
            <img
              src="skills.jpg"
              alt="Skils Icon"
              style={{ width: "300px", minHeight: "500" }}
            />
          </Grid>
          <Grid
            item
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-end"
            spacing={1}
            xs={12}
            sm={12}
            md={6}
          >
            <Grid item container direction="row" justifyContent="flex-end">
              <Grid item>
                <Typography variant="h4">Languages </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              justifyContent="flex-end"
              alignItems="flex-end"
              direction="row"
              spacing={1}
              sx={{ marginBottom: "40px" }}
            >
              <Grid item xs="auto">
                <Tooltip title="Java" placement="top">
                  <Item theme="#0050b3">
                    <FaJava size="3em" color="#f5222d" />
                  </Item>
                </Tooltip>
              </Grid>
              <Grid item xs="auto">
                <Tooltip title="Javascript" placement="top">
                  <Item theme="#fff566">
                    <TbBrandJavascript size="3em" />
                  </Item>
                </Tooltip>
              </Grid>
              <Grid item xs="auto">
                <Tooltip title="Python" placement="top">
                  <Item theme="#003eb3">
                    <TbBrandPython size="3em" color="#fa8c16" />
                  </Item>
                </Tooltip>
              </Grid>
              <Grid item xs="auto">
                <Tooltip title="Typescript" placement="top">
                  <Item theme="#001d66">
                    <TbBrandTypescript size="3em" color="white" />
                  </Item>
                </Tooltip>
              </Grid>
              <Grid item xs="auto">
                <Tooltip title="SQL" placement="top">
                  <Item theme="#003eb3">
                    <TbSql size="3em" color="#73d13d" />
                  </Item>
                </Tooltip>
              </Grid>
              <Grid item xs="auto">
                <Tooltip title="Php" placement="top">
                  <Item theme="#b37feb">
                    <TbBrandPhp size="3em" color="#000000" />
                  </Item>
                </Tooltip>
              </Grid>
            </Grid>
            <Grid item direction="row">
              <Grid item>
                <Typography variant="h4">Front End </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              justifyContent="flex-end"
              alignItems="flex-end"
              direction="row"
              spacing={1}
              sx={{ marginBottom: "40px" }}
            >
              {" "}
              <Grid item xs="auto">
                <Tooltip title="ReactJs" placement="top">
                  <Item theme="#000000">
                    <TbBrandReact size="3em" color="#bae7ff" />
                  </Item>
                </Tooltip>
              </Grid>
              <Grid item xs="auto">
                <Tooltip title="Bootstrap" placement="top">
                  <Item theme="#9254de">
                    <TbBrandBootstrap size="3em" color="white" />
                  </Item>
                </Tooltip>
              </Grid>
              <Grid item xs="auto">
                <Tooltip title="Material UI" placement="top">
                  <Item>
                    <SiMui size="3em" color="#597ef7" />
                  </Item>
                </Tooltip>
              </Grid>
              <Grid item xs="auto">
                <Tooltip title="Redux" placement="top">
                  <Item theme="#f9f0ff">
                    <TbBrandRedux size="3em" color="#b37feb" />
                  </Item>
                </Tooltip>
              </Grid>
            </Grid>
            <Grid item direction="row">
              <Grid item>
                <Typography variant="h4">Back end </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              justifyContent="flex-end"
              alignItems="flex-end"
              direction="row"
              spacing={1}
              sx={{ marginBottom: "40px" }}
            >
              {" "}
              <Grid item xs="auto">
                <Tooltip title="Laravel" placement="top">
                  <Item theme="#fafafa">
                    <TbBrandLaravel size="3em" color="#ff4d4f" />
                  </Item>
                </Tooltip>
              </Grid>
              <Grid item xs="auto">
                <Tooltip title="Spring Boot" placement="top">
                  <Item theme="#389e0d">
                    <SiSpring size="3em" color="white" />
                  </Item>
                </Tooltip>
              </Grid>
              <Grid item xs="auto">
                <Tooltip title="NestJs" placement="top">
                  <Item theme="#000000">
                    <SiNestjs size="3em" color="#cf1322" />
                  </Item>
                </Tooltip>
              </Grid>
              {/* <Grid item xs="auto">
                <Tooltip title="LinkedIn" placement="top">
                  <Item theme="#fff566">
                    <TbBrandRedux size="3em" />
                  </Item>
                </Tooltip>
              </Grid> */}
            </Grid>
            <Grid item direction="row">
              <Grid item>
                <Typography variant="h4">Database </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              justifyContent="flex-end"
              alignItems="flex-end"
              direction="row"
              spacing={1}
              sx={{ marginBottom: "40px" }}
            >
              {" "}
              <Grid item xs="auto">
                <Tooltip title="MySql" placement="top">
                  <Item theme="#fa8c16">
                    <SiMysql size="3em" color="#002c8c" />
                  </Item>
                </Tooltip>
              </Grid>
              <Grid item xs="auto">
                <Tooltip title="PostgreSql" placement="top">
                  <Item theme="#003a8c">
                    <SiPostgresql size="3em" color="#000000" />
                  </Item>
                </Tooltip>
              </Grid>
              <Grid item xs="auto">
                <Tooltip title="mongoDB" placement="top">
                  <Item theme="#000000">
                    <TbBrandMongodb size="3em" color="#237804" />
                  </Item>
                </Tooltip>
              </Grid>
            </Grid>
            <Grid item direction="row">
              <Grid item>
                <Typography variant="h4">Devops </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              justifyContent="flex-end"
              alignItems="flex-end"
              direction="row"
              spacing={1}
              sx={{ marginBottom: "40px" }}
            >
              {" "}
              <Grid item xs="auto">
                <Tooltip title="Docker" placement="top">
                  <Item theme="#1677ff">
                    <TbBrandDocker size="3em" />
                  </Item>
                </Tooltip>
              </Grid>
              <Grid item xs="auto">
                <Tooltip title="Kubernetes" placement="top">
                  <Item theme="#0958d9">
                    <SiKubernetes size="3em" color="white" />
                  </Item>
                </Tooltip>
              </Grid>
              {/* <Grid item xs="auto">
                <Tooltip title="LinkedIn" placement="top">
                  <Item theme="#fff566">
                    <SiMui size="3em" />
                  </Item>
                </Tooltip>
              </Grid>
              <Grid item xs="auto">
                <Tooltip title="LinkedIn" placement="top">
                  <Item theme="#fff566">
                    <TbBrandRedux size="3em" />
                  </Item>
                </Tooltip>
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Skills;
