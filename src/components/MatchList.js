import Match from './Match';
 import React from 'react';
//  import matchData from '../data/matchData';
 
 export default function MatchList(props) {
   const oneMatch = props[0];
   return (
     <section className="PlayerList MatchList">
       <h1>Match List</h1>
       <Match players={oneMatch.players} winner={oneMatch.winner} scoreDifference={oneMatch.scoreDifference}/>
     </section>
   )
 }
 