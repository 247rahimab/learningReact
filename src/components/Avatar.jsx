import { imageUrlJsx } from "./ImageUrlJsx";

function Avatar({ person, size }) {
  return (
    <div>
      <h2>Avatar Image: {size}</h2>
      <img
        className="avatar"
        src={imageUrlJsx(person)}
        alt={person.name}
        width={size}
        height={size}
      />
    </div>
  );
}

export default Avatar;
