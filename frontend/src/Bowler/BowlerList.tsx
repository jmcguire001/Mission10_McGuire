// Include some libraries to use
import { useEffect, useState } from 'react';
import { Bowler } from '../types/Bowler';

function BowlerList() {
  // bowlerData is original state, setBowlerData can set the state. Original state is Bowler[] (blank [] array)
  const [bowlerData, setBowlerData] = useState<Bowler[]>([]);

  // useEffect is a hook that runs after the first render of the component; this prevents the app from repeatedly trying to fetch data
  useEffect(() => {
    const fetchBowlerData = async () => {
      // Fetches data from the backend
      const rsp = await fetch('http://localhost:5119/Bowler');
      // Receive JSON data response
      const b = await rsp.json();
      // Set the state to the JSON data response
      setBowlerData(b);
    };

    // Call the fetchBowlerData function
    fetchBowlerData();
  }, []);

  // Return some HTML
  return (
    <>
      {/* This is the table header */}
      <div className="row">
        <h4 className="text-center" style={{ marginTop: '10px' }}>
          Bowler Information
        </h4>
      </div>
      {/* This is the table */}
      <table
        className="table table-bordered"
        style={{ marginLeft: '10px', marginRight: '0px' }}
      >
        <thead>
          {/* Table column headers */}
          <tr>
            <th>Bowler Name</th>
            <th>Bowler's Team Name</th>
            <th>Bowler Address</th>
            <th>Bowler Phone Number</th>
          </tr>
        </thead>
        {/* Table data */}
        <tbody>
          {/* Map the data to the table using the bowlerId key */}
          {bowlerData.map((b) => (
            <tr key={b.bowlerId}>
              <td>
                {/* Set up conditional to display middle initial when not null, and a space if null */}
                {b.bowlerFirstName +
                  ' ' +
                  (b.bowlerMiddleInit ? b.bowlerMiddleInit + '. ' : '') +
                  b.bowlerLastName}
              </td>
              {/* Set up conditional to display team name when it is 'Marlins' or 'Sharks' */}
              <td>
                {b.team.teamName === 'Marlins' || b.team.teamName === 'Sharks'
                  ? b.team.teamName
                  : ''}
              </td>
              {/* Display the bowler's address, concatenated */}
              <td>
                {b.bowlerAddress +
                  ', ' +
                  b.bowlerCity +
                  ' ' +
                  b.bowlerState +
                  ', ' +
                  b.bowlerZip}
              </td>
              <td>{b.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

// Export the component so that it can be used elsewhere
export default BowlerList;
