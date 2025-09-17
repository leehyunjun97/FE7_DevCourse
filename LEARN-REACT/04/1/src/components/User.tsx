export default function User({ userObj, clickHandler }: UserProps) {
  // on***, onclick, ondbclick...
  return (
    <>
      <h1>Name: {userObj.name}</h1>
      <h1>Age: {userObj.age}</h1>
      <button onClick={clickHandler}>클릭</button>
    </>
  );
}
