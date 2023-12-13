import ServiceCard from "./ServiceCard";

const courseServices = [
  "Get content tailored to your professional/educational level.",
  "Hand-picked by expert-level personnel.",
];
const tutoringServices = [
  "Get access to live sessions with tutors.",
  "Customize your own schedules",
];
const mentorshipServicse = [
  "Get access to information targeted to your plan path.",
  "Get personal guidance from industry experts.",
];

export default function Services() {
  return (
    <section className="h-100 my-4 d-flex flex-column" id="services">
      <h2 className="text-center fw-bold mb-2 mt-5">Services</h2>

      <div className="container flex-grow-1 d-flex align-items-center">
        <div className="row align-items-stretch">
          <div className="col">
            <ServiceCard
              image="courses.jpg"
              title="Personalized Course Modules"
              services={courseServices}
            />
          </div>

          <div className="col">
            <ServiceCard
              image="tutor.jpg"
              title="Live Tutoring Sessions"
              services={tutoringServices}
            />
          </div>

          <div className="col">
            <ServiceCard
              image="mentor.png"
              title="Mentorship Programmes"
              services={mentorshipServicse}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
