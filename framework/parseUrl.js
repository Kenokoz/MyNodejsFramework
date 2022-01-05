module.exports = (baserRoute) => (req, res) => {
  const url = new URL(req.url, baserRoute);
  const params = {};

  url.searchParams.forEach((value, key) => {
    params[key] = value;
  });

  req.pathname = url.pathname;
  req.params = params;
};
