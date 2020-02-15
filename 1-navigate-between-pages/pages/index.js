import Link from 'next/link';

export default function Index() {
  return (
    <div>
      <Link href="/about" title="About Page">
        <a>About Page</a>
      </Link>
      <p>Hello Next.js</p>
    </div>
  )
}
