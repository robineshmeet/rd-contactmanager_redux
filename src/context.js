import React from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    default:
      return state;
  }
};

export class Provider extends React.PureComponent {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Robin Dhiman',
        email: 'robin@gmail.com',
        phone: 111 - 111 - 1111,
      },
      {
        id: 2,
        name: 'Sachin Dhiman',
        email: 'sachin@gmail.com',
        phone: 222 - 222 - 2222,
      },
      {
        id: 3,
        name: 'Roshan Dhiman',
        email: 'roshan@gmail.com',
        phone: 333 - 333 - 3333,
      },
    ],
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
