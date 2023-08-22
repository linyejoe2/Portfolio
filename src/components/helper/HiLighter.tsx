import React from "react";
import { FC } from "react";
import { ThemeProvider } from "@emotion/react";
import { Box } from "@mui/material";

interface p {
  children: React.ReactNode
}

export const HiLighter: FC<p> = (props: p) => {
  return (
    // <span style={{ color: 'text.secondary' }}>
    //   {props.children}
    // </span>
    <Box component="span" sx={{ color: 'text.secondary' }}>
      {props.children}
    </Box>
  )
}