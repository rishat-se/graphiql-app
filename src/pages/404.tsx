import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <h2>Ooops, Page Not Found</h2>
      <p>The requested URL was not found on this server.</p>
      <Link href="/">Return to Home Page</Link>
    </div>
  );
}
