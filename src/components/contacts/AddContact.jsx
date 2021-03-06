import React from 'react';
import TextInputGroup from '../layout/TextInputGroup';

export default class AddContact extends React.PureComponent {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {},
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    // Check For Errors
    if (name === '') {
      this.setState({
        errors: { name: 'Name is required' },
      });
      return;
    }
    if (email === '') {
      this.setState({
        errors: { email: 'Email is required' },
      });
      return;
    }
    if (phone === '') {
      this.setState({
        errors: { phone: 'Phone is required' },
      });
      return;
    }

    const newContact = {
      name,
      email,
      phone,
    };

    // SUBMIT CONTACT

    // Clear State
    this.setState({
      name: '',
      email: '',
      phone: '',
    });

    this.props.history.push('/');
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit.bind(this, dispatch)}>
            <TextInputGroup
              label="Name"
              name="name"
              placeholder="Enter Name..."
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />
            <TextInputGroup
              label="Email"
              name="email"
              placeholder="Enter Email..."
              value={email}
              onChange={this.onChange}
              type="email"
              error={errors.email}
            />
            <TextInputGroup
              label="Phone"
              name="phone"
              placeholder="Enter Phone..."
              value={phone}
              onChange={this.onChange}
              error={errors.phone}
            />
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}
