import { Sidebar } from 'flowbite-react';
import { HiShoppingBag } from 'react-icons/hi';

export function SidebarComponent({ children }) {
  return (
    <div className="w-screen h-[calc(100vh-56px)] flex flex-row">
      <Sidebar
        className="bg-gray-500 h-full"
        aria-label="Sidebar with multi-level dropdown example"
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Collapse icon={HiShoppingBag} label="Jobs">
              <Sidebar.Item href="#"> All Jobs</Sidebar.Item>
              <Sidebar.Item href="#">Create Job</Sidebar.Item>
            </Sidebar.Collapse>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      <div className="flex-grow">{children}</div>
    </div>
  );
}
