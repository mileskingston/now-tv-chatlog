import React, { useState, useEffect } from 'react';
import Message from './Message';
import Loader from './Loader';
import { getData } from '../service';

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

  const isChatlogValid = !isLoading && !error;

  return (
    <div className="chatlog">
      <Loader loading={isLoading} />

      {isChatlogValid &&
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
