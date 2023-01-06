// import {
//   EthereumClient,
//   modalConnectors,
//   walletConnectProvider,
// } from "@web3modal/ethereum";

// import { configureChains, createClient } from "wagmi";

// import { arbitrum, mainnet, polygon } from "wagmi/chains";



// const chains = [arbitrum, mainnet, polygon];

// // Wagmi client
// const { provider } = configureChains(chains, [
//   walletConnectProvider({ projectId: "b7e237ccbe7b697fd2f70fc4f94117dd" }),
// ]);
// const wagmiClient = createClient({
//   autoConnect: true,
//   connectors: modalConnectors({ appName: "web3Modal", chains }),
//   provider,
// });

// // Web3Modal Ethereum Client
// const ethereumClient = new EthereumClient(wagmiClient, chains);

// export { wagmiClient, ethereumClient };