const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    email: String,
    name: String,
    genre: {
      type: String,
      enum: ['M', 'F']
    },
    age: Number,
    image: {
      default: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/b7c76929274393.55ead42cd721c.jpg',
      type: String
    },
    contacts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Contact'
      }
    ]
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(PLM, { usernameField: 'email' });

module.exports = model('User', userSchema);
