import React,{Component, Fragment} from 'react';

class Control extends Component {
    render(){
      return (
        <Fragment key="Control">
          <ul>
            <li><a href="/create" onClick={function(e){
              e.preventDefault();
              this.props.onChangePage("create");
            }.bind(this)}>create</a></li>  
            <li><a href="/update" onClick={function(e){
              e.preventDefault();
              this.props.onChangePage("update");
            }.bind(this)}>update</a></li>           
          </ul>  
          <input type="button" value="delete" className="btn-delete" onClick={function(e){
              e.preventDefault();
              this.props.onChangePage("delete");
            }.bind(this)}></input>
        </Fragment>
      );
    }
  }

  export default Control;