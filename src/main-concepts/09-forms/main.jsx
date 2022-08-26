import React from 'react';
import ReactDOM from 'react-dom/client';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      essay: '',
      flavor: '',
      isGoing: false
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log(name, value);
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    if (!this.state.value) event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </label>

        <br />
        <br />
        
        <label>
          Essay:
          <textarea cols="30" name="essay" rows="10" value={this.state.essay} onChange={this.handleChange}></textarea>
        </label>

        <br />
        <br />

        <label>
          Favorite flavor:
          <select name="flavor" value={this.state.flavor} onChange={this.handleChange}>
            <option value="" disabled>please select</option>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>

        <br />
        <br />

        <label>
          Is going:
          <input type="checkbox" name="isGoing" checked={this.state.isGoing} onChange={this.handleChange} />
        </label>

        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>
    )
  }
}

const element = (
  <div>
    <NameForm />
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(element);