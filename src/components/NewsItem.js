import React, { Component } from 'react'

export class NewsItem extends Component {
    
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
    <div className="card" style={{width:"18rem:"}}>
      <img src={!imageUrl?"https://www.livemint.com/lm-img/img/2023/09/09/600x338/Sensex_news_stock_market_news_Sensex_call_option_1694242991351_1694242991693.jpg":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
         <h5 className="card-title">{title}...</h5>
             <p className="card-text">{description}... </p>
            <a href={newsUrl} rel='_blank' className="btn btn-sm btn-primary">Read More</a>
        </div>
     </div>
      </div>
    )
  }
}

export default NewsItem;
