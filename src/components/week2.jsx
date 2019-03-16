import React from "react";
import ReactEmbedGist from "react-embed-gist";

const week2 = () => {
  return (
    <div>
      <h2>Week 2 Bonus Exercises</h2>
      <p>Week two is Handlebars and Express routing.</p>
      <p>
        Before practising, you should have all exercises for the week completed.
        Following this you can:
      </p>
      <ul>
        <li>
          Navigate around arrays and objects using the kata you've memorized in
          week one - so that the right data appears on your webpages.
        </li>
        <hr />
        <li>Confidently use post requests from html forms</li>
        <hr />
        <li>
          Create a complex data structure and selectively render the data based
          on which page the user is viewing. For example: <br />
          <ReactEmbedGist
            gist="leslie-alldridge/665b05830a255cdb98cff45d3a080974"
            wrapperClass="gist__bash"
            loadingClass="loading__screen"
            titleClass="gist__title"
            file="gistfile1.txt"
          />
        </li>
      </ul>
    </div>
  );
};

export default week2;
