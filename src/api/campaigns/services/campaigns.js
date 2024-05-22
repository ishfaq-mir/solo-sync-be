'use strict';

/**
 * campaigns service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::campaigns.campaigns');
