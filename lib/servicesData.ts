import {
    Sparkles,
    HeartPulse,
    Stethoscope,
    Wand2,
    Scan,
    Syringe,
    Sun,
    Activity,
    Crown,
    Smile,
    Baby,
} from "lucide-react";

export interface ServiceData {
    id: string;
    title: string;
    category: string;
    description: string;
    details: string;
    image: string;
    icon: any;
    gradient: string;
    bgGradient: string;
    shadow: string;
    seo?: {
        title: string;
        description: string;
    };
}

export const services: ServiceData[] = [
    {
        id: "check-ups",
        title: "Routine Check-ups",
        category: "General",
        description: "Thorough examinations to monitor and maintain your oral health foundation.",
        details: "Regular dental check-ups are essential for maintaining healthy teeth and gums. Our comprehensive examinations allow us to detect improper oral hygiene habits, cavities, and gum disease early. We use advanced diagnostic technology to catch issues before they become major problems, ensuring your smile stays bright and healthy year-round.",
        image: "/Routne_checkup.jpg",
        icon: Stethoscope,
        gradient: "from-emerald-500 to-teal-600",
        bgGradient: "from-emerald-50 to-teal-50",
        shadow: "emerald-500/20",
        seo: {
            title: "Dental Check-up in Moshi | Tooth Stories Dental Clinic",
            description: "Need a routine dental check-up in Moshi? Dr. Vaibhav Harkare provides detailed exams and preventive care at Tooth Stories. Schedule today."
        }
    },
    {
        id: "x-rays",
        title: "Digital X-Rays",
        category: "General",
        description: "High-precision imaging for accurate diagnosis and effective treatment planning.",
        details: "Our state-of-the-art digital X-ray technology provides detailed images of your teeth and jaw with minimal radiation exposure. These images are crucial for detecting decay between teeth, bone loss, and other issues not visible to the naked eye, allowing for precise and effective treatment planning.",
        image: "/Digital_xray.jpg",
        icon: Scan,
        gradient: "from-cyan-500 to-sky-600",
        bgGradient: "from-cyan-50 to-sky-50",
        shadow: "cyan-500/20",
        seo: {
            title: "Dental X-ray in Moshi, PCMC | Tooth Stories Dental Clinic",
            description: "Get precise dental X-rays in Moshi for quick diagnosis and better treatment planning. Visit Tooth Stories. Book now."
        }
    },
    {
        id: "teeth-cleaning",
        title: "Teeth Cleaning",
        category: "General",
        description: "Professional hygiene sessions to remove plaque and polish your smile.",
        details: "Even with diligent brushing and flossing, plaque can harden into tartar. Our professional cleaning services remove these stubborn deposits, preventing gum disease and cavities. We polish your teeth to remove surface stains, leaving your mouth feeling incredibly fresh and clean.",
        image: "/Tooth_whitening.jpg",
        icon: Sparkles,
        gradient: "from-purple-500 to-fuchsia-600",
        bgGradient: "from-purple-50 to-fuchsia-50",
        shadow: "purple-500/20",
        seo: {
            title: "Teeth Cleaning in Moshi | Tooth Stories Dental Clinic",
            description: "Remove stains and tartar with professional teeth cleaning in Moshi by Dr. Vaibhav. Gentle, safe, effective. Call to book today."
        }
    },
    {
        id: "tooth-filling",
        title: "Tooth Filling",
        category: "Restorative",
        description: "Restore damaged teeth with durable, tooth-colored composite fillings.",
        details: "Cavities don't just compromise your tooth's structure; they can lead to pain and infection. We use high-quality, tooth-colored composite resins to fill cavities, restoring the tooth's shape and function while maintaining a natural appearance. Our fillings are durable and designed to blend seamlessly with your smile.",
        image: "/five.jpg",
        icon: Syringe,
        gradient: "from-[#D4AF37] to-[#C4A030]",
        bgGradient: "from-[#D4AF37]/5 to-[#C4A030]/5",
        shadow: "[#D4AF37]/20",
        seo: {
            title: "Cavity Tooth Filling in Moshi | Expert Dentist",
            description: "Have a cavity? Get safe and long-lasting tooth filling in Moshi by Dr. Vaibhav Harkare at Tooth Stories. Quick, comfortable care. Book now."
        }
    },
    {
        id: "teeth-whitening",
        title: "Teeth Whitening",
        category: "Cosmetic",
        description: "Brighten your smile safely and effectively with our professional whitening options.",
        details: " stains from coffee, tea, and aging can dull your smile. Our professional teeth whitening treatments penetrate deep into the enamel to break up stains and discoloration. Whether you choose an in-office treatment for immediate results or a take-home kit for convenience, you'll achieve a visibly brighter, more radiant smile.",
        image: "/185.jpg",
        icon: Sun,
        gradient: "from-rose-500 to-pink-600",
        bgGradient: "from-rose-50 to-pink-50",
        shadow: "rose-500/20",
        seo: {
            title: "Teeth Whitening in Moshi | Bright Smile Experts",
            description: "Want a whiter smile? Try advanced teeth whitening in Moshi at Tooth Stories Dental Clinic. Quick, safe results. Reserve today."
        }
    },
    {
        id: "root-canal",
        title: "Root Canal Treatment",
        category: "Restorative",
        description: "Save infected teeth and eliminate pain with our gentle endodontic therapy.",
        details: "Root canal therapy is a tooth-saving procedure used to treat infection at the center of a tooth. Contrary to popular belief, modern root canals are relatively painless and extremely effective. We remove the infected pulp, clean the root canals, and seal them to prevent reinfection, allowing you to keep your natural tooth.",
        image: "/RC.jpg",
        icon: Activity,
        gradient: "from-emerald-500 to-teal-600",
        bgGradient: "from-emerald-50 to-teal-50",
        shadow: "emerald-500/20",
        seo: {
            title: "Root Canal Treatment in Moshi | Dr. Vaibhav Harkare",
            description: "Tooth pain? Get painless root canal treatment in Moshi from Dr. Vaibhav Harkare. Save your natural tooth. Book appointment."
        }
    },
    {
        id: "tooth-extraction",
        title: "Tooth Extraction",
        category: "General",
        description: "Safe and comfortable removal of problematic or damaged teeth.",
        details: "While we strive to save every tooth, there are times when extraction is necessary for your overall health—such as with severe decay, infection, or impacted wisdom teeth. Our team ensures the procedure is as comfortable as possible, and we provide comprehensive aftercare instructions and replacement options.",
        image: "/ToothExt.jpg",
        icon: Syringe,
        gradient: "from-cyan-500 to-sky-600",
        bgGradient: "from-cyan-50 to-sky-50",
        shadow: "cyan-500/20",
        seo: {
            title: "Tooth Extraction in Moshi | Gentle Dental Care",
            description: "Need a safe tooth extraction in Moshi? Our experienced team ensures a smooth, stress-free procedure. Call today."
        }
    },
    {
        id: "crowns-bridges",
        title: "Crowns and Bridges",
        category: "Restorative",
        description: "Strengthen damaged teeth or replace missing ones with custom prosthetics.",
        details: "Crowns 'cap' a damaged tooth to restore its shape and strength, while bridges replace one or more missing teeth by anchoring to adjacent natural teeth. Both are custom-crafted in a lab to match the color and contour of your natural teeth, providing a durable and aesthetic restoration.",
        image: "/dental-crowns-vs-bridges.jpg",
        icon: Crown,
        gradient: "from-[#D4AF37] to-[#C4A030]",
        bgGradient: "from-[#D4AF37]/5 to-[#C4A030]/5",
        shadow: "[#D4AF37]/20",
        seo: {
            title: "Dental Crowns & Bridges in Moshi | Tooth Stories Dental Clinic",
            description: "Restore damaged or missing teeth with crowns & bridges in Moshi at Tooth Stories. Strong, natural-looking results. Book now."
        }
    },
    {
        id: "cosmetic-treatment",
        title: "Cosmetic Treatment",
        category: "Cosmetic",
        description: "A comprehensive range of procedures to enhance the aesthetics of your smile.",
        details: "From veneers to bonding and gum contouring, our cosmetic treatments are designed to address your specific aesthetic concerns. We work with you to design a treatment plan that harmonizes with your facial features, creating a smile that looks naturally beautiful and boosts your self-confidence.",
        image: "/ten.jpg",
        icon: Wand2,
        gradient: "from-purple-500 to-fuchsia-600",
        bgGradient: "from-purple-50 to-fuchsia-50",
        shadow: "purple-500/20",
        seo: {
            title: "Cosmetic Dentist in Moshi | Smile Makeover | Dr. Snehal Kulkarni",
            description: "Enhance your smile with cosmetic dentistry in Moshi. Visit Tooth Stories for veneers, reshaping & more. Schedule now."
        }
    },
    {
        id: "dental-implants",
        title: "Dental Implants",
        category: "Restorative",
        description: "The gold standard for permanent tooth replacement.",
        details: "Dental implants provide a foundation for replacement teeth that look, feel, and function like natural teeth. Implants prevent bone loss and preserve facial structure. Our precise placement techniques ensure long-lasting results, giving you the freedom to eat, laugh, and smile without worry.",
        image: "/7438298_32619.jpg",
        icon: HeartPulse,
        gradient: "from-rose-500 to-pink-600",
        bgGradient: "from-rose-50 to-pink-50",
        shadow: "rose-500/20",
        seo: {
            title: "Dental Implants in Moshi | Dr. Vaibhav Harkare",
            description: "Replace missing teeth permanently with dental implants in Moshi by Dr. Vaibhav. Modern techniques, lasting comfort. Book today."
        }
    },
    {
        id: "pediatric-treatment",
        title: "Pediatric Treatment",
        category: "Pediatric",
        description: "Gentle, friendly dental care specialized for children of all ages.",
        details: "We believe in creating positive dental experiences from an early age. Our pediatric services focus on prevention, education, and gentle treatment. We create a fun and safe environment where children feel comfortable, helping them establish a lifetime of healthy oral hygiene habits.",
        image: "/pd.jpg",
        icon: Baby,
        gradient: "from-cyan-500 to-sky-600",
        bgGradient: "from-cyan-50 to-sky-50",
        shadow: "cyan-500/20",
        seo: {
            title: "Pediatric Dentist in Moshi | Kids Dental Care at Tooth Stories",
            description: "Caring pediatric dentist in Moshi for kids of all ages. Gentle treatment and friendly visits at Tooth Stories. Call today."
        }
    },
    {
        id: "orthodontic-treatment",
        title: "Orthodontic Treatment",
        category: "Orthodontics",
        description: "Straighten your smile with modern braces and aligner solutions.",
        details: "A straight smile is a healthy smile. Our orthodontic treatments correct misalignment and bite issues, improving both aesthetics and function. We offer traditional braces as well as clear aligners, tailoring the treatment to your lifestyle and needs for optimal results.",
        image: "/orthodontic.jpg",
        icon: Smile,
        gradient: "from-purple-500 to-fuchsia-600",
        bgGradient: "from-purple-50 to-fuchsia-50",
        shadow: "purple-500/20",
        seo: {
            title: "Orthodontic Treatment in Moshi | Dr. Snehal Kulkarni",
            description: "Straighten teeth with expert orthodontic treatment in Moshi by Dr. Snehal Kulkarni. Braces & aligners available. Book now."
        }
    },
    {
        id: "periodontal-treatment",
        title: "Gum Care & Periodontics",
        category: "Periodontics",
        description: "Protect the foundation of your teeth with expert gum disease treatment.",
        details: "Healthy gums are essential for a lasting smile. Our periodontal services focus on preventing and treating gum disease through deep cleaning, scaling, and root planing. We help you maintain strong, healthy gums to prevent tooth loss and ensure total oral hygiene.",
        image: "/Gum_Care.png",
        icon: Activity,
        gradient: "from-rose-500 to-red-600",
        bgGradient: "from-rose-50 to-red-50",
        shadow: "rose-500/20",
        seo: {
            title: "Gum Care & Periodontal Treatment in Moshi | Tooth Stories",
            description: "Expert gum care and periodontal treatment in Moshi. Treat gum disease and maintain healthy gums with our specialists."
        }
    },
];
