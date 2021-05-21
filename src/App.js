import { useEffect, useState } from 'react';
import { DeleteField } from './DeleteButton';
import { GuestField } from './PushButton';

export function App() {
  const baseUrl = 'https://guestlistapi.herokuapp.com/';

  const [guestList, setGuestList] = useState([]);

  // const getGuestList = async () => {
  //   const response = await fetch(`${baseUrl}`);
  //   const allGuests = await response.json();
  //   console.log(allGuests);
  // };

  useEffect(() => {
    fetch(`${baseUrl}`).then((x) =>
      x.json().then((data) => setGuestList(data)),
    );
  }, []);
  if (guestList.length === 0) {
    return <div>Loading ....</div>;
  }
  return (
    <div>
      {console.log(guestList)}
      <button> Hello Guest List</button>

      <GuestField />
      {/* <DeleteField /> */}
    </div>
  );
}

export default App;
