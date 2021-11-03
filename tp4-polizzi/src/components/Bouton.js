import React from 'react';



class Bouton extends React.Component 
{


    constructor(props)
    {
      super(props);
      this.state = {}
    }
  
    render()
    {
      return (
        <div className="App">
 
             <p className="Title">Accedez aux profils de vos amis : </p>

            <div className="buttons-parent">
             <button className="bouton" onClick={this.props.fonction1}>  Hugo  </button>
             <button className="bouton" onClick={this.props.fonction3}>  Antoine  </button>
              <button className="bouton" onClick={this.props.fonction2}>  Emma  </button>
              
            </div>
        </div>
      );
    }


}
export default Bouton;