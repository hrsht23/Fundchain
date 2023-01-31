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
import { Link } from "../routes";
import Layout from "./Layout";
// import ipfs from "../ethereum/ipfs";

export default ({formData, setFormData}) => {
  const style = {
    borderRadius: 0,
    opacity: 0.7,
    padding: "1em"
  };
  const captureFile = async (event) => {
    event.preventDefault();
    setFormData({...formData, logoUrl: event.target.files[0]});
    const file = event.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      setFormData({...formData, logoUrl: reader.result });
    };   
  }
  return (
    <Layout>
      <Grid columns={2}>
        <Grid.Column>
          <h2>Step 2</h2>
          <h4>Sale Start Date:</h4>
          <Input 
            type="date"
            focus 
            placeholder="Start Date"
            onChange={event => setFormData({...formData, startDate: (new Date(event.target.value)).getTime()})} />
          <h4>Sale End Date:</h4>
          <Input 
            type="date"
            focus 
            placeholder="Start Date"
            onChange={event => setFormData({...formData, endDate: (new Date(event.target.value)).getTime()})} />
          <h4>Minimum Deposit:</h4>
          <Input 
            focus 
            placeholder="Start Date"
            value={formData.minDeposit}
            onChange={event => setFormData({...formData, minDeposit: event.target.value})} />
          <h4>Maximum Deposit:</h4>
          <Input 
            focus 
            placeholder="Start Date"
            value={formData.maxDeposit}
            onChange={event => setFormData({...formData, maxDeposit: event.target.value})} />
          <h4>Claim Days:</h4>
          <Input 
            focus 
            placeholder="Start Date"
            value={formData.claimDays}
            // onChange={event => setFormData({...formData, claimDays: event.target.value})} 
          />
          <h4>Buyback Fee:</h4>
          <Input 
            focus 
            placeholder="Start Date"
            value={formData.buyBackFee}
            onChange={event => setFormData({...formData, buyBackFee: event.target.value})} />
          <h4>Total Discount:</h4>
          <Input 
            focus 
            placeholder="Start Date"
            value={formData.totalDiscount}
            onChange={event => setFormData({...formData, totalDiscount: event.target.value})} />
          <h4>Telegram:</h4>
          <Input 
            focus 
            placeholder="Start Date"
            value={formData.telegram}
            onChange={event => setFormData({...formData, telegram: event.target.value})} />
          <h4>Twitter:</h4>
          <Input 
            focus 
            placeholder="Start Date"
            value={formData.twitter}
            onChange={event => setFormData({...formData, twitter: event.target.value})} />
          <h4>Website:</h4>
          <Input 
            focus 
            placeholder="Start Date"
            value={formData.website}
            onChange={event => setFormData({...formData, website: event.target.value})} />
          <br />
          <h4>Upload Logo</h4>
          <Input 
            type="file"
            onChange={captureFile}
            // onChange={event => setFormData({...formData, logoUrl: event.target.files[0]})} 
          />
          {formData.logoUrl && <p>{formData.logoUrl.name}</p>}
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
