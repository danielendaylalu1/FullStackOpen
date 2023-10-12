const Message = ({ message }) => {
  if (message === null) {
    return;
  } else {
    return <div className={`message ${message.color}`}>{message.text}</div>;
  }
};

export default Message;
