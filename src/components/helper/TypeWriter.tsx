import React from "react";
import Typewriter from "typewriter-effect";
import { FC } from "react";

export const TypeWriter: FC = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Backend Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}