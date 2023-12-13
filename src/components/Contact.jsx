export default function Contact() {
  return (
    <section className="h-100 p-5 rounded mx-2" id="contact">
      <div className="row h-100 align-items-center">
        <div className="col">
          <form className="card mx-5">
            <div className="card-body m-3">
              <h5 className="text-center fw-bold">Let's Chat</h5>

              <div className="form-group mb-3">
                <label className="form-label" htmlFor="name">
                  Full Name
                </label>
                <input type="text" name="name" id="name" className="form-control" />
              </div>

              <div className="form-group mb-3">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                />
              </div>

              <div className="form-group mb-3">
                <label className="form-label" htmlFor="message">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows="4"
                />
              </div>

              <div className="d-grid mx-5">
                <button className="btn btn-primary btn-lg">Send</button>
              </div>
            </div>
          </form>
        </div>

        <div className="col">
          <img
            src="contact.svg"
            alt="hero image"
            className="img-fluid d-block w-50 m-auto"
          />
        </div>
      </div>
    </section>
  );
}
