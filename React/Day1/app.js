const element = React.createElement('h1',{},"Hello Coder Soumen")


//ReactDOM is now Deprecated in React 18 
//ReactDOM.render(element,document.getElementById('root'));
//new method is ReactDOM.createRoot


const ReactRoot= ReactDOM.createRoot(document.getElementById('root'))
ReactRoot.render(element)