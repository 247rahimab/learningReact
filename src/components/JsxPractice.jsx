import Avatar from "./Avatar";

const style = {
  backgroundColor: "red",
  color: "white",
  padding: "10px",
  textAlign: "justify",
};
export default function JsxPractice() {
  return (
    <>
      <p
        style={{
          backgroundColor: "green",
          color: "white",
          fontStyle: "bold",
          padding: "20px",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis enim
        obcaecati tempora commodi a doloribus expedita dicta cumque itaque quas
        provident, cupiditate reiciendis fugiat blanditiis dolores quidem
        voluptates officia ullam?
      </p>
      <ul style={style}>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>

      <Avatar />
    </>
  );
}
