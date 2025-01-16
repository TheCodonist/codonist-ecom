import Link from 'next/link';

function Navigation() {
  return (
    <>
      <div className="mt-10 *:block *:my-1">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/portfolio">Portfolio</Link>
      </div>
    </>
  );
}

export default Navigation;
