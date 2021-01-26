import React from 'react'
import HeaderContainer from './containers/header'
import MainFooterContainer from './containers/mainFooter'
import MainHeaderContainer from './containers/mainHeader'
import SectionDiffContainer from './containers/sectionDiff'
import TestemonialContainer from './containers/testemonial'

function App() {
    return (
        <>
        <HeaderContainer />
        <MainHeaderContainer />
        <SectionDiffContainer />
        <TestemonialContainer />
        <MainFooterContainer />
        </>
    )
}

export default App
