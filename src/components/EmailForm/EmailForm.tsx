import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './EmailForm.module.scss';

export default function EmailForm() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const serviceId = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY;


  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus('sending');

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
        setStatus('sent');
        form.current?.reset();
      })
      .catch(() => {
        setStatus('error');
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.form}>
      <label>
        Name<br />
        <input type="text" name="name" required className={styles.input} />
      </label>
      <label>
        Email<br />
        <input type="email" name="email" required className={styles.input} />
      </label>
      <label>
        Message<br />
        <textarea name="message" rows={5} required className={styles.textarea} />
      </label>
      <button type="submit" disabled={status === 'sending'} className={styles.button}>
        {status === 'sending' ? 'Sending…' : 'Send'}
      </button>
      {status === 'sent' && <p>Message sent!</p>}
      {status === 'error' && <p>Failed to send. Try again.</p>}
    </form>
  );
}
