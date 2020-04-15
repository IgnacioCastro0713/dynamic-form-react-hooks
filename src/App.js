import React, {Fragment, useState} from 'react';
import logo from './logo.svg';
import './App.css';

import "bootstrap/dist/css/bootstrap.css";


function App() {

  const [inputFields, setInputFields] = useState([
    {firstName: '', lastName: ''}
  ]);

  const addFields = () => {
    setInputFields([...inputFields, {firstName: '', lastName: ''}]);
  };

  const removeFields = index => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const inputChange = (idx, e) => {
    const newFields = inputFields.map((field, index) => {
      if (idx !== index) {
        return field
      }

      return {...field, [e.target.name]: e.target.value}
    });
    setInputFields(newFields);
  };

  const submit = e => {
    e.preventDefault();
    console.log("inputFields", inputFields);
  };


  return (
    <div className="container mt-5">
      <form onSubmit={submit}>
        <div className="form-row">
          {inputFields.map((inputField, index) => (
            <Fragment key={`${inputField}~${index}`}>
              <div className="form-group col-sm-6">
                <label htmlFor="firstName">First Name</label>
                <input type="text" className="form-control" id="firstName" name="firstName" value={inputField.firstName}
                       onChange={event => inputChange(index, event)}
                />
              </div>
              <div className="form-group col-sm-4">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" className="form-control" id="lastName" name="lastName"
                       value={inputField.lastName}
                       onChange={event => inputChange(index, event)}
                />
              </div>
              <div className="form-group col-sm-2">
                <button className="btn btn-link" type="button"
                        onClick={() => removeFields(index)}>
                  -
                </button>
                <button className="btn btn-link" type="button"
                        onClick={() => addFields()}>
                  +
                </button>
              </div>
            </Fragment>
          ))}
        </div>
        <div className="submit-button">
          <button className="btn btn-primary mr-2" type="submit">
            Save
          </button>
        </div>
        <br/>
        <pre>
          {JSON.stringify(inputFields, null, 2)}
        </pre>
      </form>
    </div>
  );
}

export default App;
