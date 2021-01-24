import React from 'react'
import { Container, Link, Logo, Menu, Button, ButtonMenu, Nav, ButtonCloseMenu } from './styles/header'

function Header({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Header.Logo = function HeaderLogo({...restProps}) {
    return <Logo {...restProps} />
}

Header.Link = function HeaderLink({children, ...restProps}) {
    return <Link {...restProps}>{children}</Link>
}

Header.Menu = function HeaderMenu({children, ...restProps}) {
    return <Menu {...restProps}>{children}</Menu>
}

Header.Nav = function HeaderNav({children, ...restProps}) {
    return <Nav {...restProps}>{children}</Nav>
}

Header.Button = function HeaderButton({children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
}

Header.ButtonMenu = function HeaderButtonMenu({children, ...restProps}) {
    return <ButtonMenu {...restProps}>{children}</ButtonMenu>
}

Header.ButtonCloseMenu = function HeaderButtonCloseMenu({children, ...restProps}) {
    return <ButtonCloseMenu {...restProps}>{children}</ButtonCloseMenu>
}

export default Header
