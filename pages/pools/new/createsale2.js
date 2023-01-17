import React from "react";
import {
  Grid,
  Step,
  Input,
  Button,
  Checkbox,
  Popup,
  Icon
} from "semantic-ui-react";
import { Link } from "../../../routes";
import Layout from "../../../components/Layout";

export default () => {
  const style = {
    borderRadius: 0,
    opacity: 0.7,
    padding: "1em"
  };
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

            <Step active>
              <Step.Content>
                <Step.Title>Step 2</Step.Title>
              </Step.Content>
            </Step>

            <Step disabled>
              <Step.Content>
                <Step.Title>Step 3</Step.Title>
              </Step.Content>
            </Step>
          </Step.Group>
          <h4>Sale Start Date:</h4>
          <Input focus placeholder="Start Date" />
          <h4>Sale End Date:</h4>
          <Input focus placeholder="End Date" />
          <h4>Minimum Deposit:</h4>
          <Input focus placeholder="End Date" />
          <h4>Maximum Deposit:</h4>
          <Input focus placeholder="End Date" />
          <h4>Claim Days:</h4>
          <Input focus placeholder="End Date" />
          <h4>Buyback Fee:</h4>
          <Input focus placeholder="End Date" />
          <h4>Total Discount:</h4>
          <Input focus placeholder="End Date" />
          <h4>Telegram:</h4>
          <Input focus fluid placeholder="Telegram" />
          <h4>Twitter:</h4>
          <Input focus fluid placeholder="Twitter" />
          <h4>Website:</h4>
          <Input focus fluid placeholder="Website" />
          <br />
          <h4>Upload Logo</h4>
          <Button>Upload</Button>
          <h4>Pancakeswap Liquidity</h4>
          <Popup
            trigger={<Icon name="question circle outline" />}
            content="Popup with a custom style prop"
            style={style}
            inverted
          />
          <Input focus fluid placeholder="Liquidity" />
          <br />
          <Checkbox label="Burn Enabled" />
          <Popup
            trigger={<Icon name="question circle outline" />}
            content="Popup with a custom style prop"
            style={style}
            inverted
          />
          <br />
          <Checkbox label="Manual Buyback Enabled" />
          <Popup
            trigger={<Icon name="question circle outline" />}
            content="Popup with a custom style prop"
            style={style}
            inverted
          />
          <Link route="/pools/new/createsale3">
          <Button primary fluid>
            Next
          </Button>
          </Link>
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
