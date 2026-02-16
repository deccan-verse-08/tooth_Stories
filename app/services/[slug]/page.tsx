import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowLeft, Phone, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services } from "@/lib/servicesData";
import { Metadata } from 'next';

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = services.find((s) => s.id === slug);

    if (!service) {
        return {
            title: 'Service Not Found',
        };
    }

    return {
        title: service.seo?.title || service.title,
        description: service.seo?.description || service.description,
    };
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params;
    const service = services.find((s) => s.id === slug);

    if (!service) {
        notFound();
    }

    const Icon = service.icon;

    return (
        <>
            <Header />
            <main className="bg-gradient-to-b from-[#FFFCFA] via-white to-[#FFF5F0] min-h-screen">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                    {/* Background Elements */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#D4AF37]/10 to-transparent rounded-full blur-3xl opacity-60" />
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#C21E56]/10 to-transparent rounded-full blur-3xl opacity-60" />
                    </div>

                    <div className="max-w-7xl mx-auto">
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 text-gray-500 hover:text-[#C21E56] transition-colors mb-8 text-sm font-bold tracking-widest uppercase"
                        >
                            <ArrowLeft size={16} />
                            Back to Services
                        </Link>

                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                            {/* Content Side */}
                            <div className="relative z-10 order-2 lg:order-1">
                                <div className="inline-block mb-6">
                                    <div className={`px-4 py-2 bg-gradient-to-r ${service.bgGradient} rounded-full border border-gray-100`}>
                                        <span className="text-xs font-bold tracking-wider uppercase text-gray-700">
                                            {service.category}
                                        </span>
                                    </div>
                                </div>

                                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                    {service.title}
                                </h1>

                                <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
                                    {service.description}
                                </p>

                                <div className="prose prose-lg prose-gray mb-10">
                                    <p>{service.details}</p>
                                </div>

                                <div className="space-y-4 mb-10">
                                    <div className="flex items-center gap-3">
                                        <div className={`p-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}>
                                            <Check size={16} className="text-white" />
                                        </div>
                                        <span className="text-gray-700 font-medium">Personalized Treatment Plan</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className={`p-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}>
                                            <Check size={16} className="text-white" />
                                        </div>
                                        <span className="text-gray-700 font-medium">Experienced Specialists</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className={`p-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}>
                                            <Check size={16} className="text-white" />
                                        </div>
                                        <span className="text-gray-700 font-medium">State-of-the-art Technology</span>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link
                                        href="/contact"
                                        className="px-8 py-4 bg-gradient-to-r from-[#C21E56] to-[#A01845] text-white rounded-full font-bold text-xs tracking-[0.2em] uppercase shadow-lg shadow-[#C21E56]/30 hover:shadow-[#C21E56]/50 transition-all duration-300 text-center flex items-center justify-center gap-2"
                                    >
                                        <Calendar size={16} />
                                        Book Appointment
                                    </Link>

                                    <a
                                        href="tel:+911234567890"
                                        className="px-8 py-4 bg-white border-2 border-gray-100 text-gray-900 rounded-full font-bold text-xs tracking-[0.2em] uppercase hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 text-center flex items-center justify-center gap-2"
                                    >
                                        <Phone size={16} />
                                        Call Us
                                    </a>
                                </div>
                            </div>

                            {/* Image Side */}
                            <div className="relative order-1 lg:order-2">
                                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
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
