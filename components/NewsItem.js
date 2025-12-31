import React from 'react'


const NewsItem = (props) => {
  let {title, description, imgurl,newsurl,author,date,source} = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0',
            }}>
            <span className=" badge rounded-pill bg-danger">{source}
                </span>
          </div>
            <img src={!imgurl?"https://via.placeholder.com/150":imgurl} className="card-img-top" alt="news"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">By {author || 'unknown'}   on   {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark">Get news</a>
            </div>
        </div>
      </div>
    )
}

export default NewsItem
