
import React from 'react';
import Profile from './components/Profile';
import Bouton from './components/Bouton';
import './App.css';




  class App extends React.Component 
  {
    constructor(props)
    {
      super(props);
      this.state = { 
        Hugo : true,
        Emma : false,
        Antoine : false,
        photoProfil : 1,
      }
    }
  
  
    goToEmma=()=>
    {
      this.setState({
        Hugo : false,
        Emma : true,
        Antoine : false,
        photoProfil : 2,
      });
    }

    goToAntoine=()=>
    {
      this.setState({
        Hugo : false,
        Emma : false,
        Antoine : true,
        photoProfil : 3,
      });
    }

    goToHugo=()=>
    {
      this.setState({
        Hugo : true,
        Emma : false,
        Antoine : false,
        photoProfil : 1,
      });
    }
    
    render()
    {
      return (
        <div className="App">

            <header className="App-header"><Bouton fonction1={this.goToHugo} fonction2={this.goToEmma} fonction3={this.goToAntoine}></Bouton></header>

            

            {this.state.Hugo && (
              <Profile name="Hugo" biographie="Entrepreneur - Parisien - Toujours là pour un verre" nbAbos="460" nbAbon="470" nbPost="8" img={this.state.photoProfil}></Profile>
            )}
            {this.state.Emma && (
              <Profile name="Emma" biographie="Netflix n Chill + un sushi vin blanc et je suis au paradis" nbAbos="997" nbAbon="185" nbPost="28" img={this.state.photoProfil}></Profile>
            )}
            {this.state.Antoine && (
              <Profile name="Antoine" biographie="Photographe , Yamakasi , #UndergroundWorldIsBetter" nbAbos="278" nbAbon="267" nbPost="19" img={this.state.photoProfil}></Profile>
            )}
            
        </div>
      );
    }
  }
  
  export default App;



/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      
      
       
      </header>
    </div>
  );
}
export default App;*/
