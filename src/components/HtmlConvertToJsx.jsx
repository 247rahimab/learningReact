import { imageUrlJsx } from "./ImageUrlJsx";
const person = {
  name: "Gregorio Y. Zara",
  imageId: "7vQD0fP",
  imageSize: "s",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

export default function HtmlCovertToJsx() {
  return (
    <>
      <h1>Hedy Lamarr's Todos</h1>
      <img src={imageUrlJsx(person)} alt="Hedy Lamarr" className="photo" />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
}
