import React from 'react';
import Winter from '../img/Winter.jpeg';
import Spring from '../img/Spring.jpeg';
import Summer from '../img/Summer.jpeg';
import Fall from '../img/Fall.jpeg';
import { HourglassSplit } from 'react-bootstrap-icons';
import Header from './Header';
import Animation from './Animation';
import Skills from './Skills';
import Projects from './Projects';
import About from './About';
import Footer from './Footer';
import '../index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      season: "",
      classColor: "",
    }
  }

  handleToggle() {
    if (this.state.season === Winter) {
      this.setState({
        season: Spring,
        classColor: "palegreen",
      })
    }
    if (this.state.season === Spring) {
      this.setState({
        season: Summer,
        classColor: "orange",
      })
    }
    if (this.state.season === Summer) {
      this.setState({
        season: Fall,
        classColor: "red",
      })
    }
    if (this.state.season === Fall) {
      this.setState({
        season: Winter,
        classColor: "white",
      })
    }
    return this.render();
  }

  componentDidMount() {
    let today = new Date();

    if (today.getMonth() === 11 || today.getMonth() === 0 || today.getMonth() === 1) {
      this.setState({
        season: Winter,
        classColor: "white",
      });
    }
    if (today.getMonth() === 2 || today.getMonth() === 3 || today.getMonth() === 4) {
      this.setState({
        season: Spring,
        classColor: "palegreen",
      });
    }
    if (today.getMonth() === 5 || today.getMonth() === 6 || today.getMonth() === 7) {
      this.setState({
        season: Summer,
        classColor: "orange",
      })
    }
    if (today.getMonth() === 8 || today.getMonth() === 9 || today.getMonth() === 10) {
      this.setState({
        season: Fall,
        classColor: "red",
      })
    }
  }

  render () {
    const { season, classColor } = this.state;

    return (
      <div id="background" style={{
        backgroundImage: `url(${season})`,
      }} >
        <section className={classColor}>
          <button onClick={()=> this.handleToggle()} className={classColor} aria-label="Change seasonal theme">
            <HourglassSplit width="20" height="20" color={classColor} />
          </button>
          <Animation season={season} />
          <div className="container">
            <Header classColor={classColor} />
            <Skills/>
            <Projects/>
            <About/>
            <Footer/>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
