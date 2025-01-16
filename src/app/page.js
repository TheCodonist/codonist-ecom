import Image from "next/image";
import PortfolioSection from "@/app/components/PortfolioSection";
import ServicesSection from "@/app/components/ServicesSection";

export default function Home() {
  return (
    <>
      <section className="py-5">
        <div className="container mx-auto px-4">
          <h1 className="font-bold text-black text-3xl mb-4">
            <span className="text-xl">I&apos;m,</span>
            <br />
            Full Stack Developer
          </h1>
          <p className="text-sm mb-4">Website Development | Web & Mobile Application Development</p>
          {/* <MainButton type="anchor" href="#">Download CV</MainButton> */}
        </div>
      </section>
      <div className="container mx-auto px-4">
        <hr />
      </div>
      <section className="py-5">
        <div className="container mx-auto px-4 [&_p]:mb-2">
          <h3 className="text-2xl font-bold mb-2">Who am i?</h3>
          <p>
            Hello! I&apos;m Hamayun Aziz, a dedicated and skilled web developer specializing in Laravel and Vue.js. With
            over 9+ years of experience in the industry, I have honed my skills in creating robust, scalable web
            applications that drive business success.
          </p>
          <p>
            My journey in web development began with a fascination for building seamless user experiences and has
            evolved into a career centered around developing efficient, high-quality software solutions. My technical
            toolkit is filled with up-to-date industry standards, including PHP, Laravel, Vue.js, JavaScript, and other
            modern web technologies, ensuring that the solutions I develop are not only effective but also cutting-edge.
          </p>
          <p>
            I have successfully managed and delivered multiple projects from inception to completion, focusing on
            optimizing performance and enhancing user engagement. My approach combines technical proficiency with a keen
            understanding of clients&apos; business needs, which enables me to deliver solutions that are not only
            technically sound but also commercially viable.
          </p>
          <p>
            I&apos;m currently seeking opportunities to bring my expertise in Laravel and Vue.js to new and exciting
            projects. I am enthusiastic about collaborating with innovative teams and companies where I can contribute
            to challenging projects and help achieve business goals through technological excellence.
          </p>
          <p>
            Let&apos;s Contact me! I&apos;m always open to discussing how I can bring value to your team or project.
          </p>

          <hr className="my-5" />
          <div className="2xl:grid 2xl:grid-cols-3">
            <div>
              <h3 className="text-2xl font-bold">My Technical Skills:</h3>
              <ul className="*:mt-2">
                <li>
                  <h6 className="font-bold">Frontend:</h6>
                  <p>HTML, Bootstrap, Materialize</p>
                  <p>CSS, SASS/SCSS, LESS, Tailwind CSS, Bulma CSS, Stylus</p>
                  <p>JavaScript, Inertia.js, AlpineJS, jQuery, TypeScript</p>
                  <p>Vue.js, Vuetify, Vuex, Pinia</p>
                  <p>a11ty, Pug, Twig</p>
                </li>
                <li>
                  <h6 className="font-bold">Backend:</h6>
                  <p>PHP, Laravel, Codeigniter</p>
                </li>
                <li>
                  <h6 className="font-bold">Databases:</h6>
                  <p>SQL, MySQL</p>
                </li>
                <li>
                  <h6 className="font-bold">Mobile Applications:</h6>
                  <p>Cordova, Capacitor, Framework7</p>
                </li>
                <li>
                  <h6 className="font-bold">CMS:</h6>
                  <p>Wordpress, Woocommerce, Guttenberg, Elementor, Divi, WP Bakkery, Visual Composer</p>
                  <p>Shopify, WebFlow</p>
                </li>
                <li>
                  <h6 className="font-bold">Tools & Technologies:</h6>
                  <p>NPM, Yarn, Git, Gulp, Vite, Webpack</p>
                </li>
                <li>
                  <h6 className="font-bold">Design Tools:</h6>
                  <p>Adobe Photoshop, Figma</p>
                </li>
                <li>
                  <h6 className="font-bold">Video Editing:</h6>
                  <p>Capcut</p>
                </li>
                <li>
                  <h6 className="font-bold">Other:</h6>
                  <p>Excel</p>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <hr className="my-5 2xl:hidden" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Some of my Wordpress Expertise:</h3>
                <div>
                  <ul>
                    <li>Wordpress Theme Development</li>
                    <li>Wordpress Plugin Development</li>
                    <li>Woocommerce plugin integration</li>
                    <li>Woocommerce customization and updates</li>
                    <li>API integrations with plugins and themes</li>
                    <li>Creating a Wordpress eCommerce theme from scratch</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <hr className="my-5 2xl:hidden" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Services I can provide:</h3>
                <div className="[&_dd]:hidden"><ServicesSection /></div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <hr className="my-5" />
            <div>
              <h3 className="text-2xl font-bold mb-2">My Featured Portfolio:</h3>
              <PortfolioSection />
            </div>
          </div>

          <div className="mx-auto w-fit px-4 py-5 bg-gray-100 rounded mt-4 max-lg:text-center">
            <p className="mb-4">I am happy to know you that 500+ projects done successfully!</p>
            <div className="flex flex-wrap justify-center gap-4">
              {/* <MainButton type="anchor" href="https://www.upwork.com/freelancers/~01420abf4e161e38e4"
            >Upwork | Hire Me
          </MainButton>
          <MainButton type="anchor" href="https://www.fiverr.com/s/R7qwy4l">Fiverr | Hire Me</MainButton> */}
            </div>
          </div>

          {/*
        Services i can provide
        Testimonials
        Stats
        My Skills
        Education
        Work Experience (timeline)
        Recent Work
        Recent Blog
        Contact Details
*/}
        </div>
      </section>
    </>
  );
}
