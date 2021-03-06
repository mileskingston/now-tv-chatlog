import React from 'react';
import PropTypes from 'prop-types';
import { convertDateFormat } from '../utils/index';

const Message = ({ name, time, avatar, email, message }) => (
  <div className="message">
    {avatar &&
      <div className="message-avatar">
          <img
            className="message-avatar__image"
            src={avatar}
            alt={`${name} avatar`}
          />
      </div>
    }
    <div className="message-content">
      <div className="message-header">
        <h3 className="message-header__name">{name}</h3>
        <span className="message-header__time">{convertDateFormat(time)}</span>
      </div>

      <div className="message__text">{message}</div>
      <div className="message__email">{email}</div>
    </div>
  </div>
);

Message.displayName = 'Message';

Message.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  message: PropTypes.string,
  time: PropTypes.string,
  email: PropTypes.string,
};

Message.defaultProps = {
  avatar: null,
  name: null,
  message: null,
  time: null,
  email: null,
};

export default Message;
