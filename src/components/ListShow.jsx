import React from 'react'
import './ListShow.css'

function ListShow(props) {
    const dataList = props.list
    const list = dataList.map(data => {
        if (data.user !== null) {
            return (
                <div className="trending-body" key={data.id}>
                    <div className="general-info">
                        <div className="nameDesc">User: <strong><u>{data.username}</u></strong></div>
                        <div className="dateAndTime">Time-Date: <strong><u>{data.import_datetime}</u></strong></div>
                        <div className="message">Title: <strong><u>{data.title}</u></strong></div>
                    </div>
                    <div className="image">
                        <img src={data.images.downsized.url} className="gifImage" />
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
