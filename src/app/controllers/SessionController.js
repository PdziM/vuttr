import User from '../models/User';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: 'User not Found.' });
    }

    if (!(await user.compareHash(password))) {
      return res.status(401).json({ error: 'Invalid password.' });
    }

    return res.json({ user, token: User.generatorToken(user) });
  }
}

export default new SessionController();
