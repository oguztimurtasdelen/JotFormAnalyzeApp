import React, { Component } from 'react';
import jotform1 from '../images/quantumlogo.png';
import Background from '../images/back2.jpg';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
 

const sectionStyle = {
    height: '821px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    backgroundImage: "url(" +  Background + ")"
  };  

  const AccordionStyle={
      backgroundColor:'#DCDCDC',
  }

class Main_home extends Component {
    render() {
        const {startApp}= this.props;
        return (
            
            <div>

                <section style={ sectionStyle }>
                    <a href="https://www.jotform.com">    
	                    <img src={jotform1} alt="jotform"/>
                    </a>

                    <Accordion defaultActiveKey="0" style={{textAlign:'center', width:'50%',
                    marginLeft:'25%',fontFamily:'Oswald',border:'1px solid',fontSize:'18px'}}>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0"  style={{cursor:'pointer'}}>
                                How To Use Jotform Quantum ?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0" style={AccordionStyle}>
                                <Card.Body>Welcome to our <b> Quantum </b> ! We are here to help you. 
                                From now on, you can change your form to quiz form thanks to the this app. 
                                For that, you should become a member to jotform and use the Quiz App.
                                 When you use the Quiz App, after loginning the jotform, you should choose the any form and then
                                  we will convert to ypur form to quiz form. Moreover, you can add the correct answer of your question and see the results as s graph.</Card.Body>
                                    </Accordion.Collapse>
                        </Card>
                        
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1" style={{cursor:'pointer'}}>
                                What Is The Make Quiz ? 
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1" style={AccordionStyle}>
                                <Card.Body>
                                    {/* <img src={Background} alt="correct" style={{height:'35%', width:'35%',borderRadius:'40px'}}/>
                                    <img src={Background} alt="correct" style={{height:'35%', width:'35%',borderRadius:'40px'}}/><hr/> */}
                                    When you prepare the quiz form, you should give answers' to the questions. 
                                    If you want to do that, first of all you should click the <b>'What Is The Make Quiz ? '</b>
                                    that button and then choose the form and then add the correct answers of your questions.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="2" style={{cursor:'pointer'}} >
                                What Is The Show Analyze ?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="2" style={AccordionStyle}>
                                <Card.Body>
                                    {/* <img src={Background} alt="graph"  style={{height:'35%', width:'35%',borderRadius:'40px'}}/>
                                    <img src={Background} alt="graph" style={{height:'35%', width:'35%',borderRadius:'40px'}}/><hr/> */}
                                    If you want to see the quiz form results as a chartform, first of all you should click the <b>' What Is The Show Analyze ? '</b>
                                    that button and then choose the form and then you will see result of quiz as a chart.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>

             
                    <button className="btn" onClick={startApp}> Open Quiz Form</button> 
              
                    <footer className="footer" id="footer">
                        <div className="tm">
                            <span>Powered by</span>
                            <span><a href="https://www.jotform.com">JotForm</a></span>
                            <span className="app-g"><a href="https://apps.jotform.com">JotForm Apps</a></span>
                        </div>
                    </footer> 
    
                    <form action="analyze.php" style={{ display: 'none' }} id="getForm" method="post">
		                <input type="text" name="postAPI"/>
		                <input type="text" name="postFormID"/>
		                <input type="submit"/>
	                </form>

                </section>             
            </div>
        )
    }
}

export default Main_home
