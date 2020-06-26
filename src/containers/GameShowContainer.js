import { connect } from 'react-redux'
import GameShowComponent from '../components/GameShowComponent'


const mapStateToProps = (state) => ({
    game: state.games[state.app.selectedGame >= 0 ? state.app.selectedGame : state.games.length - 1 ],
  })
  

  export default connect(
    mapStateToProps,
  )(GameShowComponent)      