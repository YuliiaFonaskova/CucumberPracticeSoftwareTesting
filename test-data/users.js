const timestamp = Date.now();

module.exports = {
  validUser: {
    email: process.env.USER_EMAIL,
    password: process.env.USER_PASSWORD,
  },

  invalidUser: {
    email: process.env.INVALID_EMAIL,
    password: process.env.INVALID_PASSWORD,
  },

  registrationUser: {
    firstName: "User",
    lastName: "User",
    dateOfBirth: "2000-01-01",
    country: "Poland",
    postalCode: "30-704",
    houseNumber: "24",
    phone: timestamp.toString().slice(-9),
    email: `user${timestamp}@test.com`,
    password: `Reg!${timestamp}`,
  },
};
