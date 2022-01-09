import React from 'react';
import { student } from './mock';

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      data: student,
      name: '',
      status: '',
      search: 'id',
      active: null,
    };
  }
  render() {
    const onChange = (event) => {
      console.log(event.target.name);
      this.setState({ [event.target.name]: event.target.value });
    };

    const onFilter = (e) => {
      const { value } = e.target;
      let res = student.filter((item) =>
        `${item[this.state.search]}`.toLowerCase().includes(value.toLowerCase())
      );
      this.setState({
        data: res,
      });
    };

    const onDelete = (id) => {
      console.log(id);
      let res = this.state.data.filter((value) => value.id !== id);
      this.setState({ data: res });
    };
    const onAdd = () => {
      let user = {
        id: Date.now(),
        name: this.state.name,
        status: this.state.status,
      };
      this.setState({
        data: [...this.state.data, user],
        name: '',
        status: '',
      });
      console.log(user);
    };
    const onSelect = (e) => {
      this.setState({ search: e.target.value });
    };
    const onEdit = ({ id, name, status }, isSave) => {
      if (isSave) {
        let res = this.state.data.map((value) =>
          value.id === this.state.active.id
            ? { ...value, name: this.state.name, status: this.state.status }
            : value
        );
        this.setState({ active: null, data: res });
      } else {
        this.setState({
          name: name,
          status: status,
          active: { id, name, status },
        });
      }
    };
    return (
      <div>
        <h1> name: {this.state.name}</h1>
        <h1> status: {this.state.status}</h1>
        <input
          value={this.state.name}
          name='name'
          onChange={onChange}
          type='text'
          placeholder='name'
        />
        <input
          value={this.state.status}
          name='status'
          onChange={onChange}
          placeholder='status'
        />
        <button onClick={onAdd}>add</button>
        <hr />
        <select onChange={onSelect} name='' id=''>
          <option value='id'>ID</option>
          <option value='name'>Name</option>
          <option value='status'>Status</option>
        </select>
        <input onChange={onFilter} type='text' placeholder='search' />
        <hr />
        <table border='1' width={'100%'}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.length ? (
              this.state.data.map(({ id, name, status }) => {
                return (
                  <tr key={id}>
                    <td> {id}</td>
                    <td>
                      {' '}
                      {this.state.active?.id === id ? (
                        <input
                          onChange={onChange}
                          name='name'
                          value={this.state.name}
                          type='text'
                        />
                      ) : (
                        name
                      )}
                    </td>
                    <td>
                      {this.state.active?.id === id ? (
                        <input
                          onChange={onChange}
                          name='status'
                          value={this.state.status}
                          type='text'
                        />
                      ) : (
                        status
                      )}
                    </td>
                    <td>
                      <button onClick={() => onDelete(id)}>delete</button>
                    </td>
                    <td>
                      <button
                        onClick={() =>
                          onEdit(
                            { id, name, status },
                            this.state.active?.id === id
                          )
                        }
                      >
                        {this.state.active?.id === id ? 'save' : 'edit'}
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <th colSpan={5}>
                  <h1>no data</h1>
                </th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Student;

// CRUD
