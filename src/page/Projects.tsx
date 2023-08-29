import { Button, Container, SvgIcon, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import { p } from '../service/type';
import ReactMarkdown from 'react-markdown'
import type { } from '@mui/material/themeCssVarsAugmentation';


// const Item = styled(Paper)(({ theme }) => ({
//   // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

interface IProject {
  name: string,
  description: string,
  preview?: string,
  // link: [{ name: string, url: string }]
  link?: { name: string, url: string }[]
}

const projects: IProject[] = [
  {
    name: "Chose the Best Social Media UI Design in Your Mind!",
    description:
      `
This is an interactive online questionnaire aimed at collecting user preferences for the UI design of the four major social media platforms. In creating this questionnaire, we aim to achieve two main objectives:

  + Create an engaging and interactive survey that replaces the mundane process of traditional form-filling.
  + Gain insights into the preferred UI designs of users in the Taiwan region for the four major social media platforms. Additionally, we intend to leverage this data to assist in the development of new social media platforms.
      `,
    preview: "https://i.imgur.com/YN9C88y.jpg",
    link: [
      { name: "demo", url: "https://linyejoe2.github.io/app-ui-survey-react/" },
      { name: "code", url: "https://github.com/linyejoe2/app-ui-survey-react" }
    ]
  },
  {
    name: "3D Car Game",
    description:
      `
A 3D game made with Three.js and React, In this game, you can control a car and race on a race track!
      `,
    preview: "https://i.imgur.com/rkIQRz8.png",
    link: [{ name: "demo", url: 'https://linyejoe2.github.io/3d-car-game/' }, { name: "code", url: 'https://github.com/linyejoe2/3d-car-game' }]
  },
  {
    name: "Situation puzzle with ChatGPT",
    description:
      `
A LINE bot that combines the chat capabilities of ChatGPT with LINE's messaging features. 

You can interact with this bot to play a game called Situation puzzle.
      `,
    // preview: "https://i.imgur.com/gNMgLTn.png"
    preview: "https://i.imgur.com/O6aZt7M.png"
  },
  {
    name: "And More...",
    description:
      `
Follow my github for more projects!
`,
    link: [{
      name: 'github',
      url: "https://github.com/linyejoe2"
    }]
  }
]

interface p2 extends p {
  project: IProject
}

const ButtonGroup = (a: { name: string, url: string }[]) => {
  const group: JSX.Element[] = []
  for (const ele of a) {
    if (ele.name == 'demo') {
      group.push(
        <Button variant="contained">
          <SvgIcon sx={{ marginRight: '5px', strokeWidth: '2px', height: '20px', width: '20px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
            </svg>
          </SvgIcon>
          <Typography textTransform='none'>
            Demo
          </Typography>
        </Button>
      )
    }
    if (ele.name == 'code') {
      group.push(
        <Button variant="contained">
          <SvgIcon sx={{ marginRight: '5px', strokeWidth: '2px', height: '20px', width: '20px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
          </SvgIcon>
          <Typography textTransform='none'>
            Code
          </Typography>
        </Button>
      )
    }
    if (ele.name == 'github') {
      group.push(
        <Button variant="contained">
          <SvgIcon sx={{ marginRight: '5px', strokeWidth: '2px', height: '20px', width: '20px', fill: "#fff" }}>
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-slate-900"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"></path></svg>
          </SvgIcon>
          <Typography textTransform='none'>
            Github
          </Typography>
        </Button>

      )
    }
  }
  return (<Box pt={2} display="flex" justifyContent="space-evenly" >
    {group}
  </Box>)
}

const TestBox = styled('div')(({ theme }) => ({
  '::-webkit-scrollbar-track': { backgroundColor: theme.palette.background.default }
}))

const Item = (props: p2) => {
  // const Item = (props: {p, project: IProject}) => {
  return (
    <Box display="flex" flexDirection="column"
      boxShadow="2px 2px 5px 3px rgba(119,53,136,.459), -2px -2px 5px 3px rgba(119,53,136,.459)"
      borderRadius="15px"
      sx={{
        backgroundColor: "background.default",
        height: "550px",
      }} p={2}>
      {props.children}
      <Box>
        <Box component="img" borderRadius='10px' width="100%" height='165px' src={props.project.preview ?? 'https://i.imgur.com/6ilYGnm.jpg'} alt="preview"></Box>

      </Box>
      <h3 style={{ textAlign: "center",marginTop: "5px", marginBottom: "0" }}>{props.project.name}</h3>
      <TestBox sx={{ height: "100%", overflowY: "scroll", "::-webkit-scrollbar": { width: '2px' }, }}>
        <ReactMarkdown>{props.project.description}</ReactMarkdown>
      </TestBox>

      {props.project.link ?
        ButtonGroup(props.project.link)
        : undefined}
    </Box>
  )
}

export default function Projects() {
  return (
    <Container >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={7}>
          {projects.map(ele => (
            <Grid xs={4}>
              <Item project={ele}></Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}