// 화면 렌더링과 관련 없는 작업 -> 사이드 이펙트
// 사이드이펙트 -> useEffect()

import useFetch from '../hooks/useFetch';

export default function Fetch() {
  const {
    data: posts,
    isLoading,
    error,
  } = useFetch<{ id: string; title: string; view: number }[]>(
    'http://localhost:3001/posts'
  );

  const {
    data: comments,
    isLoading: isLoadingComments,
    error: errorComments,
  } = useFetch<{ id: string; text: string; postId: number }[]>(
    'http://localhost:3001/comments'
  );

  if (isLoading || isLoadingComments) return <h1>Loading</h1>;
  if (error || errorComments) return <h1>{error}</h1>;

  return (
    <>
      {/* <h1>{JSON.stringify(posts, null, 2)}</h1> */}
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <br />
      <ul>
        {comments?.map((comments) => (
          <li key={comments.id}>{comments.text}</li>
        ))}
      </ul>
    </>
  );
}
