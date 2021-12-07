// import matchData from '../data/matchData';
// import playerData from '../data/playerData';
import React from 'react';
import Player from './Player';
// import { preparePlayerData, addWinsToPlayers } from '../helpers/playerHelpers';

export default function PlayerList(props) {
  const onePlayer = props[0];
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      <Player gamerTag={onePlayer.gamerTag} firstName={onePlayer.firstName} lastName={onePlayer.lastName} wins={onePlayer.wins}/>
    </section>
  )
}
