import React from 'react'
import Testemonial from '../components/testemonial'

function TestemonialContainer() {
    return (
        <Testemonial>
            <Testemonial.Title>What they've said</Testemonial.Title>
            <Testemonial.List>
                <Testemonial.Testemony>
                    <Testemonial.Image src="images/avatar-anisha.png" />
                    <Testemonial.SubTitle>Anisha Li</Testemonial.SubTitle>
                    <Testemonial.Text>
                       " Manage has supercharge our team's workflow. The maintain visibility on larger milstones at all times keeps everyone motivated."
                    </Testemonial.Text>
                </Testemonial.Testemony>
                <Testemonial.Testemony>
                    <Testemonial.Image src="images/avatar-ali.png" />
                    <Testemonial.SubTitle>Ali Bravo</Testemonial.SubTitle>
                    <Testemonial.Text>
                        "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confucsing and everyone is much more focused."
                    </Testemonial.Text>
                </Testemonial.Testemony>
                <Testemonial.Testemony>
                    <Testemonial.Image src="images/avatar-richard.png" />
                    <Testemonial.SubTitle>Richard Watts</Testemonial.SubTitle>
                    <Testemonial.Text>
                        "Manage allows us to provide structure and productivity. It keeps us organized and focused. I can't stop recommend them to everyone I talk to"
                    </Testemonial.Text>
                </Testemonial.Testemony>
                {/* <Testemonial.Testemony>
                    <Testemonial.Image src="images/avatar-shanai.png" />
                    <Testemonial.SubTitle></Testemonial.SubTitle>
                    <Testemonial.Text></Testemonial.Text>
                </Testemonial.Testemony> */}
            </Testemonial.List>
            <Testemonial.Button>Get Started</Testemonial.Button>
        </Testemonial>
    )
}

export default TestemonialContainer
