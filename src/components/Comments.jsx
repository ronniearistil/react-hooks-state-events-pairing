import React from 'react';

function Comments({ user, text }) {
  return (
    <li>
      <p><strong>{user}</strong></p>
      <p>{text}</p>
    </li>
  );
}

export default Comments;

