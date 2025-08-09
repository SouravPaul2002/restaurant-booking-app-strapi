'use strict';

/**
 * seat-reservation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::seat-reservation.seat-reservation');
