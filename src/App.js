import { useEffect, useState } from 'react';

export function App() {
  const baseUrl = 'https://guestlistapi.herokuapp.com/';

  const [guestList, setGuestList] = useState([]);
  const [newGuestList, setNewGuestList] = useState([]);
  const [fetch1, setFetch1] = useState(true);
  const [listUpdate, setListUpdate] = useState(true);
  const [firstName, setFirstName] = useState('Santa');
  const [lastName, setLastName] = useState('Claus');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetch(`${baseUrl}`).then(
      (x) => x.json().then((data) => setGuestList(data)),
      setFetch1(false),
    );
  }, [listUpdate]);

  if (fetch1) {
    return <div>Loading ....</div>;
  }
  return (
    <div>
      <div>
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
      {filter === 'all' && (
        <div>
          <ul>
            {guestList.map((guest) => {
              return (
                <li key={guest.id}>
                  Guest {guest.id}: {'            '}
                  {guest.lastName.lastName}
                  {'            '}
                  {guest.firstName.firstName}
                  {'            '}
                  status:{guest.attending ? ' attending' : ' not coming'}
                  {'            '}
                  <button
                    onClick={async () => {
                      await fetch(`${baseUrl}${guest.id}`, {
                        method: 'DELETE',
                      });
                      setListUpdate(!listUpdate);
                    }}
                  >
                    {' '}
                    Delete Guest{' '}
                  </button>
                  <button
                    onClick={async () => {
                      await fetch(`${baseUrl}${guest.id}`, {
                        method: 'PATCH',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ attending: !guest.attending }),
                      });
                      setListUpdate(!listUpdate);
                    }}
                  >
                    {' '}
                    Update Status{' '}
                  </button>
                </li>
              );
            })}
          </ul>
          <p>Number of Guests: {guestList.length}</p>
        </div>
      )}
      {filter === 'attending' && (
        <div>
          <ul>
            {newGuestList.map((guestatt) => {
              return (
                <li key={guestatt.id}>
                  Guest {guestatt.id}: {'            '}
                  {guestatt.lastName.lastName}
                  {'            '}
                  {guestatt.firstName.firstName}
                  {'            '}
                  status:{guestatt.attending ? ' attending' : ' not coming'}
                  {'            '}
                  <button
                    onClick={async () => {
                      await fetch(`${baseUrl}${guestatt.id}`, {
                        method: 'DELETE',
                      });
                      setListUpdate(!listUpdate);
                    }}
                  >
                    {' '}
                    Delete Guest{' '}
                  </button>
                  <button
                    onClick={async () => {
                      await fetch(`${baseUrl}${guestatt.id}`, {
                        method: 'PATCH',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                          attending: !guestatt.attending,
                        }),
                      });
                      setListUpdate(!listUpdate);
                    }}
                  >
                    {' '}
                    Update Status{' '}
                  </button>
                </li>
              );
            })}
          </ul>
          <p>Number of Guests: {guestList.length}</p>
        </div>
      )}
      {filter === 'notAttending' && (
        <div>
          <ul>
            {newGuestList.map((guestNatt) => {
              return (
                <li key={guestNatt.id}>
                  Guest {guestNatt.id}: {'            '}
                  {guestNatt.lastName.lastName}
                  {'            '}
                  {guestNatt.firstName.firstName}
                  {'            '}
                  status:{guestNatt.attending ? ' attending' : ' not coming'}
                  {'            '}
                  <button
                    onClick={async () => {
                      await fetch(`${baseUrl}${guestNatt.id}`, {
                        method: 'DELETE',
                      });
                      setListUpdate(!listUpdate);
                    }}
                  >
                    {' '}
                    Delete Guest{' '}
                  </button>
                  <button
                    onClick={async () => {
                      await fetch(`${baseUrl}${guestNatt.id}`, {
                        method: 'PATCH',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                          attending: !guestNatt.attending,
                        }),
                      });
                      setListUpdate(!listUpdate);
                    }}
                  >
                    {' '}
                    Update Status{' '}
                  </button>
                </li>
              );
            })}
          </ul>
          <p>Number of Guests: {guestList.length}</p>
        </div>
      )}
      <div>
        <p>Filter by: </p>
        <button onClick={() => setFilter('all')}>All</button>
        <button
          onClick={() => {
            setFilter('notAttending');
            setNewGuestList(
              guestList.filter((value) => value.attending === false),
            );
          }}
        >
          Not Attending
        </button>
        <button
          onClick={() => {
            setFilter('attending');
            setNewGuestList(
              guestList.filter((value) => value.attending === true),
            );
          }}
        >
          Attending
        </button>
      </div>
    </div>
  );
}

export default App;
