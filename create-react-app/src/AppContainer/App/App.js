import React, {PureComponent} from "react";
import Story from "./Story/Story";

class App extends PureComponent {
    render() {
        return (
            <div className="App">
                {this.props.stories.map((story, index) =>
                    <Story story={story} key={index}/>)}
            </div>
        );
    }
}

export default App;
