const routes = require('next-routes')();

routes
	.add('/pools/new', '/pools/new')
	.add('/pools/:address', '/pools/show');

module.exports = routes;