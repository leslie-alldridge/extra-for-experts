import React from "react";

const Week4 = () => {
  return (
    <div>
      <h2>Week 4 Bonus Exercises</h2>
      <p>Week four is an introduction to React</p>
      <p>
        Before practising, you should have all exercises for the week completed.
        Following this you can:
      </p>
      <ul>
        <li>
          Create a React application that uses state to count from 0 to 100
          (increment by 1 count every second). The App (Parent) component should
          hold it's current state and pass this to a child component (let's say
          Timer) which will be responsible for displaying the count it receives
          via props.
        </li>
        <hr />
        <li>
          Client side routing that has the following abilities:
          <br />
          Create a project where you can complete all of the CRUD actions
          (Create, Read, Update and Delete) users from a React state. You can
          have an add user form, edit user form, delete user button and receive
          all users button. To reach these forms a url needs to be hit, e.g.
          #/edit/:id <br /> #/users
        </li>
        <hr />
        <li>If you master the above, you should pat yourself on the back.</li>
      </ul>
    </div>
  );
};

export default Week4;
