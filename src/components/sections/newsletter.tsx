export function NewsletterSection() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Get the latest updates on flight deals, travel tips, and exclusive
          offers straight to your inbox.
        </p>
        <form className="max-w-md mx-auto flex gap-4 flex-col md:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-lg text-gray-900"
          />
          <button className="px-6 py-2 bg-white text-primary font-semibold rounded-lg hover:bg-primary-lightest transition-colors">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
