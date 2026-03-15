import './App.css';
import Contacts from './contacts';
import Home from './home';

export default function App() {
  const path = window.location.pathname;

  const CustomLink = ({ children, to }) => {
    return <a href={to}>{children}</a>;
  };

  const router = () => {
    switch (path) {
      case '/contacts':
        return <Contacts />;
      case '/home':
        return <Home />;
      case '/main':
        return (
          <>
            <h1>Main Page</h1>
            <button onClick={() => (window.location.href = '/contacts')}>Contact Me ..</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => (window.location.href = '/home')}>Home page..</button>
          </>
        );
      case '/':
        return (
          <>
            <h1>Main Page</h1>
            <p>Hello World</p>
            <button onClick={() => (window.location.href = '/contacts')}>Contact Me ..</button><br />
            <button onClick={() => (window.location.href = '/home')}>Home page..</button>
          </>
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
  };

  return (
    <>
      <ul style={{ listStyle: 'none', display: 'flex' , gap: '15px'}}>
        <li><CustomLink to="/contacts">contact</CustomLink></li>
        <li><CustomLink to="/home">home</CustomLink></li>
        <li><CustomLink to="/main">main</CustomLink></li>
      </ul>
      {router()}
    </>
  );
}





