"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import confetti from "canvas-confetti";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { SERVICES_DATA } from "@/data/services";

const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  serviceType: z.string().min(1, "Please select an area of interest"),
  budget: z.string().optional(),
  message: z.string().min(10, "Please provide more details (at least 10 characters)"),
});

type FormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      serviceType: "Website Design & Development",
      budget: "$5k - $15k",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to submit request.");
      }

      // Success
      setIsSubmitted(true);
      reset();

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#5B4CFB", "#A25BFB", "#EC4899", "#16C784"],
      });
    } catch (err: unknown) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#ECECF1] text-center shadow-lg space-y-4">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-extrabold text-[#0E0E12]">
          Project Inquiry Received!
        </h3>
        <p className="text-sm text-[#5B5B66] max-w-md mx-auto leading-relaxed">
          Thank you for reaching out to PEP Software. Our solutions architects are reviewing your details and will get back to you within 24 business hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-4 px-6 py-2.5 rounded-full bg-[#EFEDFF] text-[#5B4CFB] font-semibold text-xs hover:bg-[#5B4CFB] hover:text-white transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-8 sm:p-12 rounded-3xl bg-white border border-[#ECECF1] shadow-xl space-y-6"
    >
      <div className="border-b border-[#ECECF1] pb-4">
        <h3 className="text-2xl font-extrabold text-[#0E0E12]">
          Start a Project
        </h3>
        <p className="text-sm text-[#5B5B66] mt-1">
          Tell us about your product vision, timeline, and goals.
        </p>
      </div>

      {errorMessage && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Row 1: Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#0E0E12] uppercase tracking-wider mb-2">
            Full Name *
          </label>
          <input
            type="text"
            placeholder="John Doe"
            {...register("fullName")}
            className="w-full px-4 py-3 rounded-xl border border-[#ECECF1] text-sm text-[#0E0E12] placeholder:text-[#9494A0] outline-none focus:border-[#5B4CFB] focus:ring-2 focus:ring-[#5B4CFB]/20 transition-all"
          />
          {errors.fullName && (
            <p className="text-xs text-red-500 mt-1 font-medium">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-bold text-[#0E0E12] uppercase tracking-wider mb-2">
            Work Email *
          </label>
          <input
            type="email"
            placeholder="john@company.com"
            {...register("email")}
            className="w-full px-4 py-3 rounded-xl border border-[#ECECF1] text-sm text-[#0E0E12] placeholder:text-[#9494A0] outline-none focus:border-[#5B4CFB] focus:ring-2 focus:ring-[#5B4CFB]/20 transition-all"
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1 font-medium">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Phone & Service */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#0E0E12] uppercase tracking-wider mb-2">
            Phone / WhatsApp *
          </label>
          <input
            type="tel"
            placeholder="+91 98765 43210"
            {...register("phone")}
            className="w-full px-4 py-3 rounded-xl border border-[#ECECF1] text-sm text-[#0E0E12] placeholder:text-[#9494A0] outline-none focus:border-[#5B4CFB] focus:ring-2 focus:ring-[#5B4CFB]/20 transition-all"
          />
          {errors.phone && (
            <p className="text-xs text-red-500 mt-1 font-medium">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-bold text-[#0E0E12] uppercase tracking-wider mb-2">
            Service Required *
          </label>
          <select
            {...register("serviceType")}
            className="w-full px-4 py-3 rounded-xl border border-[#ECECF1] text-sm text-[#0E0E12] outline-none focus:border-[#5B4CFB] focus:ring-2 focus:ring-[#5B4CFB]/20 transition-all bg-white"
          >
            {SERVICES_DATA.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Design Training Academy">Design Training Academy</option>
            <option value="Other Consultation">Other Custom Consultation</option>
          </select>
          {errors.serviceType && (
            <p className="text-xs text-red-500 mt-1 font-medium">
              {errors.serviceType.message}
            </p>
          )}
        </div>
      </div>

      {/* Row 3: Budget Range */}
      <div>
        <label className="block text-xs font-bold text-[#0E0E12] uppercase tracking-wider mb-2">
          Estimated Budget (Optional)
        </label>
        <select
          {...register("budget")}
          className="w-full px-4 py-3 rounded-xl border border-[#ECECF1] text-sm text-[#0E0E12] outline-none focus:border-[#5B4CFB] focus:ring-2 focus:ring-[#5B4CFB]/20 transition-all bg-white"
        >
          <option value="< $5k">&lt; $5,000 / Starter</option>
          <option value="$5k - $15k">$5,000 - $15,000 / Growth</option>
          <option value="$15k - $50k">$15,000 - $50,000 / Scale</option>
          <option value="$50k+">$50,000+ / Enterprise</option>
        </select>
      </div>

      {/* Row 4: Message */}
      <div>
        <label className="block text-xs font-bold text-[#0E0E12] uppercase tracking-wider mb-2">
          Project Brief / Message *
        </label>
        <textarea
          rows={4}
          placeholder="Briefly describe your project, target audience, timeline, or key objectives..."
          {...register("message")}
          className="w-full px-4 py-3 rounded-xl border border-[#ECECF1] text-sm text-[#0E0E12] placeholder:text-[#9494A0] outline-none focus:border-[#5B4CFB] focus:ring-2 focus:ring-[#5B4CFB]/20 transition-all resize-y"
        />
        {errors.message && (
          <p className="text-xs text-red-500 mt-1 font-medium">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-gradient-to-r from-[#5B4CFB] via-[#7B4CFB] to-[#EC4899] text-white font-bold text-base shadow-[0_10px_25px_-5px_rgba(91,76,251,0.5)] hover:shadow-[0_16px_32px_-5px_rgba(91,76,251,0.65)] hover:-translate-y-0.5 active:scale-95 disabled:opacity-70 disabled:pointer-events-none transition-all duration-200 cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Sending Inquiry...</span>
          </>
        ) : (
          <>
            <span>Submit Project Inquiry</span>
            <Send className="w-4 h-4 ml-1" />
          </>
        )}
      </button>

      <p className="text-[11px] text-center text-[#9494A0]">
        By submitting, you agree to our privacy policy. We treat your information with strict confidentiality.
      </p>
    </form>
  );
}
