import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HelloMessage } from "./ui/HelloMessage";
ReactDOM.render(React.createElement(HelloMessage, { label: "meme",
    count: 0 }), document.getElementById('root'));
console.log("holla from typescript!");
