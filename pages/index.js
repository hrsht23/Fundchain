import React, {useState, useEffect} from "react";
import Layout from "../components/Layout";
import { Card, Segment, Label, Progress, Icon, Button, Image } from "semantic-ui-react";
import PoolCard from "../components/PoolCard";
import {useIsMounted} from "./hooks/useIsMounted";
import { Link } from "../routes";
import discountmain from "../ethereum/discountmain";


export default () => {
	const [pools, setPools] = useState([]);
	useEffect(() => {
		async function fetchPools() {
			const getpools = await discountmain.methods.allPool().call();
			setPools(getpools);
			console.log(pools);
		}
		fetchPools();
	}, [pools])	
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
	
	const renderPools = () => {
		// let poolsSummary = [];
		// for (let i = 0 ; i < pools.length ; i++) {
		// 	poolsSummary.append(discountmain.methods.getSummary().call)
		// }
		const itemsObj = pools.map(address => {
			// const summary = await pools.methods.getSummary().call()
			return {
				// poolAddress: address,
				// tokenAddress: summary[0],
				// totalSupply: summary[1],
				// tokensSold: summary[2],
				// tokensAvailable: summary[3],
				// startDate: summary[4],
				startDate: "something",
				// endDate: summary[5],
				endDate: "something",
				// burnEnabled: summary[6],
				// manualBuyBack: !summary[7],
				// buyBackPercent: summary[8],
				// manager: summary[9],
				// minDeposit: summary[10],
				// maxDeposit: summary[11],
				promotion: "something",
				name: "something",
				symbol: "something",
				alreadySold: "20",
				status: "something"
			}
		})
		return (
			<Card.Group>
				{
					itemsObj.map(item => {
						return <PoolCard 
							promotion={item.promotion}
							symbol={item.symbol}
							name={item.name}
							status={item.status}
							startDate={item.startDate}
							endDate={item.endDate}
							alreadySold={item.alreadySold}
						/>
					})
				}
			</Card.Group>
		);
	}
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
						{renderPools()}
						<a href="/#">view more</a>
						<h3>Categories</h3>
						<Card.Group items={items} itemsPerRow={4} />
					</Layout>				
			) : null}
		</>
	)
}
