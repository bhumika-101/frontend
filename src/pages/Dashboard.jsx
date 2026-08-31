import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div className="dashboard">

      {/* Navigation */}
      <nav className="dashboard-nav">
        <div className="dashboard-logo">
          🌱 GreenFleet
        </div>

        <div className="dashboard-links">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/fleet">Fleet</Link>
          <Link to="/optimization">Optimization</Link>
          <Link to="/analytics">Analytics</Link>
        </div>
      </nav>

      {/* Header */}
      <div className="dashboard-header">
        <p className="eyebrow">FLEET MANAGEMENT</p>

        <h1>Fleet Optimization Dashboard</h1>

        <p>
          Monitor and optimize your fleet performance
        </p>
      </div>

      {/* Statistics */}
      <div className="stats">

        <div className="card">
          <h3>🌱 CO₂ Reduction</h3>
          <h2>18.2%</h2>
          <p>↓ Emissions</p>
        </div>

        <div className="card">
          <h3>⛽ Fuel Saved</h3>
          <h2>24.7%</h2>
          <p>↓ Fuel Consumption</p>
        </div>

        <div className="card">
          <h3>⭐ Fleet Score</h3>
          <h2>92/100</h2>
          <p>Excellent</p>
        </div>

        <div className="card">
          <h3>🚢 Active Vehicles</h3>
          <h2>48</h2>
          <p>Currently Operating</p>
        </div>

      </div>

      {/* Route */}
      <div className="route-card">

        <h2>Optimized Route</h2>

        <div className="route-visual">
          <span>📍 Mumbai</span>
          <span className="route-line">━━━━ 🚢 ━━━━</span>
          <span>Bengaluru 📍</span>
        </div>

        <div className="fleet-status-section">

  <div className="section-title">
    <div>
      <p className="badge">LIVE MONITORING • DEMO DATA</p>
      <h2>Fleet Status</h2>
    </div>

    <span className="live-indicator">● LIVE</span>
  </div>

  <div className="fleet-status-grid">

    <div className="status-item">
      <span className="status-dot"></span>
      <div>
        <strong>Green Voyager</strong>
        <small>Route: Mumbai → Singapore</small>
      </div>
      <b>94%</b>
    </div>

    <div className="status-item">
      <span className="status-dot"></span>
      <div>
        <strong>Ocean Star</strong>
        <small>Route: Chennai → Dubai</small>
      </div>
      <b>88%</b>
    </div>

    <div className="status-item">
      <span className="status-dot"></span>
      <div>
        <strong>Blue Horizon</strong>
        <small>Route: Kochi → Singapore</small>
      </div>
      <b>97%</b>
    </div>

    <div className="status-item warning">
      <span className="status-dot"></span>
      <div>
        <strong>Sea Runner</strong>
        <small>Requires route optimization</small>
      </div>
      <b>72%</b>
    </div>

  </div>

</div>

        <p>
          ✓ Route optimized for minimum fuel consumption
        </p>

        <p>
          🌱 Estimated CO₂ savings: <strong>18.2%</strong>
        </p>

      </div>

      {/* Quick Actions */}
      <div className="quick-actions">

        <Link to="/fleet" className="quick-card">
          🚢
          <div>
            <strong>View Fleet</strong>
            <small>Monitor vehicles</small>
          </div>
        </Link>

        <Link to="/optimization" className="quick-card">
          ⚡
          <div>
            <strong>Optimize Fleet</strong>
            <small>Find best strategy</small>
          </div>
        </Link>

        <Link to="/analytics" className="quick-card">
          📊
          <div>
            <strong>View Analytics</strong>
            <small>Analyze performance</small>
          </div>
        </Link>

      </div>

    </div>
  )
}

export default Dashboard