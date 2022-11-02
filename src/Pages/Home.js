import Icon from "Components/Icon";
import { Posts } from "Components/Posts";
import { Stories } from "Components/Stories";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div className="flex ">
      <Helmet>
        <title>Instagram</title>
      </Helmet>
      <div>
        <Posts />
      </div>
    </div>
  );
}
