"use client";
import { useState } from "react";
import axios from "axios";

export default function RouteForm() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [waypoints, setWaypoints] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [mode, setMode] = useState("driving");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!origin || !destination || !waypoints || !departureTime) {
      setError("All fields must be filled out.");
      return;
    }

    setError(null); 

    const queryParams = {
      origin,
      destination,
      waypoints,
      departure_time: departureTime,
      mode,
    };

    console.log("query params", queryParams);

    try {
      const response = await axios.post('/api/route', queryParams, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
    } catch (error) {
      console.error("Error fetching route prediction:", error);
      setError("Failed to fetch route prediction.");
    }
  }

  return (
    <div className="p-4 flex flex-col gap-4">
      <form onSubmit={handleSubmit}>
        <label>
          Origin (latitude,longitude):
          <input
            type="text"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            placeholder="52.5200,13.4050"
          />
        </label>
        <br />
        <label>
          Destination (latitude,longitude):
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="52.5210,13.4130"
          />
        </label>
        <br />
        <label>
          Waypoints (latitude,longitude|latitude,longitude):
          <input
            type="text"
            value={waypoints}
            onChange={(e) => setWaypoints(e.target.value)}
            placeholder="52.5163,13.3777|52.5250,13.3694"
          />
        </label>
        <br />
        <label>
          Departure Time (Unix timestamp):
          <input
            type="text"
            value={departureTime}
            onChange={(e) => setDepartureTime(e.target.value)}
            placeholder="1741361601"
          />
        </label>
        <br />
        <label>
          Mode of Transport:
          <select value={mode} onChange={(e) => setMode(e.target.value)}>
            <option value="driving">Driving</option>
            <option value="walking">Walking</option>
            <option value="bicycling">Bicycling</option>
            <option value="transit">Transit</option>
          </select>
        </label>
        <br />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit">Get Route Prediction</button>
      </form>
    </div>
  );
}
