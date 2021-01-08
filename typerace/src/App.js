import React from 'react';
import './App.css';
import Button from './Button';

const buttonTextItems = ['Bears, beets, battlestar galactica', "What's Forrest Gump's password? 1Forrest1", 'Where do programmers like to hangout? The Foo Bar'];

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      userText: ''
    };
  };

  updateUserText = event => {
    this.setState({ userText: event.target.value });

    if(event.target.value === this.state.snippet) {
      this.setState({victory: true, endTime: new Date().getTime() - this.state.startTime})
    }
  };

  chooseSnippet = index => {
    this.setState({ snippet: buttonTextItems[index], startTime: new Date().getTime()});
  };

  render () {
    return (
      <div>
        <h2>Type Race</h2>
        {this.state.snippet}
        <h4>{this.state.victory ? `Done! Woot! Time: ${this.state.endTime}ms` : null}</h4>
        <hr/>
        <input value={this.state.userText} onChange={this.updateUserText} />
        <hr/>
        {buttonTextItems.map((textItem, index) => <Button key={index} onClick={() => this.chooseSnippet(index)} buttonText={textItem} />)}
      </div>
    );
  };
};

export default App;
