import React, { Component } from 'react';
import { Modal, Button } from "react-bootstrap";
import {connect} from 'react-redux'
import { Edit } from './actions/actionsmovies'

class EditComp extends Component {
    constructor(props){
        super(props)
        this.state={
            title : this.props.el.title ,
            image : this.props.el.image ,
            year : this.props.el.year,
            rating : this.props.el.rating,
            id : this.props.el.id,
            show : false
        }
    }

    handleShow = () => {
        this.setState({
            show: !this.state.show
        })
    }

    handleEdit = (e) => {
        this.setState({
            [e.target.name]: e.target.value

        })
        console.log(e.target.value)
    }
  updateMovie = () => {
    this.props.editMovie(this.state)
    this.setState({
        show: !this.state.show
    })
}
  
    render() { 
        return (
            <div>
                <Button variant="primary" onClick={this.handleShow}>
                    Edit
                 </Button>

                <Modal show={this.state.show} onHide={this.handleShow}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Movie</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <input onChange={this.handleEdit} value={this.state.title} type='text' name='title' placeholder='Your title' />
                            <input onChange={this.handleEdit} value={this.state.image} type='text' name='image' placeholder='Your image' />
                            <input onChange={this.handleEdit} value={this.state.year} type='text' name='year' placeholder='Your year' />
                            <input onChange={this.handleEdit} value={this.state.rating} type='text' name='rate' placeholder='Your rate' />

                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleShow}>
                            Close
                </Button>
                        <Button onClick={this.updateMovie} variant="primary">
                            Edit Movie
            </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        editMovie: editMovie => dispatch(Edit(editMovie))
    }
}
export default connect(null,mapDispatchToProps) (EditComp);