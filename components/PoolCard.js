import React from "react";
import { Card, Segment, Label, Progress, Icon, Button, Image } from "semantic-ui-react";
import {Link} from "../routes";

export default (props) => {
    function timeConverter(UNIX_timestamp){
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = String(date).padStart(2, "0") + ' ' + month + ' ' + year + ' ' + String(hour).padStart(2, "0") + ':' + String(min).padStart(2, "0") + ':' + String(sec).padStart(2, "0") ;
        return time;
    }
    const startDate = timeConverter(props.startDate);
    const endDate = timeConverter(props.endDate);
    return (
        <Card>
            <Segment raised>
                <Label as="a" color="black" ribbon>
                    {props.promotion}
                </Label>
                <Card.Content>
                    <Image floated="left" size="mini" src="/image/1.jpg" />
                    <Card.Header>{props.symbol}</Card.Header>
                    <Card.Meta>{props.name}</Card.Meta>
                    <Card.Description>Status: {props.status}</Card.Description>
                    <Card.Description>Sale Start: {startDate}</Card.Description>
                    <Card.Description>Sale Ends: {endDate}</Card.Description>
                    <Progress percent={props.alreadySold} success>
                        Already sold: {props.alreadySold}%
                    </Progress>
                </Card.Content>
                <Card.Content extra>
                    <Icon name="twitter square" />
                    <Icon name="twitter square" />
                    <Icon name="twitter square" />
                    <Link route={`/pools/${props.poolAddress}`}>
                        <Button color="blue" floated="right">
                            View
                        </Button>
                    </Link>
                </Card.Content>
            </Segment>
        </Card>
    );
}