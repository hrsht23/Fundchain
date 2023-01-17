import React from "react";
import { Grid, Step, Input, Button, Dropdown } from "semantic-ui-react";
import { Link } from "../../../routes";
import Layout from "../../../components/Layout";

export default () => {
  const countryOptions = [
    { key: "af", value: "af", text: "Now" },
    { key: "ax", value: "ax", text: "Best" },
    { key: "al", value: "al", text: "Most viewed" }
  ];
  return (
    <Layout>
      <Grid columns={2}>
        <Grid.Column>
          <Step.Group size="mini">
            <Step completed>
              <Step.Content>
                <Step.Title>Step 1</Step.Title>
              </Step.Content>
            </Step>

            <Step completed>
              <Step.Content>
                <Step.Title>Step 2</Step.Title>
              </Step.Content>
            </Step>

            <Step active>
              <Step.Content>
                <Step.Title>Step 3</Step.Title>
              </Step.Content>
            </Step>
          </Step.Group>
          <h4>Telegram:</h4>
          <Input focus fluid placeholder="Telegram" />
          <h4>Twitter:</h4>
          <Input focus fluid placeholder="Twitter" />
          <h4>Website:</h4>
          <Input focus fluid placeholder="Website" />
          <br />
          <Dropdown
            placeholder="Promote"
            fluid
            search
            selection
            options={countryOptions}
          />
          <br />
          <Button primary fluid>
            Next
          </Button>
        </Grid.Column>
        <Grid.Column>
          <h3>Here we can place rules</h3>
          <p>
            Now you can browse privately, and other people who use this device
            won’t see your activity. However, downloads, bookmarks and reading
            list items will be saved. Learn more Chrome won’t save the following
            information:
          </p>
          <h3>Or recommendation</h3>
          <p>
            Now you can browse privately, and other people who use this device
            won’t see your activity. However, downloads, bookmarks and reading
            list items will be saved. Learn more Chrome won’t save the following
            information:
          </p>
        </Grid.Column>
      </Grid>
    </Layout>
  );
};
