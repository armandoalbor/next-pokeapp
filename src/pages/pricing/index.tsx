import Link from "next/link";

export default function PricingPage() {
  return (
    <div>
      <p>
        Welcome to <strong>pricing</strong> page
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
        Get started by editing{" "}
        <code className="code">pages/pricing/index.tsx</code>
      </p>
    </div>
  );
}
