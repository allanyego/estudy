import PriceCard from './PriceCard';

export default function Pricing() {
  return (
    <section className="h-100 my-4 d-flex align-items-center" id="pricing">
      <div className="container">
        <div className="row align-items-stretch justify-content-center">
          <div className="col-4">
            
            <PriceCard image="basic.png" title="Basic" />
          </div>

          <div className="col-4">
          <PriceCard image="core.png" title="Core" level="core" />
          </div>
        </div>
      </div>
    </section>
  );
}
