import React from "react";
import ResourceList from './ResourceList';

class App extends React.Component{
    state={
        resourceName:'posts'
    }

    render(){
        return (
            <>
            <button onClick={()=>this.setState({resourceName:'posts'})}>Posts</button>
            <button onClick={()=>this.setState({resourceName:'todos'})}>Todos</button>
            <ResourceList resourceName={this.state.resourceName}/>
            </>
        )
    }
}

export default App;