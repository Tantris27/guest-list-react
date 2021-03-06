/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { FilterButtons } from './Components/FilterButtons';
import GuestInputField from './Components/GuestInputField';
import GuestList from './Components/GuestList';

const loadingDiv = css`
  display: flex;
  margin: 20% 0 0 600px;
  background-color: #f5f5f5;
`;
const bodyStyle = css`
  background-color: #f5f5f5;
  width: 100vw;
  height: 100vh;
`;
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
    return (
      <div>
        <h1 css={loadingDiv}>Loading the Guest List....</h1>
      </div>
    );
  }
  return (
    <body css={bodyStyle}>
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
    </body>
  );
}

export default App;
