export function imageUrlJsx(person) {
  const baseUrl = "https://i.imgur.com/";

  return baseUrl + person.imageId + ".jpg";
}
