
import React, {Component} from 'react'
import axios from 'axios';
import Header from './components/Header'
import Champions from './components/Champions'
import TeamRoster from './components/TeamRoster'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
     champions: []
    }
    this.selectChampion = this.selectChampion.bind(this);
  }
  componentDidMount() {
axios.get('api/select-champ')
    .then(e => {
      this.setState({champions: e.data})
    })
    .catch(error => console.log(error))
  }
  selectChampion(champion){
    axios.post('api/select-champ', {champion: champion})
    .then (e => {
      this.setState({champions: e.data})
    })
    .catch(error => console.log(error))
  }

  editName = (id, name) => {
    let body = {name};

    axios.put(`/api/select-champ/${id}`, body)
      .then(e => {
        this.setState({ champions: e.data })
      })
      .catch(error => console.log(error))
  }

  deleteChampion = (id) => {
    axios.delete(`/api/select-champ/${id}`)
    .then(e => {
      this.setState({champions: e.data})
    })
    .catch(error => console.log(error))
  }

      render(){
        return (
          <div className="App">
            <Header />
            <Champions
              champions={this.state.champions}
              lockinFn={this.selectChampion} />
            <TeamRoster
             champions={this.state.champions}
             nameFn={this.editName}
             deleteFn={this.deleteChampion} />
            </div>
        )
      }
    }
export default App;
