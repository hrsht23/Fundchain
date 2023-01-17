import React, { useState, useEffect } from "react";
import { Grid, Step, Input, Button } from "semantic-ui-react";
import { Link } from "../../../routes";
import Layout from "../../../components/Layout";

export default () => {
  const [formData, setFormData] = useState({
    tokenAddress: "",
    tokenName: "",
    tokenSymbol: "",
    tokenDecimal: "",
    tokenSupply: "",
    tokenForDiscount: "",
    startDate: "",
    endDate: "",
    maxDeposit: "",
    minDeposit: "",
    claimDays: "",
    buyBackFee: "",
    totalDiscount: "",
    telegram: "",
    twitter: "",
    website: "",
    logoUrl: "",
  });
  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };
  useEffect(() => {
    console.log(formData)
  }, [formData]);
  return (
    <Layout>
      <Grid columns={2}>
        <Grid.Column>
          <Step.Group size="mini">
            <Step active>
              <Step.Content>
                <Step.Title>Step 1</Step.Title>
              </Step.Content>
            </Step>

            <Step disabled>
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
          <h4>Enter Token Address:</h4>
          <Input 
            focus 
            fluid 
            placeholder="token address"
            name="tokenAddress"
            value={formData.tokenAddress}
            onChange={handleChange} />
          <h4>Enter Token Name:</h4>
          <Input 
            focus 
            fluid 
            placeholder="token name"
            name="tokenName"
            value={formData.tokenName}
            onChange={handleChange} />
          <h4>Enter Token Symbol:</h4>
          <Input 
            focus 
            fluid 
            placeholder="token symbol"
            name="tokenSymbol"
            value={formData.tokenSymbol}
            onChange={handleChange} />
          <h4>Enter Token Decimal:</h4>
          <Input 
            focus 
            fluid 
            placeholder="token decimal"
            name="tokenDecimal"
            value={formData.tokenDecimal}
            onChange={handleChange} />
          <h4>Enter Token Supply:</h4>
          <Input 
            focus 
            fluid 
            placeholder="token supply"
            name="tokenSupply"
            value={formData.tokenSupply}
            onChange={handleChange} />
          <h4>Number of tokens to offer in Discount:</h4>
          <Input 
            focus 
            fluid 
            placeholder="token address"
            name="tokenForDiscount"
            value={formData.tokenForDiscount}
            onChange={handleChange} />
          <Link route="/pools/new/createsale2" >
            <Button 
              primary 
              fluid>
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
