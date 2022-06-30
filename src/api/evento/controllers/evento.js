"use strict";

/**
 *  evento controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::evento.evento", ({ strapi }) => ({
  async find(ctx) {
    const moment = require("moment");

    ctx.query = { ...ctx.query, local: "en" };

    const { data, meta } = await super.find(ctx);

    data.map((evento) => {
      evento.attributes.fecha_inicio = moment(
        evento.attributes.fecha_inicio
      ).format("YYYY-MM-DD");
    });

    return { data, meta };
  },

  async findOne(ctx) {
    const { slug } = ctx.params;

    const query = {
      filters: { slug },
      ...ctx.query,
    }

    const entity = await strapi.entityService.findMany("api::evento.evento", query);

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity[0]);
  },
}));
