import { Metadata } from "next";
import Comments from "./page";

export const metadata:Metadata ={
  title:"Title For comments"
}


function layout() {
  return (
    <div>
      <Comments/>
    </div>
  )
}

export default layout
