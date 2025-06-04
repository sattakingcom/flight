import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <header className="text-center">
        <h1 className="text-3xl font-bold">Flight Booking Helpline</h1>
        <p className="mt-2">Speak to a Live Agent. Book Your Flight Now.</p>
        <p className="mt-1 text-red-600 font-semibold text-lg">24/7 Flight Booking Support</p>
      </header>

      <div className="my-6 text-center">
        <p className="text-xl font-semibold">📞 Call Now: <a href="tel:+18881234567" className="text-blue-600 underline">+1 (888) 123-4567</a></p>
        <p className="text-sm text-gray-500">No Booking Fees. Get Best Deals Instantly.</p>
      </div>

      <section className="max-w-2xl mx-auto bg-gray-50 p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Why Call Us?</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Book Domestic & International Flights</li>
          <li>Change or Cancel Bookings</li>
          <li>Senior Citizen & Group Discounts</li>
          <li>Last Minute Deals & Promotions</li>
          <li>Talk to Real Travel Agents</li>
        </ul>
      </section>

      <footer className="text-center mt-10 text-sm text-gray-500">
        <Link href="/privacy">Privacy Policy</Link> | <Link href="/contact">Contact Us</Link><br />
        © 2025 Flight Booking Helpline. All rights reserved.
      </footer>
    </div>
  );
}
