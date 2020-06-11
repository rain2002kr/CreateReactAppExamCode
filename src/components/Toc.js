import React,{Component, Fragment} from 'react';
class Toc extends Component {
    render(){
        var lists = [];
        var toc = this.props.toc;
        var i = 0;
        while(i < toc.length){
            lists.push(
            <li key={toc[i].id}>
                <a href={toc[i].title}
                data-id={toc[i].id}
                onClick={function(e){
                  e.preventDefault();
                  this.props.onChangePage(
                    e.target.dataset.id,
                    );  
                }.bind(this)}
                >
                    {toc[i].title}
                </a></li>);
            i ++;
        }

      return (
        <Fragment key="Toc">
          <nav>
            <ul>
              {lists}
            </ul>
          </nav>
        </Fragment>
      );
    }
  }

  export default Toc;