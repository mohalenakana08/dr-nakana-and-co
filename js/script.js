document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }
    
    // Initialize FullCalendar
    const calendarEl = document.getElementById('calendar');
    if (calendarEl) {
        const calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek'
            },
            selectable: true,
            selectMirror: true,
            businessHours: {
                daysOfWeek: [1, 2, 3, 4, 5, 6], // Monday - Saturday
                startTime: '09:00',
                endTime: '17:00',
            },
            // Sample events - in a real application, these would come from a database
            events: [
                {
                    title: 'Booked',
                    start: '2025-07-15T10:00:00',
                    end: '2025-07-15T11:00:00',
                    color: '#e74c3c'
                },
                {
                    title: 'Booked',
                    start: '2025-07-16T14:00:00',
                    end: '2025-07-16T15:00:00',
                    color: '#e74c3c'
                },
                {
                    title: 'Booked',
                    start: '2025-07-18T09:00:00',
                    end: '2025-07-18T10:00:00',
                    color: '#e74c3c'
                }
            ],
            select: function(info) {
                // When a date/time is selected, we could:
                // 1. Show a modal for booking
                // 2. Auto-fill the appointment form
                // 3. Or other user-friendly interactions
                
                // For this example, we'll auto-fill the appointment form date
                const dateInput = document.getElementById('date');
                if (dateInput) {
                    // Format the date as YYYY-MM-DD for the input
                    const year = info.start.getFullYear();
                    const month = String(info.start.getMonth() + 1).padStart(2, '0');
                    const day = String(info.start.getDate()).padStart(2, '0');
                    dateInput.value = `${year}-${month}-${day}`;
                    
                    // Scroll to the appointment form
                    document.getElementById('appointment').scrollIntoView({ behavior: 'smooth' });
                }
                
                calendar.unselect(); // Clear the selection
            }
        });
        
        calendar.render();
    }
    
    // Appointment Form Submission
    const appointmentForm = document.getElementById('appointmentForm');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(appointmentForm);
            const appointmentData = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                date: formData.get('date'),
                time: formData.get('time'),
                reason: formData.get('reason')
            };
            
            // In a real application, you would send this data to a server
            // For this demo, we'll just show a success message
            alert('Thank you! Your appointment request has been submitted. We will contact you shortly to confirm.');
            appointmentForm.reset();
            
            // Log the data (for demonstration purposes)
            console.log('Appointment Request:', appointmentData);
        });
    }
    
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const contactData = {
                name: formData.get('contactName'),
                email: formData.get('contactEmail'),
                subject: formData.get('subject'),
                message: formData.get('message')
            };
            
            // In a real application, you would send this data to a server
            // For this demo, we'll just show a success message
            alert('Thank you for your message! We will get back to you as soon as possible.');
            contactForm.reset();
            
            // Log the data (for demonstration purposes)
            console.log('Contact Form Submission:', contactData);
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navMenu.classList.contains('show')) {
                    navMenu.classList.remove('show');
                }
            }
        });
    });
});
