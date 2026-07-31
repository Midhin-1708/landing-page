export function validateContact(formData) {
  
  if (
    !formData.fullName.trim() ||
    !formData.email.trim() ||
    !formData.phone.trim() ||
    !formData.subject.trim() ||
    !formData.message.trim()
  ) {
    return "All fields are required.";
  }

 
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(formData.email)) {
    return "Please enter a valid email address.";
  }

  
  const phonePattern = /^[0-9]{10}$/;

  if (!phonePattern.test(formData.phone)) {
    return "Phone number must contain exactly 10 digits.";
  }

  return "";
}