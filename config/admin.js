module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd273f1b0f1d106a4f90736ea0d576a10'),
  },
});
