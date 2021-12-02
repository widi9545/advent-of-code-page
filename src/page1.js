import React from 'react';


class DayOne extends React.Component {

  read_file = () =>{
    var preview = document.getElementById('show-text');
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();
    
    reader.onload = function (event) {

    preview.innerHTML = event.target.result;
    }
    reader.readAsText(file);
  }



    render (){
      return (
        <div>
            <input type="file" onChange={this.read_file}/>
            <div id="show-text"> choose text file</div>
        </div>
        );
      }
    }


export default DayOne 