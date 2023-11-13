function ContactForm() {
  return (
    <form
      className=" mb-6 flex flex-col justify-center space-y-4"
      data-netlify-honeypot="bot-field"
      data-netlify="true"
      name="contact"
      method="post"
      onSubmit="submit"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div hidden>
        <input name="bot-field" />
      </div>
      <div>
        <label htmlFor="first-name">Name</label>
        <br />
        <input
          className=" w-80 rounded-md"
          name="first-name"
          type="text"
          id="first-name"
          placeholder="name"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <br />
        <input
          className=" w-80 rounded-md"
          id="email"
          type="text"
          name="email"
          placeholder="email"
        />
      </div>
      <div>
        <label>
          Any Comments <br />
          <textarea
            className=" w-80 rounded-md"
            name="comments"
            id=""
            cols="20"
            rows="5"
          ></textarea>
        </label>
      </div>
      <div data-netlify-recaptcha="true"></div>
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
