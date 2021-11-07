import React from 'react';
import Winter from '../img/Winter.jpeg';
import Spring from '../img/Spring.jpeg';
import Summer from '../img/Summer.jpeg';
import Fall from '../img/Fall.jpeg';

class BackgroundImage extends React.Component {
  render() {
    const { season } = this.props;

    if (season === Winter) {
      return (
        <div className="set">
          <div>❄️</div>
          <div>❄️</div>
          <div>❄️</div>
          <div>❄️</div>
          <div>❄️</div>
          <div>❄️</div>
          <div>❄️</div>
          <div>❄️</div>
        </div>
      )
    } else if (season === Spring) {
      return (
        <div className="rain">
          <div>💧</div>
          <div>💧</div>
          <div>💧</div>
          <div>💧</div>
          <div>💧</div>
          <div>💧</div>
          <div>💧</div>
          <div>💧</div>
        </div>
      )
    } else if (season === Summer) {
      return (
        <div className="set">
          <div>🌸</div>
          <div>🌼</div>
          <div>🌼</div>
          <div>🌸</div>
          <div>🌼</div>
          <div>🌼</div>
          <div>🌸</div>
          <div>🌸</div>
        </div>
      )
    } else if (season === Fall) {
      return (
        <div className="set">
          <div>🍁</div>
          <div>🍂</div>
          <div>🍂</div>
          <div>🍁</div>
          <div>🍂</div>
          <div>🍂</div>
          <div>🍁</div>
          <div>🍁</div>
        </div>
      )
    } else {
      return (
        <p>Error</p>
      )
    }
  }
}

export default BackgroundImage;