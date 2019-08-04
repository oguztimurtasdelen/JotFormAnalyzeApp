import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';

class Modall extends Component {
    render() {
        const {chooseMode} = this.props;

        return (
          
        <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            style={{fontFamily: 'Oswald'}}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" style={{fontFamily: 'Oswald',}}>
                    Jotform Quantum
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Please Choose What You Want To Do</h4>
                <p>
                    If you want to add correct answers to the question, please click <b> ' Make Quiz '</b> 
                    or see the all answers of your quiz, please click <b> ' Show Analyze '</b> 
                </p>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn_modal_correct" onClick={() => chooseMode(true)}style={{fontFamily: 'Oswald',border:'1px solid black'}} >Make Quiz</button>
                <button className="btn_modal_graph" onClick={() => chooseMode(false)} style={{fontFamily: 'Oswald',border:'1px solid black'}} >Show Analyze</button>
            </Modal.Footer>
      </Modal>
    
       
        )
    }
}

export default Modall
