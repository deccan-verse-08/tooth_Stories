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
  {
  "id": 2,
  "title": "Oral Care Tips During the Holidays",
  "category": "Seasonal Care",
  "author": "Dr. Snehal kulkarni",
  "date": "Jan 15, 2026",
  "image": "/blogs/holiday-oral-care.png",
  "excerpt": "Don't let the festive season ruin your smile! Learn simple tips to protect your teeth from holiday treats and maintain excellent oral health.",
  "content": [
    {
      "type": "paragraph",
      "text": "The holiday season is a time for joy, celebration, and often, an abundance of delicious treats. While indulging in festive foods and drinks is part of the fun, it can also pose challenges for your oral health. Sugary snacks, sticky candies, and acidic beverages can contribute to plaque buildup, cavities, and gum inflammation. However, with a few proactive steps, you can enjoy the holidays without compromising your smile."
    },
    {
      "type": "heading",
      "text": "Maintain Your Routine (No Excuses!)"
    },
    {
      "type": "paragraph",
      "text": "One of the most important tips is to maintain your regular brushing and flossing routine. Even with a busy schedule, make sure to brush your teeth twice a day for two minutes each time and floss daily. Holiday travel or late-night gatherings shouldn't be an excuse to skip these crucial steps. Consider carrying a travel-sized toothbrush and toothpaste for quick clean-ups after holiday meals or parties. Consistent oral hygiene is your first line of defense against the onslaught of holiday sugars."
    },
    {
      "type": "heading",
      "text": "Smart Snacking and Hydration"
    },
    {
      "type": "paragraph",
      "text": "Moderation is key when it comes to holiday treats. Enjoy your favorite desserts, but try to limit them to meal times rather than constant snacking throughout the day. This reduces the frequency of acid attacks on your teeth. After eating sugary or acidic foods, rinse your mouth with water or chew sugar-free gum to stimulate saliva production, which helps wash away food particles and neutralize acids, protecting your enamel. Staying hydrated by drinking plenty of water also helps maintain good oral health."
    },
    {
      "type": "heading",
      "text": "Choose Tooth-Friendly Options"
    },
    {
      "type": "list",
      "items": [
        "Opt for cheese, nuts, and vegetables as healthier snack alternatives.",
        "Drink water alongside alcoholic or sugary beverages to rinse your mouth.",
        "Limit sticky candies and dried fruits that cling to teeth.",
        "Choose sugar-free gum after meals to boost saliva and clean teeth.",
        "Consider using a fluoride mouthwash for extra protection during this period."
      ]
    },
    {
      "type": "heading",
      "text": "Don't Forget Your Dentist"
    },
    {
      "type": "paragraph",
      "text": "While immediate care is essential, remember to schedule a check-up before or after the holiday rush. A professional cleaning can remove any stubborn plaque buildup and address minor issues before they become major problems. Starting the new year with a fresh, healthy smile is the best gift you can give yourself."
    },
    {
      "type": "heading",
      "text": "Conclusion"
    },
    {
      "type": "paragraph",
      "text": "The holiday season is a wonderful time, and there's no need to completely forgo your favorite festive foods. By being mindful of your oral hygiene routine, making smart snacking choices, and remembering to hydrate, you can enjoy all the celebrations while keeping your smile healthy and bright. Prioritize your dental health, and you'll have one less thing to worry about as you usher in the new year. Happy holidays from Tooth Stories Dental Clinic!"
    }
  ]
},
  {
  "id": 3,
  "title": "Dental Care During Pregnancy: A Guide for Expecting Mothers",
  "category": "Maternal Health",
  "author": "Dr. Snehal Kulkarni",
  "date": "Dec 20, 2025",
  "image": "/blogs/pregnancy-dental-care.png",
  "excerpt": "Pregnancy brings many changes, and your oral health is no exception. Learn why dental care is crucial during this special time for both mother and baby.",
  "content": [
    {
      "type": "paragraph",
      "text": "Pregnancy is a remarkable journey filled with many changes, both visible and invisible. While much attention is rightly given to diet, exercise, and prenatal check-ups, oral health during pregnancy often goes overlooked. However, hormonal shifts, dietary changes, and increased sensitivity can significantly impact your teeth and gums. Maintaining excellent dental hygiene during this period is not just about your comfort; it's vital for the health of both you and your developing baby."
    },
    {
      "type": "heading",
      "text": "Why Oral Health Matters During Pregnancy"
    },
    {
      "type": "paragraph",
      "text": "Hormonal fluctuations during pregnancy, particularly increased progesterone and estrogen, can make your gums more susceptible to inflammation, bleeding, and swelling—a condition commonly known as 'pregnancy gingivitis.' If left untreated, this can progress to more serious periodontal disease, which some studies have linked to adverse pregnancy outcomes like preterm birth and low birth weight. Additionally, morning sickness can expose teeth to stomach acids, leading to enamel erosion, and increased snacking can raise the risk of cavities. Regular dental care helps manage these risks effectively."
    },
    {
      "type": "heading",
      "text": "Common Oral Health Issues in Pregnancy"
    },
    {
      "type": "list",
      "items": [
        "**Pregnancy Gingivitis:** Swollen, tender, and bleeding gums due to hormonal changes.",
        "**Periodontal Disease:** If gingivitis worsens, it can affect the bone supporting teeth.",
        "**Cavities:** Increased cravings for sugary foods and acid exposure from morning sickness can heighten cavity risk.",
        "**Enamel Erosion:** Frequent vomiting can expose teeth to stomach acids, weakening enamel.",
        "**Pregnancy Tumors (Pyogenic Granuloma):** Non-cancerous growths on the gums, usually painless and often disappearing after birth."
      ]
    },
    {
      "type": "heading",
      "text": "Safe Dental Treatments for Expecting Mothers"
    },
    {
      "type": "paragraph",
      "text": "It's a common misconception that dental work should be avoided during pregnancy. In fact, routine check-ups and cleanings are not only safe but highly recommended. Most dental procedures, including fillings and root canals, can be performed safely, especially during the second trimester. Local anesthetics are generally safe, and your dentist will choose medications that pose minimal risk. It's crucial to inform your dentist that you are pregnant and discuss any medications you are taking or any specific concerns you have. Elective procedures like teeth whitening are usually best postponed until after delivery."
    },
    {
      "type": "heading",
      "text": "Tips for Maintaining Oral Health While Pregnant"
    },
    {
      "type": "list",
      "items": [
        "**Brush Twice Daily:** Use a soft-bristle toothbrush and fluoride toothpaste.",
        "**Floss Daily:** Essential for removing plaque and food particles between teeth and under the gum line.",
        "**Regular Dental Check-ups:** Schedule at least one visit during your pregnancy for a cleaning and examination.",
        "**Rinse After Morning Sickness:** If you experience vomiting, rinse your mouth with water or a fluoride mouthwash to neutralize acids.",
        "**Eat a Balanced Diet:** Limit sugary snacks and drinks; opt for nutrient-rich foods beneficial for both you and your baby.",
        "**Address Concerns Promptly:** Don't ignore symptoms like bleeding gums or toothache; contact your dentist immediately."
      ]
    },
    {
      "type": "heading",
      "text": "Conclusion"
    },
    {
      "type": "paragraph",
      "text": "Prioritizing your oral health during pregnancy is a critical part of comprehensive prenatal care. By staying vigilant with your home care routine and attending regular dental appointments, you can prevent common issues, ensure your comfort, and contribute to a healthier outcome for your baby. At Tooth Stories Dental Clinic, we understand the unique needs of expecting mothers and are here to support you every step of the way to a healthy, happy smile throughout your pregnancy and beyond."
    }
  ]
},
  {
  "id": 4,
  "title": "Dental Fillings: Types and Which Is Best for You",
  "category": "Restorative Dentistry",
  "author": "Dr. Vaibhav Harkare",
  "date": "Feb 13, 2026",
  "image": "/blogs/dental-fillings.png",
  "excerpt": "Discovered a cavity? Don't worry. Explore the different types of dental fillings available today and find out which material is the right fit for your smile.",
  "content": [
    {
      "type": "paragraph",
      "text": "When decay creates a hole in your tooth, a dental filling is the standard treatment to restore its function and prevent further damage. At Tooth Stories Dental Clinic, we often find that patients are surprised by the variety of materials available today. Gone are the days when a dark metal filling was the only option. Modern dentistry offers several materials, each with its own set of advantages, durability, and aesthetic appeal. Choosing the right one depends on the location of the cavity, the extent of the decay, and your personal preferences."
    },
    {
      "type": "heading",
      "text": "Common Types of Filling Materials"
    },
    {
      "type": "paragraph",
      "text": "The choice of filling material is usually a balance between strength and appearance. While some materials are nearly invisible, others are prized for their ability to withstand the heavy pressure of chewing in the back of the mouth. Understanding these differences helps you make an informed decision during your next visit."
    },
    {
      "type": "list",
      "items": [
        "**Composite Resins:** Tooth-colored fillings made of glass and plastic. They bond chemically to the tooth structure and are ideal for visible areas.",
        "**Silver Amalgam:** A durable mixture of metals. While very strong and cost-effective, their dark color makes them better suited for back molars.",
        "**Ceramic/Porcelain:** Often called inlays or onlays, these are custom-made in a lab. They are highly resistant to staining and very long-lasting.",
        "**Glass Ionomer:** These release fluoride over time, helping to prevent further decay. They are often used for fillings below the gumline or for children.",
        "**Gold Fillings:** Exceptionally durable and can last over 20 years, though they are the most expensive option and require multiple visits."
      ]
    },
    {
      "type": "heading",
      "text": "Which Filling Is Right for You?"
    },
    {
      "type": "paragraph",
      "text": "Selecting the 'best' filling isn't a one-size-fits-all process. If you have a cavity on a front tooth, a composite resin is almost always preferred because it can be matched exactly to your natural tooth shade. For large cavities in the back where chewing force is highest, amalgam or ceramic might be recommended for their superior strength. Your dentist will also consider factors like your budget, any metal allergies, and how much healthy tooth structure remains."
    },
    {
      "type": "heading",
      "text": "Conclusion"
    },
    {
      "type": "paragraph",
      "text": "The goal of any filling is to stop decay in its tracks and return your tooth to its natural strength. Whether you prioritize aesthetics with tooth-colored composites or longevity with ceramics, the most important step is addressing the cavity before it reaches the nerve. At Tooth Stories Dental Clinic, Moshi, we use high-quality materials to ensure your smile stays healthy and functional. If you suspect you have a cavity or haven't had a check-up recently, schedule an appointment today to discuss the best restorative options for you."
    }
  ]
}
];
