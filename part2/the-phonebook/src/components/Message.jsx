const Message = ({ message }) => {
  if (message === null) {
    return;
  } else {
    return <div>{message}</div>;
  }
};

export default Message;
