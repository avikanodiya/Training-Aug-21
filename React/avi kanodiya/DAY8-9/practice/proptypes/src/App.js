import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Person = ({ person: { img, name, age, info } }) => {
  // const { img, name, age, info } = person
  return (
    <article>
      <img src={img} alt="" />
      <h4>name: {name}</h4>
      <h4>age: {age}</h4>
      <h4>info: {info}</h4>
    </article>
  )
}

Person.propTypes = {
  person: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    info: PropTypes.string.isRequired
  })
  // img: PropTypes.string.isRequired,
  // name: PropTypes.string.isRequired,
  // age: PropTypes.number.isRequired,
  // info: propTypes.string.isRequired
};

Person.defaultProps = {
  person: {
    info: "default info about the person"
  }
};

class PersonList extends Component {
  state = {
    people: [
      {
        id: 1,
        img: 'https://randomuser.me/api/portraits/thumb/men/72.jpg',
        name: 'john',
        age: 24
      },
      {
        id: 2,
        img: 'https://randomuser.me/api/portraits/thumb/men/66.jpg',
        name: 'bob',
        age: 27
      },
      {
        id: 3,
        img: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
        name: 'peter',
        age: 22,
        info: 'peter is a web developer'
      }
    ]
  }
  render() {
    return (
      <section>
        {
          this.state.people.map((person) => (
            <Person key={person.id} person={person} />
          ))
        }
      </section>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <PersonList />
    )
  }
}
