"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { Code2, Palette, Zap, CheckCircle2, ArrowRight, Mail, Facebook, Instagram, Star, Menu, X, Send, MapPin, Phone, Clock, FileText, Building2, Target, Shield, Plus, Minus } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import { useState, useEffect, useRef } from "react";
import { LaptopIllustration } from "@/components/LaptopIllustration";
import { SectionBadge, GlowButton } from "@/components/shared/home-shared";
import { siteConfig } from "@/content/site-config";

function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    budget: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    setSubmitStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = (await res.json().catch(() => null)) as null | { ok?: boolean; error?: string };

      if (!res.ok || !data?.ok) {
        setSubmitStatus("error");
        setErrorMessage(data?.error || "Nie udało się wysłać wiadomości. Spróbuj ponownie.");
        return;
      }

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        budget: "",
      });
    } catch {
      setSubmitStatus("error");
      setErrorMessage("Nie udało się wysłać wiadomości. Sprawdź połączenie i spróbuj ponownie.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus("idle");
        setErrorMessage(null);
      }, 4000);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(0,224,198,0.3) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.2, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(46,144,250,0.3) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <SectionBadge>Kontakt</SectionBadge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Porozmawiajmy o{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00E0C6, #2E90FA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Twoim projekcie
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ fontFamily: "var(--font-body)", color: "rgba(230, 237, 246, 0.75)" }}>
            Masz pomysł na projekt? Wypełnij formularz, a odezwę się w ciągu 24 godzin.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <Link href="/brief">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all duration-300 group"
                style={{
                  background: "linear-gradient(135deg, #00E0C6, #2E90FA)",
                  color: "#0B1220",
                  boxShadow: "0 10px 40px rgba(0,224,198,0.3)",
                }}
              >
                <FileText className="w-5 h-5" />
                <span>Wypełnij szczegółowy brief</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left side - Contact info cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-6"
          >
            <div
              className="rounded-2xl p-8 border backdrop-blur-sm relative overflow-hidden group"
              style={{
                backgroundColor: "#121A2B",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(circle at top left, rgba(0,224,198,0.1), transparent)",
                }}
              />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                  Informacje kontaktowe
                </h3>
                
                <div className="space-y-6">
                  <ContactInfoItem
                    icon={Mail}
                    label="Email"
                    value={siteConfig.email}
                    href={`mailto:${siteConfig.email}`}
                  />
                  <ContactInfoItem
                    icon={Phone}
                    label="Telefon"
                    value={siteConfig.phone}
                    href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                  />
                  <ContactInfoItem
                    icon={MapPin}
                    label="Lokalizacja"
                    value={siteConfig.location}
                  />
                  <ContactInfoItem
                    icon={Clock}
                    label="Dostępność"
                    value={siteConfig.availability}
                  />
                </div>

                <div className="mt-8 pt-8 border-t border-[rgba(255,255,255,0.08)]">
                  <p className="text-sm mb-4" style={{ fontFamily: "var(--font-body)", color: "rgba(230, 237, 246, 0.55)" }}>
                    Znajdź mnie również na:
                  </p>
                  <div className="flex gap-3">
                    <SocialIconButton href={siteConfig.social.facebook} icon={Facebook} />
                    <SocialIconButton href={siteConfig.social.instagram} icon={Instagram} />
                  </div>
                </div>
              </div>
            </div>

            {/* Stats card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="rounded-2xl p-8 border relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #121A2B, #182235)",
                borderColor: "rgba(0,224,198,0.2)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-30"
                style={{
                  background: "radial-gradient(circle, rgba(0,224,198,0.5) 0%, transparent 70%)",
                }}
              />
              <div className="relative z-10">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div
                      className="text-3xl font-bold mb-1"
                      style={{
                        fontFamily: "var(--font-display)",
                        background: "linear-gradient(135deg, #00E0C6, #2E90FA)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      24h
                    </div>
                    <div className="text-sm" style={{ fontFamily: "var(--font-body)", color: "rgba(230, 237, 246, 0.55)" }}>
                      Czas odpowiedzi
                    </div>
                  </div>
                  <div>
                    <div
                      className="text-3xl font-bold mb-1"
                      style={{
                        fontFamily: "var(--font-display)",
                        background: "linear-gradient(135deg, #00E0C6, #2E90FA)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      100%
                    </div>
                    <div className="text-sm" style={{ fontFamily: "var(--font-body)", color: "rgba(230, 237, 246, 0.55)" }}>
                      Bezpłatna wycena
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl p-8 md:p-10 border backdrop-blur-sm relative overflow-hidden"
              style={{
                backgroundColor: "#121A2B",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, rgba(0,224,198,0.1), rgba(46,144,250,0.1))",
                }}
                animate={{
                  background: [
                    "linear-gradient(0deg, rgba(0,224,198,0.1), rgba(46,144,250,0.1))",
                    "linear-gradient(360deg, rgba(0,224,198,0.1), rgba(46,144,250,0.1))",
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <div className="relative z-10 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    label="Imię i nazwisko"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Jan Kowalski"
                    required
                  />
                  <FormField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="jan@example.com"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    label="Telefon"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+48 123 456 789"
                  />
                  <FormSelect
                    label="Budżet projektu"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    options={[
                      { value: "", label: "Wybierz budżet" },
                      { value: "5-10k", label: "5 000 - 10 000 PLN" },
                      { value: "10-25k", label: "10 000 - 25 000 PLN" },
                      { value: "25-50k", label: "25 000 - 50 000 PLN" },
                      { value: "50k+", label: "Powyżej 50 000 PLN" },
                    ]}
                  />
                </div>

                <FormField
                  label="Temat"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Nowa strona internetowa dla firmy"
                  required
                />

                <FormTextarea
                  label="Wiadomość"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Opisz swój projekt... Jakie masz cele? Jakie funkcjonalności są potrzebne?"
                  rows={6}
                  required
                />

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    fontFamily: "var(--font-body)",
                    background: "linear-gradient(135deg, #00E0C6, #2E90FA)",
                    color: "#0B1220",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#1AF0D4] to-[#3AA0FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-[#0B1220] border-t-transparent rounded-full"
                      />
                      <span className="relative z-10">Wysyłanie...</span>
                    </>
                  ) : submitStatus === "success" ? (
                    <>
                      <CheckCircle2 className="h-5 w-5 relative z-10" />
                      <span className="relative z-10">Wysłano pomyślnie!</span>
                    </>
                  ) : submitStatus === "error" ? (
                    <>
                      <span className="relative z-10">Błąd wysyłki</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 relative z-10" />
                      <span className="relative z-10">Wyślij wiadomość</span>
                    </>
                  )}
                </motion.button>

                {submitStatus === "error" && errorMessage && (
                  <p className="text-sm text-center" style={{ fontFamily: "var(--font-body)", color: "rgba(255, 92, 117, 0.95)" }}>
                    {errorMessage}
                  </p>
                )}

                <p className="text-xs text-center" style={{ fontFamily: "var(--font-body)", color: "rgba(230, 237, 246, 0.45)" }}>
                  Wysyłając formularz akceptujesz naszą politykę prywatności. Twoje dane są bezpieczne i nie będą udostępniane osobom trzecim.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SocialIconButton({
  href,
  icon: Icon,
}: {
  href?: string;
  icon: any;
}) {
  if (!href) {
    return null;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Link do social media"
      className="w-11 h-11 rounded-xl border flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
      style={{
        backgroundColor: "rgba(18,26,43,0.6)",
        borderColor: "rgba(255,255,255,0.08)",
      }}
    >
      <Icon className="w-5 h-5" style={{ color: "rgba(230, 237, 246, 0.85)" }} />
    </a>
  );
}

function ContactInfoItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: any;
  label: string;
  value: string;
  href?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const content = (
    <div
      className="flex items-start gap-4 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
        style={{
          backgroundColor: isHovered ? "rgba(0,224,198,0.1)" : "rgba(18,26,43,0.6)",
          borderColor: isHovered ? "rgba(0,224,198,0.3)" : "rgba(255,255,255,0.08)",
          border: "1px solid",
        }}
      >
        <Icon
          className="w-5 h-5 transition-colors duration-300"
          style={{ color: isHovered ? "#00E0C6" : "rgba(230, 237, 246, 0.75)" }}
        />
      </div>
      <div className="flex-1">
        <div className="text-xs mb-1" style={{ fontFamily: "var(--font-body)", color: "rgba(230, 237, 246, 0.45)" }}>
          {label}
        </div>
        <div
          className="font-medium transition-colors duration-300"
          style={{
            fontFamily: "var(--font-body)",
            color: isHovered ? "#00E0C6" : "rgba(230, 237, 246, 0.85)",
          }}
        >
          {value}
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}

function FormField({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="text-sm font-medium block"
        style={{ fontFamily: "var(--font-body)", color: "rgba(230, 237, 246, 0.75)" }}
      >
        {label}
        {required && <span className="text-[#00E0C6] ml-1">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full px-4 py-3 rounded-xl border transition-all duration-300 outline-none"
        style={{
          backgroundColor: "#0B1220",
          borderColor: isFocused ? "rgba(0,224,198,0.3)" : "rgba(255,255,255,0.08)",
          color: "#E6EDF6",
          fontFamily: "var(--font-body)",
        }}
      />
    </div>
  );
}

function FormTextarea({
  label,
  name,
  value,
  onChange,
  placeholder,
  rows = 4,
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  required?: boolean;
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="text-sm font-medium block"
        style={{ fontFamily: "var(--font-body)", color: "rgba(230, 237, 246, 0.75)" }}
      >
        {label}
        {required && <span className="text-[#00E0C6] ml-1">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        required={required}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full px-4 py-3 rounded-xl border transition-all duration-300 outline-none resize-none"
        style={{
          backgroundColor: "#0B1220",
          borderColor: isFocused ? "rgba(0,224,198,0.3)" : "rgba(255,255,255,0.08)",
          color: "#E6EDF6",
          fontFamily: "var(--font-body)",
        }}
      />
    </div>
  );
}

function FormSelect({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Array<{ value: string; label: string }>;
  required?: boolean;
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="text-sm font-medium block"
        style={{ fontFamily: "var(--font-body)", color: "rgba(230, 237, 246, 0.75)" }}
      >
        {label}
        {required && <span className="text-[#00E0C6] ml-1">*</span>}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full px-4 py-3 rounded-xl border transition-all duration-300 outline-none appearance-none cursor-pointer"
        style={{
          backgroundColor: "#0B1220",
          borderColor: isFocused ? "rgba(0,224,198,0.3)" : "rgba(255,255,255,0.08)",
          color: value ? "#E6EDF6" : "rgba(230, 237, 246, 0.45)",
          fontFamily: "var(--font-body)",
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} style={{ backgroundColor: "#0B1220" }}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export { CTASection };
