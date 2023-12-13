export default function Hero() {
  return (
    <section className="h-100 d-flex align-items-center gap-3 px-5 rounded mx-2 hero-section" id="hero">
      <div>
        <p className="h3">Hey there!</p>
        <h1 className="mb-5">Welcome to our little study app.</ h1>
        <a className="btn btn-primary btn-lg" href="#services   ">
          Explore Services
          <i className="fa-solid fa-arrow-down ms-3"></i>
        </a>
      </div>
      <div>
        <img
          src="lady.svg"
          alt="hero image"
          className="img-fluid d-block w-50 m-auto"
        />
      </div>
    </section>
  );
}
