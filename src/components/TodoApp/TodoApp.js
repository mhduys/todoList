import React, { Component } from "react";
import "./TodoApp.css";
export default class TodoApp extends Component {
  state = {
    input: "",
    items: [],
    edit:'',
    show:false
  };
  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  deleteIttem = (key) => {
    this.setState({

      items:this.state.items.filter((data,index)=>index!==key)
    })
   
  }; 

  editIttem=(key)=>{
    this.setState({
      show:true,
      edit:this.state.items.filter((data,index)=>index===key),
      items:this.state.items.filter((data,index)=>index!==key)
    })
  }

  handleEdit=(e)=>{
    this.setState({
      edit:e.target.value
    })
  }
  updateItems=(e)=>{
    e.preventDefault()
    const {edit} =this.state
    this.setState({
      items:[...this.state.items,edit],
      edit:"",
      show:false
    })
  }
  
  

  storeItems = (event) => {
    event.preventDefault();
    const { input } = this.state;
    //items store to arry after press enter(submit)
    this.setState({
      //push to arry using spread operator
      items: [...this.state.items, input],
      input: "", //after enter sum inputs and store to arry remove input text
    });
  };
  render() {
    //destructurng
    const { input, items ,edit,show } = this.state;
    console.log(items);
    return (
      <div className="main">
        <div className="todo-container">
          <form className="input-section" onSubmit={this.storeItems}>
            <h1>TodoApp</h1>
            <div>

            
            <input
              value={input}
              onChange={this.handleChange}
              type="text"
              placeholder="text here..."
            />
            </div>
          </form>
          <ul>
            {items.map((data, index) => (
              
              <li key={index}>
                
                {data}
                
                <div className="icons">
                <i
                  class="fa-solid fa-trash-can"
                  onClick={() => this.deleteIttem(index)}
                ></i>

                <i
                  class="fa-solid fa-edit"
                  onClick={() => this.editIttem(index)}
                ></i>
                </div>
              </li>
            ))}


           {show  && <form className="input-section" onSubmit={this.updateItems}>
           
            <div>

            
            <input
              value={edit}
              onChange={this.handleEdit}
              type="text"
             
            />
            </div>
          </form>}



          </ul>
        </div>
      </div>
    );
  }
}
