import React from "react";
import { Card, Segment, Label, Progress, Icon, Button, Image } from "semantic-ui-react";
import {Link} from "../routes";

export default (props) => {
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
                    <Card.Description>Sale Start: {props.startDate}</Card.Description>
                    <Card.Description>Sale Ends: {props.endDate}</Card.Description>
                    <Progress percent={props.alreadySold} success>
                        Already sold: {props.alreadySold}%
                    </Progress>
                </Card.Content>
                <Card.Content extra>
                    <Icon name="twitter square" />
                    <Icon name="twitter square" />
                    <Icon name="twitter square" />
                    <Link route="/pools/1">
                        <Button color="blue" floated="right">
                            View
                        </Button>
                    </Link>
                </Card.Content>
            </Segment>
        </Card>
    );
}