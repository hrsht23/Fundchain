import React, {useState, useEffect} from "react";
import { Card, Segment, Label, Progress, Icon, Button, Image } from "semantic-ui-react";
import Pool from "../ethereum/pool";
import Token from "../ethereum/token";
import PoolCard from "./PoolCard";

export default (props) => {	
    const [poolsSummary, setPoolsSummary] = useState([]);
    const fetchTokenDetails = async (tokenAddress) => {
		const tokenInstance = Token(tokenAddress);
		const tokenName = await tokenInstance.methods.name().call();
		const tokenSymbol = await tokenInstance.methods.symbol().call();
		return [tokenName, tokenSymbol];
	}
    useEffect(() => {
        const renderPoolsSummary = async () => {
            let getSummaryList = [];
            let status;
            for(let i = 0 ; i < props.poolsList.length ; i++) {
                const summary = await Pool(props.poolsList[i]).methods.getSummary().call();
                const [tokenName, tokenSymbol] = await fetchTokenDetails(summary[0]);
                if (Math.round(new Date().getTime() / 1000) < summary[4]) {status = "UPCOMING";}
                else if(Math.round(new Date().getTime() / 1000) > summary[4] && Math.round(new Date().getTime() / 1000) < summary[5]) {status = "LIVE";}
                else {status = "SALE ENDED";}
                getSummaryList.push({
                    poolAddress: props.poolsList[i],
                    startDate: summary[4],
                    endDate: summary[5],
                    promotion: "promoted💥",
                    name: tokenName,
                    symbol: tokenSymbol,
                    alreadySold: (summary[2] / summary[1]) * 100,
                    status: status
                });
            }
            setPoolsSummary(getSummaryList);
        };
        renderPoolsSummary();
    }, [props.poolsList]);	
    
    return (
        <Card.Group>
            {
                poolsSummary.map(item => {
                    return <PoolCard
                        key={item.poolAddress}
                        poolAddress={item.poolAddress}
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
};