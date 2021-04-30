import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as S from "./styled"

const Avatar = () => {
  return (
    <S.AvatarWrapper>
      <StaticImage
        src="../../images/profile-photo.png"
        alt="Victor Hugo Avatar"
        placeholder="blurred"
      />
    </S.AvatarWrapper>
  )
}

export default Avatar