export default function MileStones() {
    return (
      <>
        <div className="container mx-auto px-4 [&_b]:text-gray-600">
          <h2 className="text-xl font-bold mb-4">Web Application Development (Laravel)</h2>

          <h3 className="text-lg font-bold mb-2">1. Initial Consultation & Planning</h3>
          <ol className="list-disc list-inside text-sm mb-5">
            <li>
              <b>Client Requirements Gathering</b>: Discuss project goals, requirements, and expectations with the client.
            </li>
            <li>
              <b>Scope Definition</b>: Define the project&apos;s scope, including features, timelines, and budget.
            </li>
            <li>
              <b>Wireframing & Prototyping</b>: Create wireframes or prototypes to visualize the layout and flow of the
              application.
            </li>
          </ol>

          <h3 className="text-lg font-bold mb-2">2. Design & UI/UX</h3>
          <ol className="list-disc list-inside text-sm mb-5">
            <li>
              <b>UI/UX Design</b>: Design the user interface and experience, ensuring it is intuitive and responsive.
            </li>
            <li>
              <b>Client Feedback & Revisions</b>: Incorporate client feedback into the design, making necessary revisions.
            </li>
          </ol>

          <h3 className="text-lg font-bold mb-2">3. Development</h3>
          <ol className="list-disc list-inside text-sm mb-5">
            <li>
              <b>Setup & Configuration</b>: Set up the Laravel environment, including configuration of databases, servers,
              and other dependencies.
            </li>
            <li>
              <b>Frontend Integration</b>: Implement the frontend using technologies like Blade, Vue.js, or other
              JavaScript frameworks.
            </li>
            <li>
              <b>Backend Development</b>: Develop the backend logic using Laravel, focusing on database design,
              authentication, and application logic.
            </li>
            <li>
              <b>API Integration</b>: If applicable, integrate third-party APIs or create RESTful APIs for the
              application.
            </li>
          </ol>

          <h3 className="text-lg font-bold mb-2">4. Testing</h3>
          <ol className="list-disc list-inside text-sm mb-5">
            {/* <li><b>Unit & Integration Testing</b>: Write and execute tests to ensure the functionality and reliability of the
            application.
          </li> */}
            <li>
              <b>Bug Fixing & Optimization</b>: Identify and fix bugs, optimize performance, and ensure the application
              meets quality standards.
            </li>
          </ol>

          <h3 className="text-lg font-bold mb-2">5. Deployment</h3>
          <ol className="list-disc list-inside text-sm mb-5">
            <li>
              <b>Server Setup & Deployment</b>: Deploy the application to a production server, ensuring it is secure and
              scalable.
            </li>
            <li>
              <b>Domain & SSL Configuration</b>: Configure domain names and SSL certificates for secure communication.
            </li>
            {/* <li><b>Monitoring & Analytics</b>: Set up monitoring tools and analytics to track application performance and user
            behavior.
          </li> */}
          </ol>

          <h3 className="text-lg font-bold mb-2">6. Post-Launch Support & Maintenance</h3>
          <ol className="list-disc list-inside text-sm mb-5">
            <li>
              <b>Ongoing Support</b>: Provide support for any issues or changes required post-launch.
            </li>
            <li>
              <b>Updates & Improvements</b>: Regularly update the application to add new features, improve security, and
              enhance performance.
            </li>
            <li>
              <b>Documentation</b>: Provide comprehensive documentation for the application, including user manuals and
              technical guides.
            </li>
          </ol>

          <h3 className="text-lg font-bold mb-2">7. {/* <span>Case Studies &</span> */} Testimonials</h3>
          <ol className="list-disc list-inside text-sm">
            {/* <li><b>Case Studies</b>: Present detailed case studies of previous projects, highlighting challenges, solutions,
            and outcomes.
          </li> */}
            <li>
              <b>Client Testimonials</b>: Include testimonials from satisfied clients to build credibility and trust.
            </li>
          </ol>

          <hr className="my-4" />
        </div>
      </>
    );
  }
