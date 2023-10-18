import SumsubWebSdk from '@sumsub/websdk-react';
import { useState } from 'react';

import styles from './App.module.css';

const path = 'http://localhost:4000/api/accessToken';

export const App = () => {
  const [accessToken, setAccessToken] = useState('');
  const [loading, setLoading] = useState(false);

  const getToken = () => {
    setLoading(true);

    fetch(path)
      .then((res) => res.json())
      .then((res) => setAccessToken(res.data.token))
      .catch((error) => console.log('error', error))
      .finally(() => setLoading(false));
  };

  const onMessage = (type: string, payload: string) => {
    console.log('onMessage - type/payload: ', type, payload);
  };

  const onError = (error: string) => {
    alert(error);
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={getToken}>
          Get token
        </button>
      </div>

      {loading && <p>Loading ...</p>}

      {accessToken && (
        <SumsubWebSdk
          accessToken={accessToken}
          expirationHandler={getToken}
          onMessage={onMessage}
          onError={onError}
        />
      )}
    </div>
  );
};
