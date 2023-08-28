import * as React from 'react';
import { Button, Container, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { p } from '../service/type';
import ReactMarkdown from 'react-markdown'
import { createElement } from 'react';


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
    name: "Chose the Best Social Media UI Design in Your Mind!",
    description:
      `
This is an interactive online questionnaire aimed at collecting user preferences for the UI design of the four major social media platforms. In creating this questionnaire, we aim to achieve two main objectives:

  + Create an engaging and interactive survey that replaces the mundane process of traditional form-filling.
  + Gain insights into the preferred UI designs of users in the Taiwan region for the four major social media platforms. Additionally, we intend to leverage this data to assist in the development of new social media platforms.
      `,
    preview: "https://i.imgur.com/YN9C88y.jpg"
  },
  {
    name: "Chose the Best Social Media UI Design in Your Mind!",
    description:
      `
This is an interactive online questionnaire aimed at collecting user preferences for the UI design of the four major social media platforms. In creating this questionnaire, we aim to achieve two main objectives:

+ Create an engaging and interactive survey that replaces the mundane process of traditional form-filling.
+ Gain insights into the preferred UI designs of users in the Taiwan region for the four major social media platforms. Additionally, we intend to leverage this data to assist in the development of new social media platforms.
  `,
    preview: "https://i.imgur.com/YN9C88y.jpg"
  },
  {
    name: "Chose the Best Social Media UI Design in Your Mind!",
    description:
      `
This is an interactive online questionnaire aimed at collecting user preferences for the UI design of the four major social media platforms. In creating this questionnaire, we aim to achieve two main objectives:

+ Create an engaging and interactive survey that replaces the mundane process of traditional form-filling.
+ Gain insights into the preferred UI designs of users in the Taiwan region for the four major social media platforms. Additionally, we intend to leverage this data to assist in the development of new social media platforms.
`,
    preview: "https://i.imgur.com/YN9C88y.jpg"
  },
  {
    name: "Chose the Best Social Media UI Design in Your Mind!",
    description:
      `
This is an interactive online questionnaire aimed at collecting user preferences for the UI design of the four major social media platforms. In creating this questionnaire, we aim to achieve two main objectives:

+ Create an engaging and interactive survey that replaces the mundane process of traditional form-filling.
+ Gain insights into the preferred UI designs of users in the Taiwan region for the four major social media platforms. Additionally, we intend to leverage this data to assist in the development of new social media platforms.
`
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
          Demo
        </Button>
      )
    }
    if (ele.name == 'code') {
      group.push(
        <Button variant="contained">
          Code
        </Button>
      )
    }
  }
  return (<Box pt={2} display="flex" justifyContent="space-evenly" >
    {group}
  </Box>)
}

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
      <h2 style={{ textAlign: "center" }}>{props.project.name}</h2>
      <Box sx={{ height: "auto", overflowY: "scroll", "::-webkit-scrollbar": { width: '2px' } }}>
        <ReactMarkdown>{props.project.description}</ReactMarkdown>
      </Box>

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