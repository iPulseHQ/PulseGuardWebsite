"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Er is een fout opgetreden");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : language === "nl"
          ? "Er is een fout opgetreden bij het verzenden van je bericht."
          : "An error occurred while sending your message."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const translations = {
    nl: {
      title: "Neem contact met ons op",
      subtitle: "Heb je vragen of opmerkingen? We horen graag van je!",
      name: "Naam",
      email: "Emailadres",
      message: "Bericht",
      send: "Verzenden",
      sending: "Verzenden...",
      success: "Bericht verzonden!",
      successMessage: "We hebben je bericht ontvangen en zullen zo spoedig mogelijk contact met je opnemen.",
      error: "Fout",
      namePlaceholder: "Je naam",
      emailPlaceholder: "je@emailadres.nl",
      messagePlaceholder: "Je bericht...",
    },
    en: {
      title: "Get in touch",
      subtitle: "Have questions or comments? We'd love to hear from you!",
      name: "Name",
      email: "Email address",
      message: "Message",
      send: "Send",
      sending: "Sending...",
      success: "Message sent!",
      successMessage: "We've received your message and will get back to you as soon as possible.",
      error: "Error",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@email.com",
      messagePlaceholder: "Your message...",
    },
  };

  const text = translations[language as keyof typeof translations];

  const formFields = [
    { id: "name", label: text.name, placeholder: text.namePlaceholder, type: "text" as const },
    { id: "email", label: text.email, placeholder: text.emailPlaceholder, type: "email" as const },
    { id: "message", label: text.message, placeholder: text.messagePlaceholder, type: "textarea" as const },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.2,
      },
    },
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-muted border border-border/50 text-sm font-medium shadow-sm mb-6"
          >
            <motion.div
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Mail className="h-4 w-4 text-primary" />
            </motion.div>
            {language === "nl" ? "Contact" : "Contact"}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4"
          >
            {text.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-muted-foreground"
          >
            {text.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="glassmorphism rounded-2xl p-8 border border-border/50 shadow-lg"
        >
          <AnimatePresence mode="wait">
            {submitStatus === "success" ? (
              <motion.div
                key="success"
                variants={successVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-center py-8"
              >
                <motion.div
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6 relative"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    className="absolute inset-0 rounded-full bg-primary/20"
                  />
                  <CheckCircle2 className="h-10 w-10 text-primary relative z-10" />
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl font-bold mb-3"
                >
                  {text.success}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-muted-foreground mb-6"
                >
                  {text.successMessage}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Button
                    onClick={() => setSubmitStatus("idle")}
                    variant="outline"
                    className="hover:scale-105 transition-transform"
                  >
                    {language === "nl" ? "Nieuw bericht verzenden" : "Send another message"}
                  </Button>
                </motion.div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {formFields.map((field, index) => (
                  <motion.div
                    key={field.id}
                    variants={itemVariants}
                    className="space-y-2"
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <Label htmlFor={field.id}>{field.label}</Label>
                    </motion.div>
                    {field.type === "textarea" ? (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 + index * 0.1 }}
                        whileFocus={{ scale: 1.01 }}
                        className="transition-transform"
                      >
                        <Textarea
                          id={field.id}
                          required
                          rows={6}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          placeholder={field.placeholder}
                          disabled={isSubmitting}
                          className="transition-all duration-200 focus:ring-2 focus:ring-primary/50"
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 + index * 0.1 }}
                        whileFocus={{ scale: 1.01 }}
                        className="transition-transform"
                      >
                        <Input
                          id={field.id}
                          type={field.type}
                          required
                          value={field.id === "name" ? formData.name : formData.email}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              [field.id]: e.target.value,
                            })
                          }
                          placeholder={field.placeholder}
                          disabled={isSubmitting}
                          className="transition-all duration-200 focus:ring-2 focus:ring-primary/50"
                        />
                      </motion.div>
                    )}
                  </motion.div>
                ))}

                <AnimatePresence>
                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-2 p-4 rounded-md bg-destructive/10 border border-destructive/20 text-destructive"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                      >
                        <AlertCircle className="h-4 w-4" />
                      </motion.div>
                      <span className="text-sm">{errorMessage}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative overflow-hidden"
                    size="lg"
                  >
                    <motion.div
                      className="flex items-center justify-center"
                      initial={false}
                      animate={{
                        opacity: isSubmitting ? 0 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Send className="h-4 w-4 mr-2" />
                      {text.send}
                    </motion.div>
                    {isSubmitting && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        {text.sending}
                      </motion.div>
                    )}
                  </Button>
                </motion.div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
