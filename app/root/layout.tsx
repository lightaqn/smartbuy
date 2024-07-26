import { Nav, Foot } from "@/components";

function Layout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;

  modal: React.ReactNode;
}>) {
  return (
    <div className="">
      <Nav />

      {children}

      {modal}

      <Foot />
    </div>
  );
}

export default Layout;
