import React from 'react';


class DayOne extends React.Component {

  read_file = () =>{
    let preview = document.getElementById('show-text');
    let file = document.querySelector('input[type=file]').files[0];
    let reader = new FileReader();
    
    reader.onload = function (event) {

    preview.innerHTML = event.target.result;
    }
    reader.readAsText(file);

    document.getElementById('input-file-button').style.display = 'none';
    document.getElementById('calculate-results-button').style.display = 'flex';

  }

  calculate_from_file = () => {
    // we have '\n' as a break character, so we can just split it 
    let inputText = document.getElementById('show-text');
    let innerInputText = inputText.innerHTML.split("\n")
    var higher_than_count = 1;
    innerInputText.forEach((x, i) => {
      console.log(innerInputText[i-1])
      if( innerInputText[i-1] != "undefined"){
      if(x > innerInputText[i-1]){
       higher_than_count = higher_than_count+1;
      }
    }
    
    
    });

    document.getElementById("answer-div").innerHTML = higher_than_count
 

  }


    render (){
      return (
        <>
        <div>
            <input type="file" id='input-file-button' className="Input-File-Button" onChange={this.read_file}/>   
            <div id="show-text" className="Input-File"> choose text file</div>
            <br>
            </br>
            <div>
            <button type="button" id='calculate-results-button' className='Calculate-Button' onClick={this.calculate_from_file}> Calculate Results!</button>
            </div>
            <br>
            </br>
            <div>
              <div id="answer-div"> </div>
            </div>

        </div>
        </>
        );
      }
    }


export default DayOne 