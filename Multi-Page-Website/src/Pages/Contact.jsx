export const Contact = () => {
  const handleSubmit = (formData) => {
    console.log(Object.fromEntries(formData.entries()));
    
  };
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h3 className="contact-title">Contact Us</h3>
        <form action={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="input"
            required
            autoComplete="off"
            name="Name"
          />

          <input
            type="email"
            placeholder="Enter Your Email"
            className="input"
            required
            autoComplete="off"
            name="Email"
          />

          <textarea
            className="input"
            rows="10"
            placeholder="Enter Your Message"
            name="Message"
            required
            autoComplete="off"
          ></textarea>

          <button
            type="submit"
            value="Send"
            className="contact-btn"
            
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
