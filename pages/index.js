import React, { Component } from 'react';
import discountmain from '../ethereum/discountmain';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Link } from "../routes";

class DiscountMainIndex extends Component {
	static async getInitialProps() {
		const pools = await discountmain.methods.allPool().call();

		return { pools };
	}

	renderPools() {
		const items = this.props.pools.map(address => {
			return {
				header: address,
				description: (
					<Link route={ `pools/${address}` } legacyBehavior>
						<a>View Pool</a>
					</Link>
				),
				fluid: true
			}
		});

		return <Card.Group items={items} />;
	}

	render() {
		return (
			<Layout>
				<div>
					<h3>Open Pools</h3>
					<Link route='/pools/new' legacyBehavior>
						<a>
							<Button
								floated="right"
								content="Add Pool"
								icon="add circle"
								primary
							/>
						</a>
					</Link>
					<div>{this.renderPools()}</div>
				</div>
			</Layout>
		);
	}
}

export default DiscountMainIndex;