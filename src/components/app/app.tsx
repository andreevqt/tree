import React, { useEffect, useState } from 'react';
import { powerUnit } from '../../services/api/api';
import { TPowerUnitResponse } from '../../services/api/responses';
import GlobalStyle from '../../theme/global-style';
import List from '../list/list';
import ThemeProvider from '../../theme/theme-provider';
import Preloader from '../preloader/preloader';

const App = () => {
  const [data, setData] = useState<TPowerUnitResponse | undefined>(undefined);
  const [isLoading, setLoading] = useState(true);

  const fetchData = () => {
    setLoading(true);
    return powerUnit.getById(1)
      .then((data) => setData(data))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ThemeProvider>
      <GlobalStyle />
      {
        isLoading ? <Preloader /> : data && (
          <List {...data} />
        )
      }
    </ThemeProvider>
  );
};

export default App;
