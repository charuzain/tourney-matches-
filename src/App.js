import './App.css';
import PlayerList from './components/PlayerList';
import MatchList from './components/MatchList';
import playerData from './data/playerData';
import matchData from './data/matchData';
import { preparePlayerData, addWinsToPlayers } from './helpers/playerHelpers';


function App(props) {
  const preparedPlayerData = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(preparedPlayerData, matchData);
  // const onePlayer = parsedPlayerData[0];

  return (
    <div className="App">
      <h1>
        Tourney Matches <span>Where Coding and Tournaments found their Match!</span>
      </h1>
      <PlayerList {...parsedPlayerData} />
      <MatchList {...matchData}/>
    </div>
  );
}

export default App;
