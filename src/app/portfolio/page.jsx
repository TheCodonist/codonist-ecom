import PortfolioSection from "../components/PortfolioSection";

export default function Portfolio() {
  return (
    <>
      <div className="container mx-auto px-4">
        <h6 className="mb-2 font-bold">Filter By Skills</h6>
        <div className="mb-4 flex gap-4 border-b pb-4 *:cursor-pointer *:rounded *:px-3 *:py-2 *:inline-block *:bg-gray-100">
          <span className="hover:bg-gray-200">All</span>
          {/* <span className="hover:bg-gray-200" v-for="(item, i) in skills" :key="i">{{ item.name }}</span> */}
        </div>
        <h6 className="mb-2 font-bold">Projects</h6>
        <PortfolioSection />
      </div>
    </>
  );
}
