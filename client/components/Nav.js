import Link from "next/link";

const Nav = () => {
  return (
    <nav className="nav bg-dark d-flex justify-content-end">
        <Link href="/" className="nav-link text-light">
          Home
        </Link>
        <Link href="/login" className="nav-link text-light">
          login
        </Link>
        <Link href="/register" className="nav-link text-light">
          register
        </Link>
    </nav>
  );
};

export default Nav;
