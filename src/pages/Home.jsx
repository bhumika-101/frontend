import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home-page">

      {/* Navigation */}
      <nav className="home-nav">

        <div className="home-logo">
          🌱 GreenFleet
        </div>

        <div className="home-links">
          <a href="#features">Features</a>
          <a href="#impact">Impact</a>
          <Link to="/dashboard">Dashboard</Link>
        </div>

      </nav>

      {/* Hero */}
      <section className="hero">

        <div className="hero-content">

          <p className="eyebrow">
            AI-POWERED GREEN FLEET MANAGEMENT
          </p>

          <h1>
            Smarter Fleet.
            <br />
            <span>Greener Future.</span>
          </h1>

          <p className="hero-text">
            Optimize routes, reduce fuel consumption, and minimize
            carbon emissions with intelligent fleet optimization.
          </p>

          <div className="hero-buttons">

            <Link to="/optimization" className="hero-primary">
              ⚡ Start Optimization
            </Link>

            <Link to="/dashboard" className="hero-secondary">
              View Dashboard →
            </Link>

          </div>

        </div>

        {/* Hero visual */}
        <div className="hero-visual">

          <div className="glow-circle">
            🌍
          </div>

          <div className="floating-card card-one">
            🌱
            <div>
              <strong>18.2%</strong>
              <small>CO₂ Reduction</small>
            </div>
          </div>

          <div className="floating-card card-two">
            ⛽
            <div>
              <strong>24.7%</strong>
              <small>Fuel Saved</small>
            </div>
          </div>

        </div>

      </section>

      {/* Features */}
      <section className="features" id="features">

        <div className="section-heading">
          <p className="eyebrow">WHY GREENFLEET</p>
          <h2>Optimize every journey.</h2>
          <p>
            Data-driven decisions for a more efficient and sustainable fleet.
          </p>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <span>⚡</span>
            <h3>Smart Optimization</h3>
            <p>
              Find efficient fleet strategies using
              intelligent optimization algorithms.
            </p>
          </div>

          <div className="feature-card">
            <span>🌱</span>
            <h3>Green Operations</h3>
            <p>
              Reduce fuel consumption and carbon emissions
              without compromising operations.
            </p>
          </div>

          <div className="feature-card">
            <span>📊</span>
            <h3>Actionable Analytics</h3>
            <p>
              Monitor fleet performance through clear,
              real-time sustainability insights.
            </p>
          </div>

        </div>

      </section>

      {/* Impact */}
      <section className="impact" id="impact">

        <p className="eyebrow">SUSTAINABILITY IMPACT</p>

        <h2>
          Better decisions.
          <br />
          Lower emissions.
        </h2>

        <div className="impact-stats">

          <div>
            <strong>24.7%</strong>
            <span>Fuel Reduction</span>
          </div>

          <div>
            <strong>18.2%</strong>
            <span>CO₂ Reduction</span>
          </div>

          <div>
            <strong>₹2.8L</strong>
            <span>Estimated Savings</span>
          </div>

        </div>

      </section>

    </div>
  )
}

export default Home