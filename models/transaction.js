const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleSaveErrors, RequestError } = require("../helpers");

const transactionSchema = new Schema(
  {
    type: {
      type: Boolean,
      required: [true, "Type is required"],
    },
    sum: {
      type: Number,
      required: [true, "Sum is required"],
    },
    date: {
      type: Date,
      required: [true, "Date is required"],
    },
    category: {
      type: String,
      default: null,
    },
    comment: {
      type: String,
      default: null,
    },
    balance: {
      type: Number,
      required: [true, "Transaction balance is required"],
      default: 0,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

transactionSchema.post("save", handleSaveErrors);

const Transaction = model("transaction", transactionSchema);

const addSchema = Joi.object({
  type: Joi.boolean().required(),
  sum: Joi.number().positive().required(),
  date: Joi.date().required(),
  comment: Joi.string(),
  category: Joi.string(),
});

const schemas = {
  addSchema,
};

module.exports = {
  Transaction,
  schemas,
};
