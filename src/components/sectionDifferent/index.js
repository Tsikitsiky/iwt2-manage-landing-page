import React from 'react'
import { Container, Title, Text, SubTitle, Pane, Wrapper } from './styles/sectionDifferent'

export default function SectionDiff({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

SectionDiff.Title = function SectionDiffTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

SectionDiff.Text = function SectionDiffText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}

SectionDiff.SubTitle = function SectionDiffSubTitle({children, ...restProps}) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

SectionDiff.Pane = function SectionDiffPane({children, ...restProps}) {
    return <Pane {...restProps}>{children}</Pane>
}

SectionDiff.Wrapper = function SectionDiffWrapper({children, ...restProps}) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}