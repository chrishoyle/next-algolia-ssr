import Link from 'next/link'

export default () => (
  <header>
    <nav>
      <Link href='/'>
        <a>Home</a>
      </Link>{' | '}
      <Link href='/speakers'>
        <a>Speakers</a>
      </Link>{' | '}
      <Link href='/iphones'>
        <a>Iphones</a>
      </Link>{' | '}
      <Link href='/washers'>
        <a>Washers</a>
      </Link>
    </nav>
  </header>
)