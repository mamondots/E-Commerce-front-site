import BodyImg from "@/assets/images/body-bg.jpg";
import UserBar from "../component/Sharable/UserBar/UserBar";
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full">
      <UserBar></UserBar>
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
