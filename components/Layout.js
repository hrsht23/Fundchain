import React, {useState, useEffect} from "react";
import { Container } from 'semantic-ui-react';
import Header from "./Header";
import Web3Modal from "web3modal";
import {ethers} from "ethers";

const providerOptions = {

}

let web3Modal;
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
	// set cacheProvider parameter as true when instantiating web3modal
   	web3Modal = new Web3Modal({
	    cacheProvider: true, // optional
	    providerOptions // required
  	});
  	console.log(web3Modal);
} else {
	console.log("Window is undefined")
}

export default props => {

	const [web3Provider, setWeb3Provider] = useState(null);

	async function onConnect() {
		try {
			web3Modal = new Web3Modal({cacheProvider: true, providerOptions, disableInjectedProvider: false});
			const web3ModalInstance = await web3Modal.connect();
			const web3ModalProvider = new ethers.providers.Web3Provider(web3ModalInstance);
			if(web3ModalProvider) {
				setWeb3Provider(web3ModalProvider);
			}
		} catch (err) {
			console.log(err);
		}
	}
	

  	// hook to automatically connect to the cached provider
	useEffect(() => {
	    if (web3Modal.cachedProvider) {
	    	onConnect();
	    }
	}, [])

	// handle page refresh
	const refreshState = () => {
	    setWeb3Provider();
	};

	const onDisConnect = async () => {
	    web3Modal = new Web3Modal({
	      providerOptions,
	      cacheProvider: true,
	    })
	    await web3Modal.clearCachedProvider();
	    refreshState();
    };

	return (
		<Container>
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
			{
                web3Provider == null ?
                (
	                <a href='/#' className='connect_wal' id="prepare">
	                    <button onClick={onConnect}>Connect</button>
	                </a>
                )
                :
                (
	                <>
	                    <a href='/#' className='connect_wal' id="prepare">
	                        <span id="btn-connect">{web3Provider.provider.selectedAddress}</span>
	                    </a>

	                    <a href='/#' className='connect_wal' id="prepare">
	                        <button onClick={onDisConnect}>Disconnect</button>
	                    </a>
	                </>
                )
            }
			<Header />
			{props.children}
		</Container>
	);
}