import { useEffect } from 'react';
import { DeleteField } from './DeleteButton';
import { GuestField } from './PushButton';

export function App() {
  const baseUrl = 'https://guestlistapi.herokuapp.com/';
  const getGuestList = async () => {
    const response = await fetch(`${baseUrl}`);
    const allGuests = await response.json();
    console.log(allGuests);
  };

  return (
    <div>
      <button onClick={getGuestList}> Hello Guest List</button>

      <GuestField />
      <DeleteField />
    </div>
  );
}

export default App;
