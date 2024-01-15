import Typewriter from "typewriter-effect";
import { FC } from "react";

export const TypeWriter: FC = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Full-stack Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}