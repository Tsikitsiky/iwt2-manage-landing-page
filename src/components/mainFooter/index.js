import React from 'react'
import { Container, Button, Text } from './styles/mainFooter'

export default function MainFooter({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

MainFooter.Text = function MainFooterText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}

MainFooter.Button = function MainFooterButton({children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
}