import React, { useState, useEffect } from 'react';
import Message from './Message';
import { getData } from '../service';

import './Chatlog.scss';

const Chatlog = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => (
    getData()
      .then((results) => {
        setData(results);
        setLoading(false);
      },
      (error) => {
        setError({ error });
      })
  );

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

export default Chatlog;
