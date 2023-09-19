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
  MdOutlinePlayCircleFilled,
  MdOutlineStopCircle,
} from "react-icons/md";
import { FaDotCircle, FaFlagCheckered } from "react-icons/fa";
import { GiRaceCar } from "react-icons/gi";
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
import { MotionAnimate } from "react-motion-animate";

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
            columns={{ xs: 2, sm: 4, md: 12 }}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h2" fontStyle={{ color: "white" }}>
                Experiences
              </Typography>
            </Grid>
            {/* <Grid item>
              <MdWorkHistory size="3em" color="white" />
            </Grid> */}
          </Grid>

          <Grid
            container
            spacing={{ xs: 0.5, md: 0.5 }}
            columns={{ xs: 12, sm: 12, md: 12 }}
          >
            <MotionAnimate
              animation="fadeInUp"
              reset={false}
              distance={200}
              delay={1}
              speed={1}
            >
              <Grid item>
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
                        columns={{ xs: 2, sm: 10, md: 12 }}
                        spacing={{ sm: 1, md: 2, xs: 0.5 }}
                      >
                        <Grid item xs={2} sm={9} md={4}>
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

                              <Typography
                                sx={{ mb: 1.5 }}
                                color="text.secondary"
                              >
                                <MdCalendarToday /> 2023-02-01 to Now
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                        <Grid item xs={2} sm={9} md={8}>
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
                                Technical Environement : Laravel - Python -
                                Matlab - Git{" "}
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
                        fontSize: 20,
                        fontWeight: "medium",
                      }}
                      StepIconComponent={MdOutlinePlayCircleFilled}
                    >
                      <Typography variant="h6" style={{ color: "aquamarine" }}>
                        February 06,2023
                      </Typography>
                    </StepLabel>
                  </Step>
                </Stepper>
              </Grid>
            </MotionAnimate>
            <MotionAnimate
              animation="fadeInUp"
              reset={true}
              distance={200}
              delay={1}
              speed={1}
            >
              <Grid item>
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
                        columns={{ xs: 2, sm: 10, md: 12 }}
                        spacing={{ sm: 1, md: 2, xs: 0.5 }}
                      >
                        <Grid item xs={2} sm={9} md={4}>
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

                              <Typography
                                sx={{ mb: 1.5 }}
                                color="text.secondary"
                              >
                                <MdCalendarToday /> 2022-09-01 to 2023-01-31
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                        <Grid item xs={2} sm={9} md={8}>
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
                  <Step key={2} active={true}>
                    <StepLabel
                      sx={{
                        color: "aqua",
                        fontSize: 20,
                        fontWeight: "medium",
                      }}
                      StepIconComponent={MdOutlinePlayCircleFilled}
                    >
                      <Typography variant="h6" style={{ color: "aquamarine" }}>
                        February 06,2023
                      </Typography>
                    </StepLabel>
                  </Step>
                </Stepper>
              </Grid>
            </MotionAnimate>
            <MotionAnimate
              animation="fadeInUp"
              reset={true}
              distance={200}
              delay={1}
              speed={1}
            >
              <Grid item>
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
                        columns={{ xs: 2, sm: 10, md: 12 }}
                        spacing={{ sm: 1, md: 2, xs: 0.5 }}
                      >
                        <Grid item xs={2} sm={9} md={4}>
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

                              <Typography
                                sx={{ mb: 1.5 }}
                                color="text.secondary"
                              >
                                <MdCalendarToday /> 2021-03-01 to 2022-08-30
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                        <Grid item xs={2} sm={9} md={8}>
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
                  <Step key={2} active={true}>
                    <StepLabel
                      sx={{
                        color: "aqua",
                        fontSize: 20,
                        fontWeight: "medium",
                      }}
                      StepIconComponent={MdOutlinePlayCircleFilled}
                    >
                      <Typography variant="h6" style={{ color: "aquamarine" }}>
                        February 06,2023
                      </Typography>
                    </StepLabel>
                  </Step>
                </Stepper>
              </Grid>
            </MotionAnimate>
            <MotionAnimate
              animation="fadeInUp"
              reset={true}
              distance={200}
              delay={1}
              speed={1}
            >
              <Grid item>
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
                        columns={{ xs: 2, sm: 10, md: 12 }}
                        spacing={{ sm: 1, md: 2, xs: 0.5 }}
                      >
                        <Grid item xs={2} sm={9} md={4}>
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
                        <Grid item xs={2} sm={9} md={8}>
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
                  <Step key={2} active={true}>
                    <StepLabel
                      sx={{
                        color: "aqua",
                        fontSize: 20,
                        fontWeight: "medium",
                      }}
                      StepIconComponent={MdOutlinePlayCircleFilled}
                    >
                      <Typography variant="h6" style={{ color: "aquamarine" }}>
                        February 06,2023
                      </Typography>
                    </StepLabel>
                  </Step>
                </Stepper>
              </Grid>
            </MotionAnimate>
            <MotionAnimate
              animation="fadeInUp"
              reset={true}
              distance={200}
              delay={1}
              speed={1}
            >
              <Grid item>
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
                        columns={{ xs: 2, sm: 10, md: 12 }}
                        spacing={{ sm: 1, md: 2, xs: 0.5 }}
                      >
                        <Grid item xs={2} sm={9} md={4}>
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
                        <Grid item xs={2} sm={9} md={8}>
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
                  <Step key={2} active={true}>
                    <StepLabel
                      sx={{
                        color: "aqua",
                        fontSize: 20,
                        fontWeight: "medium",
                      }}
                      StepIconComponent={MdOutlinePlayCircleFilled}
                    >
                      <Typography variant="h6" style={{ color: "aquamarine" }}>
                        February 06,2023
                      </Typography>
                    </StepLabel>
                  </Step>
                </Stepper>
              </Grid>
            </MotionAnimate>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Experience;
