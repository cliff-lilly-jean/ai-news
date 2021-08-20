import React, { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './Components/NewsCards/NewsCards';

const alanKey = '1721be4c0a14af6c7313845df5823c852e956eca572e1d8b807a3e2338fdd0dc/stage';


const App = () => {
 const [newsArticles, setNewsArticles] = useState([]);

 useEffect(() => {
  alanBtn({
   key: alanKey,
   onCommand: ({ command, articles }) => {
    if (command === 'newHeadlines') {
     setNewsArticles(articles);
    }
   }
  });
 }, []);

 return (
  <div>
   <h1>Alan Ai News</h1>
   <NewsCards articles={newsArticles} />
  </div>
 );
};

export default App;
