import React from 'react';

function Examples() {

  const jsxExamples = (
    <div>
      <h1>Hello world</h1>
      <p>This is a paragraph</p>
      <button>Click me</button>
      <ul><li>List item</li></ul>
      <footer>Footer content</footer>
    </div>
  );


  const attributeExamples = (
    <div>
      <a href="https://react.dev">React Official</a><br /><br />
      <img src="/logo.png" alt="Logo" width="100" /><br /><br />
      <input type="text" placeholder="Enter name" /><br /><br />
      <h2 id="main-title">Main Title</h2>
      <button disabled>Disabled Button</button>
    </div>
  );


  const greeting = <h1>Welcome, Andria!</h1>;
  const paragraph = <p>Learning React is fun!</p>;
  const image = <img src="/codeAcademy.png" alt="CodeAcademy" />;
  const link = <a href="https://codeacademy.ge">Visit CodeAcademy</a>;
  const button = <button>Start</button>;


  const myTeam = {
    captain: <h2>Andria</h2>,
    developer: <li>React Developer</li>,
    designer: <li>UI/UX Designer</li>,
    tester: <li>QA Engineer</li>,
    manager: <li>Project Manager</li>
  };


  const nestedExample = (
    <div>
      <a href="https://example.com">
        <h1>Click me!</h1>
      </a>
      <div>
        <p>I am nested inside a div</p>
        <ul>
          <li>One</li>
          <li>Two</li>
        </ul>
      </div>
    </div>
  );

  return (
    <div>
      <h2>JSX Elements</h2>
      {jsxExamples}

      <h2>JSX Attributes</h2>
      {attributeExamples}

      <h2>JSX Variables</h2>
      {greeting}
      {paragraph}
      {image}
      {link}
      {button}

      <h2>JSX in Objects</h2>
      <ul>
        {Object.values(myTeam)}
      </ul>

      <h2>Nested JSX & Outer Element Rule</h2>
      {nestedExample}
    </div>
  );
}

export default Examples;
