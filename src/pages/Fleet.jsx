function Fleet() {
  const vessels = [
    {
      name: "Green Voyager",
      id: "GF-204",
      fuel: "LNG",
      efficiency: "91%",
      status: "Optimal",
    },
    {
      name: "Ocean Star",
      id: "GF-118",
      fuel: "Methanol",
      efficiency: "86%",
      status: "Good",
    },
    {
      name: "Blue Horizon",
      id: "GF-305",
      fuel: "Hydrogen",
      efficiency: "94%",
      status: "Excellent",
    },
    {
      name: "Sea Runner",
      id: "GF-412",
      fuel: "Diesel",
      efficiency: "72%",
      status: "Needs Attention",
    },
  ];

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          🌱 <span>GreenFleet</span>
        </div>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/fleet">Fleet</a>
          <a href="/optimization">Optimization</a>
          <a href="/analytics">Analytics</a>
        </div>
      </nav>

      <main className="page">
        <h1 className="fleet-title">
        Fleet <span>Management</span>
        </h1>

        <p className="section-subtitle">
          Monitor your vessels and track sustainable fleet performance.
        </p>

        <div className="stats">
          <div className="card">
            <h3>Total Vessels</h3>
            <h2>48</h2>
            <p>Active fleet</p>
          </div>

          <div className="card">
            <h3>Green Vessels</h3>
            <h2>32</h2>
            <p>Low-emission vessels</p>
          </div>

          <div className="card">
            <h3>Avg Efficiency</h3>
            <h2>87.4%</h2>
            <p>Fleet efficiency</p>
          </div>

          <div className="card">
            <h3>CO₂ Reduction</h3>
            <h2>18.2%</h2>
            <p>Compared to baseline</p>
          </div>
        </div>

        <div className="fleet-list">
          <h2>Vessel Overview</h2>

          <div className="vessel-grid">

  {vessels.map((vessel) => (
    <div className="vessel-card" key={vessel.id}>

      <div className="vessel-top">
        <span className="vessel-icon">🚢</span>

        <span className="vessel-status">
          ● {vessel.status}
        </span>
      </div>

      <h2>{vessel.name}</h2>

      <p className="vessel-id">{vessel.id}</p>

      <div className="vessel-details">

        <div>
          <small>Fuel</small>
          <strong>{vessel.fuel}</strong>
        </div>

        <div>
          <small>Efficiency</small>
          <strong>{vessel.efficiency}</strong>
        </div>

      </div>

    </div>
  ))}

</div>
        </div>
      </main>
    </div>
  );
}

export default Fleet;