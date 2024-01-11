import { Fab } from "@mui/material"
import { Container, Box, Stack } from "@mui/system"
import { HiLighter } from "../components/helper/HiLighter"
import { TypeWriter } from "../components/helper/TypeWriter"
import Grid from '@mui/material/Unstable_Grid2';

import HomeMain from '/img/exam/home-main.svg'
import avatar from '/img/avatar.jpg'
import Github from '/img/github.svg'
import Email from '/img/email.svg'
import LinkedIn from '/img/linkedIn.svg'
import LogoMat from '/img/logo-mat.svg'

export default function Home() {
  return (<Container sx={{ paddingTop: "" }}>
    <Grid container spacing={2}>
      <Grid xs={12} md={7} sx={{ paddingLeft: "62px", paddingTop: '80px', '@media (max-width: 900px)': { padding: "30px", paddingRight: "0" } }}>
        <h1>Hi There!</h1>
        <h1>I'm <HiLighter>Randy Lin</HiLighter> </h1>
        {/* <Typography variant='h2'>
        I'm <HiLighter>Randy Lin</HiLighter>
      </Typography> */}
        <h1 >A <HiLighter><TypeWriter /></HiLighter></h1>
      </Grid>
      <Grid xs={12} md={5}>
        <img src={HomeMain} alt="HomeMain" style={{ height: "auto", maxWidth: "100%" }} />
      </Grid>
      <Grid md={12} sx={{ height: "100px", '@media (max-width: 900px)': { display: 'none' } }}></Grid>
      <Grid xs={12} md={4} sx={{ padding: "35px", margin: "auto", display: "flex", justifyContent: "center" }}>
        <img src={avatar} alt="HomeMain" style={{ height: "auto", maxWidth: "80%", borderRadius: "500px" }} />
      </Grid>
      <Grid xs={12} md={8} sx={{ paddingLeft: "62px", '@media (max-width: 900px)': { padding: "20px" } }}>
        <h1 style={{ textTransform: 'uppercase', textAlign: "center", marginBottom: "50px" }}>Allow me to <HiLighter>introduce</HiLighter> myself</h1>
        <p style={{ fontSize: "20px" }}>
          I like programming, and I also like to <HiLighter>create useful programs</HiLighter> to help users.
          <br /><br />
          I'm using classics langauges like <HiLighter>TypeScript, C++</HiLighter> and <HiLighter>Python</HiLighter>.
          <br /><br />
          I'm proficient in <HiLighter>React, Vite, GIS</HiLighter> (Geographic Information Systems) and <HiLighter>QT Application</HiLighter>.
          <br /><br />
          I am eagerly seeking the next phase of my career in programming, where I can dedicate my efforts to the programming I'm passionate about.
          <br /><br />
          If you happen to be looking for someone proficient in <HiLighter>TypeScript, React</HiLighter>, or if you are looking for a <HiLighter>fast learner</HiLighter> and a <HiLighter>team player</HiLighter>, please feel free to <HiLighter>reach out</HiLighter> to me.
        </p>
      </Grid>
      <Grid xs={12} md={12}>
        <h1 style={{ textAlign: "center", margin: "50px auto 0 auto" }}> <HiLighter>Contact</HiLighter> me</h1>
      </Grid>
      <Grid xs={12} md={12}>
        <Box sx={{ display: 'flex', justifyContent: "center" }}>
          <Stack direction="row" spacing={1}>
            <Fab size="small" href='https://github.com/linyejoe2' aria-label="go to My Github" target='github' title='My Github'>
              <img src={Github} height={25} width={25} />
            </Fab>
            <Fab size="small" href='mailto:linyejoe2@gmail.com' aria-label="contact me with email" title='My Email'>
              <img src={Email} height={25} width={25} />
            </Fab>
            <Fab size="small" href='https://www.linkedin.com/in/randy-lin/' aria-label="go to My LinkedIn" target='linkedin' title='My LinkedIn'>
              <img src={LinkedIn} height={25} width={25} />
            </Fab>
            <Fab size="small" href='https://linyejoe2.github.io/' aria-label="go to My Blog" target='blog' title='My Blog'>
              <img src={LogoMat} height={25} width={25} />
            </Fab>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  </Container>)
}