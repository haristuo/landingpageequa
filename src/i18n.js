export const translations = {
  de: {
    nav: {
      features: 'Features',
      howItWorks: "So funktioniert's",
      testimonials: 'Erfahrungen',
      waitlist: 'Warteliste',
    },
    hero: {
      badge: 'Ausgaben teilen &middot; Überblick behalten',
      title: 'Split. Pay. Done.',
      subtitle: 'Teile Ausgaben fair mit Freunden. Kein Chaos mehr – nur Klarheit.',
      cta: 'Mehr erfahren',
    },
    features: {
      heading: 'Alles, was du brauchst',
      subheading: 'Equa vereint Übersichtlichkeit mit Spaß – inspiriert von den besten Fintech-Apps.',
      dashboard: {
        title: 'Dashboard',
        desc: 'Alle Ausgaben auf einen Blick. Übersichtliche Darstellung deiner Gruppen, Schulden und Zahlungsströme.',
      },
      friends: {
        title: 'Freunde & Gruppen',
        desc: 'Erstelle Gruppen, lade Freunde ein und teile Ausgaben fair und transparent. Ideal für WG, Urlaub oder Events.',
      },
      quiz: {
        title: 'Quiz-Challenge',
        desc: 'Spielerisch Schulden abbauen. Lerne deine Ausgabengewohnheiten kennen und gewinne Challenges.',
      },
      stats: {
        title: 'Statistiken & Analysen',
        desc: 'Detaillierte Auswertungen deiner Ausgaben. Diagramme, Trends und Einblicke für bessere Kontrolle.',
      },
    },
    howItWorks: {
      heading: "So funktioniert's",
      subheading: 'In vier einfachen Schritten zur fairen Kostenaufteilung.',
      steps: [
        { title: 'Erfassen', desc: 'Trage gemeinsame Ausgaben ein – schnell und unkompliziert.' },
        { title: 'Aufteilen', desc: 'Teile die Kosten fair auf. Flexibel nach Person oder Anteil.' },
        { title: 'Quiz spielen', desc: 'Reduziere Schulden spielerisch mit Quiz-Challenges.' },
        { title: 'Überblick', desc: 'Alle Forderungen im Blick. Statistiken in Echtzeit.' },
      ],
    },
    appPreview: {
      screens: [{ label: 'Dashboard', desc: 'Alle Ausgaben auf einen Blick' }],
      heading: 'Designed für Klarheit',
    },
    testimonials: {
      heading: 'Was Nutzer sagen',
      subheading: 'Vertrauen durch echte Erfahrungen.',
      items: [
        {
          quote: 'Wir testen Equa seit 2 Wochen in der WG. Klappt super – jeder trägt seine Ausgaben ein und wir sehen sofort wer wem was schuldet.',
          name: 'Lukas M.',
        },
        {
          quote: 'Für unseren Urlaub mit 4 Freunden super praktisch. Nach dem Setup lief alles reibungslos. Absolute Empfehlung!',
          name: 'Sarah K.',
        },
        {
          quote: 'Einfach gehalten, genau das was ich brauche. Teile Miete und Einkäufe mit meinem Mitbewohner – kein Stress mehr.',
          name: 'Alex T.',
        },
      ],
    },
    cta: {
      heading: 'Bereit, Ordnung in deine Ausgaben zu bringen?',
      subheading: 'Die App ist noch in Arbeit – trage dich auf die Warteliste ein und wir melden uns, sobald es losgeht.',
      waitlistCta: 'Zur Warteliste',
    },
    footer: {
      howItWorks: "So funktioniert's",
      testimonials: 'Erfahrungen',
      waitlist: 'Warteliste',
      copyright: `© ${new Date().getFullYear()} Equa. Alle Rechte vorbehalten.`,
      privacy: 'Datenschutz',
      terms: 'AGB',
    },
    waitlist: {
      success: 'Du bist auf der Waitlist!',
      successSub: 'Wir benachrichtigen dich, wenn Equa startet.',
      placeholder: 'Deine E-Mail',
      aria: 'E-Mail für Waitlist',
      button: 'Früher Zugang',
      invalidEmail: 'Bitte gib eine gültige E-Mail-Adresse ein.',
      duplicate: 'Diese E-Mail ist bereits auf der Waitlist.',
      error: 'Etwas ist schiefgelaufen. Bitte versuche es später erneut.',
      join: 'Schließe dich den ersten Nutzern an, die auf Equa warten.',
      tableError: 'Die Tabelle "waitlist" existiert nicht. Führe die SQL-Migration in Supabase aus.',
    },
  },

  en: {
    nav: {
      features: 'Features',
      howItWorks: 'How it works',
      testimonials: 'Reviews',
      waitlist: 'Waitlist',
    },
    hero: {
      badge: 'Split expenses &middot; Stay on track',
      title: 'Split. Pay. Done.',
      subtitle: 'Split expenses fairly with friends. No more chaos – just clarity.',
      cta: 'Learn more',
    },
    features: {
      heading: 'Everything you need',
      subheading: 'Equa combines clarity with fun – inspired by the best fintech apps.',
      dashboard: {
        title: 'Dashboard',
        desc: 'All expenses at a glance. Clear overview of your groups, debts and payment flows.',
      },
      friends: {
        title: 'Friends & Groups',
        desc: 'Create groups, invite friends and split expenses fairly and transparently. Perfect for flatshares, trips or events.',
      },
      quiz: {
        title: 'Quiz Challenge',
        desc: 'Pay off debts playfully. Learn about your spending habits and win challenges.',
      },
      stats: {
        title: 'Statistics & Analytics',
        desc: 'Detailed analysis of your expenses. Charts, trends and insights for better control.',
      },
    },
    howItWorks: {
      heading: 'How it works',
      subheading: 'Fair cost splitting in four simple steps.',
      steps: [
        { title: 'Record', desc: 'Enter shared expenses – quick and easy.' },
        { title: 'Split', desc: 'Split costs fairly. Flexible by person or share.' },
        { title: 'Play Quiz', desc: 'Reduce debts playfully with quiz challenges.' },
        { title: 'Overview', desc: 'All balances at a glance. Real-time statistics.' },
      ],
    },
    appPreview: {
      screens: [{ label: 'Dashboard', desc: 'All expenses at a glance' }],
      heading: 'Designed for clarity',
    },
    testimonials: {
      heading: 'What users say',
      subheading: 'Trust through real experiences.',
      items: [
        {
          quote: "We've been testing Equa for 2 weeks in our flat. Works great – everyone logs their expenses and we instantly see who owes whom.",
          name: 'Lukas M.',
        },
        {
          quote: 'Super handy for our vacation with 4 friends. After setup everything ran smoothly. Highly recommended!',
          name: 'Sarah K.',
        },
        {
          quote: 'Simple and exactly what I need. Splitting rent and groceries with my roommate – no more stress.',
          name: 'Alex T.',
        },
      ],
    },
    cta: {
      heading: 'Ready to bring order to your expenses?',
      subheading: "The app is still in development – join the waitlist and we'll let you know when it launches.",
      waitlistCta: 'Join the waitlist',
    },
    footer: {
      howItWorks: 'How it works',
      testimonials: 'Reviews',
      waitlist: 'Waitlist',
      copyright: `© ${new Date().getFullYear()} Equa. All rights reserved.`,
      privacy: 'Privacy',
      terms: 'Terms',
    },
    waitlist: {
      success: "You're on the waitlist!",
      successSub: "We'll notify you when Equa launches.",
      placeholder: 'Your email',
      aria: 'Email for waitlist',
      button: 'Early Access',
      invalidEmail: 'Please enter a valid email address.',
      duplicate: 'This email is already on the waitlist.',
      error: 'Something went wrong. Please try again later.',
      join: 'Join the first users waiting for Equa.',
      tableError: 'The "waitlist" table does not exist. Run the SQL migration in Supabase.',
    },
  },
}
