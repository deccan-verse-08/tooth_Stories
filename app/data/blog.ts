export interface BlogSection {
  type: "paragraph" | "heading" | "list";
  text?: string;
  items?: string[]; // Only for list type
}

export interface Blog {
  id: number;
  title: string;
  category: string;
  author: string;
  date: string;
  image: string;
  excerpt: string;
  content: BlogSection[];
}

export const blogs: Blog[] = [
  {
    id: 1,
    title: "How Often Should You Really Visit the Dentist?",
    category: "Preventive Care",
    author: "Dr. Vaibhav Harkare",
    date: "Feb 10, 2026",
    image: "/blogs/one.png",
    excerpt:
      "Most people wait for pain before visiting a dentist, but preventive dental visits are the foundation of lifelong oral health and confidence.",
    content: [
      {
        type: "paragraph",
        text: "One of the most common questions patients ask at Tooth Stories Dental Clinic is whether visiting a dentist is necessary when there is no pain or visible problem. The truth is that dental pain usually appears at a later stage of disease, not at the beginning. Cavities, gum infections, and even serious oral conditions can silently progress without obvious symptoms. By the time pain starts, the treatment often becomes more complex, time-consuming, and expensive. Regular dental visits help identify early warning signs that are invisible to the untrained eye, such as enamel erosion, plaque buildup below the gums, or microscopic cavities. These visits are not only about fixing problems but also about preventing them entirely. A routine checkup allows your dentist to guide you on brushing techniques, dietary habits, and lifestyle choices that directly impact oral health. Simply put, visiting a dentist regularly is an investment in long-term comfort, confidence, and overall well-being.",
      },
      {
        type: "heading",
        text: "The 6-Month Golden Rule",
      },
      {
        type: "paragraph",
        text: "The six-month dental visit rule is globally recommended because it aligns perfectly with how most dental problems develop. Plaque and tartar gradually accumulate over time, and even excellent brushing cannot completely remove hardened deposits. A six-month interval allows dentists to clean your teeth professionally before these deposits cause cavities or gum disease. It also gives enough time to track small changes in oral health, such as early tooth decay, shifting teeth, or gum recession. For children, these visits help monitor proper jaw growth and tooth eruption. For adults, they help maintain strong teeth and healthy gums despite daily stress, diet, and habits. Skipping these routine visits often leads to undetected problems that later require fillings, root canals, or even extractions. Consistency is the key—two visits a year can save you from years of discomfort and high dental expenses.",
      },
      {
        type: "heading",
        text: "Benefits of Regular Dental Checkups",
      },
      {
        type: "list",
        items: [
          "Professional cleaning removes hardened plaque and tartar that brushing cannot eliminate.",
          "Early cavity detection prevents the need for root canal treatments or crowns.",
          "Healthy gums reduce the risk of tooth loss and chronic infections.",
          "Dental visits help prevent bad breath caused by hidden bacterial buildup.",
          "Oral cancer screening allows early detection of life-threatening conditions.",
          "Regular checkups improve the lifespan of existing fillings and restorations.",
          "Dentists provide personalized oral hygiene and diet recommendations.",
          "Early diagnosis reduces overall treatment cost and chair-time.",
          "Children benefit from monitoring proper tooth alignment and growth.",
          "A healthy smile boosts confidence, speech clarity, and social comfort.",
        ],
      },
      {
        type: "heading",
        text: "Who Should Visit the Dentist More Frequently?",
      },
      {
        type: "paragraph",
        text: "While the six-month rule works for most individuals, certain groups require more frequent dental visits due to higher risk factors. Patients with systemic conditions like diabetes have reduced healing capacity, making them more prone to gum infections. Pregnant women experience hormonal changes that can trigger gum inflammation and bleeding. Smokers and tobacco users face a significantly higher risk of gum disease, oral cancer, and delayed healing. Individuals with a history of periodontal disease need close monitoring to prevent recurrence. Patients undergoing orthodontic treatment or wearing dental implants also benefit from more frequent professional care. In such cases, dentists may recommend checkups every three to four months. These visits help maintain stability, prevent complications, and ensure long-term oral health success tailored to the patient's unique needs.",
      },
      {
        type: "list",
        items: [
          "Patients with diabetes or compromised immunity.",
          "Pregnant women experiencing hormonal gum changes.",
          "Smokers and tobacco users.",
          "Individuals with previous gum disease history.",
          "Patients with dental implants or crowns.",
          "People wearing braces or aligners.",
          "Those prone to frequent cavities.",
          "Patients with chronic dry mouth conditions.",
          "Elderly individuals with multiple restorations.",
          "Anyone experiencing recurring oral discomfort.",
        ],
      },
      {
        type: "heading",
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Preventive dental care is the most effective way to maintain a healthy, pain-free smile throughout life. Waiting for pain often means waiting too long. Regular dental visits allow problems to be treated early, comfortably, and affordably. They also empower patients with knowledge about proper oral hygiene and lifestyle habits that protect their teeth and gums every day. At Tooth Stories Dental Clinic, Moshi, our focus is not just treatment but long-term oral wellness. Whether you feel discomfort or not, a routine dental checkup can make a significant difference in your overall health and confidence. If it has been more than six months since your last dental visit, now is the perfect time to prioritize your smile. Book your appointment today and take the first step toward lifelong oral health.",
      },
    ],
  },
];
