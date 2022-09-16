import {Component} from 'react'
import {format} from 'date-fns'
import './index.css'

class AppointmentItem extends Component {
  starring = () => {
    const {toggleStar, id} = this.props
    toggleStar(id)
  }

  formattedDate = () => {
    const {date} = this.props
    return format(new Date(date.date), 'd MMMM yyyy, EEEE')
  }

  render() {
    const {appointments} = this.props
    const starImg = appointments.isStarred
      ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

    const fordate = this.formattedDate()
    return (
      <li className="appointmentContainer">
        <div className="appointment">
          <div>
            <p>{appointments.title.title}</p>
            <p className="datePara">Date: {fordate}</p>
          </div>
          <div className="starContainer">
            <button
              testid="star"
              onClick={this.starring}
              className="starButton"
              type="button"
            >
              <img className="star" src={starImg} alt="star" />
            </button>
          </div>
        </div>
      </li>
    )
  }
}

export default AppointmentItem
