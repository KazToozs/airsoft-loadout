import React from 'react';

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>If you have any questions or feedback, please feel free to contact us.</p>

      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" />
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
