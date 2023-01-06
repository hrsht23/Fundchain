import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
	return (
		<Menu style={{ marginTop: "10px" }}>
			<Link route="/" legacyBehavior>
				<a className="item">Fundchain</a>
			</Link>

			<Menu.Menu position="right">
				<Link route="/" legacyBehavior>
					<a className="item">Pools</a>
				</Link>
				<Link route="/pools/new" legacyBehavior>
					<a className="item">+</a>
				</Link>
			</Menu.Menu>
		</Menu>
	);
};
