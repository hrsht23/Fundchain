import React from 'react';
import { Menu, Header, Input, Image } from 'semantic-ui-react';
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
		<div>
	      <Header as="h3" block>
	        <Image floated="right" size="mini" src="/image/1.jpg" />
	        <Image floated="right" size="mini" src="/image/1.jpg" />
	        <Image floated="right" size="mini" src="/image/1.jpg" />
	        <Input
	          size="mini"
	          icon={{ name: "search", circular: true, link: true }}
	          placeholder="Search..."
	        />
	      </Header>
	    </div>

	);
};
