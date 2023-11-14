import { Metadata } from "next";
import Post from "./page";
export const metadata: Metadata = {
  title: "Title Forum internal",
};

function layout() {
  return (
    <div>
     <Post></Post>
    </div>
  );
}

export default layout;
