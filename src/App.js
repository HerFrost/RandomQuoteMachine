import React from 'react';
import './App.css';
import Taster from './komponente/Taster';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      citati: [],
      nasumicniCitat: null
    }
    this.indexCitata = this.indexCitata.bind(this);
  }

    componentDidMount() {
      fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
        .then(data => data.json())
        .then(citati => this.setState({citati})
    )}

    indexCitata() {
      const index = Math.floor(Math.random() * this.state.citati.length);
      const nasumicniCitat = this.state.citati[index];
      
      this.setState({
        nasumicniCitat
      });
    }


  render() {
    return (
      <div>
        <h1 id="naslov">Random Quote Machine</h1>
        <div className="container">
          <div className="ui card">
            <div className="content">
              <div className="header">
                {this.state.nasumicniCitat !== null && this.state.nasumicniCitat.quote}
              </div>
              <div className="description">
              {this.state.nasumicniCitat !== null && this.state.nasumicniCitat.author}
              </div>
              <br></br>
              <Taster tasterPrikaziIme="Sledeći citat" clickHandler={this.indexCitata} />
              </div>
            <div><h6>by her_frost</h6></div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
