import web3 from './web3';
import discountpool from './build/discountpool.json';

export default (address) => {
	return new web3.eth.Contract(
		JSON.parse(JSON.stringify(discountpool.interface)),
		address
	);
};