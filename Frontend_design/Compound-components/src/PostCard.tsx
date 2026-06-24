import { createContext, useContext, type PropsWithChildren } from "react";

interface Post {
  id: number;
  title: string;
  content: string;
}

type PostCardPorps = PropsWithChildren & {
  post: Post;
};

type providerContent = {
  post: Post;
};

const CardContext = createContext<providerContent | undefined>(undefined);

function useCardContext(){
    const context  = useContext(CardContext);

    if(!context){
        throw new Error('useCardContext must be used within PostCard')
    }

    return context.post;

}
const PostCard = ({ post, children }: PostCardPorps) => {
  return (
    <CardContext.Provider value={{ post }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          width: 250,
          height: 200,
          backgroundColor: "#fff",
        }}
      >
        {children}
      </div>
    </CardContext.Provider>
  );
};

PostCard.title = function CardTitle() {
  const post = useCardContext();
  console.log('post', post);
  return <h1 style={{ fontSize: "14px", color: "black" }}> {post.title}</h1>;
};
PostCard.content = function CardContent() {
  const post = useCardContext();
  return <p style={{ fontSize: "12px", color: "black" }}>{post.content}</p>;
};
PostCard.button = function CardButton() {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button>Submit</button>
      <button>Read More</button>
    </div>
  );
};

export default PostCard;
