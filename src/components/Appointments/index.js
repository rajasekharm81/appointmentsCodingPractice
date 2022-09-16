import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

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
      return
    }

    if (date === '') {
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
    const StarredButtonClass = isStarred ? 'starred' : 'starredButton'
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
                className={StarredButtonClass}
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
                  date={each.date}
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
