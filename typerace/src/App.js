import './App.css';
import TextButton from './TextButton';

function App() {
  const buttonTextItems = ['Click Me!', 'No Me!', 'Please no clicky']
  return (
    <div>
      <h2>Type Race</h2>
      <input />
      <hr/>
      {buttonTextItems.map(textItem => <TextButton buttonText={textItem} />)}
    </div>
  );
}

export default App;
