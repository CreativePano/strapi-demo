module.exports = [
  'strapi::errors',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  // set frameguard x-frame-options to allow embedding in iframe
  {
    name: 'strapi::security',
    config: {
      frameguard: {
        action: 'sameorigin',
        domain: 'http://localhost:3000'
      },
      // Content-Security-Policy: frame-ancestors 'self' http://localhost:3000
      contentSecurityPolicy: {
        directives: {
          frameAncestors: ["'self'", "http://localhost:3000"],
          frameSrc: ["'self'", "http://localhost:3000"],
        },
      }
    }
  },
];
