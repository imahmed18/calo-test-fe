import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';

export function NavbarComponent() {
  return (
    <header>
      <Navbar fluid className="bg-gray-500">
        <Navbar.Brand as={Link} to="/">
          <img src="/logo192.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Calo Test Project
          </span>
        </Navbar.Brand>
      </Navbar>
    </header>
  );
}
