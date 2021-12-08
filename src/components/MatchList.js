 import React from 'react';
//  import matchData from '../data/matchData';
 import Match from './Match';

 export default function MatchList(props) {
    const matchData = props.matchData;
    const parsedMatches = matchData.map(match=><Match key={match.matchNumber} {...match}/>)


  const oneMatch = matchData[0]
  console.log(oneMatch)

   return (
     <section className="PlayerList MatchList">
       <h1>Match List</h1>
       {parsedMatches}
       {/* <Match players={oneMatch.players} winner={oneMatch.winner} scoreDifference={oneMatch.scoreDifference}/> */}
     </section>
   )
 }
 