import React, { useState } from 'react'
import Header from '../components/Header'

function HeaderContainer() {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <>
        <Header>
            <Header.Logo to="/" src='images/logo.svg' alt="Manage" />
            <Header.Menu>
                <Header.Link href="#">Pricing</Header.Link>
                <Header.Link href="#">Product</Header.Link>
                <Header.Link href="#">About us</Header.Link>
                <Header.Link href="#">Careers</Header.Link>
                <Header.Link href="#">Community</Header.Link>
            </Header.Menu>
            <Header.Button>Get Started</Header.Button>
            {showMenu ?
             <Header.ButtonCloseMenu onClick={() => setShowMenu(false)}></Header.ButtonCloseMenu> 
             : <Header.ButtonMenu onClick={() => setShowMenu(true)}></Header.ButtonMenu>}
        </Header>
        {showMenu && <Header.Nav>
                        <Header.Link href="#">Pricing</Header.Link>
                        <Header.Link href="#">Product</Header.Link>
                        <Header.Link href="#">About us</Header.Link>
                        <Header.Link href="#">Careers</Header.Link>
                        <Header.Link href="#">Community</Header.Link>
                    </Header.Nav>}
        </>
    )
}

export default HeaderContainer
