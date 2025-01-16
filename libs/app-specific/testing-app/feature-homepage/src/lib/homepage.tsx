import { $, component$ } from '@qwik.dev/core';

import { Link } from '@qwik.dev/router';

export const Homepage = component$(
  () => {
    return (
      <div>
       <h1>
         Homepage 👋
        </h1>
        <Link href="/test">
        Go to test route
        </Link>
        </div>
    );
  },
);
