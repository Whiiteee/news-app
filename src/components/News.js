import React, { Component } from 'react'
import Newsitem from './Newsitem'



export class News extends Component {

    articles = []
    // url = ("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1d478029198c49b18f9f10bee1e5f42f")
    url = ("https://newsapi.org/v2/everything?q=apple&from=2024-07-18&to=2024-07-18&sortBy=popularity&apiKey=e1422705fb6244bda820665e83e3a920")
    // url = 'https://api.worldnewsapi.com/search-news?text=earth+quake&language=en&earliest-publish-date=2024-04-01'

    
    constructor(){
        super();
        this.state = {
            articles: this.articles
        };
    }
    
    async componentDidMount(){
        let data = await fetch(this.url,{
            method: 'GET',
            // headers: {
            //     'x-api-key': '0228d2cfd50f4063bdb2607d8efd746e' 
            // }
        })
        let parsedData =await data.json();
          
        this.setState({articles: parsedData.articles})
        console.log(this.state)
    }


     render() {
        
    return (
      <div className='news-body'>
        <div className="news-tools">
            <p>Category:</p>
            <div className='category'>
            <div className='button' >Politics</div>
            </div>
        </div>
        {
            this.state.articles.map((ele)=>{
                return(
                    <Newsitem key={ele.url} url={!ele.url?'url':ele.url} title={ele.title?ele.title:'No title'} imgUrl={ele.urlToImage?ele.urlToImage:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAVFBMVEXh5urDzdbZ3+TT19vW2t7M0tfAytPd5OnT2d/CzNPO2dvg5enk6ezBytLY3uTT2t/W4OLM1d7I09W/ys/G0NfN2N3c5efN0dXCzs/S3eDJ1dbQ2eL4S0liAAACs0lEQVR4nO3c4XqaMBhAYYISjASUYq1293+fQ1AbSBhdp+DHzvtvsfB4BsMQ6aIIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDpZUX8PEU2d14t1up59GruvFr8xEClKJwChRRSOD8KKaRwfm5hEq8fYKdft3BnH7HH9IULNw/ZI4VTo3BMFtnIdv79Lq3Qxh9vb6u1M7KsQns27aa6vI8tq7CsbttqlV7HllRoN+4ij7kuOy2pcF85Gyt9aC84Syo8qA6zb0YFFhZxeDzrLUSa92ZYYKGqjsHxtbfU2gyLK7QrpQ7BFz5NL1A349IKbZrX518o8ZK+hGNok8sbDi7Pe2dp+/cgrXDfnop657/kXWm2zbCwQnt/+2nkfZHUO4SmndUIK3SWJPwXi7wTmEj8xHff7cl71SZu4enob/Pyhd2ExF/G+bjXmNNtXiCp0MadT7x84yXajakuQZVJ7rMCSYX9iWfuT9/s8VwqVZ6zr3hJhdu8W6h08Hv57iKGoEKb9WdltXRgNw5BhYnXV98Dju9RTmERekpDl6Pr4mIKbeAcvSSex/YopbD+HAgWqioePIrtB4aUwv60+osZeNDJxu2sR0ih/RwKHLraZKWWdAfcm830EgNXGxvnWlRh9IdAFZqi7y6TA0mFv0ae5yu6RzFTzc8LKgzNZjqMu/pmbzeRggrLkUBlnAtqmtymr3IKv/PM6cf1PLXOKoCYwuNpPPB+P3xweqQUDs5mupr74b1xf1ZKYda/KxxKjO1758snMYXbbx3CNqn3x2b7RRX2g5vtKZwahRRSOD8KKaRwfn6h94jF4gqP6Y81279+4b+icGr/V2HgmZkfeOnCxf9GyeNROAUKKaRwfhRSSOH8lv//02TJM60fMtMFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODv/AaWZyr86EvqgAAAAABJRU5ErkJggg=='} description={ele.description?ele.description.slice(0,150)+'...':'No description'} />
                )
            })
        }


      </div>
    )
  }
}

export default News
