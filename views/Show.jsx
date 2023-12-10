const React = require('react')
class Show extends React.Component {
  render () {
   const b = this.props.bottle;
    return (
      <div>
      <h1>{ b + ' Bottles of beer on the wall.' }</h1>
      <nav>
        { b>0 ? <a href={`/${b-1}`}> take one down, pass it around</a> : <a href={`/`}> Star Over Please....</a>}
        {/* <a href={`/${b - 1}`}>take one down, pass it around</a> */}
      </nav>
      </div>
      );
     }
   }
  module.exports  = Show;