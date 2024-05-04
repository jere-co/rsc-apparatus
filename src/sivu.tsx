// import { SegmentsAdmin } from "./admin";
// import { SegmentRender } from "./components";
// import type { SegmentsArgs } from "./schema";

export const Sivu = (props: unknown) => {
  // TODO:
  // Authentication
  //
  // const isAdmin = true;

  // if (isAdmin) {
  //   return <SegmentsAdmin {...props} />;
  // }

  return (
    <>
      <pre>
        <code>{JSON.stringify(props, null, 2)}</code>
      </pre>
    </>
    // {props.segments.map((segment) => (
    //   <SegmentRender key={segment.id} {...segment} />
    // ))}
  );
};
