'use client'

import { env } from '@/utils/env'
import emailjs from '@emailjs/browser'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { TbMailForward } from 'react-icons/tb'
import { toast } from 'react-toastify'
import { z } from 'zod'

const serviceId = env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const templateId = env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const publicKey = env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is required' })
    .max(50, { message: 'Name must be less than 50 characters' }),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email address' }),
  message: z
    .string()
    .min(1, { message: 'Message is required' })
    .max(500, { message: 'Message must be less than 500 characters' }),
})

export type ContactFormValues = z.infer<typeof formSchema>

export function ContactForm() {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<ContactFormValues>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    resolver: zodResolver(formSchema),
  })

  const handleSendMail = async (formValues: ContactFormValues) => {
    const options = { publicKey }

    try {
      const res = await emailjs.send(serviceId, templateId, formValues, options)

      if (res.status === 200) {
        toast.success('Message sent successfully!')
      }
    } catch (error) {
      toast.error(String(error))
    }
  }

  return (
    <form onSubmit={handleSubmit(handleSendMail)}>
      <p className="mb-5 text-xl font-medium text-[#16f2b3] uppercase">Contact with me</p>
      <div className="max-w-3xl rounded-lg border border-[#464c6a] p-3 text-white lg:p-5">
        <p className="text-sm text-[#d3d8e8]">
          {
            "If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."
          }
        </p>
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-base">Name</label>
            <input
              className="w-full rounded-md border border-[#353a52] bg-[#10172d] px-3 py-2 ring-0 outline-0 transition-all duration-300 focus:border-[#16f2b3]"
              maxLength={50}
              {...register('name')}
            />
            {errors.name?.message && <p className="text-sm text-red-400">{errors.name.message}</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Email</label>
            <input
              className="w-full rounded-md border border-[#353a52] bg-[#10172d] px-3 py-2 ring-0 outline-0 transition-all duration-300 focus:border-[#16f2b3]"
              {...register('email')}
            />
            {errors.email?.message && (
              <p className="text-sm text-red-400">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Message</label>
            <textarea
              className="w-full rounded-md border border-[#353a52] bg-[#10172d] px-3 py-2 ring-0 outline-0 transition-all duration-300 focus:border-[#16f2b3]"
              maxLength={500}
              rows={4}
              {...register('message')}
            />
            {errors.message?.message && (
              <p className="text-sm text-red-400">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-1 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 py-2.5 text-center text-xs font-medium tracking-wider text-white uppercase no-underline transition-all duration-200 ease-out hover:gap-3 hover:text-white hover:no-underline disabled:bg-gray-600 disabled:bg-none disabled:hover:gap-1 md:px-12 md:py-3 md:text-sm md:font-semibold"
            role="button"
            disabled={isSubmitting}
          >
            <span>Send Message</span>
            <TbMailForward className="mt-1" size={18} />
          </button>
        </div>
      </div>
    </form>
  )
}
