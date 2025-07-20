import { FleetCards } from "../../constants/cardsfleet";
import "./Fleet.css";

const Fleet = () => {
  return (
    <div className="fleet">
      <div className="fleetcontainer">
        {/* <div className="fleet">
          <h1>Fleet</h1>
        </div>
        <div className="fleet">
          <h1>Route</h1>
        </div>
        <div className="fleet">
          <h1>Parcel</h1>
        </div> */}

        {FleetCards.map((fleetcard, index) => {
          return (
            <div>
              <div key={index}>
                <h1>{fleetcard.title}</h1>
              </div>

              <div>
                {fleetcard.photo}
              </div>

              <div>
                {fleetcard.desc}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Fleet;
