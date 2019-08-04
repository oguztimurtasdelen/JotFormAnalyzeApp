import React, { Component } from 'react';
import Background from '../images/gray.jpg';
import jotform1 from '../images/quantumlogo.png';


const sectionStyle = {
    height: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    backgroundImage: "url(" +  Background + ")"
  };  

class Question extends Component {


    _questions(){
        const { chartData } = this.props;

        if (chartData) {
            const charts = Object.keys(chartData).map((questionID) => {
                var q = chartData[questionID].question;
                           
                return <div>
                    <div style={{textAlign:'center',fontFamily:'Open-sans', fontWeight:'bolder',marginTop:'5%'}}> 
                    
                   {q} </div>
                        <div style={{marginLeft:'45%'}}>   
                            <input type="text" placeholder='Answer'/>
                        </div>
                    </div>
            });

            return (
                <div>
                    {charts}
                    <div>
                    
                        <button className="btnn"> Save Answer </button>
                    </div> 
                </div>
            ) 
        } else {
            return (<div>WRONG !</div>)
        }
    }
   
    render() {

        return (
          <div>
              <section style={ sectionStyle }>
              <a href="https://www.jotform.com">    
	                    <img src={jotform1} alt="jotform"/>
                    </a>
                {this._questions()}
              </section>
          </div>
        );
      }
}


export default Question
