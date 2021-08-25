import React, { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './Components/NewsCards/NewsCards';
import useStyles from './styles';
import logo from './assets/alan_logo.jpeg';

const alanKey = '1721be4c0a14af6c7313845df5823c852e956eca572e1d8b807a3e2338fdd0dc/stage';


const App = () => {

 const classes = useStyles();
 const [newsArticles, setNewsArticles] = useState([]);

 // Index of article currently being read
 const [activeArticle, setActiveArticle] = useState(-1);

 useEffect(() => {
  alanBtn({
   key: alanKey,
   onCommand: ({ command, articles }) => {
    if (command === 'newHeadlines') {
     setNewsArticles(articles);
     setNewsArticles(-1);
    } else if (command === 'highlight') {
     setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
    }
   }
  });
 }, []);

 return (
  <div className="wrapper">
   <div className={classes.logoContainer}>
    <img className={classes.alanLogo} src={logo} alt="Alan Studio Logo" />
   </div>
   <NewsCards articles={newsArticles} activeArticle={activeArticle} />
  </div>
 );
};

export default App;
