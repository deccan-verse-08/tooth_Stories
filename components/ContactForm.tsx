"use client";
import React, { useState } from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Calendar, User, Clock, CheckCircle } from 'lucide-react';

const services = [
  "General Consultation",
  "Smile Makeover",
  "Dental Implants",
  "Teeth Whitening",
  "Orthodontics",
  "Oral Surgery",
  "Pediatric Care",
  "Emergency Care",
];

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'General Consultation',
    preferredDate: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwIKJUttewGpeD5Wwifiurfh482H2jowz_4gLPdq03mLNJ-Nxs3zoHXZpwbUUkuF_qO/exec";

    try {
      await fetch(SCRIPT_URL, { method: 'POST', mode: 'no-cors', body: JSON.stringify(formData) });
      setStatus('success');
      // Reset form data to default values
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'General Consultation',
        preferredDate: '',
        message: ''
      });
      setErrors({});
    } catch {
      setStatus('idle');
    }
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const inputBaseClass = "w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-xl transition-all duration-300 focus:bg-white focus:border-[#D4AF37] focus:shadow-lg focus:shadow-[#D4AF37]/10 outline-none";

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-bold uppercase tracking-wider mb-4">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Book Your <span className="text-[#C21E56]">Appointment</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Ready to start your smile journey? Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left Panel - Contact Info */}
            <div className="bg-gradient-to-br from-[#C21E56] to-[#9a1544] text-white p-10 lg:p-14 lg:w-2/5 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10 space-y-10">
                <div>
                  <h3 className="text-3xl font-serif font-bold mb-4">Get In Touch</h3>
                  <p className="text-white/80 leading-relaxed">
                    We're here to answer any questions and schedule your visit at your convenience.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors duration-300">
                      <Phone className="text-[#D4AF37] group-hover:text-white transition-colors" size={20} />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Call Us</p>
                      <p className="font-semibold">+1 (555) 786-GOLD</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors duration-300">
                      <Mail className="text-[#D4AF37] group-hover:text-white transition-colors" size={20} />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Email</p>
                      <p className="font-semibold">concierge@toothstories.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors duration-300">
                      <MapPin className="text-[#D4AF37] group-hover:text-white transition-colors" size={20} />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Visit Us</p>
                      <p className="font-semibold">123 Elegance Blvd, NY</p>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="pt-6 border-t border-white/20">
                  <h4 className="font-bold mb-4 flex items-center gap-2">
                    <Clock size={18} className="text-[#D4AF37]" />
                    Working Hours
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/70">Mon - Fri</span>
                      <span>8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Saturday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Sunday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - Form */}
            <div className="p-10 lg:p-14 lg:w-3/5">
              {status === 'success' ? (
                <div className="text-center py-16 animate-fade-in">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#C21E56] flex items-center justify-center">
                    <CheckCircle className="text-white" size={40} />
                  </div>
                  <h4 className="text-3xl font-bold mb-4">Appointment Requested!</h4>
                  <p className="text-gray-500 max-w-md mx-auto">
                    Thank you for choosing ToothStories. Our team will contact you shortly to confirm your appointment.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-8 px-6 py-3 border-2 border-[#D4AF37] text-[#D4AF37] rounded-full font-bold hover:bg-[#D4AF37] hover:text-white transition-all duration-300"
                  >
                    Book Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    {/* Name Input */}
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#D4AF37] transition-colors">
                        <User size={18} />
                      </div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        required
                        onChange={e => handleInputChange('name', e.target.value)}
                        className={`${inputBaseClass} ${errors.name ? 'border-red-400' : 'border-gray-100'}`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>}
                    </div>

                    {/* Email Input */}
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#D4AF37] transition-colors">
                        <Mail size={18} />
                      </div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        required
                        onChange={e => handleInputChange('email', e.target.value)}
                        className={`${inputBaseClass} ${errors.email ? 'border-red-400' : 'border-gray-100'}`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    {/* Phone Input */}
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#D4AF37] transition-colors">
                        <Phone size={18} />
                      </div>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        required
                        onChange={e => handleInputChange('phone', e.target.value)}
                        className={`${inputBaseClass} ${errors.phone ? 'border-red-400' : 'border-gray-100'}`}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone}</p>}
                    </div>

                    {/* Service Select */}
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <ShieldCheck size={18} />
                      </div>
                      <select
                        value={formData.service}
                        onChange={e => handleInputChange('service', e.target.value)}
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-xl appearance-none cursor-pointer focus:bg-white focus:border-[#D4AF37] transition-all duration-300 outline-none"
                      >
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Date Input */}
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#D4AF37] transition-colors">
                      <Calendar size={18} />
                    </div>
                    <input
                      type="date"
                      placeholder="Preferred Date"
                      value={formData.preferredDate}
                      onChange={e => handleInputChange('preferredDate', e.target.value)}
                      className={`${inputBaseClass} border-gray-100`}
                    />
                  </div>

                  {/* Message Textarea */}
                  <div className="relative">
                    <textarea
                      placeholder="Additional notes or concerns (optional)"
                      value={formData.message}
                      onChange={e => handleInputChange('message', e.target.value)}
                      rows={4}
                      className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl resize-none focus:bg-white focus:border-[#D4AF37] transition-all duration-300 outline-none"
                    />
                  </div>

                  <button
                    disabled={status === 'loading'}
                    className="w-full py-4 bg-gradient-to-r from-[#C21E56] to-[#a01845] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Calendar size={18} />
                        Request Appointment
                      </>
                    )}
                  </button>

                  <p className="text-center text-sm text-gray-400">
                    By submitting, you agree to our{' '}
                    <a href="#" className="text-[#D4AF37] hover:underline">Privacy Policy</a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}