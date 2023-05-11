import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>
        Welcome to <strong>home</strong> page
      </p>

      <h1>
        Navigate to{" "}
        <Link
          href="/about"
          style={{
            color: "#64ceecff",
          }}
        >
          About
        </Link>
      </h1>

      <p style={{ marginTop: 48 }} className="description">
        Get started by editing <code className="code">pages/index.tsx</code>
      </p>
    </div>
  );
}
