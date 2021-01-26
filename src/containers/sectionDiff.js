import React from 'react'
import SectionDiff from '../components/sectionDifferent'

function SectionDiffContainer() {
    return (
        <SectionDiff>
            <SectionDiff.Pane>
                <SectionDiff.Title>What's different about Manage?</SectionDiff.Title>
                <SectionDiff.Text>
                    Manage provides all the functionality you team needs, without the complexity. Our software is tailor-made for modern digital product teams.
                </SectionDiff.Text>
            </SectionDiff.Pane>
            <SectionDiff.Pane>
                <SectionDiff.Wrapper>
                    <SectionDiff.SubTitle>Track Company wide process</SectionDiff.SubTitle>
                    <SectionDiff.Text>
                        See your day-to-day tasks fit into the wide vision. Go from tracking progress at a milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.
                    </SectionDiff.Text>
                </SectionDiff.Wrapper>
                <SectionDiff.Wrapper>
                    <SectionDiff.SubTitle>Advanced built-in reports</SectionDiff.SubTitle>
                    <SectionDiff.Text>
                        Set internal delivery estimstes and track progress towards company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.
                    </SectionDiff.Text>
                </SectionDiff.Wrapper>
                <SectionDiff.Wrapper>
                    <SectionDiff.SubTitle>Everything you need in one place</SectionDiff.SubTitle>
                    <SectionDiff.Text>
                        Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.
                    </SectionDiff.Text>
                </SectionDiff.Wrapper>
            </SectionDiff.Pane>
        </SectionDiff>
    )
}

export default SectionDiffContainer
