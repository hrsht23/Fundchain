import web3 from './web3';
import tokenABI from './build/tokenABI.json';

export default (address) => {
	return new web3.eth.Contract(
		JSON.parse(JSON.stringify(tokenABI.interface)),
		address
	);
};