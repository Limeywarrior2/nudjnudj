// pages/index.tsx
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nudge – Smart Recurring Reminders</title>
        <meta name="description" content="Nudge is a simple tool that sends recurring reminders to you or your clients via email or SMS." />
      </Head>

      <main style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: 700, margin: 'auto' }}>
        <h1>🔔 Nudge</h1>
        <h2>Simple recurring reminders — to yourself or anyone else</h2>
        <p>
          Nudge lets you send automated, recurring email or SMS reminders to yourself, your clients, or your team.
          No apps to install. No calendars to manage.
        </p>

        <h3>Use cases</h3>
        <ul>
          <li>✅ Remind clients to attend sessions</li>
          <li>✅ Nudge yourself to drink water every 3 hours</li>
          <li>✅ Send team checklists weekly</li>
        </ul>

        <h3>Pricing</h3>
        <ul>
          <li><strong>Free</strong> – 3 nudges, email only</li>
          <li><strong>Starter (£9/month)</strong> – 15 nudges, email + SMS</li>
          <li><strong>Pro (£19/month)</strong> – Unlimited nudges, logs, custom branding</li>
        </ul>

        <h3>Want early access?</h3>
        <p>
          Be first to try Nudge when we launch. You’ll also get one month of Pro for free.
        </p>

        <Link href="https://tally.so/r/nudge-waitlist" passHref>
          <button style={{ padding: '1rem', background: '#000', color: '#fff', border: 'none', cursor: 'pointer', marginTop: '1rem' }}>
            👉 Join the Waitlist
          </button>
        </Link>
      </main>

      <footer style={{ textAlign: 'center', marginTop: '3rem', fontSize: '0.9rem', color: '#777' }}>
        Nudge is an independent project by [Your Name]. Built for simplicity.
      </footer>
    </>
  );
}
