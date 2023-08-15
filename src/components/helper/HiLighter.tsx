import React from "react";
import { FC } from "react";
import Theme from "../../Theme";

interface p {
  children: React.ReactNode
}

export const HiLighter: FC<p> = (props: p) => {
  return (
    <span style={{ color: Theme.darkMode.palette.text.secondary }}>
      {props.children}
    </span>
  )
}