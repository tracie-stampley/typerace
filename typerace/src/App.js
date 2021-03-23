import React from 'react';
import './App.css';
import TextButton from './TextButton';

const buttonTextItems = ['Click Me!', 'No Me!', 'Please no clicky'];

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      userText: ''
    };
  };

  updateUserText = event => {
    this.setState({ userText: event.target.value });
  };

  render () {
    return (
      <div>
        <h2>Type Race</h2>
        <input value={this.state.userText} onChange={this.updateUserText} />
        <hr/>
        {buttonTextItems.map(textItem => <TextButton buttonText={textItem} />)}
      </div>
    );
  };
};

export default App;
