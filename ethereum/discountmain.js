import discountmain from "./build/discountmain.json";
import web3 from "./web3";

const instance = new web3.eth.Contract(
	JSON.parse(JSON.stringify(discountmain.interface)), 
	"0xD825fd815dC9ADC7D39b265c23f5CeEE8439BE84"
);

export default instance;
