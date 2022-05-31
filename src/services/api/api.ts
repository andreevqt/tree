import { TPowerUnitResponse } from './responses';
import { powerUnit as pu } from './fixtures';

const DELAY = 2000;

export const powerUnit = {
  getById: (id: number): Promise<TPowerUnitResponse> => new Promise(
    (resolve) => setTimeout(() => resolve(pu), DELAY)
  )
};
