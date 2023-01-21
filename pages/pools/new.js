import { Router } from "../../routes";
import React,  { useState} from "react";
import CreateSale1 from "../../components/createsale1";
import CreateSale2 from "../../components/createsale2";
import CreateSale3 from "../../components/createsale3";
import discountmain from "../../ethereum/discountmain";
import web3 from "../../ethereum/web3";

export default () => {
	const [page, setPage] = useState(0);
	const [formData, setFormData] = useState({
		tokenAddress: "",
		tokenName: "",
		tokenSymbol: "",
		tokenDecimal: "",
		tokenSupply: "",
		tokenForDiscount: "",
		startDate: "",
		endDate: "",
		maxDeposit: "",
		minDeposit: "",
		claimDays: "",
		buyBackFee: "",
		totalDiscount: "",
		telegram: "",
		twitter: "",
		website: "",
		logoUrl: null,
	});
	const FormTitles = ['Step 1', 'Step 2', 'Step 3'];
	const PageDisplay = () => {
		if (page === 0) {
			return <CreateSale1 formData={formData} setFormData={setFormData} />;
		} else if (page === 1) {
			return <CreateSale2 formData={formData} setFormData={setFormData} />;
		} else {
			return <CreateSale3 formData={formData} setFormData={setFormData} />;
		}
	}
	return (
		<>
			<div className="body">{PageDisplay()}</div>
			<div style={{textAlign: 'center'}}>
			<button
				disabled={page == 0}
				onClick={() => {
				setPage((currPage) => currPage - 1);
				}}
			>
				Prev
			</button>
			<button
				onClick={async () => {
				if (page === FormTitles.length - 1) {
					alert("FORM SUBMITTED");
					console.log(formData);
					const accounts = await web3.eth.getAccounts();
					console.log(accounts[0])
					await discountmain.methods.createPool([
						formData.tokenAddress.toString(),
						formData.tokenForDiscount.toString(),
						formData.startDate.toString(),
						formData.endDate.toString(),
						formData.totalDiscount.toString(),
						accounts[0],
						formData.minDeposit.toString(),
						formData.maxDeposit.toString(),
						formData.buyBackFee.toString(),
						formData.claimDays.toString(),
						formData.telegram.toString()
					]).send({
						from: accounts[0],
						value: '0'
					})
					Router.pushRoute('/');
				} else {
					setPage((currPage) => currPage + 1);
				}
				}}
			>
				{page === FormTitles.length - 1 ? "Submit" : "Next"}
			</button>
			</div>
		</>
	);
}