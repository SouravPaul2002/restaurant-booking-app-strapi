module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/send-email',
      handler: 'email.sendCustomEmail',
      config: {
        auth: false, // set to true to make it protected
      },
    },
  ],
};
