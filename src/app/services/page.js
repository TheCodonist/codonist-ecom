import ServicesSection from "../components/ServicesSection";

export default function Services() {
  return (
    <>
      <div className="container mx-auto px-4 [&_b]:text-gray-600">
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Services I can provde:</h2>
          <p>
            If you want to introduce small business online or considering to automate business process of your
            enterprise organization, I am offering you effective services related to Web designing and development,
            Application development, Plugin development, WordPress, services, CMS based services and many more. I work
            on reasonable cost and provide you quality services.
          </p>
        </div>

        <ServicesSection />
      </div>
    </>
  );
}
