import React from 'react';


class DayOne extends React.Component {

  helloWorld(){
    let message:string = 'Hello world!'
    return message;
  }




    render (){
      const testMessage = this.helloWorld();
      return (
        <div>
            <p> {testMessage}</p>
        </div>
        );
      }
    }

export default DayOne 