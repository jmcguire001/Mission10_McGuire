import logo from './bowlingleaguelogo.png';

function Header(props: any) {
  return (
    <header className="row navbar navbar-dark bg-dark">
      <div className="col-4">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="col subtitle">
        <h1 className="text-white">{props.title}</h1>
        <p
          className="text-white"
          style={{ textAlign: 'justify', marginRight: '20px' }}
        >
          This is a website created by Jacob McGuire (Section 002, Group 3) for
          his Information Systems class that displays bowler information. It
          includes a bowler's first name, last name, and middle initial (if
          applicable), as well as their team name, address (with street address,
          state, city, and zip), and phone number. This is a useful resource to
          discovering information about some of the top bowlers in the area!
        </p>
        <br />
        <p
          className="text-white"
          style={{
            textAlign: 'justify',
            marginRight: '20px',
            fontStyle: 'italic',
          }}
        >
          *Note: This only includes team names for the 'Marlins' and 'Sharks'
        </p>
      </div>
    </header>
  );
}

export default Header;
