export function FilterButtons({
  baseUrl,
  setListUpdate,
  listUpdate,
  setFilter,
  setNewGuestList,
  guestList,
  setGuestList,
}) {
  return (
    <div>
      <p>Filter by: </p>
      <button
        onClick={() => {
          setFilter('all Guests: ');
          setListUpdate(!listUpdate);
          setNewGuestList(guestList);
        }}
      >
        All
      </button>
      <button
        onClick={() => {
          setFilter('not Attending: ');
          setNewGuestList(
            guestList.filter((value) => value.attending === false),
          );
        }}
      >
        Not Attending
      </button>
      <button
        onClick={() => {
          setFilter('attending Guests: ');
          setNewGuestList(
            guestList.filter((value) => value.attending === true),
          );
        }}
      >
        Attending
      </button>
      <button
        onClick={async () => {
          guestList.map(async (guest) => {
            await fetch(`${baseUrl}${guest.id}`, {
              method: 'DELETE',
            });
            setGuestList([]);
            setNewGuestList([]);
          });
          setListUpdate(!listUpdate);
          setFilter('all Guests: ');
        }}
      >
        Delete All
      </button>
    </div>
  );
}
