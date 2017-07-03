function getUserInfo(request) {
  const ipaddress = request.ip;
  const language = request.acceptsLanguages()[0];
  const software = request.headers['user-agent'];

  return {
    ipaddress,
    language,
    software
  }
}

module.exports = {
  getUserInfo
}
