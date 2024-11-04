import AdminBar from "../component/Sharable/AdminBar/AdminBar";
import BodyImg from "@/assets/images/body-bg.jpg";
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full">
      <AdminBar></AdminBar>
      <div
        className="w-full py-4 px-8"
        style={{
          backgroundImage: `url(${BodyImg.src})`,
        }}
      >
        <main>{children}</main>
      </div>
    </div>
  );
}
