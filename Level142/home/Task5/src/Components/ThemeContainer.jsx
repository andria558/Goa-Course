import React from 'react'

const ThemeContainer = () => {
  const [dark, setDark] = React.useState(false);
  return (
    <ThemeButton dark={dark} toggle={() => setDark(!dark)} />
  );
}

export default ThemeContainer;