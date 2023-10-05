const Message = ({ message }) => {
  if (message === null) {
    return;
  } else {
    return <div className="message">{message}</div>;
  }
};

export default Message;
