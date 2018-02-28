// modules/About.js
import React from 'react';

export default class About extends React.Component{
  render() {
    var imgstyle= {
          width: '370px',
          height: '480px'
};
    return (
        <div>
          <div>
            <h2>PALAK BHOJANI</h2>
              <p>20964 GOOSE PRESERVE DR · ASHBURN, VA 20148 · (703) 949-1172 · PALKABHOJANI@GMAIL.COM</p>
              <br/>
            <p>I am Full Stack Developer with around 5 years of professional experience in design and development of Web Applications. I am enthusiastic about learning new technologies and keeping up with them. I prefer working in a fast paced environment designing and developing applications. Always up for problem solving and challenges. Currently, I am hoping to transition into a Front-End Development position with a product-based company.</p>
            </div>
        </div>
    );
  }
}