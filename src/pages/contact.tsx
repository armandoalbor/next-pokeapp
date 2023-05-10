import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <p>
        Welcome to <strong>contact</strong> page
      </p>

      <h1>
        Navigate to{" "}
        <Link
          href="/"
          style={{
            color: "#64ceecff",
          }}
        >
          Home
        </Link>
      </h1>

      <p style={{ marginTop: 48 }} className="description">
        Get started by editing <code className="code">pages/contact.tsx</code>
      </p>
    </div>
  );
}
