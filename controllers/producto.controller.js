const { Producto, Marca, Log } = require("../models");

exports.getAll = async (req, res) => {
  const productos = await Producto.findAll({ where: { eliminado: false }, include: Marca });
  res.json(productos);
  await Log.create({ user: req.user.email, accion: "Listado", entidad: "Producto", detalle: "Listado de productos" });
};

exports.search = async (req, res) => {
  const { clave, nombre, marca, fecha_alta, fecha_mod } = req.query;
  const where = { eliminado: false };
  if (clave) where.clave = clave;
  if (nombre) where.nombre = nombre;
  if (fecha_alta) where.createdAt = fecha_alta;
  if (fecha_mod) where.updatedAt = fecha_mod;
  let productos = await Producto.findAll({ where, include: Marca });
  if (marca) productos = productos.filter(p => p.Marca.nombre === marca);
  res.json(productos);
  await Log.create({ user: req.user.email, accion: "Búsqueda", entidad: "Producto", detalle: JSON.stringify(req.query) });
};

exports.create = async (req, res) => {
  const producto = await Producto.create(req.body);
  res.status(201).json(producto);
  await Log.create({ user: req.user.email, accion: "Creación", entidad: "Producto", detalle: JSON.stringify(producto) });
};

exports.update = async (req, res) => {
  const { id } = req.params;
  await Producto.update(req.body, { where: { id } });
  const producto = await Producto.findByPk(id);
  res.json(producto);
  await Log.create({ user: req.user.email, accion: "Actualización", entidad: "Producto", detalle: JSON.stringify(req.body) });
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  await Producto.update({ eliminado: true }, { where: { id } });
  res.sendStatus(204);
  await Log.create({ user: req.user.email, accion: "Eliminación", entidad: "Producto", detalle: `ID ${id}` });
};
