// ─────────────────────────────────────────────────────────────
// TEXTO EN ESPAÑOL de todo el sitio web.
// Misma estructura que en.js — si cambia un texto en inglés,
// cámbielo también aquí.
// Pida a una persona del equipo que hable español con fluidez que
// revise estos textos antes de publicarlos.
// ─────────────────────────────────────────────────────────────
import { CLINIC } from "../config/clinic.js";

const AREA = "Northlake, Melrose Park, Stone Park, Franklin Park, Elmhurst, Bellwood, Berkeley y los suburbios del oeste de Chicago";

const es = {
  lang: "es",
  locale: "es_US",
  languageName: "Español",

  ui: {
    skip: "Saltar al contenido principal",
    nav: { home: "Inicio", services: "Servicios", staff: "Nuestro equipo", contact: "Contacto" },
    mainNav: "Principal",
    mobileNav: "Menú móvil",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    callUsAt: "Llámenos al ",
    call: "Llame al",
    book: "Pedir cita",
    bookAn: "Pedir una cita",
    homeLink: `${CLINIC.name} – Inicio`,
    switchLang: "English",
    switchLangAria: "View this site in English",
    switchLangCode: "en",
    newTab: " (se abre en una pestaña nueva)",
    mapsNewTab: " (abre Google Maps en una pestaña nueva)",
    relay: "¿Necesita ayuda para llamar por teléfono? Puede comunicarse con nosotros a través del servicio de retransmisión 711.",
    hoursCall: "Llámenos para conocer nuestro horario actual.",
    breadcrumb: "Ruta de navegación",
    learnMore: "Más información",
  },

  display: {
    region: "Opciones de visualización",
    textSize: "Tamaño del texto",
    sizes: { default: "Tamaño de texto normal", large: "Texto más grande", xlarge: "Texto aún más grande" },
    contrast: "Alto contraste",
  },

  header: {
    sub: "Dentista en Northlake, IL",
    subtitle:
      "Odontología familiar, estética, implantes y atención de urgencias dentales para Northlake y el área de Chicago. Siempre aceptamos pacientes nuevos.",
  },

  footer: {
    contact: "Contáctenos",
    hours: "Horario de atención",
    links: "Enlaces rápidos",
    callForHours: ["Llame al ", " para conocer nuestro horario actual."],
    privacy: "Política de privacidad del sitio web (en inglés)",
    npp: "Aviso de prácticas de privacidad (en inglés)",
    accessibility: "Accesibilidad",
    mapAlt: (addr) => `Mapa que muestra ${CLINIC.name} en ${addr}. Abre Google Maps en una pestaña nueva.`,
    disclaimer:
      "La información de este sitio web es solo para fines educativos generales y no constituye asesoramiento médico ni dental. Consulte a un dentista sobre sus necesidades particulares. Para una urgencia dental, llame a nuestro consultorio; para una emergencia médica, llame al 911.",
    rights: "Todos los derechos reservados.",
    credit: "Sitio web diseñado y desarrollado por",
    social: "Redes sociales",
    onSocial: (label) => `${CLINIC.shortName} en ${label} (se abre en una pestaña nueva)`,
  },

  meta: {
    home: {
      title: "Cosmo Dental Clinic | Dentista en Northlake, IL",
      description:
        "Dentista que habla español en Northlake, IL, cerca de Melrose Park y Elmhurst. Odontología familiar, estética e implantes. Llame al (708) 345-6313.",
    },
    services: {
      title: "Servicios dentales en Northlake, IL | Cosmo Dental Clinic",
      description:
        "Odontología general, estética e infantil, implantes dentales, cirugía oral y tratamiento de conducto en Northlake, IL. Llame al (708) 345-6313.",
    },
    staff: {
      title: "Nuestros dentistas | Cosmo Dental Clinic, Northlake IL",
      description:
        "Conozca a los dentistas de Cosmo Dental Clinic en Northlake, IL: atención amable y con experiencia para toda la familia, también en español.",
    },
    contact: {
      title: "Contacto y citas | Cosmo Dental Clinic",
      description:
        "Pida una cita dental en Cosmo Dental Clinic, 159 E North Ave, Northlake, IL 60164. Hablamos español. Llame al (708) 345-6313.",
    },
    accessibility: {
      title: "Declaración de accesibilidad | Cosmo Dental Clinic",
      description:
        "El compromiso de Cosmo Dental Clinic con un sitio web accesible que cumple con WCAG 2.1 AA.",
    },
    notFound: {
      title: "Página no encontrada | Cosmo Dental Clinic",
      description: "No pudimos encontrar la página que busca.",
    },
  },

  services: {
    "general-dentistry": {
      name: "Odontología general",
      imageAlt: "Paciente sonriente sosteniendo un modelo de diente",
      card: "Chequeos, limpiezas, empastes y cuidado de las encías para mantener sana la sonrisa de toda su familia.",
      metaTitle: "Dentista general en Northlake, IL | Cosmo Dental Clinic",
      metaDescription:
        "Chequeos, limpiezas, radiografías, empastes y cuidado de encías para adultos y niños en Northlake, IL. Hablamos español. Llame al (708) 345-6313.",
      intro: [
        "La atención dental regular es la forma más sencilla de prevenir problemas y mantener una sonrisa sana toda la vida. En Cosmo Dental Clinic atendemos a pacientes de todas las edades para chequeos de rutina, limpiezas profesionales y tratamientos del día a día.",
        `Familias de ${AREA} nos eligen por nuestras consultas sin prisas, explicaciones claras y atención en español, inglés, árabe, urdu e hindi.`,
      ],
      includes: [
        "Exámenes y chequeos dentales",
        "Limpiezas profesionales",
        "Radiografías digitales",
        "Empastes del color del diente",
        "Tratamiento de enfermedades de las encías",
        "Coronas y puentes",
        "Citas de urgencia por dolor de muela o un diente roto",
      ],
      whenTitle: "Cuándo pedir una cita",
      when: [
        "Han pasado más de seis meses desde su último chequeo",
        "Le sangran las encías al cepillarse o usar hilo dental",
        "Tiene un diente sensible, adolorido o despostillado",
        "Es nuevo en el área y busca un dentista familiar",
      ],
      steps: [
        ["Chequeo", "Revisamos su historial de salud y examinamos sus dientes, encías y mordida."],
        ["Radiografías y limpieza", "Tomamos radiografías si es necesario y retiramos con cuidado la placa y el sarro."],
        ["Su plan", "Su dentista le explica lo que encontró y cualquier tratamiento que necesite, con los costos, antes de empezar."],
      ],
      faqs: [
        ["¿Cada cuánto debo ir al dentista?", "A muchas personas les conviene un chequeo y una limpieza cada seis meses aproximadamente. Su dentista le recomendará la frecuencia adecuada para usted."],
        ["¿Atienden a niños y adultos?", "Sí. Atendemos a toda la familia, desde la primera visita de los niños hasta adultos y personas mayores."],
        ["¿Ofrecen empastes del color del diente?", "Sí. Usamos un material del color del diente que se integra con sus dientes naturales."],
      ],
    },
    "dental-implants": {
      name: "Implantes dentales",
      imageAlt: "Ilustración de un implante dental con corona entre dientes naturales",
      card: "Reemplazo duradero de dientes perdidos que se ve, se siente y funciona como un diente natural.",
      metaTitle: "Implantes dentales en Northlake, IL | Cosmo Dental Clinic",
      metaDescription:
        "Reemplace los dientes que le faltan con implantes dentales en Northlake, IL. Implantes individuales, puentes y más. Llame al (708) 345-6313.",
      intro: [
        "Un implante dental es un pequeño poste de titanio que reemplaza la raíz de un diente perdido. Una vez que se une al hueso maxilar, se coloca encima una corona de aspecto natural para que pueda comer, hablar y sonreír con confianza.",
        "Nuestros dentistas planifican y colocan implantes aquí mismo, en nuestro consultorio de Northlake, cerca de Melrose Park, Stone Park, Franklin Park y Elmhurst.",
      ],
      includes: [
        "Consultas de implantes con radiografías digitales",
        "Implantes de un solo diente",
        "Puentes sobre implantes",
        "Opciones de rehabilitación de toda la boca",
        "Injertos de hueso cuando se necesita más soporte",
      ],
      whenTitle: "Los implantes pueden ser para usted si",
      when: [
        "Le faltan uno o más dientes",
        "Su dentadura postiza está floja o le resulta incómoda",
        "Tiene un diente que no se puede salvar y debe reemplazarse",
        "Desea una opción fija que no afecte a los dientes vecinos",
      ],
      steps: [
        ["Consulta", "Examinamos su boca, tomamos radiografías y le explicamos si los implantes son una buena opción para usted."],
        ["Colocación del implante", "El implante se coloca en un procedimiento corto con anestesia local y luego se deja sanar."],
        ["Su nuevo diente", "Una vez sanado, se coloca una corona hecha a su medida para que el implante se vea y funcione como un diente natural."],
      ],
      faqs: [
        ["¿Cuánto duran los implantes dentales?", "Con un buen cepillado, hilo dental y chequeos regulares, los implantes pueden durar muchos años. Su dentista le explicará qué esperar en su caso."],
        ["¿Duele ponerse un implante?", "El procedimiento se hace con anestesia local, por lo que la mayoría de los pacientes siente presión, no dolor. Es normal tener algo de molestia después, que suele durar poco."],
        ["¿Todas las personas pueden recibir implantes?", "Muchos adultos sí. Es importante tener encías sanas y suficiente hueso. Si hace falta más hueso, un injerto suele ayudar. Su dentista lo evaluará en la consulta."],
      ],
    },
    "cosmetic-dentistry": {
      name: "Odontología estética",
      imageAlt: "Paciente admirando su sonrisa en un espejo mientras el dentista sostiene una guía de colores dentales",
      card: "Blanqueamiento dental, carillas y diseño de sonrisa pensados según sus objetivos.",
      metaTitle: "Dentista estético en Northlake, IL | Blanqueamiento y carillas",
      metaDescription:
        "Blanqueamiento dental, carillas de porcelana, resinas y diseño de sonrisa en Cosmo Dental Clinic, Northlake, IL. Llame al (708) 345-6313.",
      intro: [
        "La odontología estética le ayuda a sentirse seguro de su sonrisa. Ya sea que desee dientes más blancos, corregir un diente despostillado o un espacio, o un cambio completo de sonrisa, planificamos cada tratamiento según sus objetivos y la apariencia natural de su rostro.",
        `Pacientes de ${AREA} nos visitan por resultados naturales y consejos honestos sobre lo que es posible.`,
      ],
      includes: [
        "Blanqueamiento dental profesional",
        "Carillas de porcelana",
        "Resinas del color del diente para dientes despostillados y espacios",
        "Coronas del color del diente",
        "Planificación de diseño de sonrisa",
      ],
      whenTitle: "La odontología estética puede ayudar con",
      when: [
        "Dientes manchados o amarillentos",
        "Dientes despostillados, desgastados o disparejos",
        "Pequeños espacios entre los dientes",
        "Empastes o coronas antiguos que ya no combinan",
      ],
      steps: [
        ["Consulta de sonrisa", "Hablamos de lo que le gustaría cambiar y revisamos que sus dientes y encías estén sanos."],
        ["Sus opciones", "Su dentista le explica los tratamientos que se ajustan a sus objetivos, cuánto tiempo toman y su costo."],
        ["Tratamiento", "Realizamos su tratamiento y nos aseguramos de que el color, la forma y la mordida se sientan bien."],
      ],
      faqs: [
        ["¿Es seguro el blanqueamiento profesional?", "Cuando lo supervisa un dentista, el blanqueamiento profesional es una forma segura y eficaz de aclarar los dientes. Puede causar sensibilidad temporal."],
        ["¿Qué son las carillas?", "Las carillas son láminas delgadas hechas a la medida que se adhieren a la parte frontal de los dientes para mejorar su color, forma o tamaño."],
        ["¿Los resultados se verán naturales?", "Sí. Elegimos tonos y formas que van con su rostro y sus otros dientes, para que su sonrisa se vea natural, solo que más radiante."],
      ],
    },
    "root-canal-treatment": {
      name: "Endodoncia (tratamiento de conducto)",
      imageAlt: "Primer plano de un tratamiento de conducto en una muela con limas dentales",
      shortName: "Tratamiento de conducto",
      card: "Atención endodóntica para aliviar el dolor de muela y salvar su diente natural.",
      metaTitle: "Tratamiento de conducto en Northlake, IL | Cosmo Dental Clinic",
      metaDescription:
        "Tratamiento de conducto (endodoncia) en Northlake, IL para aliviar el dolor de muela y salvar su diente natural. Hablamos español. Llame al (708) 345-6313.",
      intro: [
        "Cuando el interior de un diente se infecta o se inflama, el tratamiento de conducto elimina el problema y salva el diente. Es una de las formas más eficaces de quitar el dolor de muela y conservar su sonrisa natural.",
        "El Dr. Basel Abozor se enfoca en la endodoncia, con 20 años de atención centrada en el paciente. Atendemos a pacientes de Northlake y comunidades cercanas, y hacemos lo posible por ver pronto a quienes tienen dolor.",
      ],
      includes: [
        "Tratamiento de conducto",
        "Retratamiento de conducto",
        "Citas de urgencia por dolor de muela",
        "Coronas para proteger los dientes tratados",
      ],
      whenTitle: "Señales de que podría necesitar un tratamiento de conducto",
      when: [
        "Dolor de muela que no se quita, sobre todo al masticar",
        "Sensibilidad al frío o al calor que persiste",
        "Hinchazón o dolor en la encía cerca de un diente",
        "Un diente que se ha oscurecido",
      ],
      steps: [
        ["Diagnóstico", "Examinamos el diente y tomamos radiografías para encontrar la causa del dolor."],
        ["Tratamiento", "Con anestesia local, se retira el tejido infectado y el diente se limpia y se sella."],
        ["Protección", "Muchos dientes tratados necesitan después una corona para mantenerse fuertes por muchos años."],
      ],
      faqs: [
        ["¿Duele un tratamiento de conducto?", "El tratamiento de conducto se hace con anestesia local, por lo que la mayoría de los pacientes siente presión, no dolor. Normalmente se hace para quitar el dolor que causa un diente infectado."],
        ["¿Cuánto tarda un tratamiento de conducto?", "Muchos tratamientos se terminan en una o dos citas. Su dentista le dirá qué esperar en su caso."],
        ["¿Es mejor sacar el diente?", "Cuando es posible, salvar su diente natural suele ser la mejor opción. Su dentista le explicará las ventajas y desventajas de cada alternativa."],
      ],
    },
    "oral-surgery": {
      name: "Cirugía oral",
      imageAlt: "Dentista realizando un procedimiento de cirugía oral",
      card: "Extracciones, muelas del juicio, injertos de hueso y cirugía de implantes, con cuidado y en nuestro consultorio.",
      metaTitle: "Cirugía oral y extracciones dentales en Northlake, IL",
      metaDescription:
        "Extracciones dentales, muelas del juicio, injertos de hueso y cirugía de implantes en Cosmo Dental Clinic, Northlake, IL. Llame al (708) 345-6313.",
      intro: [
        "Algunos problemas dentales necesitan una solución quirúrgica. Nuestros dentistas realizan en el consultorio los procedimientos de cirugía oral más comunes, con una planificación cuidadosa, anestesia local e instrucciones claras antes y después de su cita.",
        `Pacientes de ${AREA} acuden a nosotros para tener su cirugía y sus controles en un mismo lugar de confianza.`,
      ],
      includes: [
        "Extracciones dentales simples y quirúrgicas",
        "Extracción de muelas del juicio",
        "Injertos de hueso para preparar implantes",
        "Cirugía de colocación de implantes dentales",
      ],
      whenTitle: "Puede necesitar cirugía oral por",
      when: [
        "Muelas del juicio que duelen, se infectan o causan apiñamiento",
        "Un diente muy dañado o que no se puede salvar",
        "Pérdida de hueso antes de un implante dental",
        "Reemplazo de dientes perdidos con implantes",
      ],
      steps: [
        ["Evaluación", "Examinamos la zona, tomamos radiografías y le explicamos sus opciones y qué esperar."],
        ["Procedimiento", "El procedimiento se hace en nuestro consultorio con anestesia local para que esté cómodo."],
        ["Recuperación", "Se va a casa con instrucciones claras de cuidado y revisamos su recuperación en una cita de control."],
      ],
      faqs: [
        ["¿Siempre hay que sacar las muelas del juicio?", "No. Si las muelas del juicio están sanas y bien ubicadas, puede que no sea necesario sacarlas. Recomendamos extraerlas cuando causan dolor, infección o apiñamiento."],
        ["¿Cuánto dura la recuperación después de una extracción?", "La mayoría de las personas se siente mejor en pocos días. Seguir las instrucciones de cuidado le ayuda a sanar con comodidad."],
        ["¿Estaré despierto durante el procedimiento?", "La mayoría de los procedimientos se hacen con anestesia local: la zona se adormece y usted permanece despierto. Pregunte a su dentista por las opciones de comodidad para su cita."],
      ],
    },
    "pediatric-dentistry": {
      name: "Odontopediatría",
      imageAlt: "Niño sosteniendo un peluche de diente sonriente durante una revisión dental",
      shortName: "Odontología infantil",
      card: "Atención dental amable y cariñosa para que los niños se sientan cómodos y mantengan su sonrisa sana.",
      metaTitle: "Dentista para niños en Northlake, IL | Cosmo Dental Clinic",
      metaDescription:
        "Chequeos, limpiezas, flúor y selladores para niños en un ambiente amable en Northlake, IL. Hablamos español. Llame al (708) 345-6313.",
      intro: [
        "Los buenos hábitos empiezan desde pequeños. Hacemos que las visitas al dentista sean amables y tranquilas para los niños, para que crezcan cómodos con el dentista y mantengan su sonrisa sana.",
        `Padres de ${AREA} traen a sus hijos a nuestro consultorio por nuestra atención paciente y cuidadosa, y muchas familias vienen juntas.`,
      ],
      includes: [
        "Chequeos y limpiezas pensados para niños",
        "Tratamientos con flúor",
        "Selladores dentales para proteger las muelas",
        "Empastes del color del diente para dientes de leche y permanentes",
        "Consejos sobre cepillado, hilo dental y meriendas saludables",
      ],
      whenTitle: "Cuándo traer a su hijo",
      when: [
        "Antes de su primer cumpleaños o cuando le salga el primer diente",
        "Cada seis meses para un chequeo, o según le recomiende su dentista",
        "Si su hijo tiene dolor de muela o un diente despostillado",
        "Si nota manchas o cambios de color en los dientes",
      ],
      steps: [
        ["Un comienzo tranquilo", "Saludamos a su hijo, le mostramos los instrumentos y vamos a su ritmo."],
        ["Chequeo y limpieza", "Contamos y revisamos los dientes, los limpiamos y aplicamos flúor si es necesario."],
        ["Consejos para la casa", "Le damos consejos sencillos de cepillado y alimentación según la edad de su hijo."],
      ],
      faqs: [
        ["¿Cuándo debe ir mi hijo al dentista por primera vez?", "Muchos expertos recomiendan la primera visita alrededor del primer año de edad o dentro de los seis meses después de que salga el primer diente."],
        ["¿Vale la pena poner selladores dentales?", "Los selladores son capas delgadas que ayudan a proteger de las caries la superficie de masticación de las muelas. Su dentista le dirá si son adecuados para su hijo."],
        ["¿Cómo puedo ayudar a que mi hijo esté menos nervioso?", "Hable de la visita de forma positiva y traiga su juguete favorito. Nuestro equipo irá con calma y le explicará cada paso."],
      ],
    },
  },

  servicesPage: {
    h1: "Nuestros servicios dentales",
    intro: `Desde limpiezas de rutina hasta implantes, ${CLINIC.name} ofrece atención dental completa para toda la familia aquí mismo en Northlake, IL, cerca de Melrose Park, Elmhurst y Chicago.`,
    treatments: "Tratamientos",
    learnMoreSr: (name) => ` sobre ${name}`,
    ctaTitle: "¿No sabe qué tratamiento necesita?",
    ctaText: "Pida un chequeo y su dentista le explicará sus opciones.",
  },

  servicePage: {
    includes: "Lo que ofrecemos",
    stepsTitle: "Qué esperar",
    faqTitle: "Preguntas frecuentes",
    otherServices: "Otros servicios",
    ctaTitle: "¿Listo para pedir su cita?",
    ctaText: "Siempre aceptamos pacientes nuevos. Pida una cita en línea o llámenos.",
    allServices: "Todos los servicios",
  },

  home: {
    trustLabel: "Por qué nos eligen nuestros pacientes",
    trust: ["Dentistas con experiencia", "Aceptamos pacientes nuevos", "Seguros y planes de pago", "Ubicación cómoda en Northlake"],
    introTitle: "Su dentista de confianza en Northlake",
    intro: `${CLINIC.name} brinda atención dental de alta calidad y con calidez humana a Northlake, Melrose Park, Stone Park, Franklin Park, Elmhurst, Chicago y las comunidades cercanas. Nuestro equipo ofrece odontología general, estética, implantes, cirugía oral y tratamientos de conducto, combinando tecnología moderna con una atención centrada en el paciente para que luzca una sonrisa sana y llena de confianza.`,
    speak: "Hablamos su idioma:",
    servicesTitle: "Nuestros servicios dentales",
    seeAll: "Ver todos los servicios",
    whyTitle: "Por qué nos eligen nuestros pacientes",
    reasons: [
      ["Dentistas con experiencia", (n) => `Un equipo de ${n} dentistas con más de 20 años de experiencia combinada, comprometidos con una atención excepcional y centrada en el paciente.`],
      ["Su comodidad es lo primero", "Nos tomamos el tiempo de escucharle, vamos a su ritmo y hacemos que cada visita sea lo más tranquila posible."],
      ["Atención completa en un solo lugar", "Desde limpiezas de rutina hasta implantes y tratamientos de conducto, la mayoría de los tratamientos se hacen aquí mismo."],
      ["Respuestas claras y honestas", "Le explicamos sus opciones y los costos antes de empezar cualquier tratamiento, sin sorpresas."],
    ],
    teamTitle: "Conozca a nuestros dentistas",
    portrait: (name) => `Retrato de ${name}`,
    wholeTeam: "Conozca a todo el equipo",
    galleryTitle: "Nuestro consultorio",
    reviewsTitle: "Lo que dicen nuestros pacientes",
    reviewsText: "Lea las opiniones de nuestros pacientes en Google y, si le hemos atendido, le agradeceríamos mucho que compartiera su experiencia.",
    reviewsBtn: "Ver nuestras opiniones en Google",
    insuranceTitle: "Seguros y pagos",
    insuranceH: "Seguro dental",
    inNetwork: "Estamos dentro de la red de planes como:",
    insuranceGeneric: "Trabajamos con muchos planes de seguro dental. Llámenos con los datos de su plan y le ayudaremos a revisar su cobertura antes de su cita.",
    pricingH: "Precios claros",
    pricing: "Antes de empezar un tratamiento, le explicaremos sus opciones y el costo estimado para que decida con confianza. Pregunte en recepción por las opciones de pago que ofrecemos.",
    newTitle: "Pacientes nuevos: qué esperar",
    steps: [
      ["Pida una cita", `Use nuestro formulario en línea o llame al ${CLINIC.phone}. Le confirmaremos un horario que le convenga.`],
      ["Su primera cita", "Revisaremos su historial de salud, examinaremos sus dientes y encías, y tomaremos radiografías si es necesario."],
      ["Su plan de atención", "Su dentista le explica lo que encontró, sus opciones y los costos, y responde todas sus preguntas."],
    ],
    bringTitle: "Por favor traiga",
    bring: ["Una identificación con foto", "Su tarjeta de seguro dental (si tiene)", "Una lista de los medicamentos que toma", "Radiografías dentales recientes, si las tiene"],
    faqTitle: "Preguntas frecuentes",
    visitTitle: "Visite nuestro consultorio",
    address: "Dirección",
    phone: "Teléfono",
    languages: "Idiomas",
    hours: "Horario",
    directions: "Cómo llegar",
    ctaTitle: "¿Listo para una sonrisa más sana y radiante?",
    ctaText: "Pida su cita hoy: siempre aceptamos pacientes nuevos.",
  },

  faqs: [
    ["¿Aceptan pacientes nuevos?", "Sí. Pida una cita en línea o llámenos y buscaremos un horario que le convenga."],
    ["¿Hablan español?", "Sí. Nuestro equipo habla español, inglés, árabe, urdu e hindi. Puede llamarnos o escribirnos en español."],
    ["¿Aceptan mi seguro dental?", "Trabajamos con muchos planes de seguro dental. Llámenos con los datos de su plan antes de su cita y nuestro equipo le ayudará a revisar su cobertura."],
    ["¿Qué debo traer a mi primera cita?", "Traiga una identificación con foto, su tarjeta de seguro dental (si tiene), una lista de los medicamentos que toma y radiografías dentales recientes si las tiene."],
    ["¿Qué hago en caso de una urgencia dental?", `Llame a nuestro consultorio al ${CLINIC.phone} lo antes posible y haremos todo lo posible por atenderle pronto. Si tiene una lesión grave, sangrado abundante o hinchazón que le dificulta respirar, llame al 911 o vaya a la sala de emergencias más cercana.`],
    ["¿Dónde están ubicados?", `Estamos en ${CLINIC.address.street}, en Northlake, IL, sobre North Avenue, a pocos minutos de Melrose Park, Stone Park, Franklin Park, Elmhurst y Chicago.`],
    ["¿Cada cuánto debo hacerme un chequeo y una limpieza?", "A muchas personas les conviene un chequeo y una limpieza cada seis meses aproximadamente. Su dentista le recomendará la frecuencia adecuada para usted."],
    ["¿Se puede reemplazar un diente que falta?", "En muchos casos, sí. Las opciones incluyen implantes dentales, puentes y dentaduras postizas. En una consulta, su dentista revisará su salud bucal y le explicará qué opción le conviene más."],
    ["¿Duele un tratamiento de conducto?", "El tratamiento de conducto se hace con anestesia local, por lo que la mayoría de los pacientes siente presión, no dolor. Normalmente se hace para quitar el dolor que causa un diente infectado."],
    ["¿Puedo enviar mi información médica por el sitio web?", "Por favor, no lo haga. Para proteger su privacidad, comparta su información de salud o de seguro por teléfono o en persona, no por el formulario ni por correo electrónico."],
  ],

  staffPage: {
    h1: "Conozca a nuestro equipo",
    intro: "Nuestros dentistas y asistentes trabajan juntos para brindar a cada paciente una atención cuidadosa, cómoda y de alta calidad, en español, inglés, árabe, urdu e hindi.",
    dentists: "Nuestros dentistas",
  },

  dentistPage: {
    role: "Dentista en Cosmo Dental Clinic · Northlake, IL",
    metaTitle: (name) => `${name} – Dentista en Northlake, IL | Cosmo Dental Clinic`,
    metaDescription: (name, bio) =>
      `${name}, dentista en Cosmo Dental Clinic, 159 E North Ave, Northlake, IL. ${bio} Llame al (708) 345-6313.`,
    intro: (name) =>
      `${name} atiende a pacientes en Cosmo Dental Clinic en Northlake, IL, y recibe a familias de Melrose Park, Stone Park, Franklin Park, Elmhurst y Chicago. Nuestro equipo habla español, inglés, árabe, urdu e hindi.`,
    focusTitle: "Áreas de enfoque",
    visitTitle: "Dónde atiende",
    bookWith: (name) => `Pedir cita con ${name}`,
    otherDentists: "Nuestros otros dentistas",
    viewProfile: (name) => `Ver el perfil de ${name}`,
  },

  contactPage: {
    h1: "Contáctenos y pida una cita",
    intro: "Envíenos su solicitud y nuestro equipo le llamará o le escribirá para confirmar un horario. ¿Prefiere hablar con nosotros? Llámenos al ",
    office: "Nuestro consultorio",
    emergency: "¿Tiene una urgencia dental?",
    emergencyText: "Llame directamente a nuestro consultorio. Para una emergencia médica, llame al 911.",
  },

  form: {
    title: "Pida una cita",
    privacyStrong: "Por favor, no incluya información médica, dental ni de su seguro.",
    privacy: "Este formulario es solo para pedir citas y hacer preguntas generales. Hablaremos de su salud en privado, por teléfono o en el consultorio.",
    required: "Los campos marcados con",
    requiredSr: "un asterisco",
    requiredEnd: "son obligatorios.",
    fullName: "Nombre completo",
    email: "Correo electrónico",
    phone: "Teléfono",
    reason: "Motivo de su solicitud",
    choose: "Elija una opción",
    book: "Quiero pedir una cita",
    preferred: "Horario de cita preferido",
    date: "Fecha preferida",
    time: "Horario preferido",
    chooseTime: "Elija un horario",
    consentA: "Acepto que me contacten por teléfono o correo electrónico sobre esta solicitud y he leído la",
    consentLink: "Política de privacidad del sitio web (en inglés)",
    sending: "Enviando…",
    sendAppt: "Enviar solicitud de cita",
    sendMsg: "Enviar mensaje",
    errors: {
      fullName: "Escriba su nombre completo.",
      email: "Escriba un correo electrónico válido, por ejemplo nombre@ejemplo.com.",
      phone: "Escriba un número de teléfono válido, por ejemplo (708) 555-1234.",
      reason: "Elija el motivo de su solicitud.",
      preferredDate: "Elija una fecha preferida.",
      preferredTime: "Elija un horario preferido.",
      consent: "Confirme que acepta que le contactemos.",
    },
    fix: (n) => (n > 1 ? `Corrija los ${n} campos marcados abajo.` : "Corrija el campo marcado abajo."),
    successAppt: "¡Gracias! Recibimos su solicitud de cita. Le contactaremos para confirmar el horario.",
    successMsg: "¡Gracias! Recibimos su mensaje. Le contactaremos pronto.",
    failed: "Lo sentimos, no pudimos enviar su solicitud. Inténtelo de nuevo o llame a nuestro consultorio.",
    reasons: {
      "New patient appointment": "Cita de paciente nuevo",
      "Existing patient appointment": "Cita de paciente actual",
      "Cleaning / check-up": "Limpieza / chequeo",
      "Cosmetic consultation": "Consulta de estética dental",
      "Implant consultation": "Consulta de implantes",
      "Tooth pain / emergency": "Dolor de muela / urgencia",
      "General question": "Pregunta general",
    },
    times: {
      "Morning (10 AM – 12 PM)": "Mañana (10 a. m. – 12 p. m.)",
      "Afternoon (12 PM – 3 PM)": "Primeras horas de la tarde (12 p. m. – 3 p. m.)",
      "Late afternoon (3 PM – 6 PM)": "Últimas horas de la tarde (3 p. m. – 6 p. m.)",
    },
  },

  notFound: {
    h1: "Página no encontrada",
    text: "Lo sentimos, no pudimos encontrar esa página. Es posible que se haya movido.",
    home: "Ir a la página de inicio",
  },

  languageNames: { English: "inglés", Spanish: "español", Arabic: "árabe", Urdu: "urdu", Hindi: "hindi" },
  and: "y",
};

export default es;
