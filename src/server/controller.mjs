import {
  dbCreatePoint,
  dbDeletePoints,
  dbGetAllPoints,
  dbGetPoint,
  dbUpdatePoint,
} from '../db/points.mjs';

export const createPoint = async (req, res) => {
  const { name, address, hours, features, source, icon, coordinates } = req.body;
  const point = { name, address, hours, features, source, icon, coordinates };
  const createdPoint = await dbCreatePoint(point);

  res.status(201).send({ id: createdPoint });
};

export const getPoint = async (req, res) => {
  const { id } = req.params;
  const point = await dbGetPoint(id);

  res.send(point);
};

export const getAllPoints = async (req, res) => {
  const points = await dbGetAllPoints();

  res.send(points);
};

export const updatePoint = async (req, res) => {
  const { id, name, address, hours, features, source, icon, coordinates } = req.body;
  const point = { id };

  if (name) point.name = name;
  if (address) point.address = address;
  if (hours) point.hours = hours;
  if (features) point.features = features;
  if (source) point.source = source;
  if (icon) point.icon = icon;
  if (coordinates) point.coordinates = coordinates;

  await dbUpdatePoint(point);

  res.send({ message: 'OK' });
};

export const deletePoint = async (req, res) => {
  const { id } = req.params;
  const deletedCount = await dbDeletePoints([id]);

  res.send({ deletedCount });
};
