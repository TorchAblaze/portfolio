import React from 'react';
import Winter from '../img/Winter.jpeg';
import Spring from '../img/Spring.jpeg';
import Summer from '../img/Summer.jpeg';
import Fall from '../img/Fall.jpeg';
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
        // height: "1000px",
        // height: "100%"
      }} >
        <section>
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
