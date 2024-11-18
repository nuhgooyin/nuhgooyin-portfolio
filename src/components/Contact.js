import React from "react";
import "./Contact.css";
import profilePic from "../images/profile-picture.jpg"; // Ensure the path is correct

const Contact = () => {
  return (
    <section id="contact">
      <div className="profile-image">
        <img src={profilePic} alt="Dan Nguyen" />
      </div>
      <h2>Let's Connect!</h2>
      <p>
        But that's enough about me, I'd like to hear more about you! I love
        meeting new people and can talk about literally anything!
      </p>
      <p>
        Feel free to reach out to me at{" "}
        <a href="mailto:danduy.nguyen@mail.utoronto.ca">
          danduy.nguyen@mail.utoronto.ca
        </a>
        , or on{" "}
        <a
          href="https://www.linkedin.com/in/nuhgooyin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        !
      </p>
    </section>
  );
};

export default Contact;
