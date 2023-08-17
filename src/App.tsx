import * as React from 'react';

import HomeMain from '/img/exam/home-main.svg'
import avatar from '/img/avatar.jpg'
import Github from '/img/github.svg'
import Email from '/img/email.svg'
import LinkedIn from '/img/linkedIn.svg'
import LogoMat from '/img/logo-mat.svg'

import Button from '@mui/material/Button';
import { Box, Container, Fab, Icon, Stack, SvgIcon, colors } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { red } from '@mui/material/colors';
import Theme from './Theme'
import { TypeWriter } from './components/helper/TypeWriter';
import { HiLighter } from './components/helper/HiLighter';

export default function MyApp() {
  // return (<Box>Raleway 字形測試</Box>)
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid xs={12} md={7} sx={{ paddingLeft: "62px", paddingTop: '80px', '@media (max-width: 900px)': { padding: "30px", paddingRight: "0" } }}>
          <h1>Hi There!</h1>
          <h1>I'M <HiLighter>Randy Lin</HiLighter> </h1>
          <h1 >A <HiLighter><TypeWriter /></HiLighter></h1>
        </Grid>
        <Grid xs={12} md={5}>
          <img src={HomeMain} alt="HomeMain" style={{ height: "auto", maxWidth: "100%" }} />
        </Grid>
        <Grid md={12} sx={{ height: "100px", '@media (max-width: 900px)': { display: 'none' } }}></Grid>
        <Grid xs={12} md={8} sx={{ paddingLeft: "62px", '@media (max-width: 900px)': { padding: "20px" } }}>
          <h1 style={{ textTransform: 'uppercase', textAlign: "center", marginBottom: "50px" }}>Allow me to <HiLighter>introduce</HiLighter> myself</h1>
          <p style={{ fontSize: "20px" }}>
            I like programming, and I also like to <HiLighter>create useful programs</HiLighter> to help users.
            <br /><br />
            I'm using classics langauges like <HiLighter>TypeScript, C++</HiLighter> and <HiLighter>Python</HiLighter>.
            <br /><br />
            I'm proficient in <HiLighter>Node.js, GIS</HiLighter> (Geographic Information Systems) and <HiLighter>QT Application</HiLighter>.
            <br /><br />
            I am eagerly seeking the next phase of my career in programming, where I can dedicate my efforts to the programming I'm passionate about.
            <br /><br />
            If you happen to be looking for someone proficient in <HiLighter>TS, C++</HiLighter>, or if you need a talent to assist in developing <HiLighter>GIS or QT apps</HiLighter>, please feel free to <HiLighter>reach out</HiLighter> to me.
          </p>
        </Grid>
        <Grid xs={12} md={4} sx={{ padding: "35px", margin: "auto", display: "flex", justifyContent: "center" }}>
          <img src={avatar} alt="HomeMain" style={{ height: "auto", maxWidth: "80%", borderRadius: "500px" }} />
        </Grid>
        <Grid xs={12} md={12}>
          <h1 style={{ textAlign: "center", margin: "50px auto 0 auto" }}> <HiLighter>Contact</HiLighter> me</h1>
        </Grid>
        <Grid xs={12} md={12}>
          <Box sx={{ display: 'flex', justifyContent: "center" }}>
            <Stack direction="row" spacing={1}>
              <Fab size="small" color="info" href='https://github.com/linyejoe2' aria-label="go to My Github" title='My Github'>
                <img src={Github} height={25} width={25} />
              </Fab>
              <Fab size="small" color="info" href='mailto:linyejoe2@gmail.com' aria-label="contact me with email" title='My Email'>
                <img src={Email} height={25} width={25} />
              </Fab>
              <Fab size="small" color="info" href='https://www.linkedin.com/in/randy-lin/' aria-label="go to My LinkedIn" title='My LinkedIn'>
                <img src={LinkedIn} height={25} width={25} />
              </Fab>
              <Fab size="small" color="info" href='https://linyejoe2.github.io/' aria-label="go to My Blog" title='My Blog'>
                <img src={LogoMat} height={25} width={25} />
              </Fab>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}