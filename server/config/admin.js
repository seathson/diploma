module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '36becd54862a6c746f78ffc62eb71988'),
  },
});
