 
  export default function ServiceCard({ image, title, services = [] }) {
    return (
      <div className="card h-100">
        <div className="card-body position-relative">
          <div
          >
            <img src={image} alt={`${title} service`} className="img-fluid d-block mx-auto my-3 w-50 rounded-circle" />
          </div>
  
          <h5 className="text-center fw-bold text-secondary mb-3">
            {title}
          </h5>
  
          <div className="px-3 mb-2">
            {services.map((s, i) => (
                <p key={i} className="flex-grow-1 mb-2 text-center">{s}</p>
            ))}
          </div>
        </div>
      </div>
    );
  }
  