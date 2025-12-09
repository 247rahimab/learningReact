function Profile() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
}

export default function Gallery() {
  return (
    <section>
      <h2>Within Gallery</h2>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
