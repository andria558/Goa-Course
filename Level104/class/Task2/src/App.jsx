import './App.css'
import './components/contacts'

export default function App() {

  const path = window.location.pathname;

  switch (path) {
    case '/contacts':
      return <Contacts />;
    case '/':
      return (
        <div>
          <h1>Home</h1>
          <p>Welcome to the home page.</p>
          <a href="/contacts">Go to Contacts</a>
        </div>
      );
    default:
      return (
        <div>
          <h1>404 - Not Found</h1>
          <p>No page for: <strong>{path}</strong></p>
          <a href="/">Go home</a>
        </div>
      );
  }
}

