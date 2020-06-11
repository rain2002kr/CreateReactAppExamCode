import React,{Component, Fragment} from 'react';

class Subject extends Component {
    render(){
        return (
          <Fragment key="Subject">
          <header>
            <h1><a 
            href="/" 
            //id = {this.props.id}
            onClick={function(id,e) {
              e.preventDefault();
              this.props.onChangePage(id);
            }.bind(this,this.props.id)}>
              {this.props.title}</a></h1>
            {this.props.sub}
          </header> 
          </Fragment>
        );
      }
    }

export default Subject;