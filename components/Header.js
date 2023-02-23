import React from 'react';
import { Menu, Header, Input, Image, Icon } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
	return (
		// <Menu style={{ marginTop: "10px" }}>
		// 	<Link route="/" legacyBehavior>
		// 		<a className="item">Fundchain</a>
		// 	</Link>

		// 	<Menu.Menu position="right">
		// 		<Link route="/" legacyBehavior>
		// 			<a className="item">Pools</a>
		// 		</Link>
		// 		<Link route="/pools/new" legacyBehavior>
		// 			<a className="item">+</a>
		// 		</Link>
		// 	</Menu.Menu>
		// </Menu>
		<Header as="h3" block>
		<div style={{float: "right"}}>
			<Icon link name="question circle outline" size="large" />
			<Icon link name="telegram" size="large" />
			<Icon link name="bell outline" size="large" />
		</div>
		<Input
			size="mini"
			icon={{ name: "search", circular: true, link: true }}
			placeholder="Search..."
		/>
		</Header>

	);
};
