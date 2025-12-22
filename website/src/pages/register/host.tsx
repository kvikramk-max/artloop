import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './register.module.css';

export default function RegisterHost(): JSX.Element {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    eventType: '',
    preferredDate: '',
    guestCount: '',
    budget: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using FormSpree for email submission
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _replyto: formData.email,
          _subject: 'New Host Registration - ArtLoop Events',
          _to: 'sanket.bakshi@gmail.com',
          registrationType: 'Host',
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          organization: '',
          eventType: '',
          preferredDate: '',
          guestCount: '',
          budget: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout
      title="Register as Host"
      description="Host curated events with top performers">
      <div className={styles.registerPage}>
        <div className={styles.registerHeader}>
          <div className="container">
            <h1>Become a Host</h1>
            <p>Create unforgettable experiences for your guests</p>
          </div>
        </div>

        <div className="container">
          <div className={styles.contentWrapper}>
            <div className={styles.formSection}>
              <form onSubmit={handleSubmit} className={styles.registrationForm}>
                <div className={styles.formGroup}>
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="organization">Organization/Company</label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Your Company Name"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="eventType">Event Type *</label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required>
                    <option value="">Select event type</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="private">Private Party</option>
                    <option value="wedding">Wedding</option>
                    <option value="gala">Gala/Fundraiser</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="preferredDate">Preferred Date</label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="guestCount">Expected Number of Guests *</label>
                  <select
                    id="guestCount"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    required>
                    <option value="">Select range</option>
                    <option value="25-50">25-50</option>
                    <option value="50-100">50-100</option>
                    <option value="100-200">100-200</option>
                    <option value="200+">200+</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="budget">Budget Range</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}>
                    <option value="">Select budget range</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000-25000">$10,000 - $25,000</option>
                    <option value="25000-50000">$25,000 - $50,000</option>
                    <option value="50000+">$50,000+</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Tell us about your event vision</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Share your ideas, requirements, or any specific requests..."
                  />
                </div>

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                </button>

                {submitStatus === 'success' && (
                  <div className={styles.successMessage}>
                    Thank you for your registration! We'll contact you shortly at {formData.email}.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className={styles.errorMessage}>
                    There was an error submitting your registration. Please email us directly at sanket.bakshi@gmail.com.
                  </div>
                )}
              </form>
            </div>

            <div className={styles.infoSection}>
              <div className={styles.infoCard}>
                <h3>Why Host with Us?</h3>
                <ul>
                  <li>Curated selection of talented performers</li>
                  <li>Full event planning and coordination</li>
                  <li>Customized experiences for your guests</li>
                  <li>Professional event management</li>
                  <li>Memorable and unique entertainment</li>
                </ul>
              </div>

              <div className={styles.infoCard}>
                <h3>How It Works</h3>
                <ol>
                  <li>Submit your registration form</li>
                  <li>We'll contact you to discuss details</li>
                  <li>Get matched with perfect performers</li>
                  <li>We handle all the planning</li>
                  <li>Enjoy your unforgettable event!</li>
                </ol>
              </div>

              <div className={styles.infoCard}>
                <h3>Need Help?</h3>
                <p>Have questions about hosting an event?</p>
                <p><strong>Email:</strong> sanket.bakshi@gmail.com</p>
                <p><strong>Phone:</strong> Available after registration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
