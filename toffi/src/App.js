import React ,{Component} from 'react';
import Question from './components/Questions'
import './App.css';

class App extends Component{
  state = {
    questions:[
      {
        id:1,
        title:"Question one"
      },

      {
        id:2,
        title:"Question two"
      }
    ]
  }
  render() {
    console.log(this.state.questions)
    return ( 
      <div className="App">
        <Question/>
      </div>
    );
  }
}  
  


export default App;
