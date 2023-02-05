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


import React, {useState, useEffect} from "react";
import { useRouter } from "next/router";
import { Grid, Image, Card, Progress, Input, Button } from "semantic-ui-react";
import Layout from "../../components/Layout";
import Pool from "../../ethereum/pool";
import Token from "../../ethereum/token";
import web3 from "../../ethereum/web3";
import Countdown from "../../components/Countdown";
import {Router} from "../../routes";

export default () => {
  const [poolSummary, setPoolSummary] = useState({});
  const [contriAmount, setContriAmount] = useState('');
  const router = useRouter()
  const poolAddress = router.asPath.split('/')[2];

  const fetchTokenDetails = async (tokenAddress) => {
		const tokenInstance = Token(tokenAddress);
		const tokenName = await tokenInstance.methods.name().call();
		const tokenSymbol = await tokenInstance.methods.symbol().call();
		return [tokenName, tokenSymbol];
	}

  useEffect(() => {
    const fetchData = async () => {
      const summary = await Pool(poolAddress).methods.getSummary().call();
      const [tokenName, tokenSymbol] = await fetchTokenDetails(summary[0]);
      setPoolSummary({
        poolAddress: poolAddress,
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
        maxDeposit: summary[11],
        alreadySold: (summary[2] / summary[1]) * 100,
        tokenName: tokenName,
        tokenSymbol: tokenSymbol
      });
    }
    fetchData();
  }, []);
  function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = String(date).padStart(2, "0") + ' ' + month + ' ' + year + ' ' + String(hour).padStart(2, "0") + ':' + String(min).padStart(2, "0") + ':' + String(sec).padStart(2, "0") ;
    return time;
  }
  const handleContribute = async (event) => {
    event.preventDefault();
    const pool = Pool(poolAddress);
    try {
			const accounts = await web3.eth.getAccounts();
      console.log("in try", accounts[0]);
			await pool.methods.swap().send({
				from: accounts[0],
				value: web3.utils.toWei(contriAmount, 'ether')
			});

			Router.replaceRoute(`/pools/${poolAddress}`);
		} catch(err) {
      console.log("in catch", err);
		}
  }
  const handleFinalize = async () => {
    const pool = Pool(poolAddress);
    const accounts = await web3.eth.getAccounts();
    try {
      await pool.methods.buyBack().send({from: accounts[0]});
    } catch(err) {
      console.log("in catch", err);
    }
    console.log(pool.methods.buyBackState().call());
  }
  const handleClaim = async () => {
    const pool = Pool(poolAddress);
    const accounts = await web3.eth.getAccounts();

    try {
      await pool.methods.claim().send({from: accounts[0]});
    } catch(err) {

    }
    console.log(pool.methods.claimState().call());
  }
  const handleBurn = async () => {
    const pool = Pool(poolAddress);
    const accounts = await web3.eth.getAccounts();

    try {
      await pool.methods.burn().send({from: accounts[0]});
    } catch(err) {

    }
    console.log(pool.methods.burnState().call());
  }
  const startDate = timeConverter(poolSummary.startDate);
  const endDate = timeConverter(poolSummary.endDate);
  let burnEnabled, manualBuyBack;
  poolSummary.burnEnabled ? burnEnabled = "YES" : burnEnabled = "NO";
  poolSummary.manualBuyBack ? manualBuyBack = "YES" : manualBuyBack = "NO";

  const items = [
    {
      key:"1",
      // header: "8996",
      meta: "Twitter"
    },
    {
      key:"2",
      // header: "8996",
      meta: "Telegram"
    },
    {
      key:"3",
      // header: "8996",
      meta: "Website"
    }
  ];
  return (
    <Layout>
      <h3>Discount Sale Detail</h3>
      <Grid columns={2}>
        <Grid.Row>
          <Card fluid>
            <Card.Content>
              <Image floated="left" size="mini" src="/image/1.jpg" />
              <Card.Header>{poolSummary.tokenSymbol}</Card.Header>
              <Card.Meta>{poolSummary.tokenName}</Card.Meta>
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
            <Progress percent={poolSummary.alreadySold} success>
              Already Sold: {poolSummary.alreadySold}%
            </Progress>
            <Input 
              focus 
              fluid 
              placeholder="Enter Amount"
              value={contriAmount}
              onChange={event=>setContriAmount(event.target.value)} />
            <p>You will get {poolSummary.tokenSymbol} Tokens!</p>
            <Button 
              fluid 
              primary
              onClick={handleContribute}
              >
              Contribute
            </Button>
            <br />
            <Button 
              primary
              onClick={handleFinalize}
              >
              Finalize
            </Button>
            <Button 
              primary
              onClick={handleClaim}
              >
              Claim
            </Button>
            <Button 
              primary
              onClick={handleBurn}
              >
              Burn
            </Button>
            <Countdown endDate={poolSummary.endDate} />
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
              Discount Sale Address : {poolSummary.poolAddress}
            </p>
            <p>Token Address : {poolSummary.tokenAddress}</p>
            <p>Number of Tokens allocated for discount : {poolSummary.totalSupply}</p>
            <p>Number of tokens sold : {poolSummary.tokensSold}</p>
            <p>Number of tokens available : {poolSummary.tokensAvailable}</p>
            <p>Start Date : {startDate}</p>
            <p>End Date : {endDate}</p>
            <p>Burn Enabled : {burnEnabled}</p>
            <p>Manual Buyback Enabled : {manualBuyBack}</p>
            <p>Pancakeswap Buyback : {poolSummary.buyBackPercent}</p>
            <p>
              Wallet Address of Discount Created :
              {poolSummary.manager}
            </p>
            <p>Minimum Tokens to buy : {poolSummary.minDeposit}</p>
            <p>Maximum Tokens to buy : {poolSummary.maxDeposit}</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
};
