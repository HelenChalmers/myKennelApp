import React, { Component } from 'react'
import dog from "./DogIcon.png"
import './animals.css'


export default class AnimalList extends Component {
    render () {
        return (
            <section className="animals">
            {
                this.props.animals.map(animal =>
                    <div key={animal.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={dog} className="icon--dog" />
                                {animal.name}
                                <a href="#"
                                    onClick={() => this.props.deleteAnimal(animal.id)}
                                    className="card-link">Delete</a>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}





// export default class AnimalList extends Component {
//     render() {
//         return (
//             <div className="animals">
//                 <h3>Our Animals:</h3>
//                 {
//                     this.props.animals.map(animal =>
//                     <div id={`animal--${animal.id}`} key={animal.id}>
//                        <h4>{animal.name}</h4>
//                     </div>
//                     )
//                 }
//             </div>
//         )
//     }
// }


// export default class AnimalList extends Component {
//     render() {
        
            
                
//                     let animalsWithOwners = this.props.animals.map(animal =>

//                             let animalOwners = this.props.animalOwners.filter(ao =>{
//                                 return ao.animalID === animal.id
//                             })
//                             .map(ownerID => {
//                                 let owner = this.props.owners.find(owner =>{
//                                     return owner.id === ownerId.ownerId
//                                 })
//                                 return owner
//                             })
//                                 return {
//                                     id: animal.id,
//                                     owners: animalOwners,
//                                     name: animal.name
//                                 }

//                     // <div id={`animal--${animal.id}`} key={animal.id}>
//                     //    <h4>{animal.name}-{animal.type}</h4>
//                     // </div>
//     });
// }               
            
        
    
