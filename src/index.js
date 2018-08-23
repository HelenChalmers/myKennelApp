import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import Kennel from './components/Kennel';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
    <Router>
        <Kennel />
    </Router>
    , document.getElementById('root'));

registerServiceWorker();

// import ReactDOM from "react-dom"
// import React from 'react'
// import Kennel from "./components/Kennel"

// ReactDOM.render(<Kennel />, document.querySelector("#root"));


// import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// // import registerServiceWorker from './registerServiceWorker';
// // just like requires

// class Kennel extends Component {
//     render() {
//         return (
//             <div>
//                 <App />
//                 <h3>Student Kennels</h3>
//                 <h4>Nashville North Location</h4>
//                 <h5>500 Puppy Way</h5>
//                 <EmployeeList />
//             </div>
//         );
//     }
// }

// class EmployeeList extends Component {
//     render() {
//         return (
//             <article>
//                 <h1>Employee List</h1>
//                 <section>Jessica Younker</section>
//                 <section>Jordan Nelson</section>
//                 <section>Zoe LeBlanc</section>
//                 <section>Blaise Roberts</section>
//             </article>
//         );
//     }
// }


// //lets us target the DOM
// ReactDOM.render(<Kennel />, document.getElementById('root'));
// // registerServiceWorker();
