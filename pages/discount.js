import React, {useState, useEffect} from "react";
import Layout from "../components/Layout";
import RenderPoolCards from "../components/RenderPoolCards";
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
  const [poolsList, setPoolsList] = useState([]);

  const countryOptions = [
    { key: "af", value: "af", text: "Now" },
    { key: "ax", value: "ax", text: "Best" },
    { key: "al", value: "al", text: "Most viewed" }
  ];

  useEffect(() => {
		async function fetchPools() {
			const getPoolsList = await discountmain.methods.allPool().call();
			setPoolsList(getPoolsList);
		}
		fetchPools();
	}, []);

  return (
    <Layout>
      <Link route='/pools/new'>
        <Button floated="right">Create Sale</Button>
      </Link>
      <div style={{float: "right"}}>
        <Icon link name="box" size="big" />
        <Icon link name="bars" size="big" />
      </div>
      <Dropdown
        placeholder="Promote"
        search
        selection
        options={countryOptions}
      />
      <h3>Discount Sales</h3>
      <RenderPoolCards poolsList={poolsList} />
    </Layout>
  );
};
