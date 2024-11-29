import React from 'react';

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form>
        <label>
          Nombre:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Mensaje:
          <textarea name="message" required></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
