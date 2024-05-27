'use client'

import { isValidEmail } from '@/utils/check-email'
import { env } from '@/utils/env'
import emailjs from '@emailjs/browser'
import { useState, type MouseEvent } from 'react'
import { TbMailForward } from 'react-icons/tb'
import { toast } from 'react-toastify'

const serviceId = env('NEXT_PUBLIC_EMAILJS_SERVICE_ID')
const templateId = env('NEXT_PUBLIC_EMAILJS_TEMPLATE_ID')
const publicKey = env('NEXT_PUBLIC_EMAILJS_PUBLIC_KEY')

const canSubmit = serviceId && templateId && publicKey

function ContactForm() {
  const [input, setInput] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [error, setError] = useState({
    email: false,
    required: false,
  })

  const checkRequired = () => {
    if (input.email && input.message && input.name) {
      setError({ ...error, required: false })
    }
  }

  const handleSendMail = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!canSubmit) return
    if (!input.email || !input.message || !input.name) {
      setError({ ...error, required: true })
      return
    } else if (error.email) {
      return
    } else {
      setError({ ...error, required: false })
    }
    const options = { publicKey }

    try {
      const res = await emailjs.send(serviceId, templateId, input, options)

      if (res.status === 200) {
        toast.success('Message sent successfully!')
        setInput({
          name: '',
          email: '',
          message: '',
        })
      }
    } catch (error: any) {
      toast.error(error?.text || error)
    }
  }

  return (
    <div>
      <p className="mb-5 text-xl font-medium uppercase text-[#16f2b3]">Contact with me</p>
      <div className="max-w-3xl rounded-lg border border-[#464c6a] p-3 text-white lg:p-5">
        <p className="text-sm text-[#d3d8e8]">
          {
            "If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."
          }
        </p>
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Name: </label>
            <input
              className="w-full rounded-md border border-[#353a52] bg-[#10172d] px-3 py-2 outline-0 ring-0 transition-all duration-300 focus:border-[#16f2b3]"
              type="text"
              maxLength={100}
              required={true}
              onChange={(e) => setInput({ ...input, name: e.target.value })}
              onBlur={checkRequired}
              value={input.name}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Your Email: </label>
            <input
              className="w-full rounded-md border border-[#353a52] bg-[#10172d] px-3 py-2 outline-0 ring-0 transition-all duration-300 focus:border-[#16f2b3]"
              type="email"
              maxLength={100}
              required={true}
              value={input.email}
              onChange={(e) => setInput({ ...input, email: e.target.value })}
              onBlur={() => {
                checkRequired()
                setError({ ...error, email: !isValidEmail(input.email) })
              }}
            />
            {error.email && <p className="text-sm text-red-400">Please provide a valid email!</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Your Message: </label>
            <textarea
              className="w-full rounded-md border border-[#353a52] bg-[#10172d] px-3 py-2 outline-0 ring-0 transition-all duration-300 focus:border-[#16f2b3]"
              maxLength={500}
              name="message"
              required={true}
              onChange={(e) => setInput({ ...input, message: e.target.value })}
              onBlur={checkRequired}
              rows={4}
              value={input.message}
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            {error.required && (
              <p className="text-sm text-red-400">Email and Message are required!</p>
            )}
            <button
              className="flex items-center gap-1 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 py-2.5 text-center text-xs font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:gap-3 hover:text-white hover:no-underline disabled:bg-gray-600 disabled:bg-none disabled:hover:gap-1 md:px-12 md:py-3 md:text-sm md:font-semibold"
              role="button"
              onClick={handleSendMail}
              disabled={!canSubmit}
            >
              <span>Send Message</span>
              <TbMailForward className="mt-1" size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
