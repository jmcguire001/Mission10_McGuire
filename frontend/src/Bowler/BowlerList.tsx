import { useEffect, useState } from 'react';
import { Bowler } from '../types/Bowler';

function BowlerList() {
  // foodData is original state, setFoodData can set the state. Original state is MarriottFood array (blank [])
  const [bowlerData, setBowlerData] = useState<Bowler[]>([]);

  useEffect(() => {
    const fetchBowlerData = async () => {
      const rsp = await fetch('http://localhost:5119/Bowler');
      const b = await rsp.json();
      setBowlerData(b);
    };

    fetchBowlerData();
  }, []);

  return (
    <>
      <div className="row">
        <h4 className="text-center" style={{ marginTop: '10px' }}>
          Bowler Information
        </h4>
      </div>
      <table
        className="table table-bordered"
        style={{ marginLeft: '10px', marginRight: '0px' }}
      >
        <thead>
          <tr>
            <th>Bowler Name</th>
            <th>Bowler's Team Name</th>
            <th>Bowler Address</th>
            <th>Bowler Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {bowlerData.map((b) => (
            <tr key={b.bowlerId}>
              <td>
                {b.bowlerFirstName +
                  ' ' +
                  (b.bowlerMiddleInit ? b.bowlerMiddleInit + '. ' : '') +
                  b.bowlerLastName}
              </td>
              <td>
                {b.team.teamName === 'Marlins' || b.team.teamName === 'Sharks'
                  ? b.team.teamName
                  : ''}
              </td>
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

export default BowlerList;
