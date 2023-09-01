import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { TbBuilding } from "react-icons/tb";
import {
  MdWorkOutline,
  MdCalendarToday,
  MdOutlineDoneOutline,
} from "react-icons/md";
import { VscDebugStart } from "react-icons/vsc";
import { LuChevronUpSquare } from "react-icons/lu";
import Button from "@mui/material/Button";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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
          <Grid container>
            <Grid item xs={4}></Grid>
            <Grid item container spacing={0.5} direction="column" xs={8}>
              <Stepper orientation="vertical">
                <Step key={1} active={true}>
                  <StepLabel>2023 - Now</StepLabel>
                  <StepContent>
                    <Grid
                      container
                      spacing={{ xs: 0.5, sm: 1, md: 2 }}
                      columns={{ xs: 1, sm: 1, md: 12 }}
                    >
                      <Grid item xs={1} sm={2} md={3}>
                        <Card sx={{ width: "100%" }}>
                          <CardContent>
                            <Typography variant="h5">
                              <MdWorkOutline /> Full Stack Developer
                            </Typography>
                            <Typography
                              sx={{ fontSize: 18 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              <TbBuilding /> Galima Group
                            </Typography>

                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                              <MdCalendarToday /> 02-2023 to Ongoing
                            </Typography>
                            <Typography variant="body2">
                              Stack : Laravel - Matlab - Excel - Vba
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs={2} md={8} sm={4}>
                        <Card sx={{ width: "100%", minHeight: 300 }}>
                          <CardContent>
                            <Typography variant="h5">
                              <MdWorkOutline /> Full Stack Developer
                            </Typography>
                            <Typography
                              sx={{ fontSize: 18 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              <TbBuilding /> Galima Group
                            </Typography>

                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                              <MdCalendarToday /> 02-2023 to Ongoing
                            </Typography>
                            <Typography variant="body2">
                              Stack : Laravel - Matlab - Excel - Vba
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </StepContent>
                </Step>
                <Step key={2} active={true}>
                  <StepLabel>2023 - Now</StepLabel>
                  <StepContent>
                    <Grid
                      container
                      spacing={{ xs: 0.5, sm: 1, md: 2 }}
                      columns={{ xs: 1, sm: 1, md: 12 }}
                    >
                      <Grid item xs={1} sm={2} md={3}>
                        <Card sx={{ width: "100%" }}>
                          <CardContent>
                            <Typography variant="h5">
                              <MdWorkOutline /> Full Stack Developer
                            </Typography>
                            <Typography
                              sx={{ fontSize: 18 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              <TbBuilding /> Galima Group
                            </Typography>

                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                              <MdCalendarToday /> 02-2023 to Ongoing
                            </Typography>
                            <Typography variant="body2">
                              Stack : Laravel - Matlab - Excel - Vba
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs={2} md={8} sm={4}>
                        <Card sx={{ width: "100%", minHeight: 300 }}>
                          <CardContent>
                            <Typography variant="h5">
                              <MdWorkOutline /> Full Stack Developer
                            </Typography>
                            <Typography
                              sx={{ fontSize: 18 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              <TbBuilding /> Galima Group
                            </Typography>

                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                              <MdCalendarToday /> 02-2023 to Ongoing
                            </Typography>
                            <Typography variant="body2">
                              Stack : Laravel - Matlab - Excel - Vba
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </StepContent>
                </Step>
                <Step></Step>
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
                      Apr. 2020
                    </Typography>
                  </StepLabel>
                  <StepContent>
                    <Grid
                      container
                      spacing={{ xs: 0.5, sm: 1, md: 2 }}
                      columns={{ xs: 1, sm: 1, md: 12 }}
                    >
                      <Grid item xs={1} sm={2} md={3}>
                        <Card sx={{ width: "100%" }}>
                          <CardContent>
                            <Typography variant="h5">
                              <MdWorkOutline /> Full Stack Developer
                            </Typography>
                            <Typography
                              sx={{ fontSize: 18 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              <TbBuilding /> Galima Group
                            </Typography>

                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                              <MdCalendarToday /> 02-2023 to Ongoing
                            </Typography>
                            <Typography variant="body2">
                              Stack : Laravel - Matlab - Excel - Vba
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs={2} md={8} sm={4}>
                        <Card sx={{ width: "100%", minHeight: 300 }}>
                          <CardContent>
                            <Typography variant="h5">
                              <MdWorkOutline /> Full Stack Developer
                            </Typography>
                            <Typography
                              sx={{ fontSize: 18 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              <TbBuilding /> Galima Group
                            </Typography>

                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                              <MdCalendarToday /> 02-2023 to Ongoing
                            </Typography>
                            <Typography variant="body2">
                              Stack : Laravel - Matlab - Excel - Vba
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </StepContent>
                </Step>
                <Step key={1} active={true}>
                  <StepLabel
                    sx={{
                      color: "aqua",
                      fontSize: 24,
                      fontWeight: "medium",
                    }}
                    StepIconComponent={VscDebugStart}
                  >
                    <Typography variant="h5" style={{ color: "aquamarine" }}>
                      Jan. 2019
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
