import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import axios from 'axios'
import Albums from './Albums'
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      albums:[]
    };
  }
  componentDidMount(){
    axios.get("https://rallycoding.herokuapp.com/api/music_albums").then(response=>{
      this.setState({
        albums:response.data
      })
    }).catch(error=>{
      console.log(error)
    })
  }
  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <div className="album-container">
       {this.state.albums.length>0&&<Albums albums={this.state.albums}/>}
       </div>       
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
