const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true
    },
    celular: {
      type: String,
      required: true,
    },
    contraseña: {
      type: String,
      required: true,
    },
    direccion: {
      type: String
    },
    type: {
      type: String,
    },
    
    // campos
    name: { type: String, required: [true, 'Nombra tu user'] },
    enable: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model('user', userSchema);