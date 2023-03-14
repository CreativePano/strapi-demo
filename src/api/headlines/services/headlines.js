'use strict';

/**
 * headlines service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::headlines.headlines');
