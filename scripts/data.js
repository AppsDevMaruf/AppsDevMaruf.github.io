/* data.js – edit only this file to add/remove projects */
const projects = [
    {
      id: "hop-on",
      title: "Hop On",
      short: "Versatile ride-sharing platform for booking rides, parcels & food.",
      icon: "fas fa-car",
      gradient: "from-purple-500 to-pink-600",
      tags: ["Kotlin", "Maps", "Real-time"],
      period: "02/2025 – Present",
      description: `
        A multi-service ride-sharing app that lets users book rides, send parcels,
        and order food from a single interface. Real-time tracking, dynamic pricing,
        and driver-rider chat are powered by Firebase Realtime Database and Google Maps SDK.
      `,
      github: "https://github.com/AppsDevMaruf/hop-on",
      live: "https://play.google.com/store/apps/details?id=com.hopon"
    },
  
    {
      id: "decorran",
      title: "Decorran",
      short: "eCommerce platform for home décor & furniture.",
      icon: "fas fa-shopping-cart",
      gradient: "from-emerald-500 to-teal-600",
      tags: ["Kotlin", "MVVM", "Retrofit"],
      description: `
        Full-featured e-commerce store with product catalog, wishlist, cart,
        secure checkout (Stripe), and admin panel. Built with clean MVVM,
        Hilt DI, Coroutines, and Room for offline caching.
      `,
      github: "https://github.com/AppsDevMaruf/decorran",
      live: "https://play.google.com/store/apps/details?id=com.decorran"
    },
  
    {
      id: "beeda",
      title: "Beeda",
      short: "AI-powered mega app with 50+ on-demand services.",
      icon: "fas fa-mobile-alt",
      gradient: "from-blue-500 to-indigo-600",
      tags: ["Kotlin", "Firebase", "Maps"],
      description: `
        Super-app aggregating food delivery, ride-hailing, pharmacy, and more.
        Uses Firebase ML-Kit for smart recommendations and Google Maps for
        multi-stop routing.
      `,
      github: "https://github.com/AppsDevMaruf/beeda",
      live: "https://play.google.com/store/apps/details?id=com.beeda"
    },
  
    {
      id: "decise",
      title: "Decise",
      short: "Project management tool for Monash University.",
      icon: "fas fa-tasks",
      gradient: "from-amber-500 to-orange-600",
      tags: ["Java", "SQLite", "Material Design"],
      description: `
        Desktop-style Android app for academic project tracking.
        Features Gantt charts, team collaboration, file attachments,
        and offline SQLite sync.
      `,
      github: "https://github.com/AppsDevMaruf/decise",
      live: null   // no live link
    },
  
    {
      id: "famapay",
      title: "FamaPay",
      short: "FinTech app for payments, recharges & bills.",
      icon: "fas fa-credit-card",
      gradient: "from-cyan-500 to-blue-600",
      tags: ["Kotlin", "Security", "API Integration"],
      description: `
        Secure payment gateway with biometric login, UPI integration,
        transaction history, and bill-splitting. All network calls are
        encrypted with TLS-pinning and ProGuard obfuscation.
      `,
      github: "https://github.com/AppsDevMaruf/famapay",
      live: "https://play.google.com/store/apps/details?id=com.family.famapay"
    }
  
    // ---- add more objects here ----
  ];