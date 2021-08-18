import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = '1721be4c0a14af6c7313845df5823c852e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

 useEffect(() => {
  alanBtn({
   key: alanKey,
   onCommand: ({ command, articles }) => {
    if (command === 'newHeadlines') {
     console.log(articles);
    }
   }
  });
 }, []);

 return (
  <div>
   <h1>Alan Ai news app</h1>
  </div>
 );
};

export default App;
