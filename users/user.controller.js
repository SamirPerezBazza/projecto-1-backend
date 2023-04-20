
import User from './user.model';

export async function getUser(req,res) {
  // const { name } = req.query;

  const users = await User.find(req.query);

  res.status(200).json(users);
}

export async function getUserCount(req,res){
    const count = await User.count();
    res.status(200).json({users: count})
}

export async function createUser(req, res) {
  try {
    const { name } = req.body;
    const user = new User({ name });
    const resultado = await user.save();
    res.status(200).json(resultado);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function patchUser(req, res) {
  res.status(200).json({});
}

export async function deleteUser(req, res) {
  res.status(200).json({});
}