import { NavLink } from 'react-router-dom'

import { HeaderContainer } from './styles'
import logoIgniteTimer from '../../assets/logo-ignite-timer.svg'
import { Scroll, Timer } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgniteTimer} alt="" />

      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>

        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
