import { memo, useState } from "react";
import Container from "../Container";

export const Archive = memo(function Archive({
  loading,
  posts,
  archiveOptions,
  handleAddPost,
}) {
  const [showArchive, setShowArchive] = useState(archiveOptions.show);
  console.log("posts: ", posts);
  return (
    <Container>
      <div className="archive">
        <h1>{archiveOptions.title}</h1>
        <button onClick={() => setShowArchive((s) => !s)}>
          {showArchive ? "Hide Archive" : "Show Archive"}
        </button>
        {!loading && showArchive && (
          <ul>
            {posts.map((quote, index) => (
              <>
                <p key={index}>{quote.quote}</p>
                <button onClick={() => handleAddPost(quote)}>Add Post</button>
              </>
            ))}
          </ul>
        )}
      </div>
    </Container>
  );
});
