const getCurrent = async (req, res) => {
  // const { email, name, balance } = req.user;
  res.status(200).json({
    ...req.user,
  });
};

module.exports = getCurrent;
