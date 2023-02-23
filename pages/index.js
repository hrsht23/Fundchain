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

import {
	EthereumClient,
	modalConnectors,
	walletConnectProvider,
  } from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { bscTestnet, arbitrum, mainnet, polygon } from "wagmi/chains";


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
			header: "$1.44",
			meta: "Sale Price"
		},
		{
			key: "3",
			header: "26,123,435.00",
			meta: "Sale MCAP"
		},
		{
			key: "4",
			header: "100%",
			meta: "Burned"
		}
	];
	const items2 = [
		{
			key: "1",
			header: "DeFi"
		},
		{
			key: "2",
			header: "NFTs"
		},
		{
			key: "3",
			header: "Games"
		},
		{
			key: "4",
			header: "News"
		}
	];

	const chains = [bscTestnet];

	// Wagmi client
	const { provider } = configureChains(chains, [
	walletConnectProvider({ projectId: "b7e237ccbe7b697fd2f70fc4f94117dd" }),
	]);
	const wagmiClient = createClient({
	autoConnect: true,
	connectors: modalConnectors({
		projectId: "b7e237ccbe7b697fd2f70fc4f94117dd",
		version: "1", // or "2"
		appName: "web3Modal",
		chains,
	}),
	provider,
	});

	// Web3Modal Ethereum Client
	const ethereumClient = new EthereumClient(wagmiClient, chains);

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
				<>
				<WagmiConfig client={wagmiClient}>]
					<Layout>
						<h3>Welcome to Decentralized Sale Protocol!</h3>
						<p>
							Discount Sales allows you to Mint, Airdrop, Launch and Lock their tokens seamlessly without any coding required!
						</p>
						<Card.Group items={items} itemsPerRow={4} />
						<RenderPoolCards poolsList={poolsList} />
						<a href="/#">view more</a>
						<h3>Categories</h3>
						<Card.Group items={items2} itemsPerRow={4} />
					</Layout>
				</WagmiConfig>
			
				<Web3Modal
					projectId="b7e237ccbe7b697fd2f70fc4f94117dd"
					ethereumClient={ethereumClient}
				/>
				</>
			) : null}
		</>
	)
}
