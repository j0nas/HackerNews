import React, {Component} from "react";
import App from "./App/App";

class ReactContainer extends Component {
    constructor() {
        super();
        this.state = {
            stories: [],
        }
    }

    componentWillMount() {
        fetch("http://node-hnapi.herokuapp.com/news")
            .then(res => res.json())
            .then(res => this.setState({stories: res}, () => console.log(this.state)));
    }

    render() {
        return <App stories={this.state.stories} />;
    }
}

export default ReactContainer;