import React, { Component } from 'react';
import discountmain from '../ethereum/discountmain';
import { Card, Button, Image, Progress, Icon, Label, Segment } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Link } from "../routes";

class DiscountMainIndex extends Component {
	static async getInitialProps() {
		const pools = await discountmain.methods.allPool().call();
		const items = [
		    {
		      header: "8996",
		      meta: "Projects Launched"
		    },
		    {
		      header: "8996",
		      meta: "Projects Launched"
		    },
		    {
		      header: "8996",
		      meta: "Projects Launched"
		    },
		    {
		      header: "8996",
		      meta: "Projects Launched"
		    }
		  ];
		return { pools, items };
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
			// <Layout>
			// 	<div>
			// 		<h3>Open Pools</h3>
			// 		<Link route='/pools/new' legacyBehavior>
			// 			<a>
			// 				<Button
			// 					floated="right"
			// 					content="Add Pool"
			// 					icon="add circle"
			// 					primary
			// 				/>
			// 			</a>
			// 		</Link>
			// 		<div>{this.renderPools()}</div>
			// 	</div>
			// </Layout>
			<Layout>
	      		<h3>Welcome to Decentralized Sale Protocol!</h3>
			      <p>
			        Justified content fits exactly inside the grid column, taking up the
			        entire width from one side to the other. Justified content fits exactly
			        inside the grid column, taking up the entire width from one side to the
			        other. Justified content fits exactly inside the grid column, taking up
			        the entire width from one side to the other.
			      </p>
			      <Card.Group items={this.props.items} itemsPerRow={4} />
			      <Card.Group>
			        <Card>
			          <Segment raised>
			            <Label as="a" color="black" ribbon>
			              Overview
			            </Label>
			            <Card.Content>
			              <Image floated="left" size="mini" src="/image/1.jpg" />
			              <Card.Header>KOD</Card.Header>
			              <Card.Meta>Kody Token</Card.Meta>
			              <Card.Description>Status: LIVE</Card.Description>
			              <Card.Description>Sale Start: 20 Nov - 19:00 PM</Card.Description>
			              <Card.Description>Sale Ends: 24 Nov - 19:00 PM</Card.Description>
			              <Progress percent={20} success>
			                Already sold: 20%
			              </Progress>
			            </Card.Content>
			            <Card.Content extra>
			              <Icon name="twitter square" />
			              <Icon name="twitter square" />
			              <Icon name="twitter square" />
			              <Link route="/pools/1">
			              <Button color="blue" floated="right">
			                View
			              </Button>
			              </Link>
			            </Card.Content>
			          </Segment>
			        </Card>
			      </Card.Group>
			      <a href="/#">view more</a>
			      <h3>Categories</h3>
			      <Card.Group items={this.props.items} itemsPerRow={4} />
		    </Layout>
		);
	}
}

export default DiscountMainIndex;