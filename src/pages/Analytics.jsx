function Analytics() {
  return (
    <div className="page analytics-page">
      <h1>Fleet Analytics</h1>

      <div className="analytics-header-row">
        <div>
          <p className="badge">PERFORMANCE INSIGHTS • DEMO DATA</p>
        </div>

        <div className="analytics-period">
          Last 6 Months ▾
        </div>
      </div>

      <p className="analytics-subtitle">
        Monitor fuel efficiency, emissions, and fleet performance.
      </p>

      {/* STATISTICS */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Fuel Consumption</h3>
          <h2>24.7%</h2>
          <p>↓ Reduction</p>
        </div>

        <div className="stat-card">
          <h3>CO₂ Emissions</h3>
          <h2>18.2%</h2>
          <p>↓ Reduction</p>
        </div>

        <div className="stat-card">
          <h3>Fleet Score</h3>
          <h2>92/100</h2>
          <p>Excellent</p>
        </div>

        <div className="stat-card">
          <h3>Cost Saving</h3>
          <h2>₹2.8L</h2>
          <p>Per voyage</p>
        </div>
      </div>

      {/* FUEL CHART */}
      <div className="analytics-card">
        <h2>Fuel Consumption Trend</h2>

        <div className="bar-chart">
          {[
            ["Jan", "75%"],
            ["Feb", "65%"],
            ["Mar", "58%"],
            ["Apr", "48%"],
            ["May", "40%"],
            ["Jun", "32%"],
          ].map(([month, height]) => (
            <div className="bar-item" key={month}>
              <span>{month}</span>

              <div className="bar">
                <div style={{ height }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CO2 CHART */}
      <div className="analytics-card">
        <h2>CO₂ Emission Reduction</h2>

        <div className="line-chart">

  <div className="line-point" style={{ bottom: "25%", left: "8%" }}>
    <span>Jan</span>
  </div>

  <div className="line-point" style={{ bottom: "35%", left: "24%" }}>
    <span>Feb</span>
  </div>

  <div className="line-point" style={{ bottom: "45%", left: "40%" }}>
    <span>Mar</span>
  </div>

  <div className="line-point" style={{ bottom: "55%", left: "56%" }}>
    <span>Apr</span>
  </div>

  <div className="line-point" style={{ bottom: "68%", left: "72%" }}>
    <span>May</span>
  </div>

  <div className="line-point" style={{ bottom: "78%", left: "88%" }}>
    <span>Jun</span>
  </div>

</div>

        <p className="chart-caption">
          Continuous reduction in fleet CO₂ emissions through optimized
          operations.
        </p>
      </div>
    </div>
  );
}

export default Analytics;