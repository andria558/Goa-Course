import './App.css';
import Samsung from './Samsung';
import Apple from './Apple';
import Xiaomi from './Xiaomi';
import Huawei from './Huawei';
import Personal from './Personal';

export default function App() {
  const path = window.location.pathname;

  const CustomLink = ({ children, to }) => {
    return <a href={to}>{children}</a>;
  };

  const router = () => {
    switch (path) {
      case '/samsung':
        return <Samsung />;
      case '/apple':
        return <Apple />;
      case '/xiaomi':
        return <Xiaomi />;
      case '/huawei':
        return <Huawei />;
      case '/personal':
        return <Personal />;
      case '/':
        return (
          <div className="home">
            <h1>Welcome to Phone Demo</h1>
            <p>Select a brand from the menu above 👆</p>
          </div>
        );
      default:
        return (
          <div className="not-found">
            <h1>404 - Not Found</h1>
            <p>No page for: <strong>{path}</strong></p>
            <a href="/">Go Home</a>
          </div>
        );
    }
  };

  return (
    <>
      <ul className="nav">
        <li><CustomLink to="/samsung">Samsung</CustomLink></li>
        <li><CustomLink to="/apple">Apple</CustomLink></li>
        <li><CustomLink to="/xiaomi">Xiaomi</CustomLink></li>
        <li><CustomLink to="/huawei">Huawei</CustomLink></li>
        <li><CustomLink to="/personal">Personal</CustomLink></li>
      </ul>
      {router()}
    </>
  );
}
