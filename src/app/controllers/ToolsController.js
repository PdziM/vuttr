import Tools from '../models/Tools';

class ToolsController {
  async index(req, res) {
    const { page, tag } = req.query;
    const filter = {};

    if (tag) {
      filter.tags = {};
      filter.tags.$in = new RegExp(tag, 'i');
    }

    const tools = await Tools.paginate(filter, {
      page: page || 1,
      limit: 10,
      populate: ['user'],
      sort: '-createdAt',
    });

    return res.status(200).json(tools);
  }

  async show(req, res) {
    const { id } = req.params;

    const tool = await Tools.findById(id);

    return res.status(200).json(tool);
  }

  async store(req, res) {
    const { body, userId } = req;
    const tool = await Tools.create({
      ...body,
      user: userId,
    });

    return res.status(201).json(tool);
  }

  async update(req, res) {
    const { id } = req.params;
    const { body } = req;

    const tool = await Tools.findByIdAndUpdate(id, body, {
      new: true,
    });

    return res.status(200).json(tool);
  }

  async destroy(req, res) {
    const { id } = req.params;
    await Tools.findByIdAndDelete(id);

    return res.status(200).send();
  }
}

export default new ToolsController();
