import React, { Component } from 'react';
import Background from '../images/gray.jpg';
import jotform1 from '../images/quantumlogo.png';


const sectionStyle = {
    // height: '100%',
    // backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    // position: 'relative',
    // backgroundImage: "url(" +  Background + ")"
  };  

class PostList extends Component {


    _questions(){
        const { chartData, graph } = this.props;

        if (chartData) {
            const charts = Object.keys(chartData).map((questionID, index) => {
                var q = chartData[questionID].question;
                const graphD =  graph[index];            
                return <div>
                    <div style={{textAlign:'center',fontFamily:'Open-sans', fontWeight:'bolder'}}> 
                    
                   {q} </div>{graphD}<hr style={{clear: 'both'}}/>

                    </div>
            });

            return (
                <div>
                    {charts}
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


export default PostList
