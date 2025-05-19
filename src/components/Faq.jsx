const Faq = () => {
  return (
    <>
      <div className="text-center mb-10 w-11/12 md:w-full mx-auto">
        <h3 data-aos="fade-up" className="text-3xl font-bold dark:text-white">
          Frequently Asked Questions (FAQs)
        </h3>

        <p data-aos="fade-up" className="dark:text-white">
          Gear up for less - 30% off Kids
        </p>
        <p data-aos="fade-up" className="dark:text-white text-justify">
          Get answers to the most common questions about our sports equipment.
          From product quality and variety to warranty and support, find all the
          information you need right here. Expand each section to learn more
          about how we ensure top-notch quality and customer satisfaction.
        </p>
      </div>
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            1️⃣ Why Choose Our Sports Equipment?
          </div>
          <div className="collapse-content">
            <p>
              Our sports equipment is designed with high-quality materials to
              ensure durability, comfort, and top-level performance. Whether you
              are training, competing, or enjoying a casual game, our products
              are built to support you every step of the way.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            2️⃣ What Types of Sports Equipment Do We Offer?
          </div>
          <div className="collapse-content">
            <p>
              We offer a wide range of sports equipment, including football,
              cricket, basketball, fitness gear, outdoor adventure accessories,
              and more. Our collection is tailored to meet the needs of athletes
              of all levels.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            3️⃣ How Do We Ensure Product Quality?
          </div>
          <div className="collapse-content">
            <p>
              We prioritize quality by sourcing materials from trusted
              manufacturers and conducting rigorous testing to meet industry
              standards. Our commitment to excellence guarantees that you get
              the best value for your investment.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            4️⃣ Do We Provide Warranty and Support?
          </div>
          <div className="collapse-content">
            <p>
              Yes, all our sports equipment comes with a warranty and dedicated
              customer support. If you face any issues with our products, we are
              here to assist you promptly.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            5️⃣ How Can You Purchase Our Products?
          </div>
          <div className="collapse-content">
            <p>
              You can easily purchase our products through our online platform
              or visit our retail stores. Fast delivery options are available to
              ensure you get your gear on time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
