import React from 'react'
import { connect } from 'react-redux'
import { Add } from './actions/actionsmovies'
import { Delete } from './actions/actionsmovies'
import { Edit } from './actions/actionsmovies'
import { Link } from 'react-router-dom'
import EditComp from './EditComp'
import StarRatingComponent from 'react-star-rating-component';



class ListMovies extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      text: '',
      show: false,
      rating: 1
    }
  }



  handleShow = () => {
    this.setState({
      show: !this.state.show
    })
  }
  add = () => {
    let title = prompt('Enter your movie name')
    let rating = prompt('Enter your movie rating')
    let image = prompt('Enter your movie image')
    let year = prompt('Enter your movie year')
    this.props.newMovie({ image: image, title: title, year: year, rating: rating })
  }



  handleChange = (e) => {
    this.setState({
      text: e.target.value

    })
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }
  render() {
    return (
      <div>
        <input onChange={this.handleChange} type='text' placeholder='Search your movie..' />
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={this.state.rating}
          onStarClick={this.onStarClick.bind(this)}
        />
        <div className='lists'>
          {
            this.props.movies.filter(el => el.title.toLowerCase().includes(this.state.text.toLowerCase().trim()) && el.rating >= this.state.rating).map(el => <div className='movies'>
              <img src={el.image} height='400px' />
              <h2>{el.title}</h2>
              <h5>{el.year}</h5>

              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={el.rating}

              />
              <Link to={`/Description/${el.id}`}>
                <button>Descriptions</button>
              </Link>
              <EditComp el={el} />
              <button onClick={() => this.props.deleteMovie(el.id)}>Delete</button>
            </div>)
          }
        </div>
        <button onClick={this.add}>+</button>

      </div>
    )
  }

}


const mapStateToProps = (state) => {
  return {
    movies: state.rootReducer
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    newMovie: newMovie => dispatch(Add(newMovie)),
    deleteMovie: id => dispatch(Delete(id)),
    editMovie: editMovie => dispatch(Edit(editMovie))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListMovies);