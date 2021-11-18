import React, { useState } from "react";
import ResourceList from "./ResourceList";

// class Apps extends React.Component {
//   state = {
//     resourceName: "posts",
//   };

//   render() {
//     return (
//       <>
//         <button onClick={() => this.setState({ resourceName: "posts" })}>
//           Posts
//         </button>
//         <button onClick={() => this.setState({ resourceName: "todos" })}>
//           Todos
//         </button>
//         <ResourceList resourceName={this.state.resourceName} />
//       </>
//     );
//   }
// }

const App=()=>{
    const [ressourceName,setResourceName]=useState('posts');


    return (
      <>
        <button onClick={() => setResourceName('posts')}>
          Posts
        </button>
        <button onClick={() => setResourceName ('todos')}>
          Todos
        </button>
        <ResourceList resourceName={ressourceName} />
      </>
    );
}

export default App;
