import { useMemo, useState } from 'react';
import api from '../services/api';
import useScrollReveal from '../hooks/useScrollReveal';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  date: '',
  service: '',
  message: '',
};

function Booking() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isVisible = useScrollReveal();

  const isFormValid = useMemo(() => {
    const { name, email, phone, date, service, message } = formData;
    return name && email && phone && date && service && message;
  }, [formData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isFormValid) {
      setStatus({ type: 'error', message: 'Please complete every field before submitting.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await api.post('/booking', formData);
      setStatus({ type: 'success', message: response.data.message });
      setFormData(initialForm);
    } catch (error) {
      let message = 'Something went wrong. Please try again later.';

      if (error?.response?.data?.message) {
        message = error.response.data.message;
      } else if (error?.request) {
        message = 'Network error: Please check your connection and try again.';
      }

      setStatus({ type: 'error', message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`booking ${isVisible ? 'fade-in' : ''}`} id="contact">
      <div className="section-heading">
        <p className="eyebrow">Reserve your session</p>
        <h2>Book Your Session</h2>
        <p>Share your vision and we will craft a photography experience tailored to your story.</p>
      </div>

      <form className="booking-form" onSubmit={handleSubmit} noValidate>
        <div className="input-row">
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
        </div>

        <div className="input-row">
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
        </div>

        <div className="select-wrap">
          <select name="service" value={formData.service} onChange={handleChange}>
            <option value="" disabled>
              Select Service
            </option>
            <option value="Wedding Photography">Wedding Photography</option>
            <option value="Birthday Shoot">Birthday Shoot</option>
            <option value="Portrait Shoot">Portrait Shoot</option>
            <option value="Videography">Videography</option>
          </select>
        </div>

        <textarea name="message" placeholder="Tell us more about your vision" rows="5" value={formData.message} onChange={handleChange}></textarea>

        {status.message ? <p className={`status ${status.type}`}>{status.message}</p> : null}

        <button className="btn primary" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Book Now'}
        </button>
      </form>
    </section>
  );
}

export default Booking;