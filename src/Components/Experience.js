import * as React from "react";
// import { experimentalStyled as styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { TbBuilding } from "react-icons/tb";
import {
  MdWorkOutline,
  MdCalendarToday,
  MdWorkHistory,
  MdOutlineContentPaste,
  MdTaskAlt,
  MdOutlineDone,
  MdPlace,
  MdFlag,
} from "react-icons/md";
import { FaDotCircle } from "react-icons/fa";
import { VscDebugStart } from "react-icons/vsc";
import { LuChevronUpSquare } from "react-icons/lu";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

/* const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
})); */

const Experience = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#141414",
          height: "100%",
          width: "100%",
        }}
      >
        <Box sx={{ flexGrow: 1, padding: "5% 5% 5% 5%" }}>
          <Grid
            container
            spacing={{ xs: 0.5, md: 0.5 }}
            columns={{ xs: 4, sm: 4, md: 12 }}
          >
            <Grid
              item
              container
              xs={12}
              sm={12}
              md={4}
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="h2" fontStyle={{ color: "white" }}>
                  Experiences
                </Typography>
              </Grid>
              <Grid item>
                <MdWorkHistory size="15em" color="white" />
              </Grid>
            </Grid>
            <Grid
              item
              container
              spacing={0.5}
              direction="column"
              xs={12}
              sm={12}
              md={8}
            >
              <Stepper orientation="vertical">
                <Step key={1} active={true}>
                  <StepLabel
                    sx={{
                      color: "aqua",
                      fontSize: 24,
                      fontWeight: "medium",
                    }}
                    StepIconComponent={FaDotCircle}
                  >
                    <Typography variant="h6" style={{ color: "aquamarine" }}>
                      Ongoing
                    </Typography>
                  </StepLabel>
                  <StepContent>
                    <Grid
                      container
                      spacing={{ xs: 0.5, sm: 1, md: 2 }}
                      columns={{ xs: 1, sm: 1, md: 12 }}
                    >
                      <Grid item xs={1} sm={2} md={4}>
                        <Card sx={{ width: "100%" }}>
                          <CardContent>
                            <Typography variant="h6" gutterBottom>
                              <MdWorkOutline /> Full Stack Developer
                            </Typography>
                            <Typography
                              sx={{ fontSize: 18 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              <TbBuilding /> Galima Group
                            </Typography>
                            <Typography
                              sx={{ fontSize: 18 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              <MdPlace /> Dakar, SN
                            </Typography>

                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                              <MdCalendarToday /> 2023-02-01 to Now
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs={2} md={8} sm={4}>
                        <Card sx={{ width: "100%", minHeight: 300 }}>
                          <CardContent>
                            <Typography variant="h6">
                              <MdOutlineContentPaste /> Développement et
                              conception d'application mobile
                            </Typography>
                            <Typography
                              sx={{ fontSize: 18 }}
                              color="text.primary"
                            >
                              <MdTaskAlt /> Taches
                            </Typography>

                            <List dense={true}>
                              <ListItem>
                                <ListItemIcon>
                                  <MdOutlineDone />
                                </ListItemIcon>
                                <ListItemText
                                  primary="Développer des interfaces utilisateur hautement interactives et
adaptées à l'aide de React Native"
                                />
                              </ListItem>
                              <ListItem>
                                <ListItemIcon>
                                  <MdOutlineDone />
                                </ListItemIcon>
                                <ListItemText primary="Apporter les solutions correctives des bugs sur chaque application" />
                              </ListItem>
                              <ListItem>
                                <ListItemIcon>
                                  <MdOutlineDone />
                                </ListItemIcon>
                                <ListItemText primary="Déploiement d'application sur Google Play Store" />
                              </ListItem>
                            </List>

                            <Typography variant="body2">
                              Technical Environement : Laravel - Python - Matlab
                              - Git{" "}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </StepContent>
                </Step>
                <Step key={2} active={true}>
                  <StepLabel
                    sx={{
                      color: "aqua",
                      fontSize: 24,
                      fontWeight: "medium",
                    }}
                    StepIconComponent={LuChevronUpSquare}
                  >
                    <Typography variant="h6" style={{ color: "aquamarine" }}>
                      Jan. 2023
                    </Typography>
                  </StepLabel>
                  <StepContent>
                    <Grid
                      container
                      spacing={{ xs: 0.5, sm: 1, md: 2 }}
                      columns={{ xs: 1, sm: 1, md: 12 }}
                    >
                      <Grid item xs={1} sm={2} md={4}>
                        <Card sx={{ width: "100%" }}>
                          <CardContent>
                            <Typography variant="h6" gutterBottom>
                              <MdWorkOutline /> Full Stack Developer
                            </Typography>
                            <Typography
                              sx={{ fontSize: 18 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              <TbBuilding /> Codify
                            </Typography>
                            <Typography
                              sx={{ fontSize: 18 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              <MdPlace /> Dakar, SN
                            </Typography>

                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                              <MdCalendarToday /> 2022-09-01 to 2023-01-31
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs={2} md={8} sm={4}>
                        <Card sx={{ width: "100%", minHeight: 300 }}>
                          <CardContent>
                            <Typography variant="h6">
                              <MdOutlineContentPaste /> Développement et
                              conception d'application mobile
                            </Typography>
                            <Typography
                              sx={{ fontSize: 18 }}
                              color="text.primary"
                            >
                              <MdTaskAlt /> Taches
                            </Typography>

                            <List dense={true}>
                              <ListItem>
                                <ListItemIcon>
                                  <MdOutlineDone />
                                </ListItemIcon>
                                <ListItemText
                                  primary="Développer des interfaces utilisateur hautement interactives et
adaptées à l’aide de React Native"
                                />
                              </ListItem>
                              <ListItem>
                                <ListItemIcon>
                                  <MdOutlineDone />
                                </ListItemIcon>
                                <ListItemText primary="Apporter les solutions correctives des bugs sur chaque application" />
                              </ListItem>
                              <ListItem>
                                <ListItemIcon>
                                  <MdOutlineDone />
                                </ListItemIcon>
                                <ListItemText primary="Déploiement d'application sur Google Play Store" />
                              </ListItem>
                            </List>

                            <Typography variant="body2">
                              Technical Environement : React Native - Firebase
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </StepContent>
                </Step>
                <Step key={3} active={true}>
                  <StepLabel
                    sx={{
                      color: "aqua",
                      fontSize: 24,
                      fontWeight: "medium",
                    }}
                    StepIconComponent={LuChevronUpSquare}
                  >
                    <Typography variant="h6" style={{ color: "aquamarine" }}>
                      Aug. 2022
                    </Typography>
                  </StepLabel>
                  <StepContent>
                    <Grid
                      container
                      spacing={{ xs: 0.5, sm: 1, md: 2 }}
                      columns={{ xs: 1, sm: 1, md: 12 }}
                    >
                      <Grid item xs={1} sm={2} md={4}>
                        <Card sx={{ width: "100%" }}>
                          <CardContent>
                            <Typography variant="h6" gutterBottom>
                              <MdWorkOutline /> Full Stack Developer
                            </Typography>
                            <Typography
                              sx={{ fontSize: 18 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              <TbBuilding /> BBS Group
                            </Typography>
                            <Typography
                              sx={{ fontSize: 18 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              <MdPlace /> Dakar, SN
                            </Typography>

                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                              <MdCalendarToday /> 2021-03-01 to 2022-08-30
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs={2} md={8} sm={4}>
                        <Card sx={{ width: "100%", minHeight: 300 }}>
                          <CardContent>
                            <Typography variant="h6">
                              <MdOutlineContentPaste /> Développement et
                              conception d'application mobile
                            </Typography>
                            <Typography
                              sx={{ fontSize: 18 }}
                              color="text.primary"
                            >
                              <MdTaskAlt /> Taches
                            </Typography>

                            <List dense={true}>
                              <ListItem>
                                <ListItemIcon>
                                  <MdOutlineDone />
                                </ListItemIcon>
                                <ListItemText
                                  primary="Développer des interfaces utilisateur hautement interactives et
adaptées à l'aide de React Native"
                                />
                              </ListItem>
                              <ListItem>
                                <ListItemIcon>
                                  <MdOutlineDone />
                                </ListItemIcon>
                                <ListItemText primary="Apporter les solutions correctives des bugs sur chaque application" />
                              </ListItem>
                              <ListItem>
                                <ListItemIcon>
                                  <MdOutlineDone />
                                </ListItemIcon>
                                <ListItemText primary="Déploiement d'application sur Google Play Store" />
                              </ListItem>
                            </List>

                            <Typography variant="body2">
                              Technical Environement : React Native - Firebase
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </StepContent>
                </Step>
                <Step key={6} active={true}>
                  <StepLabel
                    sx={{
                      color: "aqua",
                      fontSize: 24,
                      fontWeight: "medium",
                    }}
                    StepIconComponent={LuChevronUpSquare}
                  >
                    <Typography variant="h5" style={{ color: "aquamarine" }}>
                      March 2021
                    </Typography>
                  </StepLabel>
                </Step>
                <Step key={4} active={true}>
                  <StepLabel
                    sx={{
                      color: "aqua",
                      fontSize: 24,
                      fontWeight: "medium",
                    }}
                    StepIconComponent={LuChevronUpSquare}
                  >
                    <Typography variant="h6" style={{ color: "aquamarine" }}>
                      Feb. 2021
                    </Typography>
                  </StepLabel>
                  <StepContent>
                    <Grid
                      container
                      spacing={{ xs: 0.5, sm: 1, md: 2 }}
                      columns={{ xs: 1, sm: 1, md: 12 }}
                    >
                      <Grid item xs={1} sm={2} md={4}>
                        <Card sx={{ width: "100%" }}>
                          <CardContent>
                            <Typography variant="h6" gutterBottom>
                              <MdWorkOutline /> Web Developer
                            </Typography>
                            <Typography
                              sx={{ fontSize: 18 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              <TbBuilding /> SenNum Sa(formely ADIE)
                            </Typography>
                            <Typography
                              sx={{ fontSize: 18 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              <MdPlace /> Dakar, SN
                            </Typography>

                            <Typography
                              sx={{ fontSize: 18 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              <MdCalendarToday /> Dec 2020 to Feb Feb
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs={2} md={8} sm={4}>
                        <Card sx={{ width: "100%", minHeight: 300 }}>
                          <CardContent>
                            <Typography variant="h6">
                              <MdOutlineContentPaste /> Développement et
                              conception d'application mobile
                            </Typography>
                            <Typography
                              sx={{ fontSize: 18 }}
                              color="text.primary"
                            >
                              <MdTaskAlt /> Taches
                            </Typography>

                            <List dense={true}>
                              <ListItem>
                                <ListItemIcon>
                                  <MdOutlineDone />
                                </ListItemIcon>
                                <ListItemText
                                  primary="Développer des interfaces utilisateur hautement interactives et
adaptées à l'aide de React Native"
                                />
                              </ListItem>
                              <ListItem>
                                <ListItemIcon>
                                  <MdOutlineDone />
                                </ListItemIcon>
                                <ListItemText primary="Apporter les solutions correctives des bugs sur chaque application" />
                              </ListItem>
                              <ListItem>
                                <ListItemIcon>
                                  <MdOutlineDone />
                                </ListItemIcon>
                                <ListItemText primary="Déploiement d'application sur Google Play Store" />
                              </ListItem>
                            </List>

                            <Typography variant="body2">
                              Technical Environement : Laravel - Html - CSS -
                              Agile - Scrum
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </StepContent>
                </Step>
                <Step key={5} active={true}>
                  <StepLabel
                    sx={{
                      color: "aqua",
                      fontSize: 20,
                      fontWeight: "medium",
                    }}
                    StepIconComponent={LuChevronUpSquare}
                  >
                    <Typography variant="h6" style={{ color: "aquamarine" }}>
                      December
                    </Typography>
                  </StepLabel>
                  <StepContent>
                    <Grid
                      container
                      spacing={{ xs: 0.5, sm: 1, md: 2 }}
                      columns={{ xs: 1, sm: 1, md: 12 }}
                    >
                      <Grid item xs={1} sm={2} md={4}>
                        <Card sx={{ width: "100%" }}>
                          <CardContent>
                            <Typography variant="h6" gutterBottom>
                              <MdWorkOutline /> Mobile Developer Internship
                            </Typography>
                            <Typography
                              sx={{ fontSize: 18 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              <TbBuilding /> Di-Smart
                            </Typography>
                            <Typography
                              sx={{ fontSize: 18 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              <MdPlace /> Dakar, SN
                            </Typography>

                            <Typography
                              sx={{ fontSize: 18 }}
                              color="text.secondary"
                            >
                              <MdCalendarToday /> July 2020 to December 2020
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs={2} md={8} sm={4}>
                        <Card sx={{ width: "100%", minHeight: 300 }}>
                          <CardContent>
                            <Typography variant="h6">
                              <MdOutlineContentPaste /> Development and design
                              of mobile applications
                            </Typography>
                            <Typography
                              sx={{ fontSize: 18 }}
                              color="text.primary"
                            >
                              <MdTaskAlt /> Tasks and Responsabilities
                            </Typography>

                            <List dense={true}>
                              <ListItem>
                                <ListItemIcon>
                                  <MdOutlineDone />
                                </ListItemIcon>
                                <ListItemText primary="Develop highly interactive and adapted user interfaces using React Native" />
                              </ListItem>
                              <ListItem>
                                <ListItemIcon>
                                  <MdOutlineDone />
                                </ListItemIcon>
                                <ListItemText primary="Provide bug fixes for each application" />
                              </ListItem>
                              <ListItem>
                                <ListItemIcon>
                                  <MdOutlineDone />
                                </ListItemIcon>
                                <ListItemText primary="Application deployment on Google Play Store" />
                              </ListItem>
                            </List>

                            <Typography variant="body2">
                              Technical Environement : React Native - Firebase
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </StepContent>
                </Step>
                <Step key={6} active={true}>
                  <StepLabel
                    sx={{
                      color: "aqua",
                      fontSize: 20,
                      fontWeight: "medium",
                    }}
                    StepIconComponent={LuChevronUpSquare}
                  >
                    <Typography variant="h6" style={{ color: "aquamarine" }}>
                      July
                    </Typography>
                  </StepLabel>
                </Step>

                <Step key={6} active={true}>
                  <StepLabel
                    sx={{
                      color: "aqua",
                      fontSize: 24,
                      fontWeight: "medium",
                    }}
                    StepIconComponent={MdFlag}
                  >
                    <Typography variant="h5" style={{ color: "aquamarine" }}>
                      2020
                    </Typography>
                  </StepLabel>
                </Step>
              </Stepper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Experience;
