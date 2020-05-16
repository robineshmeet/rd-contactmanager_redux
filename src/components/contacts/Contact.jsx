import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

export default class Contact extends React.PureComponent {
  state = {
    showContactInfo: false,
  };

  onDeleteClick = (id) => {
    ///// DELETE CONTACT /////
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{' '}
          <FontAwesomeIcon
            icon={faSortDown}
            onClick={() =>
              this.setState({
                showContactInfo: !this.state.showContactInfo,
              })
            }
            style={{ cursor: 'pointer' }}
          />
          <FontAwesomeIcon
            icon={faTrash}
            color="red"
            onClick={this.onDeleteClick.bind(this, id, dispatch)}
            style={{ cursor: 'pointer', float: 'right' }}
          />
          <Link to={`contact/edit/${id}`}>
            <FontAwesomeIcon
              icon={faEdit}
              color="blue"
              style={{
                cursor: 'pointer',
                float: 'right',
                marginRight: '1rem',
              }}
            />
          </Link>
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Ph: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};
