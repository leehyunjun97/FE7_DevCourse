export default function User({
  name,
  age,
  address,
}: {
  name: string;
  age: number;
  address: { zipcode: number; detail: string };
}) {
  return (
    <>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{address.detail}</h1>
    </>
  );
}
