import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Descriptions extends Component {
    constructor(props){
        super(props)
        this.state ={
            
        }
    }
    componentDidMount = () => {
        let movie = this.props.movies.filter(el => this.props.match.params.id == el.id )[0]
        this.setState(
            movie 
        )
    }
    render() {
        
        return (
            <div>
                <img src ={this.state.image} height='400px'/>
                        <h2>{this.state.title}</h2>
                        <h5>{this.state.descriptions}</h5>
                        <Link to='/'>
                        <button>Home</button>
                        </Link>
            </div>
        );
    }
}





const mapStateToProps = state => {
    return {
        movies : state.rootReducer
    }
}

export default connect(mapStateToProps,null)(Descriptions);
