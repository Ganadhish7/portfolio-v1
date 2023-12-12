import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [comments, setComments] = useState("");

  // function handleSubmission(e) {
  //   e.preventDefault();
  // }

  return (
    <form
      className=" mb-6 flex flex-col justify-center space-y-4"
      name="contact"
      method="POST"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div hidden>
        <input name="bot-field" />
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <br />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className=" w-80 rounded-md"
          name="name"
          type="text"
          id="name"
          spellCheck="true"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <br />
        <input
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          className=" w-80 rounded-md"
          id="email"
          type="text"
          name="email"
          spellCheck="true"
        />
      </div>
      <div>
        <label htmlFor="comments">
          Any Comments <br />
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            className=" w-80 rounded-md"
            name="comments"
            id="comments"
            cols="20"
            rows="5"
          ></textarea>
        </label>
      </div>
      <button
        className=" rounded-lg bg-blue-300 uppercase tracking-wide hover:bg-blue-400"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
