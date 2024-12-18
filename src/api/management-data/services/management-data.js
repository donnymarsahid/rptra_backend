'use strict';

/**
 * management-data service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::management-data.management-data');
