import React from 'react'
import Prop from './components/Prop';

const App = () => {
  return (
    <div>
      <Prop array={['String', 777, ['array-1 ', 'array-2 ', 120], 10 + 15, {'name':'Andria', 'Lastname':'Kupreishvili'}, true, false, 'snow' + 'ball', () => {'snow' + 'ball'}, 9, 'end']} />
    </div>
  )
}

export default App;