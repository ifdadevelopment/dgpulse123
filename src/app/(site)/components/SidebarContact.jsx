'use client';

import { useState } from 'react';

export default function SidebarContact() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const formData = new FormData(e.currentTarget);

    try {
      await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      setMessage('Message sent successfully!');
      e.currentTarget.reset();
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`sidebar-contact  ${open ? 'show active' : ''} 
      fixed right-0 top-0 z-50 h-full w-full sm:w-[380px] bg-white shadow-xl`}
    >
      <div
        className="toggle form-togle active cursor-pointer bg-blue-600 text-white px-4 py-3"
        onClick={() => setOpen(!open)}
      >
        <span className="mobile-hide"> Let&apos;s Connect</span>
      </div>

      <h2 className="text-xl font-semibold px-6 pt-6">Leave a Message</h2>

      <div className="scroll px-2 pb-6 overflow-y-auto max-h-[calc(100vh-120px)]">
        <form
          id="letsconnect_form"
          onSubmit={handleSubmit}
          className="space-y-4 mt-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full border rounded px-3 py-2"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full border rounded px-3 py-2"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full border rounded px-3 py-2"
          />

          <input
            type="url"
            name="website"
            placeholder="Website URL"
            className="w-full border rounded px-3 py-2"
          />

          <textarea
            name="message"
            placeholder="Message here.."
            rows={4}
            className="w-full border rounded px-3 py-2"
          />
          <input type="hidden" name="form_title" value="Let's Connect" />
          <input
            type="hidden"
            name="current_page_url"
            value="https://www.ezrankings.com/web-development-company-india.html"
          />
          <input
            type="hidden"
            name="ez_key"
            value="vwizwyMJh0Hh2KGyBgZscPnoobaeic6"
          />
          <input type="hidden" name="form_id" value="blogconnect_form" />

          <input
            type="submit"
            className="submitbtn bg-blue-600 hover:bg-blue-700 text-white w-full py-3 rounded cursor-pointer"
            value={loading ? 'Sending...' : 'Send'}
            disabled={loading}
          />

          <span className="msg text-sm block text-center text-green-600">
            {message}
          </span>
        </form>
      </div>
    </div>
  );
}
