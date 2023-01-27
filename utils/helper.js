import Token from "../ethereum/token";
export {fetchTokenDetails} 

export const fetchTokenDetails = async (tokenAddress) => {
    const tokenInstance = Token(tokenAddress);
    const tokenName = await tokenInstance.methods.name().call();
    const tokenSymbol = await tokenInstance.methods.symbol().call();
    return [tokenName, tokenSymbol];
}