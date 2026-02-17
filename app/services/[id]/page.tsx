import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowLeft, Phone, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services } from "@/lib/servicesData";
import { Metadata } from "next";

type Props = {
  // Since the folder is [id], the key here must be id
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const service = services.find((s) => s.id === id);

  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Premium Dental Care`,
    description: service.description,
  };
}

// This helps Next.js pre-render all service pages at build time
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

  const Icon = service.icon;

  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-[#FFFCFA] via-white to-[#FFF5F0] min-h-screen">
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          {/* Background Accents */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#D4AF37]/10 to-transparent rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-[#C21E56] transition-colors mb-8 text-sm font-bold tracking-widest uppercase"
            >
              <ArrowLeft size={16} />
              Back to All Services
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image with Decorative Border */}
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl z-10">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Decorative gold frame behind image */}
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#D4AF37]/20 rounded-[2rem] -z-0" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="inline-block mb-6">
                  <div
                    className={`px-4 py-2 bg-gradient-to-r ${service.bgGradient} rounded-full border border-gray-100 shadow-sm`}
                  >
                    <span className="text-xs font-bold tracking-wider uppercase text-gray-700">
                      {service.category}
                    </span>
                  </div>
                </div>

                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  {service.title}
                </h1>

                <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="prose prose-lg prose-gray mb-10 text-gray-600">
                  <p>{service.details}</p>
                </div>

                {/* Features List */}
                <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
                  {[
                    "Modern Tech",
                    "Painless Care",
                    "Expert Doctors",
                    "Aftercare",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div
                        className={`p-1 rounded-full bg-gradient-to-r ${service.gradient}`}
                      >
                        <Check size={14} className="text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Call to Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-gradient-to-r from-[#C21E56] to-[#A01845] text-white rounded-full font-bold text-xs tracking-[0.2em] uppercase shadow-lg shadow-[#C21E56]/30 hover:scale-[1.02] transition-all text-center flex items-center justify-center gap-2"
                  >
                    <Calendar size={16} />
                    Book Consultation
                  </Link>
                  <a
                    href="tel:+911234567890"
                    className="px-8 py-4 bg-white border-2 border-gray-100 text-gray-900 rounded-full font-bold text-xs tracking-[0.2em] uppercase hover:border-[#D4AF37] transition-all text-center flex items-center justify-center gap-2"
                  >
                    <Phone size={16} />
                    Speak to Specialist
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
