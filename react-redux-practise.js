 //! 1.Getting Started with React Redux
 class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: [],
    }
  }
  render() {
    return <div />
  }
};

//! 2. Manage State Locally First
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange =this.handleChange.bind(this);
    this.submitMessage =this.submitMessage.bind(this)
  }
  // Add handleChange() and submitMessage() methods here
  handleChange(e){
  this.setState({input: e.target.value
  })
  }
   submitMessage(){
     
    this.setState({messages:[...this.state.messages,this.state.input]})

    this.setState({input: ''})
  };

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
  <input onChange={this.handleChange} value={this.state.input}/>
  <button onClick={this.submitMessage}> Button</button>
  <ul>
  {this.state.messages.map(item => <li>{item}</li>)}
  </ul>
      </div>
    );
  }
};

//! 3.Extract State Logic to Redux
const ADD = 'ADD';

const addMessage = (message) =>  ({
    type: ADD,
    message
  })

const messageReducer = (state=[], action) => {
  switch(action.type){
    case ADD:
      return [...state, action.message]
    default:
      return state;
  }
}

const store = Redux.createStore(messageReducer)

//! 4. Use Provider to Connect Redux to React
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};



const store = Redux.createStore(messageReducer);


class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {  
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <DisplayMessages />
      </Provider>
    )
  }
  
};