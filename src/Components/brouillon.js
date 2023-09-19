const Brouillon = () => {
    return (
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

        {/* <Step key={2} active={true}>
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

        <Step key={3} active={true}>
          <StepLabel
            sx={{
              color: "aqua",
              fontSize: 20,
              fontWeight: "medium",
            }}
            StepIconComponent={MdOutlineStopCircle}
          >
            <Typography variant="h6" style={{ color: "aquamarine" }}>
              January 31, 2023
            </Typography>
          </StepLabel>
          <StepContent></StepContent>
        </Step>
        <Step key={4} active={true}>
          <StepLabel
            sx={{
              color: "aqua",
              fontSize: 20,
              fontWeight: "medium",
            }}
            StepIconComponent={MdOutlinePlayCircleFilled}
          >
            <Typography variant="h6" style={{ color: "aquamarine" }}>
              September 01,2022
            </Typography>
          </StepLabel>
        </Step>
        <Step key={5} active={true}>
          <StepLabel
            sx={{
              color: "aqua",
              fontSize: 20,
              fontWeight: "medium",
            }}
            StepIconComponent={MdOutlineStopCircle}
          >
            <Typography variant="h6" style={{ color: "aquamarine" }}>
              August 31, 2022
            </Typography>
          </StepLabel>
          <StepContent></StepContent>
        </Step>
        <Step key={6} active={true}>
          <StepLabel
            sx={{
              color: "aqua",
              fontSize: 20,
              fontWeight: "medium",
            }}
            StepIconComponent={MdOutlinePlayCircleFilled}
          >
            <Typography variant="h6" style={{ color: "aquamarine" }}>
              March 15, 2021
            </Typography>
          </StepLabel>
        </Step>
        <Step key={7} active={true}>
          <StepLabel
            sx={{
              color: "aqua",
              fontSize: 20,
              fontWeight: "medium",
            }}
            StepIconComponent={MdOutlineStopCircle}
          >
            <Typography variant="h6" style={{ color: "aquamarine" }}>
              February 28, 2021
            </Typography>
          </StepLabel>
          <StepContent></StepContent>
        </Step>
        <Step key={8} active={true}>
          <StepLabel
            sx={{
              color: "aqua",
              fontSize: 20,
              fontWeight: "medium",
            }}
            StepIconComponent={MdOutlinePlayCircleFilled}
          >
            <Typography variant="h6" style={{ color: "aquamarine" }}>
              December 01, 2020
            </Typography>
          </StepLabel>
        </Step>
        <Step key={9} active={true}>
          <StepLabel
            sx={{
              color: "aqua",
              fontSize: 20,
              fontWeight: "medium",
            }}
            StepIconComponent={MdOutlineStopCircle}
          >
            <Typography variant="h6" style={{ color: "aquamarine" }}>
              November 30, 2020
            </Typography>
          </StepLabel>
          <StepContent></StepContent>
        </Step>
        <Step key={10} active={true}>
          <StepLabel
            sx={{
              color: "aqua",
              fontSize: 20,
              fontWeight: "medium",
            }}
            StepIconComponent={MdOutlinePlayCircleFilled}
          >
            <Typography variant="h6" style={{ color: "aquamarine" }}>
              July 01, 2020
            </Typography>
          </StepLabel>
        </Step> */}
    );
}