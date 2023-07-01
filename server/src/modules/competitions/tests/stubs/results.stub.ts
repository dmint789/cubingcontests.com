import mongoose from 'mongoose';
import { ResultDocument } from '~/src/models/result.model';

export const resultsStub = (): ResultDocument[] => {
  return [
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c44'),
      competitionId: 'Munich19022023',
      eventId: '333tbf',
      date: new Date('2023-02-19T06:49:04Z'),
      personId: '2;4',
      ranking: 2,
      attempts: [14186, 10247, 10787, 17962, 5059],
      best: 5059,
      average: 11740,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c45'),
      competitionId: 'Munich19022023',
      eventId: '333tbf',
      date: new Date('2023-02-19T06:49:04Z'),
      personId: '3;1',
      ranking: 1,
      attempts: [2148, 2866, 3614, -1, 2990],
      best: 2148,
      average: 3157,

      __v: 0,
      regionalSingleRecord: 'XWR',
      regionalAverageRecord: 'XWR',
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c46'),
      competitionId: 'Munich19022023',
      eventId: '333tbf',
      date: new Date('2023-02-19T06:49:04Z'),
      personId: '2;4',
      ranking: 2,
      attempts: [14186, 10247, 10787, 17962, 5059],
      best: 5059,
      average: 11740,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c47'),
      competitionId: 'Munich19022023',
      eventId: '333oh',
      date: new Date('2023-02-19T06:49:04Z'),
      personId: '3',
      ranking: 1,
      attempts: [2060, 2047, 2449, 2110, 2120],
      best: 2047,
      average: 2097,
      __v: 0,
      regionalSingleRecord: 'XWR',
      regionalAverageRecord: 'XWR',
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c48'),
      competitionId: 'Munich19022023',
      eventId: '333oh',
      date: new Date('2023-02-19T06:49:04Z'),
      personId: '4',
      ranking: 2,
      attempts: [2512, 2322, 2999, 2361, 2107],
      best: 2107,
      average: 2398,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c49'),
      competitionId: 'Munich19022023',
      eventId: '333',
      date: new Date('2023-02-19T06:49:04Z'),
      personId: '1',
      ranking: 1,
      attempts: [990, 1385, 1189, 1294, 1028],
      best: 990,
      average: 1170,
      __v: 0,
      regionalSingleRecord: 'XWR',
      regionalAverageRecord: 'XWR',
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c4a'),
      competitionId: 'Munich19022023',
      eventId: '333',
      date: new Date('2023-02-19T06:49:04Z'),
      personId: '4',
      ranking: 2,
      attempts: [1003, 1399, 1379, 1404, 1142],
      best: 1003,
      average: 1307,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c4b'),
      competitionId: 'Munich19022023',
      eventId: '333',
      date: new Date('2023-02-19T06:49:04Z'),
      personId: '3',
      ranking: 3,
      attempts: [1278, 1404, 1341, 1307, 1471],
      best: 1278,
      average: 1351,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c4c'),
      competitionId: 'Munich19022023',
      eventId: '333',
      date: new Date('2023-02-19T06:49:04Z'),
      personId: '2',
      ranking: 4,
      attempts: [1722, 1733, 1418, 1164, 1884],
      best: 1164,
      average: 1624,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c4d'),
      competitionId: 'Munich19022023',
      eventId: '333bf',
      date: new Date('2023-02-19T06:49:04Z'),
      personId: '3',
      ranking: 1,
      attempts: [2217, -1, 2412],
      best: 2217,
      average: -1,
      __v: 0,
      regionalSingleRecord: 'XWR',
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c4e'),
      competitionId: 'Munich19022023',
      eventId: '333bf',
      date: new Date('2023-02-19T06:49:04Z'),
      personId: '1',
      ranking: 2,
      attempts: [7327, -1, -1],
      best: 7327,
      average: -1,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c4f'),
      competitionId: 'Munich19022023',
      eventId: '333bf',
      date: new Date('2023-02-19T06:49:04Z'),
      personId: '4',
      ranking: 3,
      attempts: [-1, -1, -1],
      best: -1,
      average: -1,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c50'),
      competitionId: 'Munich14062023',
      eventId: '444',
      date: new Date('2023-06-14T06:52:26Z'),
      personId: '5',
      ranking: 1,
      attempts: [4003, 3872, 3762, 3910, 3555],
      best: 3555,
      average: 3848,
      __v: 0,
      regionalSingleRecord: 'XWR',
      regionalAverageRecord: 'XWR',
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c51'),
      competitionId: 'Munich14062023',
      eventId: '444',
      date: new Date('2023-06-14T06:52:26Z'),
      personId: '6',
      ranking: 2,
      attempts: [4740, 4223, 5098, 4878, 4938],
      best: 4223,
      average: 4852,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c52'),
      competitionId: 'Munich14062023',
      eventId: '444',
      date: new Date('2023-06-14T06:52:26Z'),
      personId: '3',
      ranking: 3,
      attempts: [5446, 5335, 5336, 5558, 4485],
      best: 4485,
      average: 5372,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c54'),
      competitionId: 'Munich14062023',
      eventId: '444',
      date: new Date('2023-06-14T06:52:26Z'),
      personId: '7',
      ranking: 5,
      attempts: [7531, 11159, 7330, -1, 7460],
      best: 7330,
      average: 8717,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c55'),
      competitionId: 'Munich14062023',
      eventId: '555',
      date: new Date('2023-06-14T06:52:26Z'),
      personId: '5',
      ranking: 1,
      attempts: [7990, 8111, 7389, 7759, 6985],
      best: 6985,
      average: 7713,
      __v: 0,
      regionalSingleRecord: 'XWR',
      regionalAverageRecord: 'XWR',
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c56'),
      competitionId: 'Munich14062023',
      eventId: '555',
      date: new Date('2023-06-14T06:52:26Z'),
      personId: '4',
      ranking: 2,
      attempts: [14325, 13912, 11970, 13471, 14007],
      best: 11970,
      average: 13797,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c57'),
      competitionId: 'Munich14062023',
      eventId: '555',
      date: new Date('2023-06-14T06:52:26Z'),
      personId: '6',
      ranking: 3,
      attempts: [9296, -2, -2, -2, -2],
      best: 9296,
      average: -1,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c43'),
      competitionId: 'Munich19022023',
      eventId: '333tbf',
      date: new Date('2023-02-19T06:49:04Z'),
      personId: '3;1',
      ranking: 1,
      attempts: [2148, 2866, 3614, -1, 2990],
      best: 2148,
      average: 3157,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c59'),
      competitionId: 'Munich14062023',
      eventId: '333bf',
      date: new Date('2023-06-14T06:52:26Z'),
      personId: '4',
      ranking: 2,
      attempts: [-1, 3755, -1],
      best: 3755,
      average: -1,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c5a'),
      competitionId: 'Munich14062023',
      eventId: '333bf',
      date: new Date('2023-06-14T06:52:26Z'),
      personId: '5',
      ranking: 3,
      attempts: [7086, 7922, 6237],
      best: 6237,
      average: 7082,
      __v: 0,
      regionalAverageRecord: 'XWR',
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c5b'),
      competitionId: 'Munich14062023',
      eventId: '333bf',
      date: new Date('2023-06-14T06:52:26Z'),
      personId: '6',
      ranking: 4,
      attempts: [-1, 7980, -1],
      best: 7980,
      average: -1,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c5c'),
      competitionId: 'Munich14062023',
      eventId: '333fm',
      date: new Date('2023-06-14T06:52:26Z'),
      personId: '6',
      ranking: 1,
      attempts: [39, 51, 51],
      best: 39,
      average: 4700,
      __v: 0,
      regionalSingleRecord: 'XWR',
      regionalAverageRecord: 'XWR',
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c5d'),
      competitionId: 'Munich14062023',
      eventId: '333fm',
      date: new Date('2023-06-14T06:52:26Z'),
      personId: '3',
      ranking: 2,
      attempts: [49, 43, 52],
      best: 43,
      average: 4800,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c5e'),
      competitionId: 'Munich14062023',
      eventId: '333fm',
      date: new Date('2023-06-14T06:52:26Z'),
      personId: '4',
      ranking: 3,
      attempts: [58, 53, 59],
      best: 53,
      average: 5667,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c5f'),
      competitionId: 'Munich14062023',
      eventId: '333oh',
      date: new Date('2023-06-14T06:52:26Z'),
      personId: '6',
      ranking: 1,
      attempts: [2382, 1869, 1976, 2143, 1691],
      best: 1691,
      average: 1996,
      __v: 0,
      regionalSingleRecord: 'XWR',
      regionalAverageRecord: 'XWR',
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c60'),
      competitionId: 'Munich14062023',
      eventId: '333oh',
      date: new Date('2023-06-14T06:52:26Z'),
      personId: '3',
      ranking: 2,
      attempts: [1939, 2589, 2055, 2170, 2503],
      best: 1939,
      average: 2243,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c61'),
      competitionId: 'Munich14062023',
      eventId: '333oh',
      date: new Date('2023-06-14T06:52:26Z'),
      personId: '4',
      ranking: 3,
      attempts: [2904, 2289, 1932, 2276, 2302],
      best: 1932,
      average: 2289,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c62'),
      competitionId: 'Munich14062023',
      eventId: '333oh',
      date: new Date('2023-06-14T06:52:26Z'),
      personId: '7',
      ranking: 4,
      attempts: [3058, 3046, 2636, 3795, 2280],
      best: 2280,
      average: 2913,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c63'),
      competitionId: 'Munich14062023',
      eventId: '222',
      date: new Date('2023-06-14T06:52:26Z'),
      personId: '5',
      ranking: 1,
      attempts: [320, 485, 340, 525, 593],
      best: 320,
      average: 450,
      __v: 0,
      regionalAverageRecord: 'XWR',
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c64'),
      competitionId: 'Munich14062023',
      eventId: '222',
      date: new Date('2023-06-14T06:52:26Z'),
      personId: '3',
      ranking: 2,
      attempts: [310, 748, 393, 536, 613],
      best: 310,
      average: 514,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c65'),
      competitionId: 'Munich14062023',
      eventId: '222',
      date: new Date('2023-06-14T06:52:26Z'),
      personId: '4',
      ranking: 3,
      attempts: [264, 625, 650, 510, 439],
      best: 264,
      average: 525,
      __v: 0,
      regionalSingleRecord: 'XWR',
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c66'),
      competitionId: 'Munich14062023',
      eventId: '222',
      date: new Date('2023-06-14T06:52:26Z'),
      personId: '6',
      ranking: 4,
      attempts: [673, 473, 886, 743, 688],
      best: 473,
      average: 701,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c67'),
      competitionId: 'Munich14062023',
      eventId: '222',
      date: new Date('2023-06-14T06:52:26Z'),
      personId: '7',
      ranking: 5,
      attempts: [-1, 1075, 1247, -1, 593],
      best: 593,
      average: -1,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c68'),
      competitionId: 'Munich14062023',
      eventId: '333',
      date: new Date('2023-06-14T06:52:26Z'),
      personId: '5',
      ranking: 1,
      attempts: [1087, 1111, 1198, 1200, 1077],
      best: 1077,
      average: 1132,
      __v: 0,
      regionalAverageRecord: 'XWR',
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c69'),
      competitionId: 'Munich14062023',
      eventId: '333',
      date: new Date('2023-06-14T06:52:26Z'),
      personId: '7',
      ranking: 2,
      attempts: [1273, 1198, 1226, 1206, 1449],
      best: 1198,
      average: 1235,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c6a'),
      competitionId: 'Munich14062023',
      eventId: '333',
      date: new Date('2023-06-14T06:52:26Z'),
      personId: '3',
      ranking: 3,
      attempts: [1179, 1124, 1313, 1257, 1275],
      best: 1124,
      average: 1237,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c6b'),
      competitionId: 'Munich14062023',
      eventId: '333',
      date: new Date('2023-06-14T06:52:26Z'),
      personId: '6',
      ranking: 4,
      attempts: [1360, 1240, 1039, 1598, 1318],
      best: 1039,
      average: 1306,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c6c'),
      competitionId: 'Munich14062023',
      eventId: '333',
      date: new Date('2023-06-14T06:52:26Z'),
      personId: '4',
      ranking: 5,
      attempts: [1920, 1240, 1220, 1072, 2238],
      best: 1072,
      average: 1460,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c6d'),
      competitionId: 'Munich27062023',
      eventId: '666',
      date: new Date('2023-06-27T06:53:10Z'),
      personId: '5',
      ranking: 1,
      attempts: [15299, 14398, 14084],
      best: 14084,
      average: 14594,
      __v: 0,
      regionalSingleRecord: 'XWR',
      regionalAverageRecord: 'XWR',
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c6e'),
      competitionId: 'Munich27062023',
      eventId: '666',
      date: new Date('2023-06-27T06:53:10Z'),
      personId: '1',
      ranking: 2,
      attempts: [20168, 21170, 19841],
      best: 19841,
      average: 20393,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c6f'),
      competitionId: 'Munich27062023',
      eventId: '666',
      date: new Date('2023-06-27T06:53:10Z'),
      personId: '4',
      ranking: 3,
      attempts: [25127, 22765, 20540],
      best: 20540,
      average: 22811,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c70'),
      competitionId: 'Munich27062023',
      eventId: '666',
      date: new Date('2023-06-27T06:53:10Z'),
      personId: '3',
      ranking: 4,
      attempts: [23023, -1, 22636],
      best: 22636,
      average: -1,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c71'),
      competitionId: 'Munich27062023',
      eventId: '333tbf',
      date: new Date('2023-06-27T06:53:10Z'),
      personId: '3;1',
      ranking: 1,
      attempts: [4391, 2044, 2193, 2927, 2474],
      best: 2044,
      average: 2531,
      __v: 0,
      regionalSingleRecord: 'XWR',
      regionalAverageRecord: 'XWR',
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c72'),
      competitionId: 'Munich27062023',
      eventId: '333tbf',
      date: new Date('2023-06-27T06:53:10Z'),
      personId: '4;7',
      ranking: 2,
      attempts: [8963, 6990, 6329, 5589, 6906],
      best: 5589,
      average: 6742,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c73'),
      competitionId: 'Munich27062023',
      eventId: '333',
      date: new Date('2023-06-27T06:53:10Z'),
      personId: '5',
      ranking: 1,
      attempts: [1159, 1143, 1161, 909, 1332],
      best: 909,
      average: 1154,
      __v: 0,
      regionalSingleRecord: 'XWR',
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c74'),
      competitionId: 'Munich27062023',
      eventId: '333',
      date: new Date('2023-06-27T06:53:10Z'),
      personId: '7',
      ranking: 2,
      attempts: [1158, 1139, -1, 974, 1350],
      best: 974,
      average: 1216,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c75'),
      competitionId: 'Munich27062023',
      eventId: '333',
      date: new Date('2023-06-27T06:53:10Z'),
      personId: '3',
      ranking: 3,
      attempts: [1395, 1366, 1133, 1213, 1193],
      best: 1133,
      average: 1257,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c76'),
      competitionId: 'Munich27062023',
      eventId: '333',
      date: new Date('2023-06-27T06:53:10Z'),
      personId: '1',
      ranking: 4,
      attempts: [1097, 1858, 1195, 1519, 972],
      best: 972,
      average: 1270,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c53'),
      competitionId: 'Munich14062023',
      eventId: '444',
      date: new Date('2023-06-14T06:52:26Z'),
      personId: '4',
      ranking: 4,
      attempts: [8382, 6475, 6278, 7966, 6548],
      best: 6278,
      average: 6996,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c78'),
      competitionId: 'Munich27062023',
      eventId: '333',
      date: new Date('2023-06-27T06:53:10Z'),
      personId: '8',
      ranking: 6,
      attempts: [2140, 2172, 1699, 2000, 1881],
      best: 1699,
      average: 2007,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c79'),
      competitionId: 'Munich27062023',
      eventId: '333oh',
      date: new Date('2023-06-27T06:53:10Z'),
      personId: '3',
      ranking: 1,
      attempts: [1313, 1950, 1778, 2212, 2136],
      best: 1313,
      average: 1955,
      __v: 0,
      regionalSingleRecord: 'XWR',
      regionalAverageRecord: 'XWR',
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c7a'),
      competitionId: 'Munich27062023',
      eventId: '333oh',
      date: new Date('2023-06-27T06:53:10Z'),
      personId: '4',
      ranking: 2,
      attempts: [1962, 2406, 2313, 2399, 1779],
      best: 1779,
      average: 2225,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c7b'),
      competitionId: 'Munich27062023',
      eventId: '333oh',
      date: new Date('2023-06-27T06:53:10Z'),
      personId: '7',
      ranking: 3,
      attempts: [2502, 2738, 2702, 2077, 3037],
      best: 2077,
      average: 2647,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c7c'),
      competitionId: 'Munich27062023',
      eventId: '333oh',
      date: new Date('2023-06-27T06:53:10Z'),
      personId: '5',
      ranking: 4,
      attempts: [2767, 3237, 2674, 2344, 2557],
      best: 2344,
      average: 2666,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c58'),
      competitionId: 'Munich14062023',
      eventId: '333bf',
      date: new Date('2023-06-14T06:52:26Z'),
      personId: '3',
      ranking: 1,
      attempts: [2789, 2719, -1],
      best: 2719,
      average: -1,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c7e'),
      competitionId: 'Munich27062023',
      eventId: '333oh',
      date: new Date('2023-06-27T06:53:10Z'),
      personId: '8',
      ranking: 6,
      attempts: [3473, 4457, 3880, 3951, 4186],
      best: 3473,
      average: 4006,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c7f'),
      competitionId: 'Munich27062023',
      eventId: '222',
      date: new Date('2023-06-27T06:53:10Z'),
      personId: '1',
      ranking: 1,
      attempts: [458, 331, 153, 342, 338],
      best: 153,
      average: 337,
      __v: 0,
      regionalSingleRecord: 'XWR',
      regionalAverageRecord: 'XWR',
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c80'),
      competitionId: 'Munich27062023',
      eventId: '222',
      date: new Date('2023-06-27T06:53:10Z'),
      personId: '3',
      ranking: 2,
      attempts: [567, 332, 205, 517, 239],
      best: 205,
      average: 363,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c81'),
      competitionId: 'Munich27062023',
      eventId: '222',
      date: new Date('2023-06-27T06:53:10Z'),
      personId: '4',
      ranking: 3,
      attempts: [653, 323, 378, 394, 315],
      best: 315,
      average: 365,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c82'),
      competitionId: 'Munich27062023',
      eventId: '222',
      date: new Date('2023-06-27T06:53:10Z'),
      personId: '5',
      ranking: 4,
      attempts: [313, 387, 405, -1, 382],
      best: 313,
      average: 391,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c83'),
      competitionId: 'Munich27062023',
      eventId: '222',
      date: new Date('2023-06-27T06:53:10Z'),
      personId: '7',
      ranking: 5,
      attempts: [901, 663, 545, -1, 774],
      best: 545,
      average: 779,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c84'),
      competitionId: 'Munich27062023',
      eventId: '444',
      date: new Date('2023-06-27T06:53:10Z'),
      personId: '5',
      ranking: 1,
      attempts: [3922, 4608, 3960, 4231, 3502],
      best: 3502,
      average: 4038,
      __v: 0,
      regionalSingleRecord: 'XWR',
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c85'),
      competitionId: 'Munich27062023',
      eventId: '444',
      date: new Date('2023-06-27T06:53:10Z'),
      personId: '1',
      ranking: 2,
      attempts: [5498, 4623, 5206, 5648, 6121],
      best: 4623,
      average: 5451,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c86'),
      competitionId: 'Munich27062023',
      eventId: '444',
      date: new Date('2023-06-27T06:53:10Z'),
      personId: '3',
      ranking: 3,
      attempts: [5453, 6386, 7375, 6468, 5605],
      best: 5453,
      average: 6153,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c87'),
      competitionId: 'Munich27062023',
      eventId: '444',
      date: new Date('2023-06-27T06:53:10Z'),
      personId: '4',
      ranking: 4,
      attempts: [6799, 6199, 8245, 7172, 6065],
      best: 6065,
      average: 6723,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c4ecadd98a79f99c88'),
      competitionId: 'Munich27062023',
      eventId: '333bf',
      date: new Date('2023-06-27T06:53:10Z'),
      personId: '3',
      ranking: 1,
      attempts: [2758, 2302, 3324],
      best: 2302,
      average: 2795,
      __v: 0,
      regionalAverageRecord: 'XWR',
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c4ecadd98a79f99c89'),
      competitionId: 'Munich27062023',
      eventId: '333bf',
      date: new Date('2023-06-27T06:53:10Z'),
      personId: '1',
      ranking: 2,
      attempts: [4002, -1, -1],
      best: 4002,
      average: -1,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c4ecadd98a79f99c8a'),
      competitionId: 'Munich27062023',
      eventId: '333bf',
      date: new Date('2023-06-27T06:53:10Z'),
      personId: '4',
      ranking: 3,
      attempts: [-1, -1, -1],
      best: -1,
      average: -1,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c4ecadd98a79f99c8b'),
      competitionId: 'Munich27062023',
      eventId: '333tf',
      date: new Date('2023-06-27T06:53:10Z'),
      personId: '1;7',
      ranking: 1,
      attempts: [1949, 1299, 1371, 1403, 1552],
      best: 1299,
      average: 1442,
      __v: 0,
      regionalSingleRecord: 'XWR',
      regionalAverageRecord: 'XWR',
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c4ecadd98a79f99c8c'),
      competitionId: 'Munich27062023',
      eventId: '333tf',
      date: new Date('2023-06-27T06:53:10Z'),
      personId: '4;3',
      ranking: 2,
      attempts: [2465, 2396, 1762, 2030, 1923],
      best: 1762,
      average: 2116,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c4ecadd98a79f99c8d'),
      competitionId: 'Munich27062023',
      eventId: '555',
      date: new Date('2023-06-27T06:53:10Z'),
      personId: '5',
      ranking: 1,
      attempts: [8736, 7751, 6988, 7532, 7234],
      best: 6988,
      average: 7506,
      __v: 0,
      regionalAverageRecord: 'XWR',
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c4ecadd98a79f99c8e'),
      competitionId: 'Munich27062023',
      eventId: '555',
      date: new Date('2023-06-27T06:53:10Z'),
      personId: '3',
      ranking: 2,
      attempts: [9073, 9234, 9555, 11603, 8580],
      best: 8580,
      average: 9287,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c4ecadd98a79f99c8f'),
      competitionId: 'Munich27062023',
      eventId: '555',
      date: new Date('2023-06-27T06:53:10Z'),
      personId: '1',
      ranking: 3,
      attempts: [10164, 11364, 10305, 9120, 10040],
      best: 9120,
      average: 10170,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c4ecadd98a79f99c90'),
      competitionId: 'Munich27062023',
      eventId: '555',
      date: new Date('2023-06-27T06:53:10Z'),
      personId: '4',
      ranking: 4,
      attempts: [11212, 10098, 11188, 11237, 11699],
      best: 10098,
      average: 11212,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c4ecadd98a79f99c91'),
      competitionId: 'Munich27062023',
      eventId: '333fm',
      date: new Date('2023-06-27T06:53:10Z'),
      personId: '3',
      ranking: 1,
      attempts: [41, 40, 57],
      best: 40,
      average: 4600,
      __v: 0,
      regionalAverageRecord: 'XWR',
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c4ecadd98a79f99c92'),
      competitionId: 'Munich27062023',
      eventId: '333fm',
      date: new Date('2023-06-27T06:53:10Z'),
      personId: '1',
      ranking: 2,
      attempts: [50, 39, 51],
      best: 39,
      average: 4667,
      __v: 0,
      regionalSingleRecord: 'XWR',
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c4ecadd98a79f99c93'),
      competitionId: 'Munich27062023',
      eventId: '333fm',
      date: new Date('2023-06-27T06:53:10Z'),
      personId: '4',
      ranking: 3,
      attempts: [52, 57, 49],
      best: 49,
      average: 5267,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c4ecadd98a79f99c94'),
      competitionId: 'Munich27062023',
      eventId: '333fm',
      date: new Date('2023-06-27T06:53:10Z'),
      personId: '5',
      ranking: 4,
      attempts: [60, 54, 60],
      best: 54,
      average: 5800,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c77'),
      competitionId: 'Munich27062023',
      eventId: '333',
      date: new Date('2023-06-27T06:53:10Z'),
      personId: '4',
      ranking: 5,
      attempts: [1109, 1421, 1275, 1229, 1367],
      best: 1109,
      average: 1290,
      __v: 0,
    },
    {
      _id: new mongoose.Types.ObjectId('649fe9c3ecadd98a79f99c7d'),
      competitionId: 'Munich27062023',
      eventId: '333oh',
      date: new Date('2023-06-27T06:53:10Z'),
      personId: '1',
      ranking: 5,
      attempts: [2832, 3159, 2769, 3473, 3076],
      best: 2769,
      average: 3022,
      __v: 0,
    },
  ] as ResultDocument[];
};
