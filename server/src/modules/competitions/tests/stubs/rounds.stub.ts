import { RoundDocument } from '~/src/models/round.model';
import { RoundFormat, RoundType, WcaRecordType } from '@sh/enums';

export const roundsStub = (): RoundDocument[] =>
  [
    {
      roundId: '333-team-bld-r1',
      competitionId: 'Munich19022023',
      date: new Date('2023-02-19T00:00:00Z'),
      roundTypeId: RoundType.Final,
      format: RoundFormat.Average,
      results: [
        {
          competitionId: 'Munich19022023',
          eventId: '333-team-bld',
          date: new Date('2023-02-19T00:00:00Z'),
          personIds: [3, 1],
          ranking: 1,
          attempts: [{ result: 2148 }, { result: 2866 }, { result: 3614 }, { result: -1 }, { result: 2990 }],
          best: 2148,
          average: 3157,
        },
        {
          competitionId: 'Munich19022023',
          eventId: '333-team-bld',
          date: new Date('2023-02-19T00:00:00Z'),
          personIds: [2, 4],
          ranking: 2,
          attempts: [{ result: 14186 }, { result: 10247 }, { result: 10787 }, { result: 17962 }, { result: 5059 }],
          best: 5059,
          average: 11740,
        },
      ],
    },
    {
      roundId: '333oh-r1',
      competitionId: 'Munich19022023',
      date: new Date('2023-02-19T00:00:00Z'),
      roundTypeId: RoundType.Final,
      format: RoundFormat.Average,
      results: [
        {
          competitionId: 'Munich19022023',
          eventId: '333oh',
          date: new Date('2023-02-19T00:00:00Z'),
          personIds: [3],
          ranking: 1,
          attempts: [{ result: 2060 }, { result: 2047 }, { result: 2449 }, { result: 2110 }, { result: 2120 }],
          best: 2047,
          average: 2097,
        },
        {
          competitionId: 'Munich19022023',
          eventId: '333oh',
          date: new Date('2023-02-19T00:00:00Z'),
          personIds: [4],
          ranking: 2,
          attempts: [{ result: 2512 }, { result: 2322 }, { result: 2999 }, { result: 2361 }, { result: 2107 }],
          best: 2107,
          average: 2398,
        },
      ],
    },
    {
      roundId: '333-r1',
      competitionId: 'Munich19022023',
      date: new Date('2023-02-19T00:00:00Z'),
      roundTypeId: RoundType.Final,
      format: RoundFormat.Average,
      results: [
        {
          competitionId: 'Munich19022023',
          eventId: '333',
          date: new Date('2023-02-19T00:00:00Z'),
          personIds: [1],
          ranking: 1,
          attempts: [{ result: 990 }, { result: 1385 }, { result: 1189 }, { result: 1294 }, { result: 1028 }],
          best: 990,
          average: 1170,
        },
        {
          competitionId: 'Munich19022023',
          eventId: '333',
          date: new Date('2023-02-19T00:00:00Z'),
          personIds: [4],
          ranking: 2,
          attempts: [{ result: 1003 }, { result: 1399 }, { result: 1379 }, { result: 1404 }, { result: 1142 }],
          best: 1003,
          average: 1307,
        },
        {
          competitionId: 'Munich19022023',
          eventId: '333',
          date: new Date('2023-02-19T00:00:00Z'),
          personIds: [3],
          ranking: 3,
          attempts: [{ result: 1278 }, { result: 1404 }, { result: 1341 }, { result: 1307 }, { result: 1471 }],
          best: 1278,
          average: 1351,
        },
        {
          competitionId: 'Munich19022023',
          eventId: '333',
          date: new Date('2023-02-19T00:00:00Z'),
          personIds: [2],
          ranking: 4,
          attempts: [{ result: 1722 }, { result: 1733 }, { result: 1418 }, { result: 1164 }, { result: 1884 }],
          best: 1164,
          average: 1624,
        },
      ],
    },
    {
      roundId: '333bf-r1',
      competitionId: 'Munich19022023',
      date: new Date('2023-02-19T00:00:00Z'),
      roundTypeId: RoundType.Final,
      format: RoundFormat.BestOf3,
      results: [
        {
          competitionId: 'Munich19022023',
          eventId: '333bf',
          date: new Date('2023-02-19T00:00:00Z'),
          personIds: [3],
          ranking: 1,
          attempts: [{ result: 2217 }, { result: -1 }, { result: 2412 }],
          best: 2217,
          average: -1,
          regionalSingleRecord: WcaRecordType.WR,
        },
        {
          competitionId: 'Munich19022023',
          eventId: '333bf',
          date: new Date('2023-02-19T00:00:00Z'),
          personIds: [1],
          ranking: 2,
          attempts: [{ result: 7327 }, { result: -1 }, { result: -1 }],
          best: 7327,
          average: -1,
        },
        {
          competitionId: 'Munich19022023',
          eventId: '333bf',
          date: new Date('2023-02-19T00:00:00Z'),
          personIds: [4],
          ranking: 3,
          attempts: [{ result: -1 }, { result: -1 }, { result: -1 }],
          best: -1,
          average: -1,
        },
      ],
    },
    {
      roundId: '444-r1',
      competitionId: 'Munich14062023',
      date: new Date('2023-06-14T00:00:00Z'),
      roundTypeId: RoundType.Final,
      format: RoundFormat.Average,
      results: [
        {
          competitionId: 'Munich14062023',
          eventId: '444',
          date: new Date('2023-06-14T00:00:00Z'),
          personIds: [5],
          ranking: 1,
          attempts: [{ result: 4003 }, { result: 3872 }, { result: 3762 }, { result: 3910 }, { result: 3555 }],
          best: 3555,
          average: 3848,
          regionalAverageRecord: WcaRecordType.WR,
        },
        {
          competitionId: 'Munich14062023',
          eventId: '444',
          date: new Date('2023-06-14T00:00:00Z'),
          personIds: [6],
          ranking: 2,
          attempts: [{ result: 4740 }, { result: 4223 }, { result: 5098 }, { result: 4878 }, { result: 4938 }],
          best: 4223,
          average: 4852,
        },
        {
          competitionId: 'Munich14062023',
          eventId: '444',
          date: new Date('2023-06-14T00:00:00Z'),
          personIds: [3],
          ranking: 3,
          attempts: [{ result: 5446 }, { result: 5335 }, { result: 5336 }, { result: 5558 }, { result: 4485 }],
          best: 4485,
          average: 5372,
        },
        {
          competitionId: 'Munich14062023',
          eventId: '444',
          date: new Date('2023-06-14T00:00:00Z'),
          personIds: [4],
          ranking: 4,
          attempts: [{ result: 8382 }, { result: 6475 }, { result: 6278 }, { result: 7966 }, { result: 6548 }],
          best: 6278,
          average: 6996,
        },
        {
          competitionId: 'Munich14062023',
          eventId: '444',
          date: new Date('2023-06-14T00:00:00Z'),
          personIds: [7],
          ranking: 5,
          attempts: [{ result: 7531 }, { result: 11159 }, { result: 7330 }, { result: -1 }, { result: 7460 }],
          best: 7330,
          average: 8717,
        },
      ],
    },
    {
      roundId: '555-r1',
      competitionId: 'Munich14062023',
      date: new Date('2023-06-14T00:00:00Z'),
      roundTypeId: RoundType.Final,
      format: RoundFormat.Average,
      results: [
        {
          competitionId: 'Munich14062023',
          eventId: '555',
          date: new Date('2023-06-14T00:00:00Z'),
          personIds: [5],
          ranking: 1,
          attempts: [{ result: 7990 }, { result: 8111 }, { result: 7389 }, { result: 7759 }, { result: 6985 }],
          best: 6985,
          average: 7713,
          regionalSingleRecord: WcaRecordType.WR,
        },
        {
          competitionId: 'Munich14062023',
          eventId: '555',
          date: new Date('2023-06-14T00:00:00Z'),
          personIds: [4],
          ranking: 2,
          attempts: [{ result: 14325 }, { result: 13912 }, { result: 11970 }, { result: 13471 }, { result: 14007 }],
          best: 11970,
          average: 13797,
        },
        {
          competitionId: 'Munich14062023',
          eventId: '555',
          date: new Date('2023-06-14T00:00:00Z'),
          personIds: [6],
          ranking: 3,
          attempts: [{ result: 9296 }, { result: -2 }, { result: -2 }, { result: -2 }, { result: -2 }],
          best: 9296,
          average: -1,
        },
      ],
    },
    {
      roundId: '333bf-r1',
      competitionId: 'Munich14062023',
      date: new Date('2023-06-14T00:00:00Z'),
      roundTypeId: RoundType.Final,
      format: RoundFormat.BestOf3,
      results: [
        {
          competitionId: 'Munich14062023',
          eventId: '333bf',
          date: new Date('2023-06-14T00:00:00Z'),
          personIds: [3],
          ranking: 1,
          attempts: [{ result: 2789 }, { result: 2719 }, { result: -1 }],
          best: 2719,
          average: -1,
        },
        {
          competitionId: 'Munich14062023',
          eventId: '333bf',
          date: new Date('2023-06-14T00:00:00Z'),
          personIds: [4],
          ranking: 2,
          attempts: [{ result: -1 }, { result: 3755 }, { result: -1 }],
          best: 3755,
          average: -1,
        },
        {
          competitionId: 'Munich14062023',
          eventId: '333bf',
          date: new Date('2023-06-14T00:00:00Z'),
          personIds: [5],
          ranking: 3,
          attempts: [{ result: 7086 }, { result: 7922 }, { result: 6237 }],
          best: 6237,
          average: 7082,
        },
        {
          competitionId: 'Munich14062023',
          eventId: '333bf',
          date: new Date('2023-06-14T00:00:00Z'),
          personIds: [6],
          ranking: 4,
          attempts: [{ result: -1 }, { result: 7980 }, { result: -1 }],
          best: 7980,
          average: -1,
        },
      ],
    },
    {
      roundId: '333fm-r1',
      competitionId: 'Munich14062023',
      date: new Date('2023-06-14T00:00:00Z'),
      roundTypeId: RoundType.Final,
      format: RoundFormat.Mean,
      results: [
        {
          competitionId: 'Munich14062023',
          eventId: '333fm',
          date: new Date('2023-06-14T00:00:00Z'),
          personIds: [6],
          ranking: 1,
          attempts: [{ result: 39 }, { result: 51 }, { result: 51 }],
          best: 39,
          average: 4700,
          regionalSingleRecord: WcaRecordType.WR,
        },
        {
          competitionId: 'Munich14062023',
          eventId: '333fm',
          date: new Date('2023-06-14T00:00:00Z'),
          personIds: [3],
          ranking: 2,
          attempts: [{ result: 49 }, { result: 43 }, { result: 52 }],
          best: 43,
          average: 4800,
        },
        {
          competitionId: 'Munich14062023',
          eventId: '333fm',
          date: new Date('2023-06-14T00:00:00Z'),
          personIds: [4],
          ranking: 3,
          attempts: [{ result: 58 }, { result: 53 }, { result: 59 }],
          best: 53,
          average: 5667,
        },
      ],
    },
    {
      roundId: '333oh-r1',
      competitionId: 'Munich14062023',
      date: new Date('2023-06-14T00:00:00Z'),
      roundTypeId: RoundType.Final,
      format: RoundFormat.Average,
      results: [
        {
          competitionId: 'Munich14062023',
          eventId: '333oh',
          date: new Date('2023-06-14T00:00:00Z'),
          personIds: [6],
          ranking: 1,
          attempts: [{ result: 2382 }, { result: 1869 }, { result: 1976 }, { result: 2143 }, { result: 1691 }],
          best: 1691,
          average: 1996,
        },
        {
          competitionId: 'Munich14062023',
          eventId: '333oh',
          date: new Date('2023-06-14T00:00:00Z'),
          personIds: [3],
          ranking: 2,
          attempts: [{ result: 1939 }, { result: 2589 }, { result: 2055 }, { result: 2170 }, { result: 2503 }],
          best: 1939,
          average: 2243,
        },
        {
          competitionId: 'Munich14062023',
          eventId: '333oh',
          date: new Date('2023-06-14T00:00:00Z'),
          personIds: [4],
          ranking: 3,
          attempts: [{ result: 2904 }, { result: 2289 }, { result: 1932 }, { result: 2276 }, { result: 2302 }],
          best: 1932,
          average: 2289,
        },
        {
          competitionId: 'Munich14062023',
          eventId: '333oh',
          date: new Date('2023-06-14T00:00:00Z'),
          personIds: [7],
          ranking: 4,
          attempts: [{ result: 3058 }, { result: 3046 }, { result: 2636 }, { result: 3795 }, { result: 2280 }],
          best: 2280,
          average: 2913,
        },
      ],
    },
    {
      roundId: '222-r1',
      competitionId: 'Munich14062023',
      date: new Date('2023-06-14T00:00:00Z'),
      roundTypeId: RoundType.Final,
      format: RoundFormat.Average,
      results: [
        {
          competitionId: 'Munich14062023',
          eventId: '222',
          date: new Date('2023-06-14T00:00:00Z'),
          personIds: [5],
          ranking: 1,
          attempts: [{ result: 320 }, { result: 485 }, { result: 340 }, { result: 525 }, { result: 593 }],
          best: 320,
          average: 450,
        },
        {
          competitionId: 'Munich14062023',
          eventId: '222',
          date: new Date('2023-06-14T00:00:00Z'),
          personIds: [3],
          ranking: 2,
          attempts: [{ result: 310 }, { result: 748 }, { result: 393 }, { result: 536 }, { result: 613 }],
          best: 310,
          average: 514,
        },
        {
          competitionId: 'Munich14062023',
          eventId: '222',
          date: new Date('2023-06-14T00:00:00Z'),
          personIds: [4],
          ranking: 3,
          attempts: [{ result: 264 }, { result: 625 }, { result: 650 }, { result: 510 }, { result: 439 }],
          best: 264,
          average: 525,
        },
        {
          competitionId: 'Munich14062023',
          eventId: '222',
          date: new Date('2023-06-14T00:00:00Z'),
          personIds: [6],
          ranking: 4,
          attempts: [{ result: 673 }, { result: 473 }, { result: 886 }, { result: 743 }, { result: 688 }],
          best: 473,
          average: 701,
        },
        {
          competitionId: 'Munich14062023',
          eventId: '222',
          date: new Date('2023-06-14T00:00:00Z'),
          personIds: [7],
          ranking: 5,
          attempts: [{ result: -1 }, { result: 1075 }, { result: 1247 }, { result: -1 }, { result: 593 }],
          best: 593,
          average: -1,
        },
      ],
    },
    {
      roundId: '333-r1',
      competitionId: 'Munich14062023',
      date: new Date('2023-06-14T00:00:00Z'),
      roundTypeId: RoundType.Final,
      format: RoundFormat.Average,
      results: [
        {
          competitionId: 'Munich14062023',
          eventId: '333',
          date: new Date('2023-06-14T00:00:00Z'),
          personIds: [5],
          ranking: 1,
          attempts: [{ result: 1087 }, { result: 1111 }, { result: 1198 }, { result: 1200 }, { result: 1077 }],
          best: 1077,
          average: 1132,
          regionalAverageRecord: WcaRecordType.WR,
        },
        {
          competitionId: 'Munich14062023',
          eventId: '333',
          date: new Date('2023-06-14T00:00:00Z'),
          personIds: [7],
          ranking: 2,
          attempts: [{ result: 1273 }, { result: 1198 }, { result: 1226 }, { result: 1206 }, { result: 1449 }],
          best: 1198,
          average: 1235,
        },
        {
          competitionId: 'Munich14062023',
          eventId: '333',
          date: new Date('2023-06-14T00:00:00Z'),
          personIds: [3],
          ranking: 3,
          attempts: [{ result: 1179 }, { result: 1124 }, { result: 1313 }, { result: 1257 }, { result: 1275 }],
          best: 1124,
          average: 1237,
        },
        {
          competitionId: 'Munich14062023',
          eventId: '333',
          date: new Date('2023-06-14T00:00:00Z'),
          personIds: [6],
          ranking: 4,
          attempts: [{ result: 1360 }, { result: 1240 }, { result: 1039 }, { result: 1598 }, { result: 1318 }],
          best: 1039,
          average: 1306,
        },
        {
          competitionId: 'Munich14062023',
          eventId: '333',
          date: new Date('2023-06-14T00:00:00Z'),
          personIds: [4],
          ranking: 5,
          attempts: [{ result: 1920 }, { result: 1240 }, { result: 1220 }, { result: 1072 }, { result: 2238 }],
          best: 1072,
          average: 1460,
        },
      ],
    },
    {
      roundId: '666-r1',
      competitionId: 'Munich27062023',
      date: new Date('2023-06-27T00:00:00Z'),
      roundTypeId: RoundType.Final,
      format: RoundFormat.Mean,
      results: [
        {
          competitionId: 'Munich27062023',
          eventId: '666',
          date: new Date('2023-06-27T00:00:00Z'),
          personIds: [5],
          ranking: 1,
          attempts: [{ result: 15299 }, { result: 14398 }, { result: 14084 }],
          best: 14084,
          average: 14594,
          regionalSingleRecord: WcaRecordType.WR,
          regionalAverageRecord: WcaRecordType.WR,
        },
        {
          competitionId: 'Munich27062023',
          eventId: '666',
          date: new Date('2023-06-27T00:00:00Z'),
          personIds: [1],
          ranking: 2,
          attempts: [{ result: 20168 }, { result: 21170 }, { result: 19841 }],
          best: 19841,
          average: 20393,
        },
        {
          competitionId: 'Munich27062023',
          eventId: '666',
          date: new Date('2023-06-27T00:00:00Z'),
          personIds: [4],
          ranking: 3,
          attempts: [{ result: 25127 }, { result: 22765 }, { result: 20540 }],
          best: 20540,
          average: 22811,
        },
        {
          competitionId: 'Munich27062023',
          eventId: '666',
          date: new Date('2023-06-27T00:00:00Z'),
          personIds: [3],
          ranking: 4,
          attempts: [{ result: 23023 }, { result: -1 }, { result: 22636 }],
          best: 22636,
          average: -1,
        },
      ],
    },
    {
      roundId: '333-team-bld-r1',
      competitionId: 'Munich27062023',
      date: new Date('2023-06-27T00:00:00Z'),
      roundTypeId: RoundType.Final,
      format: RoundFormat.Average,
      results: [
        {
          competitionId: 'Munich27062023',
          eventId: '333-team-bld',
          date: new Date('2023-06-27T00:00:00Z'),
          personIds: [3, 1],
          ranking: 1,
          attempts: [{ result: 4391 }, { result: 2044 }, { result: 2193 }, { result: 2927 }, { result: 2474 }],
          best: 2044,
          average: 2531,
          regionalSingleRecord: WcaRecordType.WR,
          regionalAverageRecord: WcaRecordType.WR,
        },
        {
          competitionId: 'Munich27062023',
          eventId: '333-team-bld',
          date: new Date('2023-06-27T00:00:00Z'),
          personIds: [4, 7],
          ranking: 2,
          attempts: [{ result: 8963 }, { result: 6990 }, { result: 6329 }, { result: 5589 }, { result: 6906 }],
          best: 5589,
          average: 6742,
        },
      ],
    },
    {
      roundId: '333-r1',
      competitionId: 'Munich27062023',
      date: new Date('2023-06-27T00:00:00Z'),
      roundTypeId: RoundType.Final,
      format: RoundFormat.Average,
      results: [
        {
          competitionId: 'Munich27062023',
          eventId: '333',
          date: new Date('2023-06-27T00:00:00Z'),
          personIds: [5],
          ranking: 1,
          attempts: [{ result: 1159 }, { result: 1143 }, { result: 1161 }, { result: 909 }, { result: 1332 }],
          best: 909,
          average: 1154,
          regionalSingleRecord: WcaRecordType.WR,
        },
        {
          competitionId: 'Munich27062023',
          eventId: '333',
          date: new Date('2023-06-27T00:00:00Z'),
          personIds: [7],
          ranking: 2,
          attempts: [{ result: 1158 }, { result: 1139 }, { result: -1 }, { result: 974 }, { result: 1350 }],
          best: 974,
          average: 1216,
        },
        {
          competitionId: 'Munich27062023',
          eventId: '333',
          date: new Date('2023-06-27T00:00:00Z'),
          personIds: [3],
          ranking: 3,
          attempts: [{ result: 1395 }, { result: 1366 }, { result: 1133 }, { result: 1213 }, { result: 1193 }],
          best: 1133,
          average: 1257,
        },
        {
          competitionId: 'Munich27062023',
          eventId: '333',
          date: new Date('2023-06-27T00:00:00Z'),
          personIds: [1],
          ranking: 4,
          attempts: [{ result: 1097 }, { result: 1858 }, { result: 1195 }, { result: 1519 }, { result: 972 }],
          best: 972,
          average: 1270,
        },
        {
          competitionId: 'Munich27062023',
          eventId: '333',
          date: new Date('2023-06-27T00:00:00Z'),
          personIds: [4],
          ranking: 5,
          attempts: [{ result: 1109 }, { result: 1421 }, { result: 1275 }, { result: 1229 }, { result: 1367 }],
          best: 1109,
          average: 1290,
        },
        {
          competitionId: 'Munich27062023',
          eventId: '333',
          date: new Date('2023-06-27T00:00:00Z'),
          personIds: [8],
          ranking: 6,
          attempts: [{ result: 2140 }, { result: 2172 }, { result: 1699 }, { result: 2000 }, { result: 1881 }],
          best: 1699,
          average: 2007,
        },
      ],
    },
    {
      roundId: '333oh-r1',
      competitionId: 'Munich27062023',
      date: new Date('2023-06-27T00:00:00Z'),
      roundTypeId: RoundType.Final,
      format: RoundFormat.Average,
      results: [
        {
          competitionId: 'Munich27062023',
          eventId: '333oh',
          date: new Date('2023-06-27T00:00:00Z'),
          personIds: [3],
          ranking: 1,
          attempts: [{ result: 1313 }, { result: 1950 }, { result: 1778 }, { result: 2212 }, { result: 2136 }],
          best: 1313,
          average: 1955,
          regionalSingleRecord: WcaRecordType.WR,
          regionalAverageRecord: WcaRecordType.WR,
        },
        {
          competitionId: 'Munich27062023',
          eventId: '333oh',
          date: new Date('2023-06-27T00:00:00Z'),
          personIds: [4],
          ranking: 2,
          attempts: [{ result: 1962 }, { result: 2406 }, { result: 2313 }, { result: 2399 }, { result: 1779 }],
          best: 1779,
          average: 2225,
        },
        {
          competitionId: 'Munich27062023',
          eventId: '333oh',
          date: new Date('2023-06-27T00:00:00Z'),
          personIds: [7],
          ranking: 3,
          attempts: [{ result: 2502 }, { result: 2738 }, { result: 2702 }, { result: 2077 }, { result: 3037 }],
          best: 2077,
          average: 2647,
        },
        {
          competitionId: 'Munich27062023',
          eventId: '333oh',
          date: new Date('2023-06-27T00:00:00Z'),
          personIds: [5],
          ranking: 4,
          attempts: [{ result: 2767 }, { result: 3237 }, { result: 2674 }, { result: 2344 }, { result: 2557 }],
          best: 2344,
          average: 2666,
        },
        {
          competitionId: 'Munich27062023',
          eventId: '333oh',
          date: new Date('2023-06-27T00:00:00Z'),
          personIds: [1],
          ranking: 5,
          attempts: [{ result: 2832 }, { result: 3159 }, { result: 2769 }, { result: 3473 }, { result: 3076 }],
          best: 2769,
          average: 3022,
        },
        {
          competitionId: 'Munich27062023',
          eventId: '333oh',
          date: new Date('2023-06-27T00:00:00Z'),
          personIds: [8],
          ranking: 6,
          attempts: [{ result: 3473 }, { result: 4457 }, { result: 3880 }, { result: 3951 }, { result: 4186 }],
          best: 3473,
          average: 4006,
        },
      ],
    },
    {
      roundId: '222-r1',
      competitionId: 'Munich27062023',
      date: new Date('2023-06-27T00:00:00Z'),
      roundTypeId: RoundType.Final,
      format: RoundFormat.Average,
      results: [
        {
          competitionId: 'Munich27062023',
          eventId: '222',
          date: new Date('2023-06-27T00:00:00Z'),
          personIds: [1],
          ranking: 1,
          attempts: [{ result: 458 }, { result: 331 }, { result: 153 }, { result: 342 }, { result: 338 }],
          best: 153,
          average: 337,
          regionalSingleRecord: WcaRecordType.WR,
          regionalAverageRecord: WcaRecordType.WR,
        },
        {
          competitionId: 'Munich27062023',
          eventId: '222',
          date: new Date('2023-06-27T00:00:00Z'),
          personIds: [3],
          ranking: 2,
          attempts: [{ result: 567 }, { result: 332 }, { result: 205 }, { result: 517 }, { result: 239 }],
          best: 205,
          average: 363,
        },
        {
          competitionId: 'Munich27062023',
          eventId: '222',
          date: new Date('2023-06-27T00:00:00Z'),
          personIds: [4],
          ranking: 3,
          attempts: [{ result: 653 }, { result: 323 }, { result: 378 }, { result: 394 }, { result: 315 }],
          best: 315,
          average: 365,
        },
        {
          competitionId: 'Munich27062023',
          eventId: '222',
          date: new Date('2023-06-27T00:00:00Z'),
          personIds: [5],
          ranking: 4,
          attempts: [{ result: 313 }, { result: 387 }, { result: 405 }, { result: -1 }, { result: 382 }],
          best: 313,
          average: 391,
        },
        {
          competitionId: 'Munich27062023',
          eventId: '222',
          date: new Date('2023-06-27T00:00:00Z'),
          personIds: [7],
          ranking: 5,
          attempts: [{ result: 901 }, { result: 663 }, { result: 545 }, { result: -1 }, { result: 774 }],
          best: 545,
          average: 779,
        },
      ],
    },
    {
      roundId: '444-r1',
      competitionId: 'Munich27062023',
      date: new Date('2023-06-27T00:00:00Z'),
      roundTypeId: RoundType.Final,
      format: RoundFormat.Average,
      results: [
        {
          competitionId: 'Munich27062023',
          eventId: '444',
          date: new Date('2023-06-27T00:00:00Z'),
          personIds: [5],
          ranking: 1,
          attempts: [{ result: 3922 }, { result: 4608 }, { result: 3960 }, { result: 4231 }, { result: 3502 }],
          best: 3502,
          average: 4038,
          regionalSingleRecord: WcaRecordType.WR,
        },
        {
          competitionId: 'Munich27062023',
          eventId: '444',
          date: new Date('2023-06-27T00:00:00Z'),
          personIds: [1],
          ranking: 2,
          attempts: [{ result: 5498 }, { result: 4623 }, { result: 5206 }, { result: 5648 }, { result: 6121 }],
          best: 4623,
          average: 5451,
        },
        {
          competitionId: 'Munich27062023',
          eventId: '444',
          date: new Date('2023-06-27T00:00:00Z'),
          personIds: [3],
          ranking: 3,
          attempts: [{ result: 5453 }, { result: 6386 }, { result: 7375 }, { result: 6468 }, { result: 5605 }],
          best: 5453,
          average: 6153,
        },
        {
          competitionId: 'Munich27062023',
          eventId: '444',
          date: new Date('2023-06-27T00:00:00Z'),
          personIds: [4],
          ranking: 4,
          attempts: [{ result: 6799 }, { result: 6199 }, { result: 8245 }, { result: 7172 }, { result: 6065 }],
          best: 6065,
          average: 6723,
        },
      ],
    },
    {
      roundId: '333bf-r1',
      competitionId: 'Munich27062023',
      date: new Date('2023-06-27T00:00:00Z'),
      roundTypeId: RoundType.Final,
      format: RoundFormat.BestOf3,
      results: [
        {
          competitionId: 'Munich27062023',
          eventId: '333bf',
          date: new Date('2023-06-27T00:00:00Z'),
          personIds: [3],
          ranking: 1,
          attempts: [{ result: 2758 }, { result: 2302 }, { result: 3324 }],
          best: 2302,
          average: 2795,
          regionalAverageRecord: WcaRecordType.WR,
        },
        {
          competitionId: 'Munich27062023',
          eventId: '333bf',
          date: new Date('2023-06-27T00:00:00Z'),
          personIds: [1],
          ranking: 2,
          attempts: [{ result: 4002 }, { result: -1 }, { result: -1 }],
          best: 4002,
          average: -1,
        },
        {
          competitionId: 'Munich27062023',
          eventId: '333bf',
          date: new Date('2023-06-27T00:00:00Z'),
          personIds: [4],
          ranking: 3,
          attempts: [{ result: -1 }, { result: -1 }, { result: -1 }],
          best: -1,
          average: -1,
        },
      ],
    },
    {
      roundId: '333-team-factory-r1',
      competitionId: 'Munich27062023',
      date: new Date('2023-06-27T00:00:00Z'),
      roundTypeId: RoundType.Final,
      format: RoundFormat.Average,
      results: [
        {
          competitionId: 'Munich27062023',
          eventId: '333-team-factory',
          date: new Date('2023-06-27T00:00:00Z'),
          personIds: [1, 7],
          ranking: 1,
          attempts: [{ result: 1949 }, { result: 1299 }, { result: 1371 }, { result: 1403 }, { result: 1552 }],
          best: 1299,
          average: 1442,
          regionalSingleRecord: WcaRecordType.WR,
          regionalAverageRecord: WcaRecordType.WR,
        },
        {
          competitionId: 'Munich27062023',
          eventId: '333-team-factory',
          date: new Date('2023-06-27T00:00:00Z'),
          personIds: [4, 3],
          ranking: 2,
          attempts: [{ result: 2465 }, { result: 2396 }, { result: 1762 }, { result: 2030 }, { result: 1923 }],
          best: 1762,
          average: 2116,
        },
      ],
    },
    {
      roundId: '555-r1',
      competitionId: 'Munich27062023',
      date: new Date('2023-06-27T00:00:00Z'),
      roundTypeId: RoundType.Final,
      format: RoundFormat.Average,
      results: [
        {
          competitionId: 'Munich27062023',
          eventId: '555',
          date: new Date('2023-06-27T00:00:00Z'),
          personIds: [5],
          ranking: 1,
          attempts: [{ result: 8736 }, { result: 7751 }, { result: 6988 }, { result: 7532 }, { result: 7234 }],
          best: 6988,
          average: 7506,
          regionalAverageRecord: WcaRecordType.WR,
        },
        {
          competitionId: 'Munich27062023',
          eventId: '555',
          date: new Date('2023-06-27T00:00:00Z'),
          personIds: [3],
          ranking: 2,
          attempts: [{ result: 9073 }, { result: 9234 }, { result: 9555 }, { result: 11603 }, { result: 8580 }],
          best: 8580,
          average: 9287,
        },
        {
          competitionId: 'Munich27062023',
          eventId: '555',
          date: new Date('2023-06-27T00:00:00Z'),
          personIds: [1],
          ranking: 3,
          attempts: [{ result: 10164 }, { result: 11364 }, { result: 10305 }, { result: 9120 }, { result: 10040 }],
          best: 9120,
          average: 10170,
        },
        {
          competitionId: 'Munich27062023',
          eventId: '555',
          date: new Date('2023-06-27T00:00:00Z'),
          personIds: [4],
          ranking: 4,
          attempts: [{ result: 11212 }, { result: 10098 }, { result: 11188 }, { result: 11237 }, { result: 11699 }],
          best: 10098,
          average: 11212,
        },
      ],
    },
    {
      roundId: '333fm-r1',
      competitionId: 'Munich27062023',
      date: new Date('2023-06-27T00:00:00Z'),
      roundTypeId: RoundType.Final,
      format: RoundFormat.Mean,
      results: [
        {
          competitionId: 'Munich27062023',
          eventId: '333fm',
          date: new Date('2023-06-27T00:00:00Z'),
          personIds: [3],
          ranking: 1,
          attempts: [{ result: 41 }, { result: 40 }, { result: 57 }],
          best: 40,
          average: 4600,
          regionalAverageRecord: WcaRecordType.WR,
        },
        {
          competitionId: 'Munich27062023',
          eventId: '333fm',
          date: new Date('2023-06-27T00:00:00Z'),
          personIds: [1],
          ranking: 2,
          attempts: [{ result: 50 }, { result: 39 }, { result: 51 }],
          best: 39,
          average: 4667,
          regionalSingleRecord: WcaRecordType.WR,
        },
        {
          competitionId: 'Munich27062023',
          eventId: '333fm',
          date: new Date('2023-06-27T00:00:00Z'),
          personIds: [4],
          ranking: 3,
          attempts: [{ result: 52 }, { result: 57 }, { result: 49 }],
          best: 49,
          average: 5267,
        },
        {
          competitionId: 'Munich27062023',
          eventId: '333fm',
          date: new Date('2023-06-27T00:00:00Z'),
          personIds: [5],
          ranking: 4,
          attempts: [{ result: 60 }, { result: 54 }, { result: 60 }],
          best: 54,
          average: 5800,
        },
      ],
    },
  ] as RoundDocument[];
