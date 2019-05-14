import React, { Component } from 'react';

export class Home extends Component {
  displayName = Home.name

  render() {
    return (
      <div>
            <h1>Register</h1>
            <form action="" method="POST">
                <p><input type="text" name="firstName" placeholder="first name" /></p>
                <p><input type="text" name="lastName" placeholder="last name" /></p>
                <p><input type="email" name="email" placeholder="email" /></p>
                <p><input type="text" name="phone" placeholder="phone number" /></p>
                <p><input type="password" name="password" placeholder="password" /></p>
                <p><input type="password" name="confirmPassword" placeholder="confirm password" /></p>
                <p>
                    <p><label>Address</label></p>
                    <p><input type="text" name="street" placeholder="Street" /></p>
                    <p><input type="text" name="acity" placeholder="City" /></p>
                    <p><input type="text" name="astate" placeholder="State" /></p>
                    <p><input type="text" name="zip" placeholder="Zip Code" /></p>
                    <p><input type="text" name="country" placeholder="Country" /></p>
                </p>
                <p><label>Date of Birth</label></p>
                <p><input type="date" name="birthday" /></p>
                <p>
                    <p><label>Gender</label></p>
                    <input type="radio" name="gender" value="male" checked/>Male
                    <input type="radio" name="gender" value="female" />Female
                    <input type="radio" name="gender" value="other" />Other
                </p>
                <p>
                    <p><label>Languages</label></p>
                    <p><input type="checkbox" name="language1" value="C#" />C#</p>
                    <p><input type="checkbox" name="language2" value="JavaScript" />JavaScript</p>
                    <p><input type="checkbox" name="language3" value="Java" />Java</p>
                    <p><input type="checkbox" name="language4" value="Python" />Python</p>
                </p>
                <p><input type="button" value="register" /></p>
            </form>
      </div>
    );
  }
}