import { observer } from 'mobx-react-lite';
import { Grid, Icon, Item} from 'semantic-ui-react'
import {Activity} from "../../../app/models/activity";
interface Props {
    activity: Activity
}

function ActivityDetailedInfo({activity}: Props) {
    return (
        <Item>
        <Item.Content attached='top'>
            <Grid>
                <Grid.Column width={1}>
                    <Icon size='large' color='teal' name='info'/>
                </Grid.Column>
                <Grid.Column width={15}>
                    <p>{activity.description}</p>
                </Grid.Column>
            </Grid>
        </Item.Content>
        <Item.Content attached>
            <Grid verticalAlign='middle'>
                <Grid.Column width={1}>
                    <Icon name='calendar' size='large' color='teal'/>
                </Grid.Column>
                <Grid.Column width={15}>
        <span>
          {activity.date}
        </span>
                </Grid.Column>
            </Grid>
        </Item.Content>
        <Item.Content attached>
            <Grid verticalAlign='middle'>
                <Grid.Column width={1}>
                    <Icon name='marker' size='large' color='teal'/>
                </Grid.Column>
                <Grid.Column width={11}>
                    <span>{activity.venue} | {activity.city}</span>
                </Grid.Column>
            </Grid>
        </Item.Content>
    </Item>

    )
}

const ObservedActivityDetailedInfo = observer(ActivityDetailedInfo);
export default ObservedActivityDetailedInfo;