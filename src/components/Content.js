import React,{Component, Fragment} from 'react';

class Content extends Component {
    render(){
      return (
        <Fragment key="Content">
          <article>
            <h1>{this.props.title}</h1>
            <p>{this.props.sub}</p>
          </article>
        </Fragment>
      );
    }
  }

  export default Content;