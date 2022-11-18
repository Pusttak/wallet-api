const { Transaction } = require("../../models/transaction");
const { RequestError } = require("../../helpers");

const getById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Transaction.findById(id);
  if (!result) {
    throw RequestError(404);
  }
  res.status(200).json(result);
};

module.exports = getById;
