import { A } from "@solidjs/router";

const NotFound = () => {
  return (
    <section class="text-gray-700 p-8">
      <h1 class="text-2xl font-bold">404: Not Found</h1>
      <p class="mt-4">It's gone 😞</p>
      <A href="/" style="text-decoration: underline;">
        <i class="fa-solid fa-house"></i>
        Go to Home
      </A>
    </section>
  );
};

export default NotFound;
