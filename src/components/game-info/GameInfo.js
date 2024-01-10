import Friend from '../../assets/Saroj.png';
import './GameInfo.css'; // Import a separate CSS file for styling

const GameInfo = ({ status, winner, xIsNext }) => {
  return (
    <section className='game-information'>
      {xIsNext && !winner ? (
        <h3 className='player-x'>It's your turn, Saroj Dai!</h3>
      ) : !xIsNext && !winner ? (
        <h3 className='player-o'>Now it's your turn, Sujan!</h3>
      ) : winner && status === 'Winner: X' ? (
        <h3 className='player-x'>Congratulations! Saroj Dai wins!</h3>
      ) : (
        <h3 className='player-o'>Congratulations! Sujan wins!</h3>
      )}
      <img className='friends-image' src={Friend} alt='Player X and Player O' />
    </section>
  );
};

export default GameInfo;
