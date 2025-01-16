import { component$ } from "@qwik.dev/core";
import { type DocumentHead } from "@qwik.dev/router";

export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
      {/* <Homepage></Homepage> */}
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
