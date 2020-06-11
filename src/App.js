import React,{Component, Fragment} from 'react';
import './App.css';
import Subject from'./components/Subject';
import Toc from'./components/Toc';
import ReadContent from'./components/ReadContent';
import CreateContent from'./components/CreateContent';
import Control from'./components/Control';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode : 'read',
      SeletedMode : 1,
      Subject:{id:'0',title:'WEB', sub:'World Wide Web!'},
      Toc:[
        {id:'1',title:'HTML'},
        {id:'2',title :"CSS"}, 
        {id:'3',title:"JavaScript"}],
      Content:[
        {id:'0',title:'CreateReactApp project',dsc:'Welcome React World!'},
        {id:'1',title:'HTML',dsc:'HTML is HyperText Markup Language.'},
        {id:'2',title :'CSS',dsc:'CSS is for designer.'},
        {id:'3',title:'JavaScript',dsc:'JavaScriptisawesomeLanguage.'}    
        ]}
  }
render(){
  var index = Number(this.state.SeletedMode);
  var _title = this.state.Content[index].title;;
  var _dsc = this.state.Content[index].dsc;
  var mode = this.state.mode;
  var article = <ReadContent title = {_title} sub = {_dsc}></ReadContent>

  if(mode === "create"){
    article = <CreateContent onSubmit={function(title, dsc){
      console.log(title, dsc);
    }.bind(this)}></CreateContent>
  }else if(mode === "update"){
    article = <ReadContent title = {_title} sub = {_dsc}></ReadContent>
  }else {
    article = <ReadContent title = {_title} sub = {_dsc}></ReadContent>
  }


    return (
      <Fragment key="App">
        <Subject id={this.state.Subject.id} title={this.state.Subject.title} sub={this.state.Subject.sub} 
          onChangePage={function(id) {this.setState({SeletedMode:id})}.bind(this)}></Subject>

        <Toc toc = {this.state.Toc} onChangePage={function(id){this.setState({
            SeletedMode: Number(id)})}.bind(this)}></Toc>
        
        <Control onChangePage ={function(_mode){
          this.setState({
            mode : _mode
          });
        }.bind(this)}></Control>

        {article}

      </Fragment>
    );
  }
}

export default App;
