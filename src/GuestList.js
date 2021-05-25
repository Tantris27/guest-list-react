export default function GuestList({
  baseUrl,
  setListUpdate,
  listUpdate,
  newGuestList,
  filter,
}) {
  return (
    <div>
      <ul>
        {newGuestList.map((guest) => {
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
      <p>
        Number of {filter} {newGuestList.length}
      </p>
    </div>
  );
}
