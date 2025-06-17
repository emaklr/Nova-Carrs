import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <Link className="logo" href="/">RiteWheel</Link>
        <button onClick={() => setOpen(!open)}>Menu</button>
        <ul style={{ display: open ? 'block' : 'none' }}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/vehicles">Vehicles</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
