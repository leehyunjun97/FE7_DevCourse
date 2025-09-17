export default function Profile({
  backImg,
  userImg,
  username,
  instaId,
  handler,
}: {
  backImg: string;
  userImg: string;
  username: string;
  instaId: string;
  handler: (name: string, id: string) => void;
}) {
  return (
    <>
      <article className='card'>
        <div>
          <img className='card-img' src={backImg} alt='background-pic' />
        </div>
        <div className='profile'>
          <img className='prof-img' src={userImg} alt='profile-pic' />
          <h3 className='alias'>{username}</h3>
          <p className='username'>{instaId}</p>
          <button onClick={() => handler(username, instaId)}>Follow</button>
        </div>
      </article>
    </>
  );
}
