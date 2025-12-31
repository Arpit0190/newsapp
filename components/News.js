import React, {  useEffect, useState } from 'react'
import NewsItem from './NewsItem'
//import PropTypes from 'prop-types';
import Spinner from './spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
//import { useActionData } from 'react-router-dom';


const News = ({
        country= 'us',
        pageSize= 8,
        category= 'general',
        setProgress,
      }) => {
   const [articles, setArticles] = useState([]);
   const [loading, setLoading] = useState(true);
   const [page, setPage] = useState(1);
   const [totalResults, setTotalResults] = useState(0);
   const apikey = process.env.REACT_APP_NEWS_API;


      const capitalizeFirstLetter=(string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
      } 

    const updateNews=async()=>{
        setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apikey}&page=${page}&pageSize=${pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        setProgress(35);
        let parsedData = await data.json();
        setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        setProgress(100);
   } 
   useEffect(() => {
    //document.title=`${capitalizeFirstLetter(category)}-Express-News`;
    //updateNews();
    fetchMoreData();
    // eslint disable-next-line
   }, []);  
    //async componentDidMount(){  // lifecycle method
       // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=be423a1180684e42baceb7de5f2d01ef&page=${page}&pageSize=${props.pageSize}`;
       // setState({loading:true});
       // let data = await fetch(url);
       // let parsedData = await data.json();
       // setState({
       //   articles:parsedData.articles,
       //   totalResults:parsedData.totalResults,
       //   loading:false
       // });
       //updateNews();
    //} 
    //const handlePreviousclick =async()=>{
       // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=be423a1180684e42baceb7de5f2d01ef&page=${.page-1}&pageSize=${props.pageSize}`;
       // setState({loading:true});
       // let data = await fetch(url);
       // let parsedData = await data.json();
       // console.log(parsedData);
       // setState({  
       //   page: page-1,
       //   articles: parsedData.articles,
       //   loading:false
       // });
      //setPage(page - 1)
      //updateNews()
  // }

   // const handleNextclick=async()=>{
       // if(!(page+1 > Math.ceil(totalResults/props.pageSize))){
       // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=be423a1180684e42baceb7de5f2d01ef&page=${page+1}&pageSize=${props.pageSize}`;
       // setState({loading: true});
       // let data = await fetch(url);
       // let parsedData = await data.json();
       // 
       // setState({
       //   page: page+1,
       //   articles: parsedData.articles,
       //   loading:false
       // });
       // };
       //setPage(page + 1)
        //updateNews()
   // }
   
    const fetchMoreData = async () => {
       const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apikey}&page=${page}&pageSize=${pageSize}`;

        setPage(page + 1);

        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    };

    return (
      <div className="container my-5 ">
        <h1 className="text-center" style={{margin:'35px 0px', marginTop: '90px'}} >Express-News:Top {capitalizeFirstLetter(category)} headlines</h1>
        {/* {loading&&<Spinner/>} */}
        <InfiniteScroll
          dataLength={articles?.length||0}
          next={fetchMoreData}
          hasMore={articles &&articles.length < totalResults}
          loader={<Spinner/>}
        >

         <div className="container">
        
        <div className="row">
        {articles && articles.map((elements , index)=>{
        return <div className="col-md-4" key={index}>
        <NewsItem  title={elements?.title||"no title"} 
        description={elements?.description ||"no description"} 
        imgurl={elements?.urlToImage || "https://picsum.photos/150"}
        newsurl={elements?.url}
        author={elements?.author||"unknown"} 
        date={elements?.publishedAt} 
        source={elements?.source?.name}/> 
        </div>
        })}
        </div>
        </div>

        </InfiniteScroll>
       {/* <div className="container d-flex justify-content-between">

          <button disabled={page <= 1}className="btn btn-dark mx-2" onClick={handlePreviousclick}>&larr; previous</button>
          <button disabled={page + 1 > Math.ceil(state.totalResults/props.pageSize)} className="btn btn-dark mx-2" onClick={handleNextclick}>Next &rarr;</button>
          
        </div>*/}
        </div>
        
    )
}


News. propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
      }

export default News
