import User from './user.model';

export async function getUser(req, res) {
  // const { name } = req.query;
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function getUserCount(req, res) {
  try {
    const count = await User.count({});
    res.status(200).json({ users: count });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function createUser(req, res) {
  try {
    const result = await User.create({ ...req.body });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function patchUser(req, res) {
  try {
    res.status(200).json({});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function deleteUser(req, res) {
  try {
    res.status(200).json({});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
