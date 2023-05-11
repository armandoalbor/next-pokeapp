import { DarkLayout } from '@/layouts';
import Link from 'next/link';

export default function About() {
  return (
    <div>
      <p>
        Welcome to <strong>contact</strong> page
      </p>

      <h1>
        Navigate to{' '}
        <Link
          href="/contact"
          style={{
            color: '#64ceecff',
          }}>
          Contact
        </Link>
      </h1>

      <p style={{ marginTop: 48 }} className="description">
        Get started by editing <code className="code">pages/about.tsx</code>
      </p>
    </div>
  );
}

About.getLayout = function getLayout(page: JSX.Element) {
  return <DarkLayout>{page}</DarkLayout>;
};
