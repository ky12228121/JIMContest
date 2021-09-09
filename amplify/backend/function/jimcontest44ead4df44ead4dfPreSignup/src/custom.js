exports.handler = (event) => {
  if (event.triggerSource == 'PreSignUp_SignUp') {
    event.response.autoConfirmUser = true;
    event.response.autoVerifyEmail = true;
  }
  return event;
};
