import React, { Component } from 'react'

export class Newsitem extends Component {

    // constructor(title,descriptions,img){
    //     super();
    // }


    render() {
      let {title,description,imgUrl,url} = this.props
    return (
      <div className='news-item' onClick={()=>{window.open(url,'_blank')}}>
        <img src={imgUrl} draggable='false' alt='img' />
        <div className='content'>
        <h2  title={title}>{title.slice(0,120)+'...'}</h2>
        <div className="hr-line">
        </div>
        <p>{description}</p>
        </div>


      </div>
    )
  }
}

export default Newsitem
