const { Schema, model } = require("mongoose");

const contactSchema = new Schema(
  {
    email: String,
    name: String,
    phone: String,
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("Contact", contactSchema);
