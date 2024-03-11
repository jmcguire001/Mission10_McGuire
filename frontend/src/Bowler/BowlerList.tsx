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
        <h4 className="text-center">Bowler Information</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Bowler Name</th>
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
                  b.bowlerMiddleInitial +
                  ' ' +
                  b.bowlerLastName}
              </td>
              <td>
                {b.bowlerAddress +
                  ', ' +
                  b.bowlerCity +
                  ' ' +
                  b.bowlerState +
                  ' ' +
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
