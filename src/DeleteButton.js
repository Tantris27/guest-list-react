import { useState } from 'react';

export function DeleteField() {
  const baseUrl = 'https://guestlistapi.herokuapp.com/';

  const [numId, setNumId] = useState([0]);
  const deleteGuest = async () => {
    const response = await fetch(`${baseUrl}${numId}`, { method: 'DELETE' });
    const deletedGuest = await response.json();
    console.log(deletedGuest);
  };
  return (
    <>
      <input type="number" onchange={(e) => setNumId(e.currentTarget.value)} />
      <button onClick={deleteGuest}> Delete Guest </button>
    </>
  );
}
