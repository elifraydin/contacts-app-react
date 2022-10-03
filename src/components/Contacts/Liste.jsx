import React from 'react'

function Liste(props) {
  const contacts = props.contacts;

  const contactsItem = contacts.map((contact,i) =>
    <li key={i}>
      {contact.fullname}
    </li>
  );

  return (
    <div>
      <ul>{contactsItem}</ul>
    </div>
  )
}

export default Liste
