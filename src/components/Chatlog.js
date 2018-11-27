import React, { Component } from 'react';
import Message from './Message';
import { getData } from '../service';

import './Chatlog.css';

class Chatlog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      error: '',
      isLoading: true,
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    getData()
      .then((results) => {
        this.setState({
          data: results,
          isLoading: false,
        });
      },
      (error) => {
        this.setState({ error });
      });
  }

  render() {
    const { isLoading, error, data } = this.state;

    return (
      <div className="chatlog">
        {isLoading && 
          <p className="loading">Loading...</p>
        }

        {!isLoading &&
          !error &&
            data
              .map((message) =>
                <Message
                  key={message.messageId}
                  avatar={message.avatar}
                  name={message.fullName}
                  message={message.message}
                  time={message.timestamp}
                  email={message.email}
                />
              )
        }
      </div>
    );
  }
}

export default Chatlog;
