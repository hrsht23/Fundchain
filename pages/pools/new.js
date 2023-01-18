import React,  { useState} from "react";
import CreateSale1 from "../../components/createsale1";
import CreateSale2 from "../../components/createsale2";
import CreateSale3 from "../../components/createsale3";

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
		logoUrl: "",
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
				onClick={() => {
				if (page === FormTitles.length - 1) {
					alert("FORM SUBMITTED");
					console.log(formData);
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