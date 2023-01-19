import React, { Component } from "react";
import Layout from "../components/Layout";
import { Card, Segment, Label, Progress, Icon, Button, Image } from "semantic-ui-react";
import { Link } from "../routes";
import PoolCard from "../components/PoolCard";
import {useIsMounted} from "./hooks/useIsMounted";

export default () => {
	// const pools = await discountmain.methods.allPool().call();
	const mounted = useIsMounted();
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
	return (
		<>
			{mounted ? (
				(
					<Layout>
						<h3>Welcome to Decentralized Sale Protocol!</h3>
						<p>
							Justified content fits exactly inside the grid column, taking up the
							entire width from one side to the other. Justified content fits exactly
							inside the grid column, taking up the entire width from one side to the
							other. Justified content fits exactly inside the grid column, taking up
							the entire width from one side to the other.
						</p>
						<Card.Group items={items} itemsPerRow={4} />
						<Card.Group>
							<PoolCard />
						</Card.Group>
						<a href="/#">view more</a>
						<h3>Categories</h3>
						<Card.Group items={items} itemsPerRow={4} />
					</Layout>
				)
			) : null}
		</>
	)
}
