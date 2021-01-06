import logo from './logo.svg';
import './App.css';
import Button from './Button';

function App() {
  const buttonTextItems = ['Click Me!', 'No Me!', 'Please no clicky']
  return (
    <div>
      <h2>Type Race</h2>
      <input />
      <hr/>
      {buttonTextItems.map(textItem => <Button buttonText={textItem} />)}
    </div>
  );
}

export default App;
