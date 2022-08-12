import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,description}=this.props;
    // js mein destructuring kari jaa rhi hai let use karke
    // this.props agr ek object hai toh uss object mein se yeh dono pull karke title aur description ki trah available kara diye jayenge
    return (
    <div>
        <div className="card" style={{width:"18rem"}}>
          {/* we added two curly braces as we want to make an object as well as write javascript inside it and as an object it must have a key value pair
          note - 18 rem is a value toh woh string mein jayegi
          */}
          <img src="https://cdn.24.co.za/files/Cms/General/d/3838/3ac30fc31c02461eadc9e667009a5ca8.jpg" className="card-img-top" alt="..."/>
          {/* i pasted this link from the sampleOutput.json file and in future we'll be passing this link as a prop */}
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/newsitem" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
    </div>
    )
  }
}

export default Newsitem