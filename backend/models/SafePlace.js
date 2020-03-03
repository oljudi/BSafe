const { Schema, model } = require("mongoose");

const placeSchema = new Schema(
  {
    name: String,
    description: String,
    geometry: {
      type: Object
    },
    properties: {
      type: Object
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("Place", placeSchema);
