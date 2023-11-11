import { ObjectId } from 'mongodb';

import { points } from './src/db/index.mjs';

const main = async () => {
  const pointObjectId = new ObjectId('654ecfb02f9944393877dbc9');
  const pointId = '654ece715be4882a5132627e';
  // const point = {
  //   "id": 3,
  //   "name": "Сільпо",
  //   "address": "Київ, вул. Срібнокільська, 3Г",
  //   "hours": "07:30-23:00",
  //   "features": ["Пандус"],
  //   "source": "Сільпо",
  //   "coordinates": [50.40064043005186, 30.63221679821711]
  // };
  const pointsArr = [
    {
      id: 0,
      name: 'Сільпо',
      address: 'Київ, Просп. Григоренка Петра, 23',
      hours: '07:30-23:00',
      features: ['Пандус'],
      source: 'Сільпо',
      icon: 'iconShop',
      description: '',
      coordinates: [50.40541083251623, 30.63147954054484],
    },
    {
      id: 1,
      name: 'Світлофорні обʼєкти, на яких реалізовані заходи безбар`єрного середовища',
      address: 'просп. Петра Григоренка - вул. Драгоманова',
      hours: 'always',
      features: ['Понижений бордюр', 'Тактильна плитка', 'Світлофор зі звуковим сигналом'],
      source: 'Департамент транспортної інфраструктури',
      icon: 'iconTraffic',
      description: '',
      coordinates: [50.40186127766596, 30.633035578844378],
    },
    {
      id: 2,
      name: 'Житловий будинок',
      address: 'Срібнокільська вул. 1',
      hours: 'always',
      features: ['Ліфт'],
      source: 'Інформаційно-аналітична система управління житловим фондом Києва',
      icon: 'iconElevator',
      description: '',
      coordinates: [50.40279882475904, 30.63051489820649],
    },
    {
      id: 3,
      name: 'Сільпо',
      address: 'Київ, вул. Срібнокільська, 3Г',
      hours: '07:30-23:00',
      features: ['Пандус'],
      source: 'Сільпо',
      icon: 'iconShop',
      description: '',
      coordinates: [50.40064043005186, 30.63221679821711],
    },
    {
      id: 4,
      name: 'Відділення 10026/065',
      address: 'Київ, пр-кт Григоренка Петра, 22/20',
      hours: 'always',
      features: ['Пандус', 'Тактильна плитка'],
      source: 'Ощадбанк',
      icon: 'iconLandmark',
      description: '',
      coordinates: [50.40915219663815, 30.626511869381346],
    },
    {
      id: 5,
      name: 'Фітнес-парк біля озера Лебедине',
      address: 'Парк',
      hours: 'always',
      features: ['Вбиральня для людей з інвалідністю'],
      source: 'Департамент захисту довкілля та адаптації до зміни клімату',
      icon: 'iconRestroom',
      description: '',
      coordinates: [50.40330108590782, 30.643978783040826],
    },
    {
      id: 6,
      name: 'Вулиці з наземними пішохідними переходами, які мають занижений бортовий камінь та тактильну плитку',
      address: 'пр. Григоренка',
      hours: 'always',
      features: ['Понижений бордюр', 'Тактильна плитка'],
      source: 'Дарницька районна адміністрація / ШЕУ Дарницького району',
      icon: 'iconTraffic',
      description: '',
      coordinates: [50.406674773229355, 30.62899025590996],
    },
    {
      id: 7,
      name: 'Житловий будинок',
      address: 'Срібнокільська вул., 3В',
      hours: 'always',
      features: ['Ліфт'],
      source: 'Інформаційно-аналітична система управління житловим фондом Києва',
      icon: 'iconElevator',
      description: '',
      coordinates: [50.40059028517875, 30.63002612705329],
    },
    {
      id: 8,
      name: 'Світлофор',
      address: 'Срібнокільська вул., 3В',
      hours: 'always',
      features: ['Світлофор зі звуковим сигналом'],
      source: 'Департамент транспортної інфраструктури',
      icon: 'iconTraffic',
      description: '',
      coordinates: [50.402470899232284, 30.628685022506197],
    },
  ];

  for (const point of pointsArr) {
    const dbPointCreate = await points.dbCreatePoint(point);
    console.log('DB point: ', dbPointCreate);
  }

  // const dbgetAllPoints = await points.getAllPoints();
  // console.log('get point: ', dbgetAllPoints);

  // const dbPointUpdate = await points.updatePoint({
  //   id: pointId,
  //   name: 'Сільпо +',
  //   hours: '5:00-23:00',
  //   updated_at: new Date()
  // });
  // console.log('update res: ', dbPointUpdate);

  // const dbPoint = await points.deletePoints([dbPointCreate]);
  // console.log('remove: ', dbPoint);

  // const dbPointGetAll = await points.getAllPoints();
  // console.log('get point: ', dbPointGetAll);
};

main();
