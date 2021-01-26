import React from 'react'
import { Container, Image, SubTitle, Title, Text, Button, List, Testemony } from './styles/testemonial'

export default function Testemonial({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Testemonial.Title = function TestemonialTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Testemonial.Image = function TestemonialImage({src, ...restProps}) {
    return <Image {...restProps} src={src} />
}

Testemonial.SubTitle = function TestemonialSubtitle({children, ...restProps}) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Testemonial.Text = function TestemonialText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}

Testemonial.Button = function TestemonialButton({children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
}

Testemonial.List = function TestemonialList({children, ...restProps}) {
    return <List {...restProps}>{children}</List>
}

Testemonial.Testemony = function TestemonialTestemony({children, ...restProps}) {
    return <Testemony {...restProps}>{children}</Testemony>
}
