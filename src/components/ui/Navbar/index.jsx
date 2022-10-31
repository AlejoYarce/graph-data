import React from 'react'
import { useRouter } from 'next/router'

import {
  NavBarContainer,
  NavBarContent,
  NavBarLogo,
  NavBarSection,
} from './styles'
import { ROUTES } from '~app/utils/constants'

const Navbar = () => {
  const router = useRouter()

  return (
    <NavBarSection>
      <NavBarContainer>
        <NavBarContent>
          <NavBarLogo onClick={() => router.push(ROUTES.HOME)}>
            Formularios
          </NavBarLogo>
        </NavBarContent>
      </NavBarContainer>
    </NavBarSection>
  )
}

export default Navbar
