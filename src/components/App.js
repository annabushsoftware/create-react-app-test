import logo from '../logo.svg';
import '../styles/App.css';
import '../styles/TestApp.scss';
import * as moment from 'moment';
import Button from 'react-bootstrap/Button';

function App() {
  momentPlayground();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a 
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button>Bootstrap Button</Button>
      </header>
    </div>
  );
}

function momentPlayground() {
  var randomDate = '2016-08-15T14:32:00Z';
  var randomDateMoment = moment(randomDate); // converts string to a Moment object
  var timeNow = moment(); // creates a new Moment object for the current time

  // print dates in ISO with .format()
  console.log('givenDate, ', randomDateMoment.format());
  // optionally provide the desired string format instead of ISO
  console.log('timeNow, ', timeNow.format('MM dd, yyyy, HH:mm a'));

  // manipulate
  var modifiedDate = randomDateMoment.add(3, 'years');
  var diff = timeNow.diff(randomDateMoment); // returns a Duration of time between two Moments

  // so much more in the docs.
}

export default App;
