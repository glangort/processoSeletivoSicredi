const Client = require('../models/Client');

module.exports = {
  async index(req, res) {
    const clients = await Client.findAll();

    return res.json(clients);
  },

  async store(req, res) {
    const { name, cpf, account } = req.body;

    const status = 'Active';

    const client = await Client.create({
      name,
      cpf,
      account,
      status,
    });

    return res.json(client);
  },
  async search(req, res) {
    const account = req.params;

    const client = await Client.findOne({
      where: account,
    });

    return res.json(client);
  },

  async update(req, res) {
    const id = req.params;

    const client = await Client.findOne({
      where: id,
    });

    if (!client) {
      return res.status(400).json({
        erro: 'Cliente não encontrado.',
      });
    }

    try {
      await Client.update(req.body, {
        where: id,
      });
      return res.status(200).json({
        msg: 'Cliente Editado com Sucesso!',
      });
    } catch (error) {
      return res.status(400).json({
        error,
      });
    }
  },
};
