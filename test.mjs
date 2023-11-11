import { ObjectId } from "mongodb";

import { points } from './src/db/index.mjs';

const main = async () => {
  const pointObjectId = new ObjectId('654ecfb02f9944393877dbc9');
  const pointId = '654ece715be4882a5132627e';
  const point = {
    "id": 3,
    "name": "Сільпо",
    "address": "Київ, вул. Срібнокільська, 3Г",
    "hours": "07:30-23:00",
    "features": ["Пандус"],
    "source": "Сільпо",
    "coordinates": [50.40064043005186, 30.63221679821711]
  };

  const dbPointCreate = await points.createPoint(point);
  console.log('DB point: ', dbPointCreate);

  const dbgetAllPoints = await points.getAllPoints();
  console.log('get point: ', dbgetAllPoints);
  
  // const dbPointUpdate = await points.updatePoint({
  //   id: pointId,
  //   name: 'Сільпо +',
  //   hours: '5:00-23:00',
  //   updated_at: new Date()
  // });
  // console.log('update res: ', dbPointUpdate);

  const dbPoint = await points.deletePoints([ dbPointCreate]);
  console.log('remove: ', dbPoint);

  const dbPointGetAll = await points.getAllPoints();
  console.log('get point: ', dbPointGetAll);
};

// main();
