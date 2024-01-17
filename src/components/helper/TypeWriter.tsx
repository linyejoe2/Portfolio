import Typewriter from "typewriter-effect";
import { FC } from "react";
import { useTranslation } from 'react-i18next'

export const TypeWriter: FC = () => {
  const { t } = useTranslation()
  return (
    <Typewriter
      options={{
        strings: [
          t('main.typeWriter.1'),
          t('main.typeWriter.2'),
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}