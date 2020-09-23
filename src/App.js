import React, { Component } from "react";
import Todos from "./Components/Todos";
import Header from "./Components/layout/Header";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import About from "./Components/pages/About";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

class App extends Component {
  state = {
    todos: [
      // {
      //   id: uuidv4(),
      //   title: "Do stand up meeting with Kaha team",
      //   completed: false,
      // },
      // {
      //   id: uuidv4(),
      //   title: "Start fixing bugs in production (:",
      //   completed: false,
      // },
      // {
      //   id: uuidv4(),
      //   title: "Dinner with wife",
      //   completed: false,
      // },
    ],
  };

  //Fetch todo list from an API
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/?_limit=10")
      .then((res) => {
        this.setState({ todos: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todName) => {
        if (todName.id === id) {
          todName.completed = !todName.completed;
        }
        return todName;
      }),
    });
  };
  deleteToDo = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        });
      });
  };
  addTodo = (title) => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts/", {
        title,
        id: uuidv4(),
        completed: false,
      })
      .then((res) => this.setState({ todos: [...this.state.todos, res.data] }))
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              path="/"
              exact
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    deleteToDo={this.deleteToDo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
