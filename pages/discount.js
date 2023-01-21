import React, {useState, useEffect} from "react";
import Layout from "../components/Layout";
import PoolCard from "../components/PoolCard";
import discountmain from "../ethereum/discountmain";
import { Link } from "../routes";
import {
  Card,
  Button,
  Image,
  Progress,
  Icon,
  Label,
  Segment,
  Dropdown
} from "semantic-ui-react";

export default () => {
  const countryOptions = [
    { key: "af", value: "af", text: "Now" },
    { key: "ax", value: "ax", text: "Best" },
    { key: "al", value: "al", text: "Most viewed" }
  ];
  const [pools, setPools] = useState([]);
  useEffect(() => {
    async function fetchPools() {
      const getpools = await discountmain.methods.allPool().call();
      setPools(getpools);
    }
    fetchPools();
  }, [])

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
          itemsObj.map((item, index) => {
            return <PoolCard
              key={index}
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
    <Layout>
      <Image floated="right" size="mini" alt="image" src="/image/1.jpg" />
      <Image floated="right" size="mini" alt="image" src="/image/1.jpg" />
      <Link route='/pools/new'>
        <Button floated="right">Create Sale</Button>
      </Link>
      <Dropdown
        placeholder="Promote"
        search
        selection
        options={countryOptions}
      />
      <h3>Discount Sales</h3>
      {renderPools()}
    </Layout>
  );
};
