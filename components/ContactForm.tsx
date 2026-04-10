"use client"

import { useActionState, useEffect } from "react"
import { toast } from "sonner"
import { sendMessage } from "@/lib/actions/message"

export default function ContactForm({ 
  namePlaceholder, 
  emailPlaceholder, 
  messagePlaceholder, 
  sendButton 
}: { 
  namePlaceholder: string
  emailPlaceholder: string
  messagePlaceholder: string
  sendButton: string
}) {
  const [state, action, pending] = useActionState(sendMessage, null)

  useEffect(() => {
    if (state?.success) {
      toast.success("Message sent successfully!")
    } else if (state?.error) {
      toast.error(state.error)
    }
  }, [state])

  return (
    <form
      action={action}
      className="flex bg-[#F3EFF8F3] rounded-2xl h-full flex-1 flex-col gap-6 p-8"
    >
      <div className="flex gap-4">
        <input
          type="text"
          name="name"
          placeholder={namePlaceholder}
          required
          className="flex-1 h-[48px] rounded-lg px-4 text-sm outline-none"
          style={{ background: "#fff" }}
        />
        <input
          type="email"
          name="email"
          placeholder={emailPlaceholder}
          required
          className="flex-1 h-[48px] rounded-lg px-4 text-sm outline-none"
          style={{ background: "#fff" }}
        />
      </div>

      <textarea
        name="message"
        placeholder={messagePlaceholder}
        required
        className="w-full flex-1 min-h-[160px] rounded-lg px-4 py-3 text-sm outline-none resize-none"
        style={{ background: "#fff" }}
      />

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={pending}
          className="px-10 py-3 bg-[#F5A623] hover:bg-[#e09510] transition-colors text-white font-semibold rounded-full disabled:opacity-60"
        >
          {pending ? "Sending..." : sendButton}
        </button>
      </div>
    </form>
  )
}