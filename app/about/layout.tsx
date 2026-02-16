import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dentist in Moshi |Dr. Snehal & Dr. Vaibhav Harkare |Tooth Stories",
    description: "Meet Dr. Snehal Kulkarni & Dr. Vaibhav Harkare, experienced dentists in Moshi at Tooth Stories. Compassionate care for every smile. Book today.",
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
