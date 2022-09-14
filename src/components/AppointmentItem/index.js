import {Component} from 'react'
import Moment from 'moment'
import './index.css'

class AppointmentItem extends Component {
  starring = () => {
    const {toggleStar, id} = this.props
    toggleStar(id)
  }

  render() {
    const {appointments} = this.props
    const starImg = appointments.isStarred
      ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

    console.log(appointments.title)
    return (
      <li className="appointmentContainer">
        <div className="appointment">
          <div>
            <p>{appointments.title.title}</p>
            <p>
              Date:{' '}
              {Moment(appointments.date.date).format('DD MMMM YYYY, dddd')}
            </p>
          </div>
          <div className="starContainer">
            <button
              id="star"
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
