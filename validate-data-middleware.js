export const validateUserData = (type) => {
  return (request, response, next) => {
    let payloadKeys = [];
    switch (type) {
      case "user registeration":
        payloadKeys = ["email", "password", "confirm_password"];
        break;
      default:
        break;
    }
    const body = request.body;

    for (let i = 0; i < payloadKeys.length; i++) {
      if (!body[payloadKeys[i]]) {
        return response
          .status(400)
          .json({ message: `${payloadKeys[i]} is required for ${type}` });
      }
    }

    next();
  };
};
