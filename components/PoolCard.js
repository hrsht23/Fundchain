import React from "react";
import { Card, Segment, Label, Progress, Icon, Button, Image } from "semantic-ui-react";
import {Link} from "../routes";

export default () => {
    return (
        <Card>
            <Segment raised>
                <Label as="a" color="black" ribbon>
                    Overview
                </Label>
                <Card.Content>
                    <Image floated="left" size="mini" src="/image/1.jpg" />
                    <Card.Header>KOD</Card.Header>
                    <Card.Meta>Kody Token</Card.Meta>
                    <Card.Description>Status: LIVE</Card.Description>
                    <Card.Description>Sale Start: 20 Nov - 19:00 PM</Card.Description>
                    <Card.Description>Sale Ends: 24 Nov - 19:00 PM</Card.Description>
                    <Progress percent={20} success>
                        Already sold: 20%
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