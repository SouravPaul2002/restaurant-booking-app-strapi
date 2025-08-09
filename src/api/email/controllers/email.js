'use strict';
module.exports = {
  async sendCustomEmail(ctx) {
    const { to, subject, message } = ctx.request.body;

    try {
      await strapi.plugin('email').service('email').send({
        to,
        subject,
        text: message, // plain text email
      });

      ctx.send({ success: true, message: 'Email sent successfully' });
    } catch (err) {
      ctx.send({ success: false, error: err.message });
    }
  }
};