import logo from '../logo.svg';
import '../App.scss';
import MyButton from '../components/MyButton';
import ApiButton from '../components/ApiButton';

function HomePage() {
return (
  <div className="App">
    <div className="App-header">
      <p><MyButton label="Click here" changeTo="Thank you!" /></p>
      <p><MyButton label="Click here" changeTo="Thank you too!" /></p>
      <p><ApiButton label="Load Data" /></p>
    </div>
  </div>
);
}

export default HomePage;
