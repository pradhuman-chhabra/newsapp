import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {

// I made an array of the various news articles-
Articles=[
  {
      "source": {
          "id": "news24",
          "name": "News24"
      },
      "author": "Heinz Schenk",
      "title": "Foster defiant as All Blacks axe hangs over him: 'Losing to Boks isn't unusual'",
      "description": "Like a quintessentially dogged and composed opening batter in Test cricket, All Blacks mentor Ian Foster on Thursday serenely straight-batted questions about his current mental state and employment prospects.",
      "url": "https://www.news24.com/sport/Rugby/RugbyChampionship/foster-defiant-as-all-blacks-axe-hangs-over-him-losing-to-boks-isnt-unusual-20220811",
      "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/3838/3ac30fc31c02461eadc9e667009a5ca8.jpg",
      "publishedAt": "2022-08-11T16:43:59+00:00",
      "content": "<ul><li>All Blacks coach Ian Foster serenely batted back questions about his future in announcing his team for the Ellis Park Test.</li><li>Instead, he noted that a \"dropped\" first game against the B… [+3227 chars]"
  },
  {
      "source": {
          "id": "bbc-sport",
          "name": "BBC Sport"
      },
      "author": "BBC Sport",
      "title": "Shane Warne memorial - watch & follow updates",
      "description": "Watch live coverage and follow text updates and tributes from the state memorial for Australian cricket legend Shane Warne at the Melbourne Cricket Ground.",
      "url": "http://www.bbc.co.uk/sport/live/cricket/60916236",
      "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png",
      "publishedAt": "2022-03-30T08:22:26.498888Z",
      "content": "Former England bowler and BBC cricket presenter Isa Guha, who became a colleague of Warne's in the commentary box: \"It has been a strange few weeks - a lot of shock and then we did our own tribute at… [+396 chars]"
  },
  {
      "source": {
          "id": "espn-cric-info",
          "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  },
  {
      "source": {
          "id": "espn-cric-info",
          "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  }
]

  constructor(){
    super();
    // kabhie bhie constructor likhna ho toh yahan par super() likna padhta hai
    console.log("hello ia am a constructor from the news componenet");
    /*i made this object and these are the key value pairs
    we are setting the state using constructors here we can also set the state using props
    state aap tab banao jab aap chahte ho apne cheezon ko dynamically change karna bina page ko reload karey hue , agr nahi toh pass it as a props*/
    this.state = {
      articles: this.articles,
      loading: false
  }
  }

  render() {
    return (
      <div className='container my-8'>
      {/* classname = container likhte hi margin aa jayega
      aur my-3 likhte hi y mein 3 ka margin aa jayega */}
        <h1>News Monkey-Top headlines</h1>
        <div className="row">
        {/* type in div.row and get this <div className="row"></div> */}
        <div class="col-6 col-md-4">
          <Newsitem title="my title" description="my description" imageUrl="https://cdn.24.co.za/files/Cms/General/d/3838/3ac30fc31c02461eadc9e667009a5ca8.jpg" newsUrl="To Do"/>
        {/* you know what time is this?--passing prop time */}
        </div>
        <div class="col-6 col-md-4">
          <Newsitem title="my title" description="my description"/>
        </div>
        <div class="col-6 col-md-4">
          <Newsitem title="my title" description="my description"/>
        </div>
        </div>
      </div>
    )
  }
}

export default News

/*
React components has a built-in state object.
The state object is where you store property values that belongs to the component.
When the state object changes, the component re-renders.
Creating the state Object
The state object is initialized in the constructor:
eg.)class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {brand: "Ford"};
  }
  render() {
    return (
      <div>
        <h1>My Car</h1>
      </div>
    );
  }
}
*/
