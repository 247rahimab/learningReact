import Avatar from "./Avatar";
import "./profile.css";

function Card({ children }) {
  return (
    <div className="card">
      <h2>Card Children</h2>
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <Card>
        <Avatar
          person={{ name: "Lin Lanying", imageId: "1bX5QH6" }}
          size={100}
        />
      </Card>

      {/* <Avatar person={{ name: "Lin Lanying1", imageId: "1bX5QH6" }} size={70} />
      <Avatar person={{ name: "Lin Lanying2", imageId: "1bX5QH6" }} size={50} /> */}
    </div>
  );
}
