export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-32 my-5 text-gray mx-auto w-3/4">
      <hr className="my-6 border-gray sm:mx-auto dark:border-gray-700 lg:my-8 " />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 mt-4 text-center">
        © {year + " "}
        <a href="/" className="hover:underline hover:text-white">
          Natraj Padwani™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}
