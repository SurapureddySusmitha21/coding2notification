const Notification = props => {
    const {message,iconUrl} =props
     const containerClassName = {`notification-container ${className}`}

  return (
      <div class="bg_container">
          <h1 className="notification_heading">Notofication</h1>
          <div className={containerClassName}>
          <img className="icon" src="iconUrl"/>
              <p className="message_heading">{message}</p>
          </div>
      </div>
      )
  
  //  Write your code here.
  

const element = (
    <Notification/>
    <Notification/>
    <Notification/>
    <Notification/>
    //  Write your code here.   
)

ReactDOM.render(element, document.getElementById('root'))
