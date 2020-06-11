import React,{Component, Fragment} from 'react';

class CreateContent extends Component {
    render(){
      return (
        <Fragment key="Content">
          <article>
            <h1>"CREATE"</h1>
            <p>"create content"</p>
            <form action="/create" method="post" onSubmit = {function(e){
              e.preventDefault();
              //debugger;
              this.props.onSubmit(
                e.target.title.value,
                e.target.dsc.value
              );
              }.bind(this)}>
              
              <p><input type="text" placeholder="title" name="title"></input></p>
              
              <p><textarea type="text" placeholder="dscriton" name="dsc"></textarea></p>
              <p><input type="submit" value="만들기" name="btn-create" ></input></p>

            </form>
          </article>
        </Fragment>
      );
    }
  }

  export default CreateContent;