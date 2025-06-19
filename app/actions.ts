"use server"

export async function submitContactForm(formData: FormData) {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  // Here you would typically send an email or save to a database
  console.log("Form submission:", { name, email, message })

  // In a real implementation, you would send an email to harshdeepathawale27@gmail.com
  // using a service like SendGrid, AWS SES, or a similar email service

  return {
    message: "Thanks for your message! I'll get back to you soon.",
  }
}
