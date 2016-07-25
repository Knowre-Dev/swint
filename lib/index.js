'use strict';

module.exports = {
	'akamai-purge': require('swint-akamai-purge'),
	'akamaiPurge': require('swint-akamai-purge'),
	'builder': {
		'css': require('swint-builder-css'),
		'html': require('swint-builder-html'),
		'js': require('swint-builder-js'),
		'png': require('swint-builder-png'),
		'polymer': require('swint-builder-polymer'),
		'svg': require('swint-builder-svg')
	},
	'cloudfront-purge': require('swint-cloudfront-purge'),
	'cloudfrontPurge': require('swint-cloudfront-purge'),
	'configure': require('swint-configure'),
	'copy-dir': require('swint-copy-dir'),
	'copyDir': require('swint-copy-dir'),
	'fork': require('swint-fork'),
	'helper': require('swint-helper'),
	'middleware': require('swint-middleware'),
	'pipe': require('swint-pipe'),
	'proc-ops': require('swint-proc-ops'),
	'procOps': require('swint-proc-ops'),
	'query': require('swint-query'),
	'redis-cache': require('swint-redis-cache'),
	'redisCache': require('swint-redis-cache'),
	'router': require('swint-router'),
	'server': require('swint-server'),
	's3upload': require('swint-s3upload'),
	'secret': require('swint-secret'),
	'task': require('swint-task')
	// 'yuidoc': require('swint-yuidoc')
};
