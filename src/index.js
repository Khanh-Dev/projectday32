import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

const Numbers = ({numbers}) => {
  //modifying array to array of li JSX
  const list = numbers.map((number) => <span style={{backgroundColor: number}} className='child'>{number}</span>)
  return list
}

//App component
const App = () => {
  const numbers = ['#4e417e', '#02dc92', '#dfbaa0', '#d8394e']

  return (
    <div className='container'>
      <div>
        <h1 className='head'>Number List</h1>
        <Numbers numbers={numbers}/>
      </div>
    </div>
  )
}
//The code above is mapping and Rendering arrays



//The code below is mapping array of arrays
// const skills = [
//   ['HTML', 10],
//   ['CSS', 9],
//   ['Javascript', 8],
//   ['React', 8],
// ]

// const Skill = ({skill: [tech, level]})=> (
//   <li>
//     {tech} {level}
//   </li>
// )

// const Skills = ({skills}) => {
//   const skillsList = skills.map((skill) => <Skill skill={skill}/>)
//   console.log(skillsList)
//   return <ul>{skillsList}</ul>
// }

// const App = () => {
//   return (
//     <div className='container'>
//       <div>
//         <h1>Skill Level</h1>
//         <Skills skills={skills}/>
//       </div>
//     </div>
//   )
// }

//The code bellow is Mapping Object
// const countries = [
//   { name: 'Finland', city: 'Helsinki' },
//   { name: 'Sweden', city: 'Stockholm' },
//   { name: 'Denmark', city: 'Copenhagen' },
//   { name: 'Norway', city: 'Oslo' },
//   { name: 'Iceland', city: 'Reykjavík' },
// ]

// const Country = ({country: {name, city}}) => {
//   return (
//     <div>
//       <li>
//         {name} {city}
//       </li>
//     </div>
//   )
// }

// const Countries = ({countries}) => {
//   const countryList = countries.map((country) => (
//     <Country name={country} country={country}/>
//   ))
//   return <div>{countryList}</div>
// }

// const App = () => (
//   <div className='container'>
//     <div>
//       <h1>List Of Country</h1>
//       <Countries countries={countries}/>
//     </div>
//   </div>
// )

const jsxRoot = document.getElementById('root')


ReactDOM.render(<App />, jsxRoot)