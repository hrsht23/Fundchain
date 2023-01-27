import React, { useEffect, useState } from "react";
import { Grid, Step, Input, Button } from "semantic-ui-react";
import { Link } from "../routes";
import Layout from "./Layout";
import Token from "../ethereum/token";
import web3 from "../ethereum/web3";

export default ({ formData, setFormData }) => {
  const [tokenAddress, setTokenAddress] = useState("");
  const [error, setError] = useState("");

  const fetchTokenDetails = async (tokenAddress) => {
    // const tokenAddress = event.target.value;
    console.log(tokenAddress);
    const tokenInstance = Token(tokenAddress);
    const name = await tokenInstance.methods.name().call();
    const symbol = await tokenInstance.methods.symbol().call();
    const decimals = await tokenInstance.methods.decimals().call();
    const totalSupply = await tokenInstance.methods.totalSupply().call();
    setFormData({ ...formData, tokenName: name, tokenAddress, tokenSymbol: symbol, tokenDecimal: decimals, tokenSupply: totalSupply })
  }

  useEffect(() => {
    if (tokenAddress.length === 42) {
      if (web3.utils.isAddress(tokenAddress))
        fetchTokenDetails(tokenAddress);
      else {
        setError("Invalid Address");
        console.log(error);
      }
    }
  }, [tokenAddress]);

  return (
    <Layout>
      <Grid columns={2}>
        <Grid.Column>
          <h2>Step 1</h2>
          <h4>Enter Token Address:</h4>
          <Input
            type="text"
            focus
            fluid
            placeholder="token address"
            name="tokenAddress"
            value={tokenAddress}
            onChange={(e) => { setTokenAddress(e.target.value) }}
          />
          {error ? <p>{error}</p> : null}
          {/* <Input 
            type="text"
            focus 
            fluid 
            placeholder="token address"
            name="tokenAddress"
            // value={formData.tokenAddress}
            value={tokenAddress}
            // onChange={event => setFormData({...formData, tokenAddress: event.target.value})}
            onChange={(e) => {setTokenAddress(e.target.value)}} /> */}
          <h4>Enter Token Name:</h4>
          <Input
            disabled
            fluid
            placeholder="token name"
            name="tokenName"
            value={formData.tokenName} />
          <h4>Enter Token Symbol:</h4>
          <Input
            disabled
            fluid
            placeholder="token symbol"
            name="tokenSymbol"
            value={formData.tokenSymbol} />
          <h4>Enter Token Decimal:</h4>
          <Input
            disabled
            fluid
            placeholder="token decimal"
            name="tokenDecimal"
            value={formData.tokenDecimal} />
          <h4>Enter Token Supply:</h4>
          <Input
            disabled
            fluid
            placeholder="token supply"
            name="tokenSupply"
            value={formData.tokenSupply} />
          <h4>Number of tokens to offer in Discount:</h4>
          <Input
            focus
            fluid
            placeholder="token address"
            name="tokenForDiscount"
            value={formData.tokenForDiscount}
            onChange={event => setFormData({ ...formData, tokenForDiscount: event.target.value })}
          />
          {/* <Link route="/pools/new/createsale2" >
            <Button 
              primary 
              fluid>
              Next
            </Button>
          </Link> */}
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
