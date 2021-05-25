import { useEffect, useState } from 'react';
import { FilterButtons } from './FilterButtons';
import GuestInputField from './GuestInputField';
import GuestList from './GuestList';

export function App() {
  const baseUrl = 'https://guestlistapi.herokuapp.com/';

  const [guestList, setGuestList] = useState([]);
  const [newGuestList, setNewGuestList] = useState([]);
  const [fetch1, setFetch1] = useState(true);
  const [listUpdate, setListUpdate] = useState(true);
  const [filter, setFilter] = useState('all Guests:');

  useEffect(() => {
    fetch(`${baseUrl}`).then(
      (x) =>
        x.json().then((data) => {
          setGuestList(data);
          setNewGuestList(data);
        }),
      setFetch1(false),
    );
  }, [listUpdate]);

  if (fetch1) {
    return <div>Loading ....</div>;
  }
  return (
    <div>
      <GuestInputField
        baseUrl={baseUrl}
        listUpdate={listUpdate}
        setListUpdate={setListUpdate}
        onClick={() => setListUpdate(!listUpdate)}
      />

      <GuestList
        baseUrl={baseUrl}
        listUpdate={listUpdate}
        setListUpdate={setListUpdate}
        newGuestList={newGuestList}
        filter={filter}
      />
      <FilterButtons
        baseUrl={baseUrl}
        listUpdate={listUpdate}
        setListUpdate={setListUpdate}
        newGuestList={newGuestList}
        setFilter={setFilter}
        setNewGuestList={setNewGuestList}
        setGuestList={setGuestList}
        guestList={guestList}
      />
    </div>
  );
}

export default App;
