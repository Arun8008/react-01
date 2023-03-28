import React, { Component } from 'react'

export class Jell extends Component {
  render() {
    var ret=this.state.mobiles
    return (
      <div>{ret.map((value,index)=>{
        return <div>
        <h2>{value.name}</h2>
        <h3>{value.price}</h3>
        <h4>{value.isPurchased}</h4>
        <button onClick={()=> this.example()}> Low-high</button><br></br><br></br>
        <button onClick={()=> this.examplehl()}> high-low</button><br></br><br></br>
        <button onClick={()=> this.nameas()}>A-Z</button><br></br><br></br>
        <button onClick={()=> this.nameds()}>Z-A</button><br></br><br></br>
        </div>
      })}
      </div>
    )
  }
}

export default Jell


