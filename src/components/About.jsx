import React from 'react';

function About(props) {
  const match = props.match;
  const history = props.history;
  console.log(match);
  console.log(match.params.id,"idは？");
  return (
    <div>
      <h1 onClick={()=>{history.goBack();}}>Aboutです</h1>
    </div>
  );
}

export default About;