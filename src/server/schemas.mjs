import Joi from 'joi';

export const createPointSchema = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().required(),
  hours: Joi.string(),
  features: Joi.array().items(Joi.string()).default([]),
  source: Joi.string().required(),
  icon: Joi.string().required(),
  coordinates: Joi.array().items(Joi.number().required()).length(2).required(),

  description: Joi.string().default('').empty(''),
});

export const getPointSchema = Joi.object({
  id: Joi.string().hex().required(),
});

export const updatePointSchema = Joi.object({
  id: Joi.string().hex().required(),

  name: Joi.string(),
  description: Joi.string(),
  address: Joi.string(),
  hours: Joi.string(),
  features: Joi.array().items(Joi.string().required()),
  source: Joi.string(),
  icon: Joi.string(),
  coordinates: Joi.array().items(Joi.number().required()).length(2),
});

export const deletePointSchema = Joi.object({
  id: Joi.string().hex().required(),
});
