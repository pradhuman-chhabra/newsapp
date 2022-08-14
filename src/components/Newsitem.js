import React, { Component } from 'react'

export class Newsitem extends Component {


  render() {
    let {title,description,imageUrl,newsUrl}=this.props;
    // js mein destructuring kari jaa rhi hai let use karke
    // this.props agr ek object hai toh uss object mein se yeh dono pull karke title aur description ki trah available kara diye jayenge
    return (
    <div className='my-3'>
        <div className="card" style={{width:"18rem"}}>
          {/* we added two curly braces as we want to make an object as well as write javascript inside it and as an object it must have a key value pair
          note - 18 rem is a value toh woh string mein jayegi
          */}
          <img src={imageUrl} className="card-img-top" alt="..."/>
          {/* i pasted this link from the sampleOutput.json file and in future we'll be passing this link as a prop called imageUrl*/}
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>{/* we put these ... as we limited the number of charachters in the descriptiona and the title */}
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
            {/* newsUrl is a javascript variable */}
            {/* here target="_blank" this will open the article in the new tab */}
            {/* btn-sm is a class which makes the button small */}
          </div>
        </div>
    </div>
    )
  }
}

export default Newsitem


/*
eg-my-3
The classes are named using the format {property}{sides}-{size} for xs and {property}{sides}-{breakpoint}-{size} for sm, md, lg, xl, and xxl.

Where property is one of:

m - for classes that set margin
p - for classes that set padding

Where sides is one of:

t - for classes that set margin-top or padding-top
b - for classes that set margin-bottom or padding-bottom
s - (start) for classes that set margin-left or padding-left in LTR, margin-right or padding-right in RTL
e - (end) for classes that set margin-right or padding-right in LTR, margin-left or padding-left in RTL
x - for classes that set both *-left and *-right
y - for classes that set both *-top and *-bottom
blank - for classes that set a margin or padding on all 4 sides of the element

Where size is one of:

0 - for classes that eliminate the margin or padding by setting it to 0
1 - (by default) for classes that set the margin or padding to $spacer * .25
2 - (by default) for classes that set the margin or padding to $spacer * .5
3 - (by default) for classes that set the margin or padding to $spacer
4 - (by default) for classes that set the margin or padding to $spacer * 1.5
5 - (by default) for classes that set the margin or padding to $spacer * 3
auto - for classes that set the margin to auto

*/