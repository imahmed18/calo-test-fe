import { Sidebar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { usePathname } from '../../routes/hook/usePathname';

export function SidebarComponent({ children }) {
  const currentPath = usePathname();

  // Helper function to determine class names
  const getItemClassName = (path) => {
    return currentPath === path ? 'bg-cyan-700 hover:bg-cyan-700' : 'hover:bg-cyan-700';
  };

  return (
    <div className="w-screen h-[calc(100vh-56px)] flex flex-row">
      <Sidebar
        className="bg-gray-500 h-full"
        aria-label="Sidebar with multi-level dropdown example"
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item as={Link} to="/" className={getItemClassName('/')}>
              All Jobs
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="/create" className={getItemClassName('/create')}>
              Create Job
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      <div className="flex-grow">{children}</div>
    </div>
  );
}
