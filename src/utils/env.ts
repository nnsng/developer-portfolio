type Env =
  | 'NEXT_PUBLIC_EMAILJS_SERVICE_ID'
  | 'NEXT_PUBLIC_EMAILJS_TEMPLATE_ID'
  | 'NEXT_PUBLIC_EMAILJS_PUBLIC_KEY'
  | 'NEXT_PUBLIC_RESUME_URL'

export const env = (name: Env) => {
  return process.env[name] || ''
}
