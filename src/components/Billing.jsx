const options = [
  "PayPal",
  "Bank Wire",
  "Skrill",
  "GCash",
  "MoneyGram",
  "Garger",
];

export default function Billing() {
  return (
    <section
      className="h-100 p-5 rounded mx-2 d-flex flex-column billing-section"
      id="billing"
    >
      <h2 className="text-center fw-bold mb-2 mt-5">Billing</h2>

      <div className="container flex-grow-1 d-flex align-items-center">
        <div className="row">
          <div className="col px-4">
            <div className="row justify-content-center align-items-stretch">
              {options.map((opt, i) => (
                <div className="col-3 opacity-75" key={i}>
                  <div className="card p-3 fw-semibold mb-4" key={i}>
                    {opt}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col">
            <p className="h2 fw-semibold">Worried about funding?</p>
            <p className="h3 mb-5">
              We accept several popular payment gateways,
              <span className="text-secondary"> and...</span> there's more. Core
              subsribers have the option to pay in partials.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
