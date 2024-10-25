import Navbar from "../component/Sharable/Navbar";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <Navbar></Navbar>
      <main>{children}</main>
    </div>
  );
}
