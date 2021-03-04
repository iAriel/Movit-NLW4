import '../styles/global.css';

import { ChallengessProvider } from '../context/ChellengesContext';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengessProvider>
      <Component {...pageProps} />
    </ChallengessProvider>
  )
}

export default MyApp
