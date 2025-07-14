# Doctor Website

A responsive website for a doctor's practice featuring appointment booking and contact functionality.

## Features

- Responsive design for all devices
- Interactive appointment booking calendar
- Contact form for patient inquiries
- Doctor information and services showcase
- Mobile-friendly navigation

## Project Structure

```
doctor-website/
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── images/
│   ├── doctor-placeholder.jpg
│   └── hero-bg.jpg
└── index.html
```

## Setup Instructions

1. Replace placeholder images with actual images:
   - `images/doctor-placeholder.jpg` - A professional photo of the doctor
   - `images/hero-bg.jpg` - A background image for the hero section

2. Update doctor information:
   - Edit the doctor's name, credentials, and specialties in `index.html`
   - Update the services offered in the services section
   - Change contact information to reflect actual details

3. Calendar Integration:
   - The current calendar uses FullCalendar with static events
   - For a production site, you would need to:
     - Connect to a backend service to store appointments
     - Implement server-side validation for appointment requests
     - Set up email notifications for new appointments

4. Contact Form:
   - The current form uses client-side JavaScript for demonstration
   - For a production site, you would need to:
     - Set up a server-side script to process form submissions
     - Implement email sending functionality
     - Add spam protection (like reCAPTCHA)

## Deployment

To deploy this website:

1. Upload all files to your web hosting service
2. Ensure your hosting supports JavaScript
3. For appointment functionality, you'll need:
   - A backend service (PHP, Node.js, etc.)
   - Database storage for appointments
   - Email service integration

## Customization

- Colors: Edit CSS variables in `styles.css` to match your brand colors
- Fonts: Replace the font-family in `styles.css` with your preferred fonts
- Content: Update all text in `index.html` to match your practice's information

## Browser Compatibility

This website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)
