import React, { Component } from "react";
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from "../../components/Layout";
import discountmain from "../../ethereum/discountmain";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";

class PoolNew extends Component {
	state = {
		tokenAddress: '',
		saleAmount: '',
		startTime: '',
		endTime: '',
		discount: '',
		poolAdmin: '',
		minDeposit: '',
		maxDeposit: '',
		buyback: '',
		claimDays: '',
		profile: '',
		errorMessage: '',
		loading: false
	};

	onSubmit = async (event) => {
		event.preventDefault();

		this.setState({ loading: true, errorMessage: '' });

		try {
			const accounts = await web3.eth.getAccounts();
			console.log(accounts[0]);
			await discountmain.methods.createPool([
					this.state.tokenAddress,
					this.state.saleAmount,
					this.state.startTime,
					this.state.endTime,
					this.state.discount,
					this.state.poolAdmin,
					this.state.minDeposit,
					this.state.maxDeposit,
					this.state.buyback,
					this.state.claimDays,
					this.state.profile
				]).send({ 
					from: accounts[0],
					value: '4000000000000000000'	
				});
			Router.pushRoute('/');
		} catch(err) {
			this.setState({ errorMessage: err.message });
		}

		this.setState({ loading: false });

	};

	render() {
		return (
			<Layout>
				<h3>Create Pool</h3>
				<Form onSubmit={ this.onSubmit } error={ !!this.state.errorMessage }>
					<Form.Field>
						<label>Token Address</label>
						<Input 
							label="Address" 
							labelPosition="right"
							value={ this.state.tokenAddress }
							onChange={event => this.setState({ tokenAddress: event.target.value })}
						/>
						<label>Sale Amount</label>
						<Input 
							label="wei" 
							labelPosition="right"
							value={ this.state.saleAmount }
							onChange={event => this.setState({ saleAmount: event.target.value })}
						/>
						<label>Start Time</label>
						<Input 
							label="time" 
							labelPosition="right"
							value={ this.state.startTime }
							onChange={event => this.setState({ startTime: event.target.value })}
						/>
						<label>End Time</label>
						<Input 
							label="time" 
							labelPosition="right"
							value={ this.state.endTime }
							onChange={event => this.setState({ endTime: event.target.value })}
						/>
						<label>Discount</label>
						<Input 
							label="%" 
							labelPosition="right"
							value={ this.state.discount }
							onChange={event => this.setState({ discount: event.target.value })}
						/>
						<label>Pool Admin</label>
						<Input 
							label="Address" 
							labelPosition="right"
							value={ this.state.poolAdmin }
							onChange={event => this.setState({ poolAdmin: event.target.value })}
						/>
						<label>Minimum Deposit</label>
						<Input 
							label="wei" 
							labelPosition="right"
							value={ this.state.minDeposit }
							onChange={event => this.setState({ minDeposit: event.target.value })}
						/>
						<label>Maximum Deposit</label>
						<Input 
							label="wei" 
							labelPosition="right"
							value={ this.state.maxDeposit }
							onChange={event => this.setState({ maxDeposit: event.target.value })}
						/>
						<label>Buyback</label>
						<Input 
							label="wei" 
							labelPosition="right"
							value={ this.state.buyback }
							onChange={event => this.setState({ buyback: event.target.value })}
						/>
						<label>Claim Days</label>
						<Input 
							label="number" 
							labelPosition="right"
							value={ this.state.claimDays }
							onChange={event => this.setState({ claimDays: event.target.value })}
						/>
						<label>Profile</label>
						<Input 
							label="string" 
							labelPosition="right"
							value={ this.state.profile }
							onChange={event => this.setState({ profile: event.target.value })}
						/>
					</Form.Field>

					<Message error header="Oops" content={ this.state.errorMessage } />
					<Button loading={ this.state.loading } primary>Create!</Button>
				</Form>
			</Layout>
		);
	}
}

export default PoolNew;

// ["0xd2fff4b620c70a5ba8a6ec0f4b2bebb508afc84c",
// "0",
// "1662317653",
// "1662404053",
// "75",
// "0xF420c5F8a18Ab69aA2a00581aA49Bc5De90E02B4",
// "10000000000000",
// "10000000000000",
// "75",
// "20",
// "QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq"]