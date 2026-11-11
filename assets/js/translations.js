/* =============================================================
   translations.js — textes anglais du site
   Le français est la langue de référence : il est écrit dans
   index.html et relu automatiquement par main.js.
   Pour ajouter un texte traduit :
     1. dans le HTML : data-i18n="ma.cle"  (ou data-i18n-attr="alt:ma.cle")
     2. ici : "ma.cle": "My text"
   ============================================================= */
window.I18N = {
  en: {
    /* Meta & interface */
    'meta.title': 'Expstudios — Rafael Laville, video game maker',
    'meta.description': 'Expstudios is the independent game studio of Rafael Laville, based in Compiègne, France. Market Chaos, Way Out, and soon Lullaby: small games, big getaways.',
    'ui.skip': 'Skip to content',
    'ui.home': 'Expstudios — home',
    'ui.mainNav': 'Main navigation',
    'ui.mobileNav': 'Mobile navigation',
    'ui.language': 'Language',
    'ui.theme': 'Theme',
    'ui.light': 'Light theme',
    'ui.dark': 'Dark theme',
    'ui.openMenu': 'Open menu',
    'ui.closeMenu': 'Close menu',
    'ui.screens': 'Screenshots',

    /* Barre macOS */
    'menubar.file': 'File',
    'menubar.edit': 'Edit',
    'menubar.play': 'Play',
    'menubar.window': 'Window',
    'menubar.label': 'Personal portfolio / 2026',
    'menubar.lang': 'EN',

    /* Navigation */
    'nav.games': 'Games',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.process': 'Process',
    'nav.contact': 'Contact',

    /* Hero */
    'status.available': 'Open to great ideas',
    'hero.title': '<span>Ideas.</span><span>Worlds.</span><span>Play.</span>',
    'hero.lead': 'I’m Rafael Laville, and Expstudios is my studio. I turn hunches into small adventures to explore, one line of code at a time.',
    'hero.ctaGames': 'See my games',
    'hero.ctaTeam': 'Let’s team up',
    'hero.location': 'Compiègne, France · independent &amp; curious',
    'hero.teaserMeta': 'Teaser / In the works',
    'hero.teaserLabel': 'Discover Lullaby, the next Expstudios game',
    'hero.teaserKicker': 'Expstudios presents',
    'hero.badge': 'New game in the works',
    'hero.explore': 'Read the announcement',

    /* Bandeau */
    'band.motto': 'IMAGINE. CODE. PLAY. REPEAT.',
    'band.aside': 'Next chapter: Lullaby. ↘',

    /* Jeux */
    'games.eyebrow': '01 / My games',
    'games.title': 'Small games.<br>Big getaways.',
    'games.count': '3 worlds · 1 coming soon',
    'games.foot': 'Imperfect games. Very real fun.',
    'games.itch': 'My itch.io',

    'games.mc.bar': 'Latest release — Market Chaos',
    'games.mc.barMeta': 'Full game',
    'games.mc.s1': 'An angry customer shouts “You’ll pay for this!” in the corner shop',
    'games.mc.s2': 'Market Chaos title screen in front of the supermarket',
    'games.mc.s3': 'The aisles of the night grocery store',
    'games.mc.s4': 'Entering the organic market, cart in hand',
    'games.mc.tagline': 'A first-person comedy supermarket simulation.',
    'games.mc.desc': 'Your shift has just started. Stock the shelves, push the carts, mop up spills, serve impatient customers… and try not to wreck the place. The manager is watching, and he doesn’t forgive anything.',
    'games.mc.f1': '4 stores, from a small corner shop to a hypermarket meltdown',
    'games.mc.f2': 'Everything is physics-driven: boxes, cans, carts, slippery floors',
    'games.mc.f3': 'A grade from D to S at the end of every level',
    'games.mc.role': 'Models, sounds and music made in code · Windows',
    'games.mc.meta': 'Version 1.2.2 · Free on itch.io',
    'games.mc.cta': 'Download the game',

    'games.wo.bar': 'In demo — Way Out',
    'games.wo.barMeta': 'Playable demo',
    'games.wo.s1': 'A rusty door ajar onto a tiled corridor',
    'games.wo.s2': 'Way Out title screen, level B-7',
    'games.wo.s3': 'Objective: find the red key, flashlight in hand',
    'games.wo.s4': 'Tiled corridors as far as the eye can see',
    'games.wo.tagline': 'Every maze has a secret.',
    'games.wo.desc': 'You wake up in a mysterious underground facility: endless corridors, strange machinery and messages left behind by unknown people. Explore, find clues, solve puzzles… and find out why you’re here.',
    'games.wo.f1': 'First-person exploration',
    'games.wo.f2': 'Environmental clues and hidden lore',
    'games.wo.f3': 'A tense atmosphere built on sound and silence',
    'games.wo.role': 'No game engine: 3D made in code · Windows',
    'games.wo.meta': 'Demo 0.1.4 · The first 2 sectors',
    'games.wo.cta': 'Play the demo',

    'games.lu.badge': 'Coming soon',
    'games.lu.place': 'Clairlune Factory',
    'games.lu.tagline': 'Come to the end of the hallway.',
    'games.lu.p1': 'Anna, your sister, disappeared in the Clairlune factory on October 14, 2019. Six years later, you receive a letter with a key… and a tape from Anna asking you to come to the end of the hallway.',
    'games.lu.p2': 'The problem? The staff left Lulu behind: the plush sheep that used to rock the children to sleep.',
    'games.lu.cta': 'Follow the release on itch.io',

    'tags.puzzle': 'Puzzle',
    'tags.physics': 'Physics',
    'tags.adventure': 'Adventure',
    'tags.mystery': 'Mystery',
    'tags.horror': 'Horror',
    'tags.story': 'Story-driven',
    'tags.soon': 'Coming soon',

    /* Projets dev */
    'projects.eyebrow': '02 / My other dev projects',
    'projects.title': 'Before the games,<br>there was code.',
    'projects.count': '5 repositories on GitHub · JS &amp; Electron',
    'projects.visit': 'Visit the site',
    'projects.code': 'View the code',
    'projects.foot': 'All my projects are open source.',
    'projects.github': 'My GitHub',
    'projects.portfolio.badge': 'First website',
    'projects.portfolio.title': 'My first portfolio',
    'projects.portfolio.desc': 'My very first website, coded entirely by me in HTML, CSS and JavaScript: an introduction, my tools, my projects and a light/dark mode. Where everything else started.',
    'projects.calc.title': 'Calculator',
    'projects.calc.desc': 'A desktop calculator with a clean, minimalist design.',
    'projects.cal.title': 'Pixel calendar',
    'projects.cal.desc': 'A pixel-art calendar: create events with a time, and get a notification the day before.',
    'projects.widget.title': 'Pixel widget',
    'projects.widget.desc': 'A pixelated desktop widget showing the month and day on a pink background. The very first version of the calendar.',
    'projects.timer.title': 'Pixel timer',
    'projects.timer.desc': 'A widget-style timer to keep in a corner of your screen.',

    /* À propos */
    'about.bar': 'About me.txt',
    'about.barMeta': 'A human behind the pixels',
    'about.photoAlt': 'Illustrated portrait of Rafael Laville in a beanie and scarf',
    'about.eyebrow': '03 / Behind the screen',
    'about.title': '<span>Serious about creating.</span><span>Not about the rules.</span>',
    'about.p1': 'I started making games in 2026. What I love is building worlds you follow chapter after chapter, with lore that makes you want to dig deeper. My goal: games as polished as AAA titles.',
    'about.p2': 'I have ideas all the time. I hand them to Claude, the AI that writes the code; I play, spot the bugs and say what I want, until the game is exactly the one I had in mind.',
    'about.statGamesDt': 'Games',
    'about.statGames': 'games, 1 coming soon',
    'about.statProjDt': 'Projects',
    'about.statProj': 'dev projects',
    'about.statInfDt': 'Ideas',
    'about.statInf': 'ideas to play',

    /* Démarche */
    'process.eyebrow': '04 / From idea to game feel',
    'process.title': 'One hunch. Then lots of iterations.',
    'process.lead': 'No magic button: a constant dialogue between my ideas and AI, one playthrough after another.',
    'process.s1t': 'Have the idea',
    'process.s1': 'A world, a mechanic, a story told in chapters. I have ideas all the time: I keep the one that makes me want to play the most.',
    'process.s2t': 'Hand it to Claude',
    'process.s2': 'I describe what I want, Claude writes the code: the game, the 3D models, the sounds, the music. Everything is generated in code, no Blender.',
    'process.s3t': 'Test. Fix. Repeat.',
    'process.s3': 'I play, spot the bugs and say what’s wrong. Test bots also run on their own. We iterate until the game is exactly the one I had in mind.',
    'process.t0': 'rafael@atelier ~ % claude "make me a game"',
    'process.t1': '√ an idea that intrigues',
    'process.t2': '√ a prototype that responds',
    'process.t3': '↻ one more round…',

    /* Contact */
    'contact.eyebrow': '05 / Press start?',
    'contact.title': '<span>What if we made</span><span>something playable?</span>',
    'contact.text': 'A game idea, a collaboration or just want to talk pixels? All the studio’s games are right here.',
    'contact.big': 'expstudios on itch.io',

    /* Pied de page */
    'footer.note': 'Made with curiosity, coffee and a few prompts.',
    'footer.top': 'Back to top',
  },
};
