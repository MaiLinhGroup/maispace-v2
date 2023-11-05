export default function Footer() {
  return (
    <footer className="mt-8 py-4">
      <div className="container mx-auto flex justify-center">
        MaiSpace &copy; {new Date().getFullYear()} by MaiLinhGroup is licensed
        under&nbsp;
        <a
          href="https://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1"
          className="text-blue-600 hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          CC BY-SA 4.0
        </a>
      </div>
    </footer>
  );
}
