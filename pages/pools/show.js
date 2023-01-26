// import React, { Component } from 'react';
// import Layout from '../../components/Layout';
// import Pool from '../../ethereum/pool';
// import { Card, Grid, Portal, Segment, Button, Header, Input, Form, Checkbox } from 'semantic-ui-react';
// import ContributeForm from '../../components/ContributeForm';
// import discountmain from '../../ethereum/discountmain';
// import web3 from '../../ethereum/web3';

// class PoolShow extends Component {
// 	state = { 
// 		open: false,
// 		whitelistAddresses: '',
// 		isWhiteList: false
// 	}

// 	static async getInitialProps(props) {
// 		const pool = Pool(props.query.address);

// 		const summary = await pool.methods.getSummary().call();

// 		return {
// 			poolAddress: props.query.address,
// 			tokenAddress: summary[0],
// 			totalSupply: summary[1],
// 			tokensSold: summary[2],
// 			tokensAvailable: summary[3],
// 			startDate: summary[4],
// 			endDate: summary[5],
// 			burnEnabled: summary[6],
// 			manualBuyBack: !summary[7],
// 			buyBackPercent: summary[8],
// 			manager: summary[9],
// 			minDeposit: summary[10],
// 			maxDeposit: summary[11]
// 		};
// 	}
	
// 	handleClose = () => this.setState({ open: false })
// 	handleOpen = () => this.setState({ open: true })
// 	onWhitelist = (event) => {
// 		event.preventDefault();
// 		console.log(this.state.whitelistAddresses);
// 	}
// 	handleWhitelist = async (event) => {
// 		event.preventDefault();
// 		const whiteliststatus = await discountmain.methods.isWhiteList(this.props.poolAddress).call();
// 		const accounts = await web3.eth.getAccounts();

// 		await discountmain.methods.poolWhiteListUpdate(
// 			this.props.poolAddress,
// 			!whiteliststatus
// 		).send({
// 			from: accounts[0]
// 		})
// 		this.setState({isWhiteList:!whiteliststatus})
// 		console.log(this.state.isWhiteList, whiteliststatus);
// 	}
// 	onFinalize = async () => {
// 		const pool = Pool(this.props.poolAddress);
// 		const accounts = await web3.eth.getAccounts();

// 		try {
// 			await pool.methods.buyBack().send({from: accounts[0]});
// 		} catch(err) {

// 		}
// 		console.log(pool.methods.buyBackState().call());
// 	}
// 	onClaim = async () => {
// 		const pool = Pool(this.props.poolAddress);
// 		const accounts = await web3.eth.getAccounts();

// 		try {
// 			await pool.methods.claim().send({from: accounts[0]});
// 		} catch(err) {

// 		}
// 		console.log(pool.methods.claimState().call());
// 	}
// 	onBurn = async () => {
// 		const pool = Pool(this.props.poolAddress);
// 		const accounts = await web3.eth.getAccounts();

// 		try {
// 			await pool.methods.burn().send({from: accounts[0]});
// 		} catch(err) {

// 		}
// 		console.log(pool.methods.burnState().call());
// 	}


// 	renderCards() {
// 		const {
// 			poolAddress,
// 			tokenAddress, 
// 			totalSupply,
// 			tokensSold,
// 			tokensAvailable,
// 			startDate,
// 			endDate,
// 			burnEnabled,
// 			manualBuyBack,
// 			buyBackPercent,
// 			manager,
// 			minDeposit,
// 			maxDeposit
// 		} = this.props;

// 		const items = [
// 			{
// 				header: poolAddress,
// 				meta: "Discount Sale Address",
// 				description: "Something...",
// 				style: { overflowWrap: "break-word" }
// 			},
// 			{
// 				header: tokenAddress,
// 				meta: "Token Address",
// 				description: "Something...",
// 				style: { overflowWrap: "break-word" }
// 			},
// 			{
// 				header: totalSupply,
// 				meta: "Number of tokens allocated for Discount",
// 				description: "Something...",
// 				style: { overflowWrap: "break-word" }
// 			},
// 			{
// 				header: tokensSold,
// 				meta: "Number of tokens sold",
// 				description: "Something...",
// 				style: { overflowWrap: "break-word" }
// 			},
// 			{
// 				header: tokensAvailable,
// 				meta: "Number of tokens available",
// 				description: "Something...",
// 				style: { overflowWrap: "break-word" }
// 			},
// 			{
// 				header: startDate,
// 				meta: "Start Date",
// 				description: "Something...",
// 				style: { overflowWrap: "break-word" }
// 			},
// 			{
// 				header: endDate,
// 				meta: "End Date",
// 				description: "Something...",
// 				style: { overflowWrap: "break-word" }
// 			},
// 			{
// 				header: burnEnabled.toString(),
// 				meta: "Burn Enabled",
// 				description: "Something...",
// 				style: { overflowWrap: "break-word" }
// 			},
// 			{
// 				header: manualBuyBack.toString(),
// 				meta: "Manual Buy Back Enabled",
// 				description: "Something...",
// 				style: { overflowWrap: "break-word" }
// 			},
// 			{
// 				header: buyBackPercent,
// 				meta: "Pancakeswap buy back %",
// 				description: "Something...",
// 				style: { overflowWrap: "break-word" }
// 			},
// 			{
// 				header: manager,
// 				meta: "Wallet address of Manager",
// 				description: "Something...",
// 				style: { overflowWrap: "break-word" }
// 			},
// 			{
// 				header: minDeposit,
// 				meta: "Minimum tokens to buy",
// 				description: "Something...",
// 				style: { overflowWrap: "break-word" }
// 			},
// 			{
// 				header: maxDeposit,
// 				meta: "Maximum tokens to buy",
// 				description: "Something...",
// 				style: { overflowWrap: "break-word" }
// 			},
// 		];

// 		return <Card.Group items={ items } />;
// 	}

// 	render() {
// 		const { open } = this.state
// 		return (
// 			<Layout>
// 				<h1>Show Pool</h1>
// 				<Grid disabled={open}>
// 					<Grid.Column width={10}>
// 						{ this.renderCards() }
// 					</Grid.Column>
// 					<Grid.Column width={6}>
// 						<ContributeForm address={this.props.poolAddress}/>
// 						<Button
// 			            content='Whitelist Addresses'
// 			            disabled={open}
// 			            positive
// 			            onClick={this.handleOpen}
// 			          />
// 			          <label>Enable whitelist</label>
// 			          <Checkbox toggle onClick={this.handleWhitelist} /> 

// 			          <Portal onClose={this.handleClose} open={open}>
// 			            <Segment
// 			              style={{
// 			                left: '40%',
// 			                position: 'fixed',
// 			                top: '50%',
// 			                zIndex: 1000,
// 			              }}
// 			            >
// 			            <Form onSubmit={this.onWhitelist}>
// 			              <Header>Enter List of Addresses</Header>
// 			              <Input 
// 			              	value={this.state.whitelistAddresses}
// 			              	onChange={event => this.setState({whitelistAddresses: event.target.value})}
// 			              />
// 			              <Button primary>Submit</Button>
// 			              <Button primary onClick={this.handleClose}>Close</Button>
// 			             </Form>
// 			            </Segment>
// 			          </Portal>
// 			          <Button primary onClick={ this.onFinalize }>Finalize</Button>
// 			          <Button primary onClick={ this.onClaim }>Claim</Button>
// 			          <Button primary onClick={ this.onBurn }>Burn</Button>
// 					</Grid.Column>
// 				</Grid>
// 			</Layout>
// 		);
// 	}
// }

// export default PoolShow;


import React from "react";
import { Grid, Image, Card, Progress, Input, Button } from "semantic-ui-react";
import Layout from "../../components/Layout";

export default () => {
  const items = [
    {
      // header: "8996",
      meta: "Twitter"
    },
    {
      // header: "8996",
      meta: "Telegram"
    },
    {
      // header: "8996",
      meta: "Website"
    }
  ];
  return (
    <Layout>
      <h3>Discount Sale Detail</h3>
      <Grid columns={2}>
        <Grid.Row>
          <Card fluid header="Option 1">
            <Card.Content>
              <Image floated="left" size="mini" src="/image/1.jpg" />
              <Card.Header>GHT</Card.Header>
              <Card.Meta>GunHunter</Card.Meta>
            </Card.Content>
          </Card>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Card.Group items={items} itemsPerRow={3} />
            <p>
              Now you can browse privately, and other people who use this device
              won’t see your activity. However, downloads, bookmarks and reading
              list items will be saved. Learn more Chrome won’t save the
              following information:
            </p>
            <Progress percent={20} success>
              Already Sold: 20%
            </Progress>
            <Input focus fluid placeholder="Search..." />
            <p>You will get GHT Tokens!</p>
            <Button fluid primary>
              Contribute
            </Button>
            <p>Discount Sale Ends in: </p>
            <Button.Group>
              <Button size="mini">06</Button>
              <Button.Or text=":" />
              <Button size="mini">08</Button>
              <Button.Or text=":" />
              <Button size="mini">05</Button>
              <Button.Or text=":" />
              <Button size="mini">22</Button>
            </Button.Group>
            <h4>
              <strong>Disclaimer</strong>:
            </h4>
            <p>
              Now you can browse privately, and other people who use this device
              won’t see your activity. However, downloads, bookmarks and reading
              list items will be saved. Learn more Chrome won’t save the
              following information:
            </p>
          </Grid.Column>
          <Grid.Column>
            <p>
              Discount Sale Address : 0x396D67081612b34c3838eE06072bcf779d5cC9C2
            </p>
            <p>Token Address : 0x396D67081612b34c3838eE06072bcf779d5cC9C2</p>
            <p>Number of Tokens allocated for discount : 10,000,000</p>
            <p>Number of tokens sold : 5,000,000</p>
            <p>Number of tokens available : 5,000,000</p>
            <p>Start Date : 15-11-2021 9:00 PM</p>
            <p>End Date : 16-11-2021 9:00 PM</p>
            <p>Burn Enabled : Yes</p>
            <p>Manual Buyback Enabled : Yes</p>
            <p>Pancakeswap Buyback : 10%</p>
            <p>
              Wallet Address of Discount Created :
              0x396D67081612b34c3838eE06072bcf779d5cC9C2
            </p>
            <p>Minimum Tokens to buy : 20,000</p>
            <p>Maximum Tokens to buy : 500,000</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
};
