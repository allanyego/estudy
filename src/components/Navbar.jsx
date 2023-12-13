export default function Navbar() {
  return (
    <header>
      <nav className="d-flex justify-content-between p-3">
        <img
          src="logo.png"
          alt="Brand"
          className=""
          style={{
            width: "7em",
          }}
        />

        <div className="d-flex align-items-center gap-3">
          <a className="nav-link d-block" aria-current="home" href="#hero">
            Home
          </a>

          <a
            className="nav-link d-block"
            aria-current="services"
            href="#services"
          >
            Services
          </a>

          <a
            className="nav-link d-block"
            aria-current="pricing"
            href="#pricing"
          >
            Pricing
          </a>

          <a
            className="nav-link d-block"
            aria-current="billing"
            href="#billing"
          >
            Billing
          </a>

          <a
            className="nav-link d-block"
            aria-current="contact"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
