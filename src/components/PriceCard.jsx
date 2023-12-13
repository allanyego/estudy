const perks = [
  { perk: "Access to core course content", lvl: "basic" },
  { perk: "Attend seminars and webinars", lvl: "basic" },
  { perk: "Learn at your own pace", lvl: "basic" },
  { perk: "Get excusive access to mentors", lvl: "core" },
  { perk: "Get a certifiable certificate", lvl: "core" },
];

export default function PriceCard({ image, title, level = "basic" }) {
  return (
    <div className="card h-100">
      <div className="card-body pt-4 position-relative">
        <div
          className="w-50 m-auto bg-light border-1 rounded-circle position-absolute overflow-hidden"
          style={{
            left: "50%",
            top: "-50%",
            transform: "translateX(-50%)",
          }}
        >
          <img src={image} alt={`${title} bill`} className="img-fluid" />
        </div>

        <h5 className="text-center fw-bold text-secondary mt-5 mb-3">
          {title}
        </h5>

        <div className="px-3 mb-2">
          {perks.map((p, i) => (
            <div className="d-flex align-items-center gap-2" key={i}>
              <div
                className={`rounded-circle ${
                  level == "basic" && p.lvl == "core"
                    ? "bg-warning"
                    : "bg-success"
                }`}
                style={{
                  width: "0.65em",
                  height: "0.65em",
                }}
              ></div>
              <p className="flex-grow-1 mb-2">{p.perk}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
