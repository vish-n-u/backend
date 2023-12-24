const authController = require("../controller/auth.controller")
const authValidation = require("../validation/auth.validation");

const authRoute = (app) => {
  app.post("/postMedia/api/v1/register",
[authValidation.registrationValidation],
    authController.registration
  );
  app.post(
    "/postMedia/api/v1/login",
    [authValidation.validateLogin],
    authController.login
  );
  
};

module.exports = authRoute;