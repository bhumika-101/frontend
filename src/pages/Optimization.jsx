import { useState } from "react";

function Optimization() {
  const [vessel, setVessel] = useState("GF-204 — Green Voyager");
  const [origin, setOrigin] = useState("Mumbai");
  const [destination, setDestination] = useState("Singapore");
  const [fuel, setFuel] = useState("LNG");
  const [priority, setPriority] = useState("Minimum Fuel Consumption");
  const [result, setResult] = useState(false);

  const runOptimization = () => {
    setResult(false);

    setTimeout(() => {
      setResult(true);
    }, 700);
  };

  return (
    <div className="app">
      <main className="page">

        <p className="badge">⚡ AI-POWERED OPTIMIZATION</p>

        <h1 className="optimization-title">
        Fleet <span>Optimization</span>
        </h1>

        <p className="section-subtitle">
          Find the most fuel-efficient and sustainable fleet strategy.
        </p>

        <div className="route-card">

          <h2>Optimization Parameters</h2>

          <p className="section-subtitle">
            Configure your fleet requirements.
          </p>

          <div className="stats">

            <div>
              <label>Vessel</label>
              <select
                value={vessel}
                onChange={(e) => setVessel(e.target.value)}
              >
                <option>GF-204 — Green Voyager</option>
                <option>GF-118 — Ocean Star</option>
                <option>GF-305 — Blue Horizon</option>
                <option>GF-412 — Sea Runner</option>
              </select>
            </div>

            <div>
              <label>Origin</label>
              <select
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
              >
                <option>Mumbai</option>
                <option>Chennai</option>
                <option>Kochi</option>
                <option>Singapore</option>
              </select>
            </div>

            <div>
              <label>Destination</label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              >
                <option>Singapore</option>
                <option>Dubai</option>
                <option>Colombo</option>
                <option>Bengaluru</option>
              </select>
            </div>

            <div>
              <label>Preferred Fuel</label>
              <select
                value={fuel}
                onChange={(e) => setFuel(e.target.value)}
              >
                <option>LNG</option>
                <option>Methanol</option>
                <option>Hydrogen</option>
                <option>Ammonia</option>
              </select>
            </div>

          </div>

          <label>Optimization Priority</label>

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>Minimum Fuel Consumption</option>
            <option>Minimum CO₂ Emissions</option>
            <option>Minimum Cost</option>
            <option>Balanced Optimization</option>
          </select>

          <br />
          <br />

          <button
            className="primary-button"
            onClick={runOptimization}
          >
            ⚡ Run Optimization
          </button>

        </div>

        {result && (
          <div className="route-card">

            <p className="badge">
              ✓ OPTIMIZATION COMPLETE
            </p>

            <h2>Recommended Strategy</h2>

            <div className="stats">

              <div className="card">
                <h3>Fuel Reduction</h3>
                <h2>24.7%</h2>
                <p>↓ vs current</p>
              </div>

              <div className="card">
                <h3>CO₂ Reduction</h3>
                <h2>18.2%</h2>
                <p>↓ emissions</p>
              </div>

              <div className="card">
                <h3>Cost Saving</h3>
                <h2>₹2.8L</h2>
                <p>Per voyage</p>
              </div>

              <div className="card">
                <h3>Route Efficiency</h3>
                <h2>94%</h2>
                <p>Optimized</p>
              </div>

            </div>

            <h2>Recommended Route</h2>

            <p>
              📍 {origin} → {destination}
            </p>

            <p>
              🚢 {vessel}
            </p>

            <p>
              🌱 {fuel}-powered route optimized for{" "}
              {priority.toLowerCase()}.
            </p>

          </div>
        )}

      </main>
    </div>
  );
}

export default Optimization;