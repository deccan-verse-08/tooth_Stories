import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowLeft, Phone, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services } from "@/lib/servicesData";
import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

/**
 * SEO Metadata Generator
 * Excel file se meta tags pick karta hai
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const service = services.find((s) => s.id === id);

  if (!service) return { title: "Service Not Found" };

  return {
    // Excel tags use honge, agar nahi mile toh default title/desc use hoga
    title:
      service.seo?.title || `${service.title} | Tooth Stories Dental Clinic`,
    description: service.seo?.description || service.description,
    openGraph: {
      title: service.seo?.title || service.title,
      description: service.seo?.description || service.description,
      images: [service.image],
    },
  };
}

/**
 * Static paths generate karta hai build time par
 */
export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

export default async function ServicePage({ params }: Props) {
  const { id } = await params;
  const service = services.find((s) => s.id === id);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-[#FFFCFA] via-white to-[#FFF5F0] min-h-screen">
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          {/* Background Decor */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#D4AF37]/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#C21E56]/10 to-transparent rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Back Button */}
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-[#C21E56] transition-colors mb-8 text-sm font-bold tracking-widest uppercase group"
            >
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Back to All Services
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Side: Image */}
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl z-10 border-4 border-white">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                {/* Decorative Frame */}
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#D4AF37]/30 rounded-[2.5rem] -z-0" />

                {/* Floating Service Icon */}
                <div className="absolute -bottom-6 -left-6 p-6 rounded-2xl bg-white shadow-2xl hidden md:block border border-gray-100">
                  <service.icon size={40} className="text-[#C21E56]" />
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="relative">
                <div className="inline-block mb-6">
                  <div
                    className={`px-5 py-2 bg-gradient-to-r ${service.bgGradient} rounded-full border border-white shadow-sm`}
                  >
                    <span className="text-xs font-bold tracking-widest uppercase text-gray-700">
                      {service.category}
                    </span>
                  </div>
                </div>

                <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                  {service.title}
                </h1>

                <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="prose prose-lg prose-gray mb-10 text-gray-600 leading-relaxed">
                  <p>{service.details}</p>
                </div>

                {/* Key Points */}
                <div className="grid sm:grid-cols-2 gap-4 mb-12">
                  {[
                    "Personalized Treatment",
                    "Expert Specialists",
                    "Modern Technology",
                    "Safe & Painless",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div
                        className={`p-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}
                      >
                        <Check size={14} className="text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="px-10 py-5 bg-gradient-to-r from-[#C21E56] to-[#A01845] text-white rounded-full font-bold text-xs tracking-[0.2em] uppercase shadow-xl shadow-[#C21E56]/30 hover:scale-105 transition-all text-center flex items-center justify-center gap-2"
                  >
                    <Calendar size={18} />
                    Book Appointment
                  </Link>
                  <a
                    href="tel:+917666419396"
                    className="px-10 py-5 bg-white border-2 border-gray-100 text-gray-900 rounded-full font-bold text-xs tracking-[0.2em] uppercase hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all text-center flex items-center justify-center gap-2"
                  >
                    <Phone size={18} />
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
