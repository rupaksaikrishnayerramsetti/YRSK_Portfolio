export const handleError = (formData) => {
    let hasError = false;
    const newErrors = {};

    // Validate email
    const email = formData.get('from_email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.from_email = 'Invalid email address';
      hasError = true;
    }

    // Validate name
    const name = formData.get('from_name');
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(name)) {
      newErrors.from_name = 'Name should contain only alphabets';
      hasError = true;
    }

    // Validate subject
    const subject = formData.get('subject');
    if (!subject) {
      newErrors.subject = 'Subject is required';
      hasError = true;
    }

    // Validate message
    const message = formData.get('message');
    if (!message) {
      newErrors.message = 'Message is required';
      hasError = true;
    }

    return { hasError, errors: newErrors };
  }