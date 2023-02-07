import React from "react";
import { Grid, Step, Input, Button, Dropdown } from "semantic-ui-react";
import { Link } from "../routes";
import Layout from "./Layout";

export default ({formData, setFormData}) => {
  const countryOptions = [
    { key: "af", value: "af", text: "Now" },
    { key: "ax", value: "ax", text: "Best" },
    { key: "al", value: "al", text: "Most viewed" }
  ];
  return (
    <Layout>
      <Grid columns={2}>
        <Grid.Column>
          <h2>Step 3</h2>
          <h4>Preview</h4>
          <p>Token Address : {formData.tokenAddress}</p>
          <p>Number of Tokens allocated for discount : {formData.tokenForDiscount}</p>
          <p>Start Date : {formData.startDate}</p>
          <p>End Date : {formData.endDate}</p>
          <p>Pancakeswap Buyback : {formData.buyBackFee}</p>
          <p>Minimum Tokens to buy : {formData.minDeposit}</p>
          <p>Maximum Tokens to buy : {formData.maxDeposit}</p>
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
