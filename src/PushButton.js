import { useState } from 'react';

export function GuestField() {
  const baseUrl = 'https://guestlistapi.herokuapp.com/';

  const [firstName, setFirstName] = useState('Karl');
  const [lastName, setLastName] = useState('Horky');
  const [firstText, setFirstText] = useState('');
  const [lastText, setLastText] = useState('');

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setFirstText(e.currentTarget.value);
        }}
      />
      <input
        type="text"
        onChange={(e) => {
          setLastText(e.currentTarget.value);
        }}
      />
      <button
        onClick={async (e) => {
          e.preventDefault();
          await setFirstName(firstText);
          await setLastName(lastText);
          const response = await fetch(`${baseUrl}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              firstName: { firstName },
              lastName: { lastName },
            }),
          });
          const createdGuest = await response.json();
          console.log(createdGuest);
        }}
      >
        {' '}
        Add Guest{' '}
      </button>
    </div>
  );
}
