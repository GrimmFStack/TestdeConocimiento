const { Marca, Log } = require("../models");

exports.getAll = async (req, res) => {
  const marcas = await Marca.findAll({ where: { eliminado: false } });
  res.json(marcas);
  await Log.create({ user: req.user.email, accion: "Listado", entidad: "Marca", detalle: "Listado de marcas" });
};

exports.create = async (req, res) => {
  const marca = await Marca.create(req.body);
  res.status(201).json(marca);
  await Log.create({ user: req.user.email, accion: "Creación", entidad: "Marca", detalle: JSON.stringify(marca) });
};

exports.update = async (req, res) => {
  const { id } = req.params;
  await Marca.update(req.body, { where: { id } });
  const marca = await Marca.findByPk(id);
  res.json(marca);
  await Log.create({ user: req.user.email, accion: "Actualización", entidad: "Marca", detalle: JSON.stringify(req.body) });
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  await Marca.update({ eliminado: true }, { where: { id } });
  res.sendStatus(204);
  await Log.create({ user: req.user.email, accion: "Eliminación", entidad: "Marca", detalle: `ID ${id}` });
};

exports.activate = async (req, res) => {
  const { id } = req.params;
  await Marca.update({ activa: true }, { where: { id } });
  const marca = await Marca.findByPk(id);
  res.json(marca);
  await Log.create({ user: req.user.email, accion: "Activación", entidad: "Marca", detalle: `ID ${id}` });
};

exports.deactivate = async (req, res) => {
  const { id } = req.params;
  await Marca.update({ activa: false }, { where: { id } });
  const marca = await Marca.findByPk(id);
  res.json(marca);
  await Log.create({ user: req.user.email, accion: "Desactivación", entidad: "Marca", detalle: `ID ${id}` });
};
