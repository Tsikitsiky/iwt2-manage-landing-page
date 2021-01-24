import React from 'react'
import { MainHeader } from '../components/MainHeader'

function MainHeaderContainer() {
    return (
        <MainHeader>
            <MainHeader.Title>Bring everyone together to build better products.</MainHeader.Title>
            <MainHeader.Text>
                Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
            </MainHeader.Text>
            <MainHeader.Button>Get Started</MainHeader.Button>
        </MainHeader>
    )
}

export default MainHeaderContainer
