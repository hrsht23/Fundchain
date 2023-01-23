import discountmain from "./build/discountmain.json";
import web3 from "./web3";

const instance = new web3.eth.Contract(
	JSON.parse(JSON.stringify(discountmain.interface)), 
	"0x822C5662cA0507FEA35E07F29210c55132e125A7"
);

export default instance;
