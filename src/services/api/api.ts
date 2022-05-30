import { TPowerUnitResponse } from './responses';

const TIMEOUT = 2000;

const data: TPowerUnitResponse = {
  name: 'RDPU1',
  status: 'online',
  items: [
    {
      name: 'Фаза 1',
      id: 99,
      descendants: [
        {
          id: 1,
          name: 'Выход 1'
        },
        {
          id: 2,
          name: 'Выход 2'
        },
        {
          id: 3,
          name: 'Выход 3'
        }
      ]
    },
    {
      name: 'Фаза 2',
      id: 98,
      descendants: [
        {
          id: 4,
          name: 'Выход 1'
        },
        {
          id: 5,
          name: 'Выход 2'
        },
        {
          id: 6,
          name: 'Выход 3'
        }
      ]
    },
    {
      name: 'Фаза 3',
      id: 97,
      descendants: [
        {
          id: 7,
          name: 'Выход 1'
        },
        {
          id: 8,
          name: 'Выход 2'
        },
        {
          id: 9,
          name: 'Выход 3'
        }
      ]
    },
    {
      name: 'Датчики окружающей среды',
      id: 96,
      descendants: [
        {
          id: 10,
          name: 'Выход 1'
        },
        {
          id: 11,
          name: 'Выход 2'
        },
        {
          id: 12,
          name: 'Выход 3'
        }
      ]
    }
  ]
};

export const powerUnit = {
  getById: (id: number): Promise<TPowerUnitResponse> =>
    new Promise(
      (resolve) => setTimeout(() => resolve(data), TIMEOUT)
    )
};
