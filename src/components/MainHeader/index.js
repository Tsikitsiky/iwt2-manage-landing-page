import React from 'react'
import { Container, Title, Text, Button } from './styles/mainHeader'

export function MainHeader({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

MainHeader.Title = function MainHeaderTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

MainHeader.Text = function MainHeaderText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}

MainHeader.Button = function MainHeaderButton({children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
}
