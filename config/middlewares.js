module.exports = [
  'strapi::logger',
  'strapi::errors',
  // 'strapi::security',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:','http:'],
          'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com','https://restaurant-booking-app-strapi.onrender.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com','https://restaurant-booking-app-strapi.onrender.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  // 'strapi::cors',
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'http://localhost:3000',
        'https://restaurant-booking-app-two.vercel.app/',
        'https://restaurant-booking-app-strapi.onrender.com'
      ], // frontend URL
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
