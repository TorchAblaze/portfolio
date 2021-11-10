import React from 'react';
import Winter from '../img/Winter.jpeg';
import Spring from '../img/Spring.jpeg';
import Summer from '../img/Summer.jpeg';
import Fall from '../img/Fall.jpeg';
import { HourglassSplit } from 'react-bootstrap-icons';
import Header from './Header';
import Animation from './Animation';
import Info from './Info';
import Footer from './Footer';
import '../index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      season: "",
    }
  }

  handleToggle() {
    if (this.state.season === Winter) {
      this.setState({
        season: Spring,
      })
    }
    if (this.state.season === Spring) {
      this.setState({
        season: Summer,
      })
    }
    if (this.state.season === Summer) {
      this.setState({
        season: Fall,
      })
    }
    if (this.state.season === Fall) {
      this.setState({
        season: Winter,
      })
    }
    return this.render();
  }

  componentDidMount() {
    let today = new Date();

    if (today.getMonth() === 11 || today.getMonth() === 0 || today.getMonth() === 1) {
      this.setState({
        season: Winter,
      });
    }
    if (today.getMonth() === 2 || today.getMonth() === 3 || today.getMonth() === 4) {
      this.setState({
        season: Spring,
      });
    }
    if (today.getMonth() === 5 || today.getMonth() === 6 || today.getMonth() === 7) {
      this.setState({
        season: Summer,
      })
    }
    if (today.getMonth() === 8 || today.getMonth() === 9 || today.getMonth() === 10) {
      this.setState({
        season: Fall,
      })
    }
  }

  render () {
    return (
      <div id="background" style={{
        backgroundImage: `url(${this.state.season})`,
      }} >
        <section>
          <button onClick={()=> this.handleToggle()}>
            <HourglassSplit width="15" height="15" color="orange"/>
          </button>
          <Animation season={this.state.season} />
          <Header/>
          <Info/>
          <Footer/>
        </section>
      </div>
    );
  }
}

export default App;
