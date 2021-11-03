import React from 'react';




class Profile extends React.Component 
{


    constructor(props)
    {
      super(props);
      this.state = {}
    }
  
    render()
    {

        if(this.props.img===1){

            return (
        
                <div class='container' id='container'>
            <div class="card-wrapper">
                <div class="main-window" id="main-window">
                    <div class="user-image" background-image={this.props.img} >
                         <div class="username">{this.props.name}</div>
                    </div>
                    <div class="user-info">
                        <div class="quote">"{this.props.biographie}"</div><br></br>
                    </div>              
                    <div class="social-info">
                        <div class="social-info-elm">Abonnés<br></br><span class="lg">{this.props.nbAbos}</span></div>
                        <div class="social-info-elm">Abonnements<br></br><span class="lg">{this.props.nbAbon}</span></div>
                        <div class="social-info-elm">Posts<br></br><span class="lg">{this.props.nbPost}</span></div>
                    </div>
                </div>
            </div>
       </div>
        
                );

        }


        if(this.props.img===2){

            return (
        
                <div class='container' id='container'>
            <div class="card-wrapper">
                <div class="main-window" id="main-window">
                    <div class="user-image2" background-image={this.props.img} >
                         <div class="username">{this.props.name}</div>
                    </div>
                    <div class="user-info">
                        <div class="quote">"{this.props.biographie}"</div><br></br>
                    </div>              
                    <div class="social-info">
                        <div class="social-info-elm">Abonnés<br></br><span class="lg">{this.props.nbAbos}</span></div>
                        <div class="social-info-elm">Abonnements<br></br><span class="lg">{this.props.nbAbon}</span></div>
                        <div class="social-info-elm">Posts<br></br><span class="lg">{this.props.nbPost}</span></div>
                    </div>
                </div>
            </div>
       </div>
        
                );

        }

        if(this.props.img===3){

            return (
        
                <div class='container' id='container'>
            <div class="card-wrapper">
                <div class="main-window" id="main-window">
                    <div class="user-image3" background-image={this.props.img} >
                         <div class="username">{this.props.name}</div>
                    </div>
                    <div class="user-info">
                        <div class="quote">"{this.props.biographie}"</div><br></br>
                    </div>              
                    <div class="social-info">
                        <div class="social-info-elm">Abonnés<br></br><span class="lg">{this.props.nbAbos}</span></div>
                        <div class="social-info-elm">Abonnements<br></br><span class="lg">{this.props.nbAbon}</span></div>
                        <div class="social-info-elm">Posts<br></br><span class="lg">{this.props.nbPost}</span></div>
                    </div>
                </div>
            </div>
       </div>
        
                );

        }

    }

}
export default Profile;

/* 

<div class='container' id='container'>
            <div class="card-wrapper">
                <div class="main-window" id="main-window">
                    <div class="user-image" background-image={this.props.img} >
                         <div class="username">{this.props.name}</div>
                    </div>
                    <div class="user-info">
                        <div class="quote">"{this.props.biographie}"</div><br></br>
                    </div>              
                    <div class="social-info">
                        <div class="social-info-elm">Abonnés<br></br><span class="lg">{this.props.nbAbos}</span></div>
                        <div class="social-info-elm">Abonnements<br></br><span class="lg">{this.props.nbAbon}</span></div>
                        <div class="social-info-elm">Posts<br></br><span class="lg">{this.props.nbPost}</span></div>
                    </div>
                </div>
            </div>
       </div>

*/