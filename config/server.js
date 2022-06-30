module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ["jorge.vnarvaez@gmail.com", "%FWl9S3gfm*zje(h0!"]),
  },
});
