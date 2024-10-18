import {Button, Container, Menu} from "semantic-ui-react";

export default function NavBar() {
    return (
        <Menu inverted secondary fixed='top'>
            <Container>
                <Menu.Item header style={{ fontSize: '1.1em' }}>
                    <img src='/assets/calendar.png' alt='logo' style={{marginRight: 10}}/>
                    Reactivities
                </Menu.Item>
                <Menu.Item name='Activities' style={{ fontSize: '1em' }}/>
                <Menu.Item>
                    <Button inverted content='Create Activity' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}