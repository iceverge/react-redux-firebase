import React from 'react'
import moment from 'moment'

const Notifications = (props) => {
  const {notifications} = props;
  return (
    <div className="section">
      <div className="card blue z-depth-0">
        <div className="card-content white-text">
          <span className="card-title">Notifications</span>
          <ul className="notifications">
            { notifications && notifications.map(item => {
              return (
                <li key={item.id}>
                  <span className="black-text">{ item.user }</span>
                  <span>{ item.content }</span>
                  <div className="white-text note-date">
                    { moment(item.item).fromNow() }
                  </div>
                </li>
              )
            }) }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notifications