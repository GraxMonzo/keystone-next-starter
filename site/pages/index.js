import { useQuery } from "@apollo/react-hooks";
import { withApollo } from "../lib/apollo";
import { NetworkStatus } from "apollo-client";
import gql from "graphql-tag";

export const ALL_POSTS_QUERY = gql`
  {
    allPosts {
      title
      content
    }
    _allPostsMeta {
      count
    }
  }
`;

export default withApollo(() => {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    ALL_POSTS_QUERY,
    {
      notifyOnNetworkStatusChange: true
    }
  );

  if (loading) return <h1 className='w-full h-screen'>Loading</h1>;

  const { allPosts, _allPostsMeta } = data;

  return (
    <>
      <h1 className="text-6xl">Hello world!</h1>
      <p>Posts:</p>
      <ul>
        {allPosts.map((post, i) => (
          <li key={i}>
            {post.title} {post.content}
          </li>
        ))}
      </ul>
    </>
  );
});
