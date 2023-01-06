import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Pool from '../../ethereum/pool';
import { Card, Grid, Portal, Segment, Button, Header, Input, Form, Checkbox } from 'semantic-ui-react';
import ContributeForm from '../../components/ContributeForm';
import discountmain from '../../ethereum/discountmain';
import web3 from '../../ethereum/web3';

class PoolShow extends Component {
	state = { 
		open: false,
		whitelistAddresses: '',
		isWhiteList: false
	}

	static async getInitialProps(props) {
		const pool = Pool(props.query.address);

		const summary = await pool.methods.getSummary().call();

		return {
			poolAddress: props.query.address,
			tokenAddress: summary[0],
			totalSupply: summary[1],
			tokensSold: summary[2],
			tokensAvailable: summary[3],
			startDate: summary[4],
			endDate: summary[5],
			burnEnabled: summary[6],
			manualBuyBack: !summary[7],
			buyBackPercent: summary[8],
			manager: summary[9],
			minDeposit: summary[10],
			maxDeposit: summary[11]
		};
	}
	
	handleClose = () => this.setState({ open: false })
	handleOpen = () => this.setState({ open: true })
	onWhitelist = (event) => {
		event.preventDefault();
		console.log(this.state.whitelistAddresses);
	}
	handleWhitelist = async (event) => {
		event.preventDefault();
		const whiteliststatus = await discountmain.methods.isWhiteList(this.props.poolAddress).call();
		const accounts = await web3.eth.getAccounts();

		await discountmain.methods.poolWhiteListUpdate(
			this.props.poolAddress,
			!whiteliststatus
		).send({
			from: accounts[0]
		})
		this.setState({isWhiteList:!whiteliststatus})
		console.log(this.state.isWhiteList, whiteliststatus);
	}
	onFinalize = async () => {
		const pool = Pool(this.props.poolAddress);
		const accounts = await web3.eth.getAccounts();

		try {
			await pool.methods.buyBack().send({from: accounts[0]});
		} catch(err) {

		}
		console.log(pool.methods.buyBackState().call());
	}
	onClaim = async () => {
		const pool = Pool(this.props.poolAddress);
		const accounts = await web3.eth.getAccounts();

		try {
			await pool.methods.claim().send({from: accounts[0]});
		} catch(err) {

		}
		console.log(pool.methods.claimState().call());
	}
	onBurn = async () => {
		const pool = Pool(this.props.poolAddress);
		const accounts = await web3.eth.getAccounts();

		try {
			await pool.methods.burn().send({from: accounts[0]});
		} catch(err) {

		}
		console.log(pool.methods.burnState().call());
	}


	renderCards() {
		const {
			poolAddress,
			tokenAddress, 
			totalSupply,
			tokensSold,
			tokensAvailable,
			startDate,
			endDate,
			burnEnabled,
			manualBuyBack,
			buyBackPercent,
			manager,
			minDeposit,
			maxDeposit
		} = this.props;

		const items = [
			{
				header: poolAddress,
				meta: "Discount Sale Address",
				description: "Something...",
				style: { overflowWrap: "break-word" }
			},
			{
				header: tokenAddress,
				meta: "Token Address",
				description: "Something...",
				style: { overflowWrap: "break-word" }
			},
			{
				header: totalSupply,
				meta: "Number of tokens allocated for Discount",
				description: "Something...",
				style: { overflowWrap: "break-word" }
			},
			{
				header: tokensSold,
				meta: "Number of tokens sold",
				description: "Something...",
				style: { overflowWrap: "break-word" }
			},
			{
				header: tokensAvailable,
				meta: "Number of tokens available",
				description: "Something...",
				style: { overflowWrap: "break-word" }
			},
			{
				header: startDate,
				meta: "Start Date",
				description: "Something...",
				style: { overflowWrap: "break-word" }
			},
			{
				header: endDate,
				meta: "End Date",
				description: "Something...",
				style: { overflowWrap: "break-word" }
			},
			{
				header: burnEnabled.toString(),
				meta: "Burn Enabled",
				description: "Something...",
				style: { overflowWrap: "break-word" }
			},
			{
				header: manualBuyBack.toString(),
				meta: "Manual Buy Back Enabled",
				description: "Something...",
				style: { overflowWrap: "break-word" }
			},
			{
				header: buyBackPercent,
				meta: "Pancakeswap buy back %",
				description: "Something...",
				style: { overflowWrap: "break-word" }
			},
			{
				header: manager,
				meta: "Wallet address of Manager",
				description: "Something...",
				style: { overflowWrap: "break-word" }
			},
			{
				header: minDeposit,
				meta: "Minimum tokens to buy",
				description: "Something...",
				style: { overflowWrap: "break-word" }
			},
			{
				header: maxDeposit,
				meta: "Maximum tokens to buy",
				description: "Something...",
				style: { overflowWrap: "break-word" }
			},
		];

		return <Card.Group items={ items } />;
	}

	render() {
		const { open } = this.state
		return (
			<Layout>
				<h1>Show Pool</h1>
				<Grid disabled={open}>
					<Grid.Column width={10}>
						{ this.renderCards() }
					</Grid.Column>
					<Grid.Column width={6}>
						<ContributeForm address={this.props.poolAddress}/>
						<Button
			            content='Whitelist Addresses'
			            disabled={open}
			            positive
			            onClick={this.handleOpen}
			          />
			          <label>Enable whitelist</label>
			          <Checkbox toggle onClick={this.handleWhitelist} /> 

			          <Portal onClose={this.handleClose} open={open}>
			            <Segment
			              style={{
			                left: '40%',
			                position: 'fixed',
			                top: '50%',
			                zIndex: 1000,
			              }}
			            >
			            <Form onSubmit={this.onWhitelist}>
			              <Header>Enter List of Addresses</Header>
			              <Input 
			              	value={this.state.whitelistAddresses}
			              	onChange={event => this.setState({whitelistAddresses: event.target.value})}
			              />
			              <Button primary>Submit</Button>
			              <Button primary onClick={this.handleClose}>Close</Button>
			             </Form>
			            </Segment>
			          </Portal>
			          <Button primary onClick={ this.onFinalize }>Finalize</Button>
			          <Button primary onClick={ this.onClaim }>Claim</Button>
			          <Button primary onClick={ this.onBurn }>Burn</Button>
					</Grid.Column>
				</Grid>
			</Layout>
		);
	}
}

export default PoolShow;