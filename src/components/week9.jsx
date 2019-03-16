import React from "react";

const Week9 = () => {
  return (
    <div>
      <h2>Week 1 Bonus Exercises</h2>
      <p>
        Week one is a lot of Javascript and in some cases basic Express routing.
      </p>
      <p>
        Before practising, you should have all exercises for the week completed.
        Following this you can:
      </p>
      <ul>
        <li>
          Create an Express server with routes. So that the route /game/1
          returns the score of the first game in bowling. /game/2 returns the
          second, and so on. From there, you can add /games which will show all
          games and /help to display a help page.
        </li>
        <hr />
        <li>
          Create an Express web server (any context is fine) but it must contain
          routes that match the following layouts.
          <br /> /names <br />
          /name/:id
          <br />
          /name/edit/:id
          <br /> <br />
          and a bonus....to show names in a particular region and suburb <br />
          /name/:region/:suburb
        </li>
      </ul>
    </div>
  );
};

export default Week9;
