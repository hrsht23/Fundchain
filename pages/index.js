import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import RenderPoolCards from "../components/RenderPoolCards";
import { Card, Segment, Label, Progress, Icon, Button, Image } from "semantic-ui-react";
import PoolCard from "../components/PoolCard";
import { useIsMounted } from "./hooks/useIsMounted";
import { Link } from "../routes";
import discountmain from "../ethereum/discountmain";
import Pool from "../ethereum/pool";
import Token from "../ethereum/token";


export default () => {
	const [poolsList, setPoolsList] = useState([]);
	const mounted = useIsMounted();
	const items = [
		{
			key: "1",
			header: "8996",
			meta: "Projects Launched"
		},
		{
			key: "2",
			header: "8996",
			meta: "Projects Launched"
		},
		{
			key: "3",
			header: "8996",
			meta: "Projects Launched"
		},
		{
			key: "4",
			header: "8996",
			meta: "Projects Launched"
		}
	];

	useEffect(() => {
		async function fetchPools() {
			const getPoolsList = await discountmain.methods.allPool().call();
			setPoolsList(getPoolsList);
		}
		fetchPools();
	}, []);
	
	return (
		<>
			{mounted ? (
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
					<RenderPoolCards poolsList={poolsList} />
					<a href="/#">view more</a>
					<h3>Categories</h3>
					<Card.Group items={items} itemsPerRow={4} />
				</Layout>
			) : null}
		</>
	)
}
