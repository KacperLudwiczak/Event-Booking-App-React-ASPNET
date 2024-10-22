import { observer } from "mobx-react-lite";
import { Container, Header, Item } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";

function ServerError() {
    const {commonStore} = useStore();
    return (
        <Container>
            <Header as='h1' content='Server Error' style={{color: "#fff"}}/>
            <Header as='h3' content={commonStore.error?.message} style={{color: "#fff"}}/>
            {commonStore.error?.details && (
                <Item>
                    <Header as='h4' content='Stack trace' style={{color: "#fff"}}  />
                    <code style={{marginTop: '10px', color: "#fff"}}>{commonStore.error.details}</code>
                </Item>
            )}
        </Container>
    )
}

const ObservedServerError = observer(ServerError);
export default ObservedServerError;
