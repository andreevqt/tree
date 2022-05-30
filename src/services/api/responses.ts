export type TItem = {
  id: number;
  name: string;
  descendants?: Array<TItem>;
};

export type TStatus = 'offline' | 'online';

export type TPowerUnitResponse = {
  name: string;
  status: TStatus;
  items: Array<TItem>;
};
