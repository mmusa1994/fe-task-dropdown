import { Dropdown, DropdownItem } from './components'
import { items } from './data'

import './App.scss';

function App() {


  return (
    <div className="App">
      <h1 className='title'>Hello Ankora folks!</h1>
      <p className='title'>Custom dropdown component by MM </p>
      <div className='component-container'>
        <Dropdown variant='primary' placeholder="Choose an option">
          <DropdownItem value="">-</DropdownItem>
          {items.map(item =>
            <DropdownItem key={item.id} value={item.value}>{item.value}</DropdownItem>
          )}
        </Dropdown>
        <Dropdown variant='outline' placeholder="Choose an option">
          <DropdownItem value="">-</DropdownItem>
          {items.map(item =>
            <DropdownItem key={item.id} value={item.value}>{item.value}</DropdownItem>
          )}
        </Dropdown>
      </div>
    </div >
  );
}

export default App;
