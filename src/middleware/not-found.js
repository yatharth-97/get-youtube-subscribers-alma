const notFound = (req, res) =>
  res.status(404).json({ msg: 'Route does not exist. Type again.' });

module.exports = notFound;
