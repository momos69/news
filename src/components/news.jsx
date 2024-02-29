
import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import Errorpage from './errorhandling';



function News(props) {
    // let {headline, description ,imgsrc} = this.props;


   //let {topnews:top, description: desc, imageurl: img} = props;
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=fafe36dd2dca47528dade65d7aa855c7`;
        fetch(url)
        .then(response => response.json())
        .then(data => setArticles(data.articles))
        .catch(error => {
            return (
                <Errorpage/>
            )
        });
    })
    

    return(
        
        <div className='flex flex-wrap'>
            {
                articles && articles.map((news, index) => {
                    return <NewsItem key = {index} title = {news.title} description = {news.description} src = {news.urlToImage} url = {news.url}></NewsItem>
                }) 
            }
        </div>
    )
}

export default News;