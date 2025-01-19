export default function AppLayout({ children }) {
    return (
      <div>
        <header>
          <h1>App Header</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>App Footer</p>
        </footer>
      </div>
    );
  }
  