import React from "react";
import Layout from "../components/Layout";
import { Link } from "../routes";
import {
  Card,
  Button,
  Image,
  Progress,
  Icon,
  Label,
  Segment,
  Dropdown
} from "semantic-ui-react";

export default () => {
  const countryOptions = [
    { key: "af", value: "af", text: "Now" },
    { key: "ax", value: "ax", text: "Best" },
    { key: "al", value: "al", text: "Most viewed" }
  ];

  return (
    <Layout>
      <Image floated="right" size="mini" src="/image/1.jpg" />
      <Image floated="right" size="mini" src="/image/1.jpg" />
      <Link route="/pools/new/createsale1">
      <Button floated="right">Create Sale</Button>
      </Link>
      <Dropdown
        placeholder="Promote"
        search
        selection
        options={countryOptions}
      />
      <h3>Discount Sales</h3>
      <Card.Group>
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
      </Card.Group>
      <a href="/#">view more</a>
    </Layout>
  );
};
