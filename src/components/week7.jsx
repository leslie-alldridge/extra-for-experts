import React from "react";

const Week7 = () => {
  return (
    <div>
      <h2>Week 7 Bonus Exercises</h2>
      <p>
        By now you should be confident with the structure of full stack web
        applications.
      </p>
      <p>
        You'll learn authentication this week, so the challenge is to build an
        application with auth and user specific private information.
      </p>
      <ul>
        <li>
          You can choose the topic, but this app should allow users to see what
          other users post / do (e.g. public profiles or comments). Users should
          also be able to store private information (e.g. notes or user
          settings). Ensure the CRUD actions are used.
        </li>
        <hr />
        <li>
          Write tests until you gain 100% coverage on a React, Redux full stack
          application. You can use jest --coverage to see your coverage.
        </li>
        <hr />
        <li>
          If you've already achieved the above, the final challenge is to do
          this all again but with a different technology. Could you remove Knex
          and use MogoDB or Firebase? Is there a CSS framework or React package
          you've wanted to use?
        </li>
      </ul>
    </div>
  );
};

export default Week7;
