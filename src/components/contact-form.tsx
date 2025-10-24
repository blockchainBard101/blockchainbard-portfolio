"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { Send, CheckCircle, Sparkles } from "lucide-react"

interface ContactFormProps {
  className?: string
}

interface FloatingLabelInputProps {
  id: string
  name: string
  type?: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  error?: string
  required?: boolean
  multiline?: boolean
  rows?: number
}

function FloatingLabelInput({
  id,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  required = false,
  multiline = false,
  rows = 4
}: FloatingLabelInputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)

  const isFloating = isFocused || value.length > 0

  const InputComponent = multiline ? Textarea : Input

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={cn(
          "absolute left-3 transition-all duration-200 pointer-events-none",
          isFloating
            ? "top-2 text-xs text-primary font-medium"
            : "top-3 text-sm text-muted-foreground"
        )}
      >
        {placeholder}
        {required && <span className="text-destructive ml-1">*</span>}
      </label>
      
      <InputComponent
        ref={inputRef as any}
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
        rows={multiline ? rows : undefined}
        className={cn(
          "pt-6 pb-2 transition-all duration-200",
          error && "border-destructive focus-visible:ring-destructive"
        )}
      />
      
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-destructive mt-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  )
}

export function ContactForm({ className }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    website: '' // honeypot
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})

    const { name, email, message, website } = formData

    // Honeypot check
    if (website) {
      setIsSubmitting(false)
      return
    }

    // Basic validation
    const newErrors: Record<string, string> = {}
    if (!name.trim()) newErrors.name = 'Name is required'
    if (!email.trim()) newErrors.email = 'Email is required'
    if (!email.includes('@')) newErrors.email = 'Please enter a valid email'
    if (!message.trim()) newErrors.message = 'Message is required'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsSubmitting(false)
      return
    }

    try {
      // For now, just log the data. In production, you'd send this to your API
      console.log('Contact form submission:', { name, email, message })
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setIsSubmitted(true)
    } catch (error) {
      console.error('Error submitting form:', error)
      setErrors({ submit: 'Failed to send message. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <Card className={cn("text-center border-green-200 dark:border-green-800", className)}>
          <CardHeader className="pb-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4"
            >
              <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
            </motion.div>
            <CardTitle className="text-green-600 dark:text-green-400 text-2xl">
              Message Sent! 🎉
            </CardTitle>
            <CardDescription className="text-base">
              Thanks for reaching out! I'll get back to you within 24 hours.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={() => {
                setIsSubmitted(false)
                setFormData({ name: '', email: '', message: '', website: '' })
              }}
              variant="outline"
              className="group"
            >
              <Sparkles className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
              Send Another Message
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className={cn("shadow-lg", className)}>
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-2xl">Get In Touch</CardTitle>
          <CardDescription className="text-base">
            Need a Sui smart contract/dev tools engineer? Let's talk.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <FloatingLabelInput
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleInputChange}
                error={errors.name}
                required
              />
              
              <FloatingLabelInput
                id="email"
                name="email"
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
                required
              />
            </div>
            
            <FloatingLabelInput
              id="message"
              name="message"
              placeholder="Tell me about your project or just say hello!"
              value={formData.message}
              onChange={handleInputChange}
              error={errors.message}
              required
              multiline
              rows={6}
            />
            
            {/* Honeypot field - hidden from users */}
            <input
              name="website"
              type="text"
              value={formData.website}
              onChange={handleInputChange}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />
            
            <AnimatePresence>
              {errors.submit && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-3 bg-destructive/10 border border-destructive/20 rounded-md"
                >
                  <p className="text-sm text-destructive">{errors.submit}</p>
                </motion.div>
              )}
            </AnimatePresence>
            
            <Button 
              type="submit" 
              className="w-full h-12 text-base font-medium group" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="mr-2"
                >
                  <Send className="h-4 w-4" />
                </motion.div>
              ) : (
                <Send className="mr-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              )}
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}