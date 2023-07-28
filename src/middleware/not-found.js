const notFound = (req, res) =>
  res
    .status(404)
    .json({ msg: 'Route does not exist. Please enter subscribers route.' });

module.exports = notFound;
