const routes = require('next-routes')();

routes
	.add('/pools/new/createsale1', '/pools/new/createsale1')
	.add('/pools/new/createsale2', '/pools/new/createsale2')
	.add('/pools/new/createsale3', '/pools/new/createsale3')
	.add('/discount', '/discount')
	.add('/pools/:address', '/pools/show');

module.exports = routes;