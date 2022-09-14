import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Popup from 'reactjs-popup'
import './index.css'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {isStarred: false, title: '', date: '', appointments: []}

  toggleStar = id => {
    this.setState(prevState => ({
      appointments: prevState.appointments.map(each => {
        if (each.id === id) {
          return {...each, isStarred: !each.isStarred}
        }
        return each
      }),
    }))
  }

  isStarredUpdate = () => {
    this.setState(prevState => ({isStarred: !prevState.isStarred}))
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  onSubmit = event => {
    event.preventDefault()
    const {title, date, appointments} = this.state

    if (title === '') {
      ;<Popup>
        <div>
          <h1>Please Enter Text</h1>
        </div>
      </Popup>
      return
    }
    if (date === '') {
      ;<Popup>
        <div>
          <h1>Please Enter Date</h1>
        </div>
      </Popup>
      return
    }

    this.setState({
      appointments: [
        ...appointments,
        {id: uuidv4(), title: {title}, date: {date}, isStarred: false},
      ],
      title: '',
      date: '',
    })
  }

  render() {
    const {isStarred, appointments, title, date} = this.state
    const Starred = appointments.filter(each => each.isStarred)

    const filterItems = isStarred ? Starred : appointments

    return (
      <div className="mainContainer">
        <div className="contentContainer">
          <form className="leftContent">
            <h1>Add Appointment</h1>
            <label htmlFor="Title">Title</label>
            <input
              onChange={this.onChangeTitle}
              className="titleInput"
              id="Title"
              value={title}
              placeholder="Title"
              type="text"
            />
            <label htmlFor="date">Date</label>
            <input
              onChange={this.onChangeDate}
              className="DateInput"
              id="date"
              value={date}
              placeholder="date"
              type="date"
            />
            <button
              onClick={this.onSubmit}
              className="submitButton"
              type="submit"
            >
              Add
            </button>
          </form>
          <div className="rightContent">
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>
          <div className="AppointmentContainer">
            <div className="appointment-heading-container">
              <h1>Appointments</h1>
              <button
                onClick={this.isStarredUpdate}
                className="starredButton"
                type="button"
              >
                Starred
              </button>
            </div>
            <ul className="Appointments">
              {filterItems.map(each => (
                <AppointmentItem
                  id={each.id}
                  key={each.id}
                  toggleStar={this.toggleStar}
                  appointments={each}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
