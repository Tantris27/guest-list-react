import { useState } from 'react';

export default function GuestInputField({
  listUpdate,
  setListUpdate,
  baseUrl,
}) {
  const [firstName, setFirstName] = useState('Santa');
  const [lastName, setLastName] = useState('Claus');
  return (
    <div>
      <p>branch</p>
      <form>
        <input
          type="text"
          placeholder="Enter First Name"
          onChange={(e) => {
            setFirstName(e.currentTarget.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Last Name"
          onChange={(e) => {
            setLastName(e.currentTarget.value);
          }}
        />
        <button
          onClick={async (e) => {
            e.preventDefault();
            await fetch(`${baseUrl}`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                firstName: { firstName },
                lastName: { lastName },
              }),
            });
            setListUpdate(!listUpdate);
          }}
        >
          {' '}
          Add Guest{' '}
        </button>
      </form>
    </div>
  );
}
