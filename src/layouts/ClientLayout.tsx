import { Outlet } from "react-router-dom";

function ClientLayout() {
  return (
    <div>
      {/* <Navbar /> */}
      <Outlet />
    </div>
  );
}

export default ClientLayout;
