import React from 'react'
import './ListShow.css'

function ListShow(props) {
    const myList = props.list
    const list = myList.map(data => {
        if (data.user !== null) {
            return (
                <div className="trendingList" key={data.id}>
                    <div className="detailList">
                        <div className="name">User: <strong><u>{data.username}</u></strong></div>
                        <div className="dtime">Time-Date: <strong><u>{data.import_datetime}</u></strong></div>
                        <div className="msg">Title: <strong><u>{data.title}</u></strong></div>
                    </div>
                    <div className="image">
                        <img src={data.images.downsized.url} />
                    </div>
                </div>
            )
        }
    })
    return (
        <div>{list}</div>
    )
}

export default ListShow;
