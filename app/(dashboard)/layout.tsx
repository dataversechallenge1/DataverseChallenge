import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50 bg-primary">
        {/* Use a professional primary color for the top bar */}
        <Navbar />
      </div>
      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50 bg-secondary">
        {/* Use a secondary color for the sidebar */}
        <Sidebar />
      </div>
      <main className="md:pl-56 pt-[80px] h-full" style={{ backgroundColor: '#f5f5f5' }}>
        {/* Use a light background color for the main content area */}
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
