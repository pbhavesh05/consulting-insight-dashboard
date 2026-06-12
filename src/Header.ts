export default function Header() {
    return (
      <header className="header">
        <div className="header__brand">Consulting Insight Dashboard</div>
  
        <nav className="header__nav">
          <a href="#dashboard">Dashboard</a>
          <a href="#insights">Insights</a>
          <a href="#summary">Summary</a>
        </nav>
      </header>
    );
  }