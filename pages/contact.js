deploy
export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault()
    // demo-only: in a real site you'd POST to an API
    alert('Message sent (demo only)')
  }

  return (
    <main className="container">
      <h1>Contact</h1>
      <p>If you'd like to reach out, send an email to <a href="mailto:you@example.com">you@example.com</a> or use the demo form below.</p>

      <form className="contact-form" onSubmit={onSubmit}>
        <label>
          Your message
          <textarea name="message" rows={4} />
        </label>
        <button type="submit">Send</button>
      </form>
    </main>
  )
}
