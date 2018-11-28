import React, {Component} from 'react';

export default class ToDoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myText: '-0-'
    }
  }
  getData() {
    fetch(`http://127.0.0.1:3031/data`, {
      method: 'GET'
    }).then(res => res.text()).then( //.text()方法将结果装华为字符串类型
      data => {
        this.setState({
          myText: JSON.parse(data)
        })
      }
    )
  }
  componentWillMount() {
    this.getData();
  }
  render() {
    return (
      <div>
        <div>To Do App Now</div>
        <span>goods : </span><span>{this.state.myText.name}</span><br />
        <span>price : </span><span>{this.state.myText.price}</span><br />
        <span>date : </span><span>{this.state.myText.date}</span><br />
      </div>
    );
  }
}