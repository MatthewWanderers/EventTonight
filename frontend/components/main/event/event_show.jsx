import React from 'react';
import { Link } from 'react-router-dom';
// import Modal from 'react-modal';
// import RegistrationModal from '../registrations/registration_modal';
// import Bookmark from '../bookmarks/bookmark';

class EventShow extends React.Component {
  constructor(props) {
    super(props);
  }


  componentWillMount() {
    window.scrollTo(0, 0);
    this.props.fetchEvent(this.props.eventId);
  }

  componentWillReceiveProps(nextProps) {
    // this.props.fetchBookmarks();
    if (this.props.eventId !== nextProps.eventId) {
      nextProps.fetchEvent(nextProps.eventId);
    }
  }

  componentDidMount() {
    window.scroll(0,0);
    if (!this.props.event) {
      this.props.fetchEvent(this.props.eventId);
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li className='form-error-item'key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    if (this.props.event !== undefined) {
      const { title, description, address, city_name, organizer, organizer_description, start_time, end_time,
         img_url } = this.props.event;
      const { eventId, currentUser } = this.props;

      return (
        <div>
          {
            <div className='event-show-page'>
              <div className='event-show-background-image-container'>
                <img src={img_url} alt='Event Background Image' className='event-show-background-image'/>
              </div>
              <div className='event-show-popup'>
                {this.renderErrors()}
                <div className='event-show-popup-header-container'>
                  <img className='event-show-image' src={img_url} alt='Event Image'/>
                  <div className='event-show-title-date'>
                    <div className='event-show-mon'>{start_time.slice(0,3)}</div>
                    {start_time.length === 14 && <div className='event-show-date'>{start_time.slice(4,6)}</div>}
                    {start_time.length === 13 && <div className='event-show-date'>{start_time.slice(4,5)}</div>}

                    <div className='event-show-title'>{title}</div>
                    <div className='event-show-organizer'>by {organizer}</div>
                    <br/>
                    <br/>
                    <br/>
                    {this.props.event.owner && <Link className="edit-button"to={`/events/${eventId}/edit`}>Edit Your Event</Link>}
                  </div>
                </div>

                  <div className='show-divider'>

                  </div>

                  <div className='event-details'>
                    <div className='event-show-description'>
                      <div className='event-description-header'>DESCRIPTION</div>
                      <div className='event-description'>{description}</div>
                      <br/>
                      <div className='event-description-header'>ORGANIZED BY {organizer}</div>
                      <div className='event-description'>{organizer} is a prolific event host, ensuring each event meets and exceedes guest expectations.</div>
                    </div>
                    <div className='event-location-time'>
                      <div className='event-show-logistic-header'>Date and Time</div>
                      <div className='event-show-start-time'>{start_time}</div>
                        {
                          (end_time && end_time.length > 0) &&
                                    <div className='event-show-logistic-header'>to</div>
                        }
                      <div className='event-show-end-time'>{end_time}</div>
                      <div className='event-show-logistic-header'>LOCATION</div>
                      <div className='event-show-location'>{city_name}</div>
                    </div>
                  </div>
              </div>
            </div>
          }
        </div>
      );
    } else {
      return <div>Loading</div>;
    }

  }

}

export default EventShow;
