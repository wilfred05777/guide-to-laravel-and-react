import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('hello-react');
const root = createRoot(container);


export default function HelloReact(){
    return(
        <h2>Hello React!</h2>
    );
}
if(document.getElementById('hello-react')){
    root.render(<HelloReact/>);

}


// if(document.getElementById('hello-react')){
//     ReactDOM.render(<HelloReact/>, document.getElementById('hello-react'));
// }



