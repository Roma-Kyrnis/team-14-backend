import { ObjectId } from 'mongodb';

import config from '../config/index.mjs';
import database from './client.mjs';

const points = database.collection(config.constants.DB.POINTS_NAME);

/**
 * Data should be checked
 * @param {object} point - data to put in point
 * @returns id - in hex, not base64
 */
export const dbCreatePoint = async (point) => {
  const dbPoint = await points.insertOne(point);

  return dbPoint.insertedId.toHexString();
};

// TODO: remove if not used
/**
 *
 * @param {string} id - must be a 24 character hex string, 12 byte Uint8Array, or an integer
 * @returns point's object
 */
export const dbGetPoint = async (id) => {
  const dbPoint = await points.findOne({ _id: new ObjectId(id) });

  return dbPoint;
};

/**
 *
 * @returns array of points
 */
export const dbGetAllPoints = async () => {
  const dbPoints = await points.find().toArray();
  return dbPoints;
};

/**
 *
 * @param {object} id - must be a 24 character hex string, 12 byte Uint8Array, or an integer
 * @returns point's object
 */
export const dbUpdatePoint = async ({ id, ...point }) => {
  await points.updateOne({ _id: new ObjectId(id) }, { $set: point });
};

/**
 * @param {array} - array of point ids to delete. ID must be a 24 character hex string, 12 byte Uint8Array, or an integer
 * @returns delete count
 */
export const dbDeletePoints = async (ids) => {
  const dbPoints = await points.deleteMany({ _id: { $in: ids.map((id) => new ObjectId(id)) } });

  return dbPoints.deletedCount;
};

// TODO: get points in the radius

// TODO: CRUD for points
