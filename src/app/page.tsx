import { MyName } from "./myName";
import { RenderName } from "./renderName";

export default function IndexPage() {
  return (
    <div>
      <h1>Cool</h1>
      <MyName
        renderProp={async (name) => {
          "use server";
          return <RenderName name={name} />;
        }}
      />
    </div>
  );
}
