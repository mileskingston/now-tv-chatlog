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
      isLoading: false,
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
          isLoading: true,
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
        {!isLoading && 
          <p className="loading">Loading...</p>
        }

        {isLoading &&
          !error &&
            data
              .sort(function(a, b) {
                return new Date(b.timestamp) - new Date(a.timestamp);
              })
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
