import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './register.module.css';

export default function RegisterPerformer(): JSX.Element {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    stageName: '',
    performanceType: '',
    genre: '',
    experience: '',
    location: '',
    website: '',
    socialMedia: '',
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
          _subject: 'New Performer Registration - ArtLoop Events',
          _to: 'sanket.bakshi@gmail.com',
          registrationType: 'Performer',
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          stageName: '',
          performanceType: '',
          genre: '',
          experience: '',
          location: '',
          website: '',
          socialMedia: '',
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
      title="Register as Performer"
      description="Showcase your talent at curated events">
      <div className={styles.registerPage}>
        <div className={styles.registerHeader}>
          <div className="container">
            <h1>Register as Performer</h1>
            <p>Share your talent with exclusive audiences</p>
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
                    placeholder="Jane Doe"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="stageName">Stage/Artist Name *</label>
                  <input
                    type="text"
                    id="stageName"
                    name="stageName"
                    value={formData.stageName}
                    onChange={handleChange}
                    required
                    placeholder="The Jane Doe Quartet"
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
                    placeholder="jane@example.com"
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
                  <label htmlFor="performanceType">Performance Type *</label>
                  <select
                    id="performanceType"
                    name="performanceType"
                    value={formData.performanceType}
                    onChange={handleChange}
                    required>
                    <option value="">Select performance type</option>
                    <option value="solo">Solo Artist</option>
                    <option value="band">Band/Group</option>
                    <option value="dj">DJ</option>
                    <option value="orchestra">Orchestra/Ensemble</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="genre">Primary Genre *</label>
                  <select
                    id="genre"
                    name="genre"
                    value={formData.genre}
                    onChange={handleChange}
                    required>
                    <option value="">Select genre</option>
                    <option value="jazz">Jazz</option>
                    <option value="classical">Classical</option>
                    <option value="rock">Rock</option>
                    <option value="pop">Pop</option>
                    <option value="acoustic">Acoustic</option>
                    <option value="electronic">Electronic</option>
                    <option value="blues">Blues</option>
                    <option value="folk">Folk</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="experience">Years of Experience *</label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required>
                    <option value="">Select experience level</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="location">Location/City *</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    placeholder="Los Angeles, CA"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="website">Website/Portfolio</label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://yourwebsite.com"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="socialMedia">Social Media Links</label>
                  <input
                    type="text"
                    id="socialMedia"
                    name="socialMedia"
                    value={formData.socialMedia}
                    onChange={handleChange}
                    placeholder="Instagram, YouTube, etc."
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Tell us about your performance style</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Describe your performance style, notable achievements, equipment needs, etc."
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
                    Thank you for your registration! We'll review your profile and contact you at {formData.email}.
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
                <h3>Why Perform with Us?</h3>
                <ul>
                  <li>Exclusive, high-quality events</li>
                  <li>Professional event coordination</li>
                  <li>Competitive compensation</li>
                  <li>Network with top venues and hosts</li>
                  <li>Grow your audience and reputation</li>
                </ul>
              </div>

              <div className={styles.infoCard}>
                <h3>How It Works</h3>
                <ol>
                  <li>Submit your performer profile</li>
                  <li>We review your experience and style</li>
                  <li>Get matched with suitable events</li>
                  <li>Receive booking details and contracts</li>
                  <li>Perform and get paid!</li>
                </ol>
              </div>

              <div className={styles.infoCard}>
                <h3>What We Look For</h3>
                <ul>
                  <li>Professional performance experience</li>
                  <li>Reliable and punctual</li>
                  <li>Quality equipment and setup</li>
                  <li>Engaging stage presence</li>
                  <li>Positive references</li>
                </ul>
              </div>

              <div className={styles.infoCard}>
                <h3>Questions?</h3>
                <p>Want to learn more about performing at our events?</p>
                <p><strong>Email:</strong> sanket.bakshi@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
