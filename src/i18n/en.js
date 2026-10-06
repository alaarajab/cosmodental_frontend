// ─────────────────────────────────────────────────────────────
// ENGLISH TEXT for the whole website.
// The Spanish version lives in es.js with the same structure —
// when you change text here, change it there too.
// ─────────────────────────────────────────────────────────────
import { CLINIC } from "../config/clinic.js";

const AREA = "Northlake, Melrose Park, Stone Park, Franklin Park, Elmhurst, Bellwood, Berkeley and Chicago's western suburbs";

const en = {
  lang: "en",
  locale: "en_US",
  languageName: "English",

  ui: {
    skip: "Skip to main content",
    nav: { home: "Home", services: "Services", staff: "Our Team", contact: "Contact" },
    mainNav: "Main",
    mobileNav: "Mobile",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    callUsAt: "Call us at ",
    call: "Call",
    book: "Book Appointment",
    bookAn: "Book an Appointment",
    homeLink: `${CLINIC.name} – Home`,
    switchLang: "Español",
    switchLangAria: "Ver este sitio en español",
    switchLangCode: "es",
    newTab: " (opens in a new tab)",
    mapsNewTab: " (opens Google Maps in a new tab)",
    relay: "Need help with phone calls? You can reach us through 711 Relay.",
    hoursCall: "Call us for current office hours.",
    breadcrumb: "Breadcrumb",
    learnMore: "Learn more",
  },

  display: {
    region: "Display options",
    textSize: "Text size",
    sizes: { default: "Default text size", large: "Larger text", xlarge: "Largest text" },
    contrast: "High contrast",
  },

  header: {
    sub: "Dentist in Northlake, IL",
    subtitle:
      "Family, cosmetic, implant and emergency dental care for Northlake and the greater Chicago area. New patients are always welcome.",
  },

  footer: {
    contact: "Contact Us",
    hours: "Office Hours",
    links: "Quick Links",
    callForHours: ["Please call ", " for our current hours."],
    privacy: "Website Privacy Policy",
    npp: "Notice of Privacy Practices",
    accessibility: "Accessibility",
    mapAlt: (addr) => `Map showing ${CLINIC.name} at ${addr}. Opens Google Maps in a new tab.`,
    disclaimer:
      "The information on this website is for general educational purposes only and is not medical or dental advice. Please consult a dentist about your individual needs. For a dental emergency, call our office; for a medical emergency, call 911.",
    rights: "All rights reserved.",
    credit: "Website designed & developed by",
    social: "Social media",
    onSocial: (label) => `${CLINIC.shortName} on ${label} (opens in a new tab)`,
  },

  meta: {
    home: {
      title: "Cosmo Dental Clinic | Dentist in Northlake, IL",
      description:
        "Family, cosmetic, implant and emergency dentistry in Northlake, IL, near Melrose Park and Elmhurst. Se habla español. Call (708) 345-6313.",
    },
    services: {
      title: "Dental Services in Northlake, IL | Cosmo Dental Clinic",
      description:
        "General, cosmetic and children's dentistry, dental implants, oral surgery and root canal treatment in Northlake, IL. Call (708) 345-6313.",
    },
    staff: {
      title: "Meet Our Dentists | Cosmo Dental Clinic, Northlake IL",
      description:
        "Meet the dentists at Cosmo Dental Clinic in Northlake, IL — experienced, friendly care for the whole family in five languages.",
    },
    contact: {
      title: "Contact & Appointments | Cosmo Dental Clinic",
      description:
        "Request a dental appointment at Cosmo Dental Clinic, 159 E North Ave, Northlake, IL 60164. Call (708) 345-6313.",
    },
    privacy: {
      title: "Website Privacy Policy | Cosmo Dental Clinic",
      description: "How the Cosmo Dental Clinic website collects and uses information.",
    },
    npp: {
      title: "Notice of Privacy Practices (HIPAA) | Cosmo Dental Clinic",
      description:
        "How Cosmo Dental Clinic may use and disclose your health information, and your rights under HIPAA.",
    },
    accessibility: {
      title: "Accessibility Statement | Cosmo Dental Clinic",
      description:
        "Cosmo Dental Clinic's commitment to an accessible website that meets WCAG 2.1 AA.",
    },
    notFound: {
      title: "Page Not Found | Cosmo Dental Clinic",
      description: "The page you are looking for could not be found.",
    },
  },

  // ── Services: card text, page text and FAQs ──
  services: {
    "general-dentistry": {
      name: "General Dentistry",
      imageAlt: "Smiling patient holding a model tooth",
      card: "Check-ups, cleanings, fillings and gum care to keep your whole family's smiles healthy.",
      metaTitle: "General Dentist in Northlake, IL | Cosmo Dental Clinic",
      metaDescription:
        "Check-ups, cleanings, X-rays, fillings and gum care for adults and children in Northlake, IL. New patients welcome. Call (708) 345-6313.",
      intro: [
        "Regular dental care is the easiest way to prevent problems and keep your smile healthy for life. At Cosmo Dental Clinic, we see patients of all ages for routine check-ups, professional cleanings and everyday treatments.",
        `Families from ${AREA} choose us for unhurried visits, clear explanations and care in English, Spanish, Arabic, Urdu and Hindi.`,
      ],
      includes: [
        "Dental exams and check-ups",
        "Professional cleanings",
        "Digital X-rays",
        "Tooth-colored fillings",
        "Gum disease treatment",
        "Crowns and bridges",
        "Emergency visits for tooth pain or a broken tooth",
      ],
      whenTitle: "When to book a visit",
      when: [
        "It has been more than six months since your last check-up",
        "Your gums bleed when you brush or floss",
        "A tooth is sensitive, painful or chipped",
        "You are new to the area and need a family dentist",
      ],
      steps: [
        ["Check-up", "We review your health history and examine your teeth, gums and bite."],
        ["X-rays and cleaning", "We take X-rays if needed and gently clean away plaque and tartar."],
        ["Your plan", "Your dentist explains what they found and any treatment you may need, with costs, before anything starts."],
      ],
      faqs: [
        ["How often should I see the dentist?", "Many people benefit from a check-up and cleaning about every six months. Your dentist will recommend the schedule that is right for you."],
        ["Do you see children and adults?", "Yes. We care for the whole family, from children's first visits to adults and seniors."],
        ["Do you offer tooth-colored fillings?", "Yes. We use tooth-colored filling material that blends in with your natural teeth."],
      ],
    },
    "dental-implants": {
      name: "Dental Implants",
      imageAlt: "Illustration of a dental implant with a crown placed between natural teeth",
      card: "Long-lasting replacement for missing teeth that looks, feels and works like your own.",
      metaTitle: "Dental Implants in Northlake, IL | Cosmo Dental Clinic",
      metaDescription:
        "Replace missing teeth with dental implants in Northlake, IL. Single implants, implant bridges and full-mouth options. Call (708) 345-6313.",
      intro: [
        "A dental implant is a small titanium post that replaces the root of a missing tooth. Once it bonds with the jawbone, a natural-looking crown is attached on top, so you can eat, speak and smile with confidence.",
        `Our dentists plan and place implants right here in our Northlake office, close to Melrose Park, Stone Park, Franklin Park and Elmhurst.`,
      ],
      includes: [
        "Implant consultations with digital X-rays",
        "Single-tooth implants",
        "Implant-supported bridges",
        "Full-mouth restoration options",
        "Bone grafting when more support is needed",
      ],
      whenTitle: "Implants may be right for you if",
      when: [
        "You are missing one or more teeth",
        "Your denture feels loose or uncomfortable",
        "A tooth cannot be saved and needs to be replaced",
        "You want a fixed option that does not affect neighboring teeth",
      ],
      steps: [
        ["Consultation", "We examine your mouth, take X-rays and explain whether implants are a good option for you."],
        ["Implant placement", "The implant is placed in a short procedure with local anesthesia, then allowed to heal."],
        ["Your new tooth", "Once healed, a custom crown is attached so the implant looks and works like a natural tooth."],
      ],
      faqs: [
        ["How long do dental implants last?", "With good brushing, flossing and regular check-ups, implants can last many years. Your dentist will explain what to expect in your case."],
        ["Does getting an implant hurt?", "The procedure is done with local anesthesia, so most patients feel pressure rather than pain. Some soreness afterward is normal and usually short-lived."],
        ["Is everyone a candidate for implants?", "Many adults are. Healthy gums and enough jawbone are important. If more bone is needed, a bone graft can often help. Your dentist will check at your consultation."],
      ],
    },
    "cosmetic-dentistry": {
      name: "Cosmetic Dentistry",
      imageAlt: "Patient admiring her smile in a mirror while the dentist holds a tooth shade guide",
      card: "Teeth whitening, veneers and smile makeovers planned around your goals.",
      metaTitle: "Cosmetic Dentist in Northlake, IL | Whitening & Veneers",
      metaDescription:
        "Teeth whitening, porcelain veneers, bonding and smile makeovers at Cosmo Dental Clinic in Northlake, IL. Call (708) 345-6313.",
      intro: [
        "Cosmetic dentistry helps you feel confident about your smile. Whether you want whiter teeth, to fix a chip or gap, or a complete smile makeover, we plan every treatment around your goals and the natural look of your face.",
        `Patients from ${AREA} visit us for natural-looking results and honest advice about what is possible.`,
      ],
      includes: [
        "Professional teeth whitening",
        "Porcelain veneers",
        "Tooth-colored bonding for chips and gaps",
        "Tooth-colored crowns",
        "Smile makeover planning",
      ],
      whenTitle: "Cosmetic care can help with",
      when: [
        "Stained or yellowed teeth",
        "Chipped, worn or uneven teeth",
        "Small gaps between teeth",
        "Old fillings or crowns that no longer match",
      ],
      steps: [
        ["Smile consultation", "We talk about what you would like to change and check that your teeth and gums are healthy."],
        ["Your options", "Your dentist explains the treatments that fit your goals, how long they take and the cost."],
        ["Treatment", "We complete your treatment and make sure the color, shape and bite feel right."],
      ],
      faqs: [
        ["Is professional whitening safe?", "When supervised by a dentist, professional whitening is a safe and effective way to brighten teeth. Some temporary sensitivity can happen."],
        ["What are veneers?", "Veneers are thin, custom-made shells bonded to the front of the teeth to improve their color, shape or size."],
        ["Will my results look natural?", "Yes. We choose shades and shapes that suit your face and your other teeth, so your smile looks like you — just brighter."],
      ],
    },
    "root-canal-treatment": {
      name: "Endodontics (Root Canal Treatment)",
      imageAlt: "Close-up of root canal treatment on a molar using dental files",
      shortName: "Root Canal Treatment",
      card: "Endodontic care to relieve tooth pain and save your natural tooth.",
      metaTitle: "Root Canal Treatment in Northlake, IL | Cosmo Dental Clinic",
      metaDescription:
        "Gentle root canal treatment (endodontics) in Northlake, IL to relieve tooth pain and save your natural tooth. Call (708) 345-6313.",
      intro: [
        "When the inside of a tooth becomes infected or inflamed, root canal treatment removes the problem and saves the tooth. It is one of the most effective ways to stop tooth pain while keeping your natural smile.",
        "Dr. Basel Abozor focuses on endodontics, with 20 years of patient-focused care. We see patients from Northlake and nearby communities, and we do our best to see people in pain quickly.",
      ],
      includes: [
        "Root canal therapy",
        "Root canal retreatment",
        "Urgent visits for tooth pain",
        "Crowns to protect treated teeth",
      ],
      whenTitle: "Signs you may need a root canal",
      when: [
        "Lasting tooth pain, especially when chewing",
        "Sensitivity to hot or cold that lingers",
        "Swelling or tenderness in the gums near a tooth",
        "A tooth that has darkened in color",
      ],
      steps: [
        ["Diagnosis", "We examine the tooth and take X-rays to find the cause of the pain."],
        ["Treatment", "With local anesthesia, the infected tissue is removed and the tooth is cleaned and sealed."],
        ["Protection", "Many treated teeth then need a crown to keep them strong for years to come."],
      ],
      faqs: [
        ["Is a root canal painful?", "Root canal treatment is done with local anesthesia, so most patients feel pressure rather than pain. It is usually done to relieve the pain caused by an infected tooth."],
        ["How long does a root canal take?", "Many root canals are completed in one or two visits. Your dentist will tell you what to expect for your tooth."],
        ["Is it better to pull the tooth?", "Saving your natural tooth is usually the best option when possible. Your dentist will explain the pros and cons of each choice."],
      ],
    },
    "oral-surgery": {
      name: "Oral Surgery",
      imageAlt: "Dentist performing an oral surgery procedure",
      card: "Tooth extractions, wisdom teeth removal, bone grafting and implant surgery, done gently in our office.",
      metaTitle: "Oral Surgery & Tooth Extractions in Northlake, IL",
      metaDescription:
        "Tooth extractions, wisdom teeth removal, bone grafting and implant surgery at Cosmo Dental Clinic in Northlake, IL. Call (708) 345-6313.",
      intro: [
        "Some dental problems need a surgical solution. Our dentists perform common oral surgery procedures in our office with careful planning, local anesthesia and clear instructions before and after your visit.",
        `Patients from ${AREA} come to us so they can have their surgery and follow-up care in one familiar place.`,
      ],
      includes: [
        "Simple and surgical tooth extractions",
        "Wisdom teeth removal",
        "Bone grafting to prepare for implants",
        "Dental implant placement surgery",
      ],
      whenTitle: "Oral surgery may be needed for",
      when: [
        "Wisdom teeth that are painful, infected or crowded",
        "A tooth that is badly broken or cannot be saved",
        "Bone loss before a dental implant",
        "Replacing missing teeth with implants",
      ],
      steps: [
        ["Evaluation", "We examine the area, take X-rays and explain your options and what to expect."],
        ["Procedure", "The procedure is done in our office with local anesthesia so you stay comfortable."],
        ["Recovery", "You go home with clear aftercare instructions, and we check your healing at a follow-up visit."],
      ],
      faqs: [
        ["Do wisdom teeth always need to come out?", "No. Wisdom teeth that are healthy and in the right position may not need removal. We recommend removal when they cause pain, infection or crowding."],
        ["How long is recovery after an extraction?", "Most people feel better within a few days. Following your aftercare instructions helps you heal comfortably."],
        ["Will I be awake during the procedure?", "Most procedures are done with local anesthesia, so the area is numb while you stay awake. Ask your dentist about comfort options for your visit."],
      ],
    },
    "pediatric-dentistry": {
      name: "Pediatric Dentistry",
      imageAlt: "Child holding a smiling tooth plush toy during a dental checkup",
      card: "Gentle, friendly dental care designed to help children feel comfortable and keep their smiles healthy.",
      metaTitle: "Children's Dentist in Northlake, IL | Cosmo Dental Clinic",
      metaDescription:
        "Gentle, kid-friendly check-ups, cleanings, fluoride and sealants in Northlake, IL. Help your child love the dentist. Call (708) 345-6313.",
      intro: [
        "Good habits start early. We make dental visits friendly and calm for children, so they grow up comfortable with the dentist and keep their smiles healthy.",
        `Parents from ${AREA} bring their children to us for patient, gentle care — and many families see us together.`,
      ],
      includes: [
        "Kid-friendly check-ups and cleanings",
        "Fluoride treatments",
        "Dental sealants to protect back teeth",
        "Tooth-colored fillings for baby and adult teeth",
        "Tips for brushing, flossing and healthy snacks",
      ],
      whenTitle: "When to bring your child",
      when: [
        "By their first birthday or when the first tooth appears",
        "Every six months for check-ups, or as your dentist recommends",
        "If your child has tooth pain or a chipped tooth",
        "If you notice spots or discoloration on the teeth",
      ],
      steps: [
        ["A gentle start", "We say hello, show your child the tools and go at their pace."],
        ["Check-up and cleaning", "We count and check the teeth, clean them and apply fluoride if needed."],
        ["Tips for home", "We share simple brushing and diet tips for your child's age."],
      ],
      faqs: [
        ["When should my child first see a dentist?", "Many experts recommend a first visit by age one or within six months of the first tooth."],
        ["Are dental sealants worth it?", "Sealants are thin coatings that help protect the chewing surfaces of back teeth from cavities. Your dentist will let you know if they are right for your child."],
        ["How can I help my child feel less nervous?", "Talk about the visit in a positive way and bring a favorite toy. Our team will take things slowly and explain each step."],
      ],
    },
  },

  servicesPage: {
    h1: "Our Dental Services",
    intro: `From routine cleanings to implants, ${CLINIC.name} offers complete dental care for the whole family, right here in Northlake, IL — close to Melrose Park, Elmhurst and Chicago.`,
    treatments: "Treatments include",
    learnMoreSr: (name) => ` about ${name}`,
    ctaTitle: "Not sure which treatment you need?",
    ctaText: "Book a check-up and your dentist will explain your options.",
  },

  servicePage: {
    includes: "What we offer",
    stepsTitle: "What to expect",
    faqTitle: "Common questions",
    otherServices: "Other services",
    ctaTitle: "Ready to book your visit?",
    ctaText: "New patients are always welcome. Request an appointment online or give us a call.",
    allServices: "All services",
  },

  home: {
    trustLabel: "Why patients choose us",
    trust: ["Experienced dentists", "New patients welcome", "Insurance & Financial Plans", "Convenient Northlake location"],
    introTitle: "Your Neighborhood Dentist in Northlake",
    intro: `${CLINIC.name} provides compassionate, high-quality dental care to Northlake, Melrose Park, Stone Park, Franklin Park, Elmhurst, Chicago and the surrounding communities. Our team offers general, cosmetic, implant, oral surgery and root canal dentistry, combining modern technology with a patient-centered approach to keep your smile healthy and confident.`,
    speak: "We speak your language:",
    servicesTitle: "Our Dental Services",
    seeAll: "See All Services",
    whyTitle: "Why Patients Choose Us",
    reasons: [
      ["Experienced dentists", (n) => `A team of ${n} dentists with more than 20 years of combined experience, committed to providing exceptional, patient-focused care.`],
      ["Comfort comes first", "We take time to listen, go at your pace and make every visit as relaxed as possible."],
      ["Complete care in one place", "From routine cleanings to implants and root canals, most treatments are done right here."],
      ["Clear, honest answers", "We explain your options and costs before any treatment starts — no surprises."],
    ],
    teamTitle: "Meet Our Dentists",
    portrait: (name) => `Portrait of ${name}`,
    wholeTeam: "Meet the Whole Team",
    galleryTitle: "Our Office & Smiles",
    reviewsTitle: "What Our Patients Say",
    reviewsText: "Read honest reviews from our patients on Google — and if we’ve cared for you, we’d be grateful if you shared your experience.",
    reviewsBtn: "Read Our Google Reviews",
    insuranceTitle: "Insurance & Payment",
    insuranceH: "Dental insurance",
    inNetwork: "We are in-network with plans including:",
    insuranceGeneric: "We work with many dental insurance plans. Call us with your plan details and we’ll help you check your coverage before your visit.",
    pricingH: "Clear pricing",
    pricing: "Before treatment begins, we’ll explain your options and the expected cost so you can decide with confidence. Ask our front desk about the payment options we offer.",
    newTitle: "New Patients: What to Expect",
    steps: [
      ["Request a visit", `Use our online form or call ${CLINIC.phone}. We’ll confirm a time that suits you.`],
      ["Your first appointment", "We’ll review your health history, examine your teeth and gums, and take X-rays if needed."],
      ["Your care plan", "Your dentist explains what they found, your options and costs, and answers every question."],
    ],
    bringTitle: "Please bring",
    bring: ["A photo ID", "Your dental insurance card (if you have one)", "A list of medications you take", "Recent dental X-rays, if available"],
    faqTitle: "Frequently Asked Questions",
    visitTitle: "Visit Our Office",
    address: "Address",
    phone: "Phone",
    languages: "Languages spoken",
    hours: "Hours",
    directions: "Get Directions",
    ctaTitle: "Ready for a healthier, brighter smile?",
    ctaText: "Book your visit today — new patients are always welcome.",
  },

  faqs: [
    ["Are you accepting new patients?", "Yes. Request an appointment online or call us and we'll find a time that works for you."],
    ["Do you speak Spanish?", "Yes. Our team speaks English, Spanish, Arabic, Urdu and Hindi, and our website is also available in Spanish."],
    ["Do you accept my dental insurance?", "We work with many dental insurance plans. Call us with your plan details before your visit and our team will help you check your coverage."],
    ["What should I bring to my first visit?", "Please bring a photo ID, your dental insurance card (if you have one), a list of any medications you take, and recent dental X-rays if you have them."],
    ["What should I do in a dental emergency?", `Call our office at ${CLINIC.phone} as soon as possible and we'll do our best to see you quickly. For serious injuries, heavy bleeding or swelling that affects breathing, call 911 or go to the nearest emergency room.`],
    ["Where are you located?", `We are at ${CLINIC.address.street} in Northlake, IL, on North Avenue — a short drive from Melrose Park, Stone Park, Franklin Park, Elmhurst and Chicago.`],
    ["How often should I have a check-up and cleaning?", "Many people benefit from a check-up and cleaning about every six months. Your dentist will recommend the schedule that is right for you."],
    ["Can a missing tooth be replaced?", "Often, yes. Options include dental implants, bridges and dentures. At a consultation, your dentist will check your oral health and explain which option suits you best."],
    ["Is a root canal painful?", "Root canal treatment is done with local anesthesia, so most patients feel pressure rather than pain during the procedure. It is usually done to relieve the pain caused by an infected tooth."],
    ["Can I send my medical information through the website?", "Please don't. To protect your privacy, share health or insurance details with us by phone or in person — not through the contact form or email."],
  ],

  staffPage: {
    h1: "Meet Our Team",
    intro: "Our dentists and assistants work together to give every patient thoughtful, comfortable and high-quality care — in English, Spanish, Arabic, Urdu and Hindi.",
    dentists: "Our Dentists",
  },

  dentistPage: {
    role: "Dentist at Cosmo Dental Clinic · Northlake, IL",
    metaTitle: (name) => `${name} – Dentist in Northlake, IL | Cosmo Dental Clinic`,
    metaDescription: (name, bio) =>
      `${name}, dentist at Cosmo Dental Clinic, 159 E North Ave, Northlake, IL. ${bio} Call (708) 345-6313 to book.`,
    intro: (name) =>
      `${name} sees patients at Cosmo Dental Clinic in Northlake, IL, serving families from Melrose Park, Stone Park, Franklin Park, Elmhurst and Chicago. Our team speaks English, Spanish, Arabic, Urdu and Hindi.`,
    focusTitle: "Areas of focus",
    visitTitle: "Where to see",
    bookWith: (name) => `Book with ${name}`,
    otherDentists: "Our other dentists",
    viewProfile: (name) => `View ${name}'s profile`,
  },

  contactPage: {
    h1: "Contact Us & Request an Appointment",
    intro: "Send us a request and our team will call or email you to confirm a time. Prefer to talk? Call us at ",
    office: "Our Office",
    emergency: "Dental emergency?",
    emergencyText: "Please call our office directly. For a medical emergency, call 911.",
  },

  form: {
    title: "Request an Appointment",
    privacyStrong: "Please do not include medical, dental or insurance details.",
    privacy: "This form is only for scheduling and general questions. We will discuss your health privately by phone or in the office.",
    required: "Fields marked with",
    requiredSr: "an asterisk",
    requiredEnd: "are required.",
    fullName: "Full name",
    email: "Email",
    phone: "Phone",
    reason: "Reason for your request",
    choose: "Choose one",
    book: "I would like to book an appointment",
    preferred: "Preferred appointment time",
    date: "Preferred date",
    time: "Preferred time",
    chooseTime: "Choose a time",
    consentA: "I agree to be contacted by phone or email about this request, and I have read the",
    consentLink: "Website Privacy Policy",
    sending: "Sending…",
    sendAppt: "Send Appointment Request",
    sendMsg: "Send Message",
    errors: {
      fullName: "Please enter your full name.",
      email: "Please enter a valid email address, for example name@example.com.",
      phone: "Please enter a valid phone number, for example (708) 555-1234.",
      reason: "Please choose a reason for your request.",
      preferredDate: "Please choose a preferred date.",
      preferredTime: "Please choose a preferred time.",
      consent: "Please confirm you agree to be contacted.",
    },
    fix: (n) => `Please fix ${n} field${n > 1 ? "s" : ""} highlighted below.`,
    successAppt: "Thank you! Your appointment request was sent. We will contact you to confirm a time.",
    successMsg: "Thank you! Your message was sent. We will contact you soon.",
    failed: "Sorry, your request could not be sent. Please try again or call our office.",
    // value sent to the clinic (always English) → label shown
    reasons: {
      "New patient appointment": "New patient appointment",
      "Existing patient appointment": "Existing patient appointment",
      "Cleaning / check-up": "Cleaning / check-up",
      "Cosmetic consultation": "Cosmetic consultation",
      "Implant consultation": "Implant consultation",
      "Tooth pain / emergency": "Tooth pain / emergency",
      "General question": "General question",
    },
    times: {
      "Morning (10 AM – 12 PM)": "Morning (10 AM – 12 PM)",
      "Afternoon (12 PM – 3 PM)": "Afternoon (12 PM – 3 PM)",
      "Late afternoon (3 PM – 6 PM)": "Late afternoon (3 PM – 6 PM)",
    },
  },

  notFound: {
    h1: "Page not found",
    text: "Sorry, we couldn’t find that page. It may have moved.",
    home: "Go to the home page",
  },

  languageNames: { English: "English", Spanish: "Spanish", Arabic: "Arabic", Urdu: "Urdu", Hindi: "Hindi" },
  and: "and",
};

export default en;
