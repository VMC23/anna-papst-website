import { createI18n } from 'vue-i18n'

const messages = {
  de: {
    nav: { start: 'Start', kontakt: 'Kontakt', hintergrund: 'Hintergrund', team: 'Team' },
    hero: {
      title: 'Deine Geschichte ist es wert,{br}gehört zu werden.',
      intro: 'Wir bringen 2027 ein Theaterstück über Gewalt in der Partnerschaft und in der Ehe auf die Bühne — und suchen Menschen, die bereit sind, ihre Geschichte zu teilen.',
      btn: 'Melde dich bei uns',
      notice: 'Erlebst du aktuell Gewalt in deiner Beziehung und brauchst Hilfe?',
      noticeLink: 'Opferhilfe Schweiz 142',
      text1: 'Wir sind ein Team aus verschiedenen Künstler*innen. Wir führen Gespräche mit Betroffenen und Expert*innen und machen aus diesen Interviews ein Theaterstück. Wenn Du Gewalt im häuslichen Bereich erlebt hast und bereit bist, darüber zu sprechen, wollen wir zuhören und weitertragen, was Du zu erzählen hast.',
      text2: 'Wir glauben nämlich, dass das Schweigen und die Scham in der Schweiz die Bekämpfung dieser Gewalt erschweren. Deine Erzählung kann dazu beitragen, diese Stille zu durchbrechen und anderen helfen, die etwas Ähnliches erleben oder erlebt haben. Deine Geschichte kann uns als Gesellschaft daran erinnern, was hinter geschlossenen Türen passiert. Und deine Geschichte, zusammen mit den Geschichten anderer, zeigt auf, wie diese Gewalt uns alle betrifft.',
      dialect: 'Es gaht eus alli öppis ah. Du bisch nöd allei mit dem.',
      anonym: 'Du bleibst als Person anonym und hast jederzeit die Möglichkeit, Deine Geschichte zurückzuziehen. Die Gespräche finden in einem von Dir gewählten Rahmen online oder vor Ort statt.'
    },
    kontakt: {
      label: 'Kontakt',
      title: 'Melde dich bei uns',
      intro: 'Falls Du zu diesem Projekt beitragen möchtest oder erstmal einfach neugierig bist, erreichst Du uns auf folgenden Wegen:',
      telefon: 'Telefon:',
      email: 'E-Mail:',
      instagram: 'Instagram:',
      form: {
        intro: 'Oder nutze das Kontaktformular. Wir freuen uns sehr, von Dir zu hören und danken Dir für Dein Vertrauen und Deine Zeit!',
        name: 'Name',
        email: 'E-Mail',
        nachricht: 'Nachricht',
        nachrichtHint: '(optional, max. 750 Zeichen)',
        datenschutz: 'Ich habe die [link] gelesen und stimme der vertraulichen Verarbeitung meiner Daten zu. Alle Angaben werden streng vertraulich behandelt.',
        datenschutzLink: 'Datenschutzerklärung',
        submit: 'Absenden',
        success: 'Danke für dein Schreiben. Wir melden uns bei dir.'
      }
    },
    projekt: {
      label: 'Das Projekt',
      title: 'Hintergrund',
      text1: 'In ihrem kommenden Theaterprojekt lässt die Autorin und Regisseurin Anna Papst Betroffene von häuslicher und familiärer Gewalt zu Wort kommen. Ihr Ziel dabei ist es, den Menschen eine Stimme und dem Thema eine Plattform zu geben. Hierfür führt sie intensiv Gespräche mit Expert*innen aus Praxis und Recherche zum Thema und lanciert einen Aufruf für Betroffene, die ihre Geschichte erzählen möchten.',
      text2: 'Dabei steht der Schutz der Gesprächspartner*innen an oberster Stelle. Die Phase der Gesprächsführung erstreckt sich über einen Zeitraum von 6 Monaten, in denen behutsam der Prozess vom ersten Gespräch bis zum fertigen Theatertext abgewickelt wird. Keine der Gesprächspartnerinnen steht selbst auf der Bühne, sämtliche Rollen werden von Profis übernommen.',
      text3: 'Anna Papst blickt bereits auf eine langjährige Erfahrung von dokumentarischen Theaterprojekten mit vulnerablen Gruppen zurück. Zusätzlich lässt sie sich für das kommende Projekt durch den Stress- und traumasensiblen Ansatz (STA®) von medica mondiale schulen. Während dem gesamten Projekt wird Anna Papst von den Fachpersonen Anja Derungs (Stiftung Frauenhaus Zürich) und Lucia Tozzi (medica mondiale foundation switzerland) begleitet und regelmässig gecoacht.',
      card1: {
        title: 'Gespräche',
        text1: 'Die Gesprächspartner*innen dürfen frei wählen, wo sie am liebsten aus ihrem Leben erzählen möchten: Bei sich zuhause, in einem neutralen Raum oder online. Wenn sie es wünschen, kann bei diesem Gespräch auch eine Begleitperson dabei sein.',
        text2: 'Der Aufruf wird auf deutsch, englisch, französisch, italienisch, türkisch und arabisch gestreut. Bei den Gesprächen auf italienisch, türkisch und arabisch wird eine Übersetzerin anwesend sein.'
      },
      card2: {
        title: 'Vom Gespräch zum Text',
        text1: 'Aus dem aufgezeichneten Gespräch wird ein wortgenaues Transkript erstellt. Aus diesem Transkript wird eine erste Textfassung geschöpft. Diese geht zurück an die Gesprächspartnerin, mit der Frage, ob sie an dem Text etwas beifügen, anmerken oder ändern möchte. Der Text wandert solange zwischen Autorin und Gesprächspartnerin hin- und her, bis die Gesprächspartnerin damit einverstanden ist.',
        text2: 'Erst dann wird der Text Teil des gesamten Theaterstücks. Die Gesprächspartnerin hat während diesem Prozess auch jederzeit die Möglichkeit, ihre Teilnahme komplett zurückzuziehen. Alle Gesprächspartner*innen bleiben anonym, auch Wohnorte und andere Angaben, die auf sie rückschliessen lassen, werden geändert.'
      },
      card3: {
        title: 'Auf der Bühne',
        text1: 'Der fertige Theatertext wird von einem diversen Künstlerinnenkollektiv auf die Bühne gebracht. Jede Gesprächspartnerin wird während dem Probenprozess, wenn noch keine anderen Zuschauer*innen da sind, eingeladen, sich die Inszenierung ihres Textes anzuschauen. Danach ist ein Feedbackgespräch angesetzt, das Raum gibt um zu erzählen, was es ausgelöst hat, die eigene Geschichte auf der Bühne zu sehen und eventuelle Änderungswünsche anzubringen. Bei dem Gespräch wird auch eine Traumatherapeutin, die den Probenprozess punktuell begleitet und bei Bedarf psychosoziale Unterstützung leisten kann, anwesend sein.',
        text2: 'Selbstverständlich werden die Gesprächspartner*innen auch zu den öffentlichen Aufführungen eingeladen und erhalten Freikarten. Der Besuch einer Vorstellung ist, wie alle anderen Schritte, die mit der Inszenierung zu tun haben, ein Angebot, zu dem sich aber niemand verpflichtet fühlen muss. In bisherigen Arbeiten, beispielsweise mit Biografien von Menschen mit Depressionen oder von ehemaligen Straftätern, wurde das Angebot eines Vorstellungsbesuchs oft angenommen und die Verarbeitung der eigenen Biografie in einem Theaterstück als wertschätzend und ermächtigend erlebt.'
      },
      card4: {
        title: 'Trägerschaft',
        text1: 'zeitgeschehen e.v.',
        text2: ''
      }
    },
    team: {
      label: 'Über uns',
      title: 'Das Team',
      group: {
        leitung: 'Künstlerische Leitung',
        dramaturgie: 'Dramaturgie & Text',
        buehne: 'Bühne, Kostüm & Musik',
        ensemble: 'Ensemble',
        produktion: 'Produktion',
        sounding: 'Sounding Board'
      },
      role: {
        regie: 'Regie, Text & Konzept',
        dramaturgie: 'Dramaturgie (Inszenierung)',
        textentwicklung: 'Textentwicklung',
        buehne: 'Bühnenbild',
        kostueme: 'Kostüme',
        musik: 'Musik',
        produktionsleitung: 'Produktionsleitung',
        media: 'Media & Social Media',
        koproduktion: 'Ko-Produktion',
        illustrationen: 'Illustrationen',
        website: 'Website'
      }
    },
    cta: {
      btn: 'Melde dich bei uns',
      backtotop: 'Zurück zum Anfang'
    },
    footer: {
      impressum: 'Impressum',
      impressumText: 'Ich au | c/o zeitgeschehen e.v. | Zürich, Schweiz',
      datenschutz: 'Datenschutz',
      datenschutzText1: 'Diese Website erhebt personenbezogene Daten ausschliesslich über das Kontaktformular. Die übermittelten Daten (Name, E-Mail, Nachricht) werden vertraulich behandelt, nicht an Dritte weitergegeben und ausschliesslich zur Kontaktaufnahme im Rahmen des Projekts verwendet.',
      datenschutzText2: 'Mit dem Absenden des Formulars stimmen Sie der Verarbeitung Ihrer Daten zu diesem Zweck zu. Sie können Ihre Einwilligung jederzeit widerrufen.',
      datenschutzText3: 'Diese Website verwendet Cloudflare Turnstile zum Schutz des Kontaktformulars vor Missbrauch. Dabei werden technisch notwendige Cookies gesetzt. Es erfolgt kein Tracking.',
      hilfe: 'Hilfe in Notsituationen',
      copyright: '© 2026 Ich au. Alle Rechte vorbehalten.'
    },
    exit: { label: 'Seite verlassen' }
  },

  fr: {
    nav: { start: 'Accueil', kontakt: 'Contact', hintergrund: 'Contexte', team: 'Équipe' },
    hero: {
      title: 'Ton histoire vaut{br}d\'être entendue.',
      intro: 'En 2027, nous monterons une pièce de théâtre sur la violence au sein du couple et du mariage — et nous recherchons des personnes prêtes à partager leur histoire.',
      btn: 'Contacte-nous',
      notice: 'Te trouves-tu dans une situation de danger aigu ?',
      noticeLink: 'Aide aux victimes Suisse',
      text1: 'Nous sommes une équipe composée d\'artistes femmes et non-binaires qui créons une pièce de théâtre sur la violence domestique. Pour cela, nous menons des entretiens avec des personnes concernées et des expert·e·s, et nous transformons ces entretiens en pièce de théâtre. Si tu as été victime de violence domestique et que tu es prêt·e à en parler, nous voulons t\'écouter et relayer ce que tu as à raconter.',
      text2: 'Nous pensons en effet que le silence et la honte en Suisse entravent la lutte contre cette violence. Ton témoignage peut contribuer à briser ce silence et aider d\'autres personnes qui vivent ou ont vécu une situation similaire. Ton histoire peut nous rappeler, en tant que société, ce qui se passe derrière des portes fermées. Et ton histoire, accompagnée par d\'autres, montre à quel point cette violence concerne tout le monde.',
      dialect: 'Ça nous regarde tou·te·s. Tu n\'es pas seul·e.',
      anonym: 'Tu resteras anonyme et tu auras à tout moment la possibilité de retirer ton témoignage. Les entretiens auront lieu dans un cadre de ton choix, en ligne ou en présentiel.'
    },
    kontakt: {
      label: 'Contact',
      title: 'Contacte-nous',
      intro: 'Si tu souhaites contribuer à ce projet ou si tu es simplement curieux·se, n\'hésite pas à nous contacter :',
      telefon: 'Téléphone :',
      email: 'E-mail :',
      instagram: 'Instagram :',
      form: {
        intro: 'Ou utilise le formulaire de contact. Nous avons hâte d\'entendre de ta part et te remercions pour ta confiance et ton temps !',
        name: 'Nom',
        email: 'E-mail',
        nachricht: 'Message',
        nachrichtHint: '(facultatif, max. 750 caractères)',
        datenschutz: 'J\'ai lu la [link] et j\'accepte le traitement confidentiel de mes données. Toutes les informations sont traitées de manière strictement confidentielle.',
        datenschutzLink: 'déclaration de protection des données',
        submit: 'Envoyer',
        success: 'Merci pour ton message. Nous te recontacterons.'
      }
    },
    projekt: {
      label: 'Le projet',
      title: 'Contexte',
      text1: 'Dans son prochain projet théâtral, l\'auteure et metteuse en scène Anna Papst donne la parole à des personnes victimes de violences domestiques et familiales. Son objectif est de donner une voix à ces personnes et d\'offrir une tribune à ce sujet. À cette fin, elle mène des entretiens approfondis avec des expert·e·s issus du terrain et de la recherche sur ce thème, et lance un appel aux personnes concernées qui souhaitent raconter leur histoire.',
      text2: 'La protection des personnes interrogées est ici une priorité absolue. La phase d\'entretiens s\'étend sur une période de six mois, durant laquelle le processus, de la première rencontre au texte théâtral final, se déroule avec beaucoup de délicatesse. Aucune des personnes interrogées ne monte elle-même sur scène ; tous les rôles sont interprétés par des professionnels.',
      text3: 'Anna Papst possède déjà une longue expérience dans le domaine des projets de théâtre documentaire avec des groupes vulnérables. De plus, elle suit actuellement une formation sur l\'approche sensible au stress et aux traumatismes (STA®) de medica mondiale en vue du projet à venir. Tout au long du projet, Anna Papst est accompagnée et régulièrement encadrée par les expertes Anja Derungs (Fondation Frauenhaus Zürich) et Lucia Tozzi (medica mondiale foundation switzerland).',
      card1: {
        title: 'Entretiens',
        text1: 'Les participant·e·s sont libres de choisir l\'endroit où ils/elles préfèrent raconter leur histoire : chez eux/elles, dans un lieu neutre ou en ligne. S\'ils/elles le souhaitent, une personne d\'accompagnement peut également être présente lors de cet entretien.',
        text2: 'L\'appel à participation est diffusé en allemand, anglais, français, italien, turc et arabe. Une traductrice sera présente lors des entretiens en italien, turc et arabe.'
      },
      card2: {
        title: 'De l\'entretien au texte',
        text1: 'Une transcription fidèle à la lettre est établie à partir de l\'entretien enregistré. Une première version du texte est rédigée à partir de cette transcription. Celle-ci est renvoyée à la personne interrogée, qui est invitée à ajouter, commenter ou modifier le texte si elle le souhaite. Le texte fait des allers-retours entre l\'auteure et l\'interlocutrice jusqu\'à ce que cette dernière donne son accord. Ce n\'est qu\'alors que le texte devient partie intégrante de la pièce. L\'interlocutrice a à tout moment la possibilité de retirer complètement sa participation. Toutes les interlocutrices restent anonymes, les lieux de résidence et autres informations permettant de les identifier sont également modifiés.',
        text2: ''
      },
      card3: {
        title: 'Sur scène',
        text1: 'Le texte théâtral achevé est porté sur scène par un collectif d\'artistes divers. Chaque interlocutrice est invitée pendant le processus de répétition, lorsqu\'aucun autre spectateur n\'est encore présent, à assister à la mise en scène de son texte. Un entretien de retour est ensuite prévu, qui offre l\'espace de raconter ce que cela a déclenché de voir sa propre histoire sur scène et de formuler d\'éventuels souhaits de modification. Une thérapeute spécialisée en traumatisme, qui accompagne ponctuellement le processus de répétition et peut fournir un soutien psychosocial si nécessaire, sera également présente lors de cet entretien.',
        text2: 'Bien entendu, les interlocutrices sont également invitées aux représentations publiques et reçoivent des billets gratuits. La visite d\'une représentation est, comme toutes les autres étapes liées à la mise en scène, une offre à laquelle personne ne doit se sentir obligé·e. Dans des travaux précédents, par exemple avec des biographies de personnes souffrant de dépression ou d\'anciens détenus, l\'offre d\'assister à une représentation a souvent été acceptée et la transformation de sa propre biographie en pièce de théâtre a été perçue comme valorisante et émancipatrice.'
      },
      card4: {
        title: 'Organisation',
        text1: 'zeitgeschehen e.v.',
        text2: ''
      }
    },
    team: {
      label: 'À propos de nous',
      title: 'L\'équipe',
      group: {
        leitung: 'Direction artistique',
        dramaturgie: 'Dramaturgie & texte',
        buehne: 'Scène, costumes & musique',
        ensemble: 'Ensemble',
        produktion: 'Production',
        sounding: 'Sounding Board'
      },
      role: {
        regie: 'Mise en scène, texte & concept',
        dramaturgie: 'Dramaturgie (mise en scène)',
        textentwicklung: 'Développement du texte',
        buehne: 'Scénographie',
        kostueme: 'Costumes',
        musik: 'Musique',
        produktionsleitung: 'Direction de production',
        media: 'Médias & réseaux sociaux',
        koproduktion: 'Co-production',
        illustrationen: 'Illustrations',
        website: 'Site web'
      }
    },
    cta: {
      btn: 'Contacte-nous',
      backtotop: 'Retour en haut'
    },
    footer: {
      impressum: 'Mentions légales',
      impressumText: 'Ich au | c/o zeitgeschehen e.v. | Zurich, Suisse',
      datenschutz: 'Protection des données',
      datenschutzText1: 'Ce site web ne collecte des données personnelles que via le formulaire de contact. Les données transmises (nom, e-mail, message) sont traitées de manière confidentielle, ne sont pas transmises à des tiers et sont utilisées exclusivement pour la prise de contact dans le cadre du projet.',
      datenschutzText2: 'En envoyant le formulaire, vous consentez au traitement de vos données à cette fin. Vous pouvez révoquer votre consentement à tout moment.',
      datenschutzText3: 'Ce site utilise Cloudflare Turnstile pour protéger le formulaire de contact contre les abus. Des cookies techniquement nécessaires sont utilisés. Aucun suivi n\'est effectué.',
      hilfe: 'Aide en situation d\'urgence',
      copyright: '© 2026 Ich au. Tous droits réservés.'
    },
    exit: { label: 'Quitter le site' }
  },

  en: {
    nav: { start: 'Home', kontakt: 'Contact', hintergrund: 'Background', team: 'Team' },
    hero: {
      title: 'Your story deserves{br}to be heard.',
      intro: 'We are creating a play in 2027 about domestic and intimate partner violence and are looking for survivors who are willing to share their story.',
      btn: 'Get in touch',
      notice: 'Are you in danger or in need of immediate support?',
      noticeLink: 'Victim Support Switzerland',
      text1: 'Hello. We are a diverse team of non-binary and female artists writing and staging a play together. The script is based on interviews we are conducting with experts and people who have survived domestic abuse. If you have experienced violence perpetrated by a partner in a romantic or dating relationship and are willing to talk about it, we want to listen and share your story.',
      text2: 'We believe that silence and shame are two of the main challenges Swiss society faces in its fight to end domestic abuse. Your account can help break this silence and support others who are or have gone through something similar. Your story can remind us as a society of what happens behind closed doors. And your story, along with the stories of others, shows us how this violence affects everyone.',
      dialect: 'We\'re all in this together. You are not alone.',
      anonym: 'You may remain anonymous during the entire process and will always have the possibility to withdraw your story. The conversations will take place in a setting of your choice\u2014either online or in person.'
    },
    kontakt: {
      label: 'Contact',
      title: 'Get in touch',
      intro: 'If you would like to contribute to this project or are simply curious, you can reach us in the following ways:',
      telefon: 'Phone:',
      email: 'Email:',
      instagram: 'Instagram:',
      form: {
        intro: 'Or use the contact form. We\'d love to hear from you and thank you for your trust and your time!',
        name: 'Name',
        email: 'Email',
        nachricht: 'Message',
        nachrichtHint: '(optional, max. 750 characters)',
        datenschutz: 'I have read the [link] and agree to the confidential processing of my data. All information is treated in strict confidence.',
        datenschutzLink: 'privacy policy',
        submit: 'Send',
        success: 'Thank you for your message. We will get back to you.'
      }
    },
    projekt: {
      label: 'The project',
      title: 'Background',
      text1: 'In her upcoming theater project, author and director Anna Papst gives a voice to survivors of domestic and family violence. Her goal is to give these individuals a voice and provide a platform for the issue. To this end, she is conducting in-depth discussions with experts from both the field and academia on the topic and is issuing a call for survivors who would like to share their stories.',
      text2: 'The protection of the interviewees is the top priority. The interview phase spans a period of six months, during which the process\u2014from the initial interview to the finished theater script\u2014is carefully managed. None of the interviewees will appear on stage themselves; all roles will be played by professional actors.',
      text3: 'Anna Papst already has many years of experience with documentary theater projects involving vulnerable groups. In addition, she is undergoing training in medica mondiale\'s Stress and Trauma-Sensitive Approach (STA\u00AE) for the upcoming project. Throughout the entire project, Anna Papst will be supported and regularly coached by experts Anja Derungs (Z\u00FCrich Women\'s Shelter Foundation) and Lucia Tozzi (medica mondiale foundation switzerland).',
      card1: {
        title: 'Conversations',
        text1: 'Participants are free to choose where they would most like to share their life stories: at home, in a neutral space, or online. If they wish, a support person may also be present during the interview.',
        text2: 'The call for participants is being distributed in German, English, French, Italian, Turkish, and Arabic. A translator will be present for conversations in Italian, Turkish, and Arabic.'
      },
      card2: {
        title: 'From conversation to text',
        text1: 'A verbatim transcript is created from the recorded conversation. A first draft of the text is then crafted from this transcript. This draft is sent back to the interviewee, who is asked if she would like to add anything, make any comments, or request any changes to the text. The text goes back and forth between the author and the interviewee until the interviewee is satisfied with it. Only then does the text become part of the overall play. During this process, the interviewee also has the option at any time to withdraw from the project entirely. All interviewees remain anonymous; places of residence and other details that could identify them are also altered.',
        text2: ''
      },
      card3: {
        title: 'On stage',
        text1: 'The finished theatre text is brought to the stage by a diverse collective of artists. Each interviewee is invited during the rehearsal process, when no other audience members are present, to watch the staging of her text. A feedback conversation is then scheduled, which provides space to share what it triggered to see one\'s own story on stage and to express any wishes for changes. A trauma therapist, who accompanies the rehearsal process at key moments and can provide psychosocial support if needed, will also be present during this conversation.',
        text2: 'Of course, the interviewees are also invited to the public performances and receive complimentary tickets. Attending a performance is, like all other steps related to the production, an offer that no one should feel obligated to accept. In previous works, for example with biographies of people with depression or former offenders, the offer to attend a performance was often taken up and the processing of one\'s own biography into a theatre production was experienced as affirming and empowering.'
      },
      card4: {
        title: 'Organisation',
        text1: 'zeitgeschehen e.v.',
        text2: ''
      }
    },
    team: {
      label: 'About us',
      title: 'The team',
      group: {
        leitung: 'Artistic direction',
        dramaturgie: 'Dramaturgy & text',
        buehne: 'Stage, costumes & music',
        ensemble: 'Ensemble',
        produktion: 'Production',
        sounding: 'Sounding Board'
      },
      role: {
        regie: 'Direction, text & concept',
        dramaturgie: 'Dramaturgy (production)',
        textentwicklung: 'Text development',
        buehne: 'Stage design',
        kostueme: 'Costumes',
        musik: 'Music',
        produktionsleitung: 'Production management',
        media: 'Media & social media',
        koproduktion: 'Co-production',
        illustrationen: 'Illustrations',
        website: 'Website'
      }
    },
    cta: {
      btn: 'Get in touch',
      backtotop: 'Back to top'
    },
    footer: {
      impressum: 'Imprint',
      impressumText: 'Ich au | c/o zeitgeschehen e.v. | Zurich, Switzerland',
      datenschutz: 'Privacy policy',
      datenschutzText1: 'This website collects personal data exclusively through the contact form. The transmitted data (name, email, message) are treated confidentially, are not shared with third parties, and are used solely for communication within the scope of the project.',
      datenschutzText2: 'By submitting the form, you consent to the processing of your data for this purpose. You may revoke your consent at any time.',
      datenschutzText3: 'This website uses Cloudflare Turnstile to protect the contact form from abuse. Strictly necessary cookies are set for this purpose. No tracking takes place.',
      hilfe: 'Help in emergencies',
      copyright: '© 2026 Ich au. All rights reserved.'
    },
    exit: { label: 'Leave this site' }
  },

  it: {
    nav: { start: 'Inizio', kontakt: 'Contatto', hintergrund: 'Contesto', team: 'Team' },
    hero: {
      title: 'La tua storia merita{br}di essere ascoltata.',
      intro: 'Nel 2027 porteremo in scena uno spettacolo teatrale sulla violenza domestica e nel matrimonio — e cerchiamo persone disposte a condividere la propria storia.',
      btn: 'Contattaci',
      notice: 'Ti trovi in una situazione di pericolo acuto?',
      noticeLink: 'Aiuto alle vittime Svizzera',
      text1: 'Siamo un team composto da diversi artisti e artiste. Conduciamo colloqui con persone coinvolte ed esperte/i e trasformiamo queste interviste in uno spettacolo teatrale. Se hai vissuto violenza in ambito domestico e sei disposta/o a parlarne, vogliamo ascoltarti e trasmettere ciò che hai da raccontare.',
      text2: 'Crediamo infatti che il silenzio e la vergogna in Svizzera ostacolino la lotta contro questa violenza. Il tuo racconto può contribuire a rompere questo silenzio e aiutare altre persone che vivono o hanno vissuto qualcosa di simile. La tua storia può ricordare alla nostra società cosa succede dietro le porte chiuse. E la tua storia, insieme a quelle di altre persone, mostra come questa violenza riguardi tutte e tutti noi.',
      dialect: 'Riguarda tutte e tutti noi. Non sei sola/o.',
      anonym: 'Rimani anonima/o come persona e hai in qualsiasi momento la possibilità di ritirare la tua storia. I colloqui si svolgono in un contesto scelto da te, online o in presenza.'
    },
    kontakt: {
      label: 'Contatto',
      title: 'Contattaci',
      intro: 'Se desideri contribuire a questo progetto o se sei semplicemente curiosa/o, puoi raggiungerci nei seguenti modi:',
      telefon: 'Telefono:',
      email: 'E-mail:',
      instagram: 'Instagram:',
      form: {
        intro: 'Oppure utilizza il modulo di contatto. Siamo felici di sentirti e ti ringraziamo per la tua fiducia e il tuo tempo!',
        name: 'Nome',
        email: 'E-mail',
        nachricht: 'Messaggio',
        nachrichtHint: '(facoltativo, max. 750 caratteri)',
        datenschutz: 'Ho letto la [link] e acconsento al trattamento confidenziale dei miei dati. Tutte le informazioni vengono trattate in modo strettamente confidenziale.',
        datenschutzLink: 'dichiarazione sulla protezione dei dati',
        submit: 'Invia',
        success: 'Grazie per il tuo messaggio. Ti ricontatteremo.'
      }
    },
    projekt: {
      label: 'Il progetto',
      title: 'Contesto',
      text1: 'Nel suo prossimo progetto teatrale, l\'autrice e regista Anna Papst dà voce alle vittime di violenza domestica e familiare. Il suo obiettivo è quello di dare voce alle persone e una piattaforma a questo tema. A tal fine, conduce colloqui approfonditi con esperti del settore e ricercatori sull\'argomento e lancia un appello alle vittime che desiderano raccontare la propria storia.',
      text2: 'La protezione delle persone intervistate è la priorità assoluta. La fase di raccolta delle testimonianze si estende su un periodo di 6 mesi, durante i quali viene portato avanti con delicatezza il processo che va dal primo colloquio al testo teatrale definitivo. Nessuna delle persone intervistate salirà sul palco: tutti i ruoli saranno interpretati da attori professionisti.',
      text3: 'Anna Papst vanta già una pluriennale esperienza in progetti di teatro documentario con gruppi vulnerabili. Inoltre, per il prossimo progetto, sta seguendo una formazione sull\'approccio sensibile allo stress e al trauma (STA®) di medica mondiale. Durante l\'intero progetto, Anna Papst sarà affiancata e regolarmente seguita dalle esperte Anja Derungs (Fondazione Frauenhaus Zürich) e Lucia Tozzi (medica mondiale foundation switzerland).',
      card1: {
        title: 'Colloqui',
        text1: 'Le persone intervistate possono scegliere liberamente dove preferiscono raccontare la propria storia: a casa propria, in uno spazio neutrale o online. Se lo desiderano, a questo colloquio può partecipare anche una persona di accompagnamento.',
        text2: 'Il bando viene diffuso in tedesco, inglese, francese, italiano, turco e arabo. Durante i colloqui in italiano, turco e arabo sarà presente una traduttrice.'
      },
      card2: {
        title: 'Dal colloquio al testo',
        text1: 'Dal colloquio registrato viene redatta una trascrizione fedele alla parola. Da questa trascrizione viene elaborata una prima bozza di testo. Questa viene poi inviata all\'interlocutrice, chiedendole se desidera aggiungere, commentare o modificare qualcosa nel testo. Il testo passa avanti e indietro tra l\'autrice e l\'interlocutrice finché quest\'ultima non lo approva. Solo allora il testo diventa parte integrante dell\'opera teatrale. Durante questo processo, l\'interlocutrice ha in qualsiasi momento la possibilità di ritirare completamente la propria partecipazione. Tutte le interlocutrici e gli interlocutori restano anonimi, anche i luoghi di residenza e altre informazioni che potrebbero permettere di identificarli vengono modificati.',
        text2: ''
      },
      card3: {
        title: 'Sul palco',
        text1: 'Il testo teatrale finito viene portato in scena da un collettivo di artiste diverse. Ogni interlocutrice viene invitata durante il processo di prove, quando non sono ancora presenti altri spettatori, ad assistere alla messa in scena del suo testo. Successivamente è previsto un colloquio di feedback, che offre lo spazio per raccontare cosa ha suscitato vedere la propria storia sul palco e per esprimere eventuali desideri di modifica. Al colloquio sarà presente anche una terapeuta specializzata in traumi, che accompagna puntualmente il processo di prove e può fornire supporto psicosociale se necessario.',
        text2: 'Naturalmente, le interlocutrici vengono invitate anche alle rappresentazioni pubbliche e ricevono biglietti gratuiti. La visita a una rappresentazione è, come tutti gli altri passi legati alla messa in scena, un\'offerta a cui nessuno deve sentirsi obbligato. In lavori precedenti, ad esempio con biografie di persone con depressione o di ex detenuti, l\'offerta di assistere a una rappresentazione è stata spesso accolta e la rielaborazione della propria biografia in uno spettacolo teatrale è stata percepita come valorizzante e emancipante.'
      },
      card4: {
        title: 'Ente promotore',
        text1: 'zeitgeschehen e.v.',
        text2: ''
      }
    },
    team: {
      label: 'Chi siamo',
      title: 'Il team',
      group: {
        leitung: 'Direzione artistica',
        dramaturgie: 'Drammaturgia & testo',
        buehne: 'Scena, costumi & musica',
        ensemble: 'Ensemble',
        produktion: 'Produzione',
        sounding: 'Sounding Board'
      },
      role: {
        regie: 'Regia, testo & concept',
        dramaturgie: 'Drammaturgia (messa in scena)',
        textentwicklung: 'Sviluppo del testo',
        buehne: 'Scenografia',
        kostueme: 'Costumi',
        musik: 'Musica',
        produktionsleitung: 'Direzione di produzione',
        media: 'Media & social media',
        koproduktion: 'Co-produzione',
        illustrationen: 'Illustrazioni',
        website: 'Sito web'
      }
    },
    cta: {
      btn: 'Contattaci',
      backtotop: 'Torna all\'inizio'
    },
    footer: {
      impressum: 'Colophon',
      impressumText: 'Ich au | c/o zeitgeschehen e.v. | Zurigo, Svizzera',
      datenschutz: 'Protezione dei dati',
      datenschutzText1: 'Questo sito web raccoglie dati personali esclusivamente tramite il modulo di contatto. I dati trasmessi (nome, e-mail, messaggio) vengono trattati in modo confidenziale, non vengono trasmessi a terzi e vengono utilizzati esclusivamente per la presa di contatto nell\'ambito del progetto.',
      datenschutzText2: 'Con l\'invio del modulo, acconsentite al trattamento dei vostri dati a questo scopo. Potete revocare il vostro consenso in qualsiasi momento.',
      datenschutzText3: 'Questo sito utilizza Cloudflare Turnstile per proteggere il modulo di contatto da abusi. Vengono impostati cookie tecnicamente necessari. Non viene effettuato alcun tracciamento.',
      hilfe: 'Aiuto in situazioni di emergenza',
      copyright: '© 2026 Ich au. Tutti i diritti riservati.'
    },
    exit: { label: 'Lascia il sito' }
  },

  tr: {
    nav: { start: 'Başlangıç', kontakt: 'İletişim', hintergrund: 'Arka Plan', team: 'Ekip' },
    hero: {
      title: 'Senin hikayen{br}duyulmayı hak ediyor.',
      intro: '2027 yılında, partnerlik ve evlilik içi şiddet konulu bir tiyatro oyununu sahneye taşıyacağız — ve hikayesini paylaşmaya hazır insanlar arıyoruz.',
      btn: 'Bizimle iletişime geç',
      notice: 'Acil bir tehlike durumunda mısın?',
      noticeLink: 'Mağdur Yardımı İsviçre',
      text1: 'Farklı sanatçılardan oluşan bir ekibiz. Bu amaçla, mağdurlarla ve uzmanlarla görüşmeler yapıyoruz ve bu röportajlardan bir tiyatro oyunu oluşturuyoruz. Eğer aile içi şiddet yaşamışsan ve bunu anlatmaya hazırsan, seni dinlemek ve anlatacaklarını duyurmak istiyoruz.',
      text2: 'Çünkü İsviçre\'de sessizlik ve utanç duygusunun bu şiddetle mücadeleyi zorlaştırdığına inanıyoruz. Anlattıkların bu sessizliği kırmaya katkıda bulunabilir ve benzer bir durum yaşayan ya da yaşamış olan diğer kişilere yardım edebilir. Hikayen, toplum olarak bize kapalı kapılar ardında neler olup bittiğini hatırlatabilir. Ve senin hikayen, diğerlerinin hikayeleriyle birlikte, bu şiddetin hepimizi nasıl etkilediğini ortaya koyar.',
      dialect: 'Bu hepimizi ilgilendirir. Bu konuda yalnız değilsin.',
      anonym: 'Kişisel kimliğin gizli kalacak ve hikayeni istediğin zaman geri çekme imkânın olacak. Görüşmeler, senin seçtiğin bir ortamda çevrimiçi olarak veya yüz yüze gerçekleşecek.'
    },
    kontakt: {
      label: 'İletişim',
      title: 'Bizimle iletişime geç',
      intro: 'Bu projeye katkıda bulunmak istiyorsan veya sadece merak ediyorsan, bize aşağıdaki yollarla ulaşabilirsin:',
      telefon: 'Telefon:',
      email: 'E-posta:',
      instagram: 'Instagram:',
      form: {
        intro: 'Veya iletişim formunu kullan. Senden haber almaktan büyük mutluluk duyarız; güvenin ve zaman ayırdığın için teşekkür ederiz!',
        name: 'İsim',
        email: 'E-posta',
        nachricht: 'Mesaj',
        nachrichtHint: '(isteğe bağlı, maks. 750 karakter)',
        datenschutz: '[link] okudum ve verilerimin gizli olarak işlenmesini kabul ediyorum. Tüm bilgiler kesinlikle gizli tutulur.',
        datenschutzLink: 'Gizlilik politikasını',
        submit: 'Gönder',
        success: 'Mesajın için teşekkürler. Sana geri döneceğiz.'
      }
    },
    projekt: {
      label: 'Proje',
      title: 'Arka Plan',
      text1: 'Yazar ve yönetmen Anna Papst, yakında sahnelenecek tiyatro projesinde aile içi ve ev içi şiddet mağdurlarına söz veriyor. Amacı, mağdurlara bir ses vermek ve bu konuya bir platform sunmak. Bunun için, konuyla ilgili uygulama ve araştırma alanlarından uzmanlarla yoğun görüşmeler yürütüyor ve hikayelerini anlatmak isteyen mağdurlara bir çağrı yapıyor.',
      text2: 'Bu süreçte, görüşme ortaklarının korunması en öncelikli konudur. Görüşme aşaması 6 aylık bir süreyi kapsıyor ve ilk görüşmeden bitmiş tiyatro metnine kadar olan süreç özenle yürütülüyor. Görüşme ortaklarından hiçbiri sahneye çıkmayacak; tüm roller profesyonel oyuncular tarafından üstlenilecek.',
      text3: 'Anna Papst, savunmasız gruplarla gerçekleştirdiği belgesel tiyatro projelerinde uzun yıllara dayanan bir deneyime sahiptir. Ayrıca, yaklaşan proje için medica mondiale\'nin Stres ve Travmaya Duyarlı Yaklaşım (STA®) programı kapsamında eğitim almaktadır. Proje süresince Anna Papst, uzmanlar Anja Derungs (Zürih Kadın Sığınma Evi Vakfı) ve Lucia Tozzi (medica mondiale foundation switzerland) tarafından desteklenmekte ve düzenli olarak koçluk almaktadır.',
      card1: {
        title: 'Görüşmeler',
        text1: 'Görüşme katılımcıları, hayatlarından en çok hangi konuları anlatmak istediklerini serbestçe seçebilirler: Kendi evlerinde, tarafsız bir mekânda veya çevrimiçi olarak. İsterlerse, bu görüşmeye bir refakatçi de katılabilir.',
        text2: 'Çağrı, Almanca, İngilizce, Fransızca, İtalyanca, Türkçe ve Arapça dillerinde duyurulacaktır. İtalyanca, Türkçe ve Arapça yapılan görüşmelerde bir çevirmen hazır bulunacaktır.'
      },
      card2: {
        title: 'Görüşmeden metne',
        text1: 'Kaydedilen görüşmeden kelimesi kelimesine bir transkript hazırlanır. Bu transkriptten ilk metin taslağı oluşturulur. Bu taslak, görüşme ortağına geri gönderilir ve metne bir şey eklemek, not düşmek veya değişiklik yapmak isteyip istemediği sorulur. Metin, görüşme ortağı metni onaylayana kadar yazar ile görüşme ortağı arasında gidip gelir. Ancak o zaman metin, tiyatro oyununun bir parçası haline gelir. Görüşme ortağı, bu süreç boyunca istediği zaman katılımını tamamen geri çekme hakkına sahiptir. Tüm görüşme ortakları anonim kalır; ikamet yerleri ve kendilerini tanımlamaya yarayabilecek diğer bilgiler de değiştirilir.',
        text2: ''
      },
      card3: {
        title: 'Sahnede',
        text1: 'Bitmiş tiyatro metni, çeşitli bir sanatçı kolektifi tarafından sahneye taşınır. Her görüşme partneri, prova sürecinde henüz başka seyirciler yokken kendi metninin sahnelenişini izlemeye davet edilir. Ardından, kendi hikayesini sahnede görmenin neler tetiklediğini anlatmaya ve olası değişiklik isteklerini dile getirmeye alan tanıyan bir geri bildirim görüşmesi planlanır. Prova sürecini belirli noktalarda takip eden ve gerektiğinde psikososyal destek sunabilen bir travma terapisti de bu görüşmede hazır bulunacaktır.',
        text2: 'Elbette görüşme partnerleri halka açık gösterilere de davet edilir ve ücretsiz bilet alırlar. Bir gösteriyi ziyaret etmek, sahnelemeyle ilgili diğer tüm adımlar gibi, kimsenin zorunlu hissetmemesi gereken bir tekliftir. Daha önceki çalışmalarda, örneğin depresyonlu kişilerin veya eski mahkumların biyografileriyle, bir gösteriyi izleme teklifi sıklıkla kabul edilmiş ve kendi biyografisinin bir tiyatro eserine dönüştürülmesi değer verici ve güçlendirici olarak deneyimlenmiştir.'
      },
      card4: {
        title: 'Kuruluş',
        text1: 'zeitgeschehen e.v.',
        text2: ''
      }
    },
    team: {
      label: 'Hakkımızda',
      title: 'Ekip',
      group: {
        leitung: 'Sanat yönetimi',
        dramaturgie: 'Dramaturji & metin',
        buehne: 'Sahne, kostüm & müzik',
        ensemble: 'Topluluk',
        produktion: 'Prodüksiyon',
        sounding: 'Sounding Board'
      },
      role: {
        regie: 'Yönetmenlik, metin & konsept',
        dramaturgie: 'Dramaturji (sahneleme)',
        textentwicklung: 'Metin geliştirme',
        buehne: 'Sahne tasarımı',
        kostueme: 'Kostümler',
        musik: 'Müzik',
        produktionsleitung: 'Prodüksiyon yönetimi',
        media: 'Medya & sosyal medya',
        koproduktion: 'Ko-prodüksiyon',
        illustrationen: 'İllüstrasyonlar',
        website: 'Web sitesi'
      }
    },
    cta: {
      btn: 'Bizimle iletişime geç',
      backtotop: 'Başa dön'
    },
    footer: {
      impressum: 'Künye',
      impressumText: 'Ich au | c/o zeitgeschehen e.v. | Zürih, İsviçre',
      datenschutz: 'Gizlilik politikası',
      datenschutzText1: 'Bu web sitesi yalnızca iletişim formu aracılığıyla kişisel veri toplar. İletilen veriler (isim, e-posta, mesaj) gizli tutulur, üçüncü şahıslarla paylaşılmaz ve yalnızca proje kapsamında iletişim amacıyla kullanılır.',
      datenschutzText2: 'Formu göndererek verilerinizin bu amaçla işlenmesine onay vermiş olursunuz. Onayınızı istediğiniz zaman geri çekebilirsiniz.',
      datenschutzText3: 'Bu web sitesi, iletişim formunu kötüye kullanıma karşı korumak için Cloudflare Turnstile kullanmaktadır. Bu amaçla teknik olarak gerekli çerezler kullanılır. Herhangi bir izleme yapılmaz.',
      hilfe: 'Acil durumlarda yardım',
      copyright: '© 2026 Ich au. Tüm hakları saklıdır.'
    },
    exit: { label: 'Siteyi terk et' }
  },

  ar: {
    nav: { start: 'البداية', kontakt: 'اتصل بنا', hintergrund: 'الخلفية', team: 'الفريق' },
    hero: {
      title: 'قصتكِ لازم{br}تنسمع!',
      intro: 'إحنا فريق فني من فنانات وفنانين من خلفيات مختلفة، وراح نقدّم في سنة 2027 عمل مسرحي عن العنف في العلاقات العاطفية والزوجية.',
      btn: 'تواصلي معنا',
      notice: 'هل تواجه/ين حالة خطر حادة؟',
      noticeLink: 'مساعدة الضحايا سويسرا',
      text1: 'عشان هيك، عم نحكي مع نساء مرّوا بتجارب عنف منزلي، ومع خبيرات وخبراء، وبعدين نحوّل هالمقابلات لعمل مسرحي. إذا كنتِ تعرضتِ لعنف منزلي، وحابة تحكي عن تجربتكِ، إحنا جاهزين نسمعكِ وننقل اللي بتحبي تقوليه.',
      text2: 'إحنا مؤمنين إن الصمت والخجل في سويسرا بيخلّوا مواجهة هالنوع من العنف أصعب. قصتكِ ممكن تساعد بكسر هالصمت، وممكن تساعد نساء تانيات عم يمرّوا أو مرّوا بتجربة شبيهة. قصتكِ ممكن تذكّرنا، كمجتمع، باللي بيصير ورا الأبواب المسكّرة. ومع قصص نساء تانيات، بتبيّن كيف هالعنف بيأثر علينا كلنا.',
      dialect: 'هالموضوع بيهمنا كلنا. إنتِ مو لحالكِ بهالشي.',
      anonym: 'هويتكِ رح تضل مجهولة، وبتقدري بأي وقت تسحبي قصتكِ. المحادثات بتصير بالطريقة اللي بتريّحكِ، أونلاين أو وجهًا لوجه.'
    },
    kontakt: {
      label: 'اتصل بنا',
      title: 'تواصل/ي معنا',
      intro: 'إذا حابة تشاركي بهالمشروع، أو حتى إذا بس حابة تعرفي أكتر بالبداية، فيكي تتواصلي معنا:',
      telefon: 'الهاتف:',
      email: 'البريد الإلكتروني:',
      instagram: 'إنستغرام:',
      form: {
        intro: 'أو استخدمي نموذج الاتصال. منتطلّع نسمع منكِ، وبنشكركِ على ثقتكِ ووقتكِ!',
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        nachricht: 'الرسالة',
        nachrichtHint: '(اختياري، حد أقصى 750 حرفًا)',
        datenschutz: 'لقد قرأت [link] وأوافق على المعالجة السرية لبياناتي. يتم التعامل مع جميع المعلومات بسرية تامة.',
        datenschutzLink: 'سياسة الخصوصية',
        submit: 'إرسال',
        success: 'شكرًا لرسالتك. سنتواصل معك قريبًا.'
      }
    },
    projekt: {
      label: 'المشروع',
      title: 'الخلفية',
      text1: 'في مشروعها المسرحي القادم، تمنح الكاتبة والمخرجة آنا بابست صوتًا للمتأثرين بالعنف الأسري والعائلي. هدفها هو إعطاء الناس صوتًا والموضوع منصة. لهذا الغرض، تُجري محادثات مكثفة مع خبراء من الممارسة والبحث وتطلق نداءً للأشخاص المتأثرين الذين يرغبون في رواية قصتهم.',
      text2: 'حماية المحاورين والمحاورات هي الأولوية القصوى. تمتد مرحلة المحادثات على فترة 6 أشهر، يتم خلالها التعامل بعناية مع العملية من المحادثة الأولى إلى النص المسرحي النهائي. لا يظهر أي من المحاورين على خشبة المسرح، بل يؤدي جميع الأدوار محترفون.',
      text3: 'تتمتع آنا بابست بالفعل بخبرة طويلة في مشاريع المسرح الوثائقي مع الفئات الضعيفة. بالإضافة إلى ذلك، تتدرب لهذا المشروع على النهج الحساس للضغوط والصدمات (STA®) من منظمة medica mondiale. طوال المشروع، يرافق آنا بابست ويقدم لها التوجيه المنتظم المتخصصتان أنيا ديرونغس (مؤسسة دار المرأة في زيورخ) ولوتشيا توتزي (medica mondiale foundation switzerland).',
      card1: {
        title: 'المحادثات',
        text1: 'يمكن للمحاورات اختيار المكان الذي يرغبن فيه لرواية قصصهن بحرية: في منزلهن، في مكان محايد أو عبر الإنترنت. إذا رغبن في ذلك، يمكن أن يكون شخص مرافق حاضرًا أثناء المحادثة.',
        text2: 'يُنشر النداء باللغات الألمانية والإنجليزية والفرنسية والإيطالية والتركية والعربية. ستكون مترجمة حاضرة في المحادثات باللغات الإيطالية والتركية والعربية.'
      },
      card2: {
        title: 'من المحادثة إلى النص',
        text1: 'يتم إعداد نسخة حرفية من المحادثة المسجلة. من هذه النسخة، يُصاغ النص الأول. يُعاد هذا النص إلى المحاورة مع السؤال عما إذا كانت ترغب في إضافة أو التعليق على أو تغيير شيء ما. يتنقل النص بين الكاتبة والمحاورة حتى تكون المحاورة راضية عنه.',
        text2: 'عندها فقط يصبح النص جزءًا من العرض المسرحي الكامل. يحق للمحاورة في أي وقت خلال هذه العملية سحب مشاركتها بالكامل. تبقى جميع المحاورات مجهولات الهوية، كما يتم تغيير أماكن الإقامة والمعلومات الأخرى التي قد تكشف هويتهن.'
      },
      card3: {
        title: 'على خشبة المسرح',
        text1: 'يُقدَّم النص المسرحي النهائي على خشبة المسرح من قبل مجموعة فنية متنوعة. تُدعى كل محاورة خلال عملية التدريب، حين لا يكون هناك متفرجون آخرون بعد، لمشاهدة إخراج نصها. ثم يُحدد موعد لمحادثة تقييم، تتيح المجال للتحدث عما أثاره رؤية قصتها الخاصة على خشبة المسرح وللتعبير عن أي رغبات في التعديل. ستكون حاضرة أيضاً معالجة متخصصة في الصدمات، ترافق عملية التدريب في محطات محددة ويمكنها تقديم الدعم النفسي الاجتماعي عند الحاجة.',
        text2: 'بالطبع، تُدعى المحاورات أيضاً إلى العروض العامة ويحصلن على تذاكر مجانية. حضور عرض ما هو، كجميع الخطوات الأخرى المتعلقة بالإخراج، عرض لا ينبغي لأحد أن يشعر بالالتزام تجاهه. في أعمال سابقة، مثلاً مع سير ذاتية لأشخاص يعانون من الاكتئاب أو لمحكومين سابقين، غالباً ما تم قبول عرض حضور العرض وتم اختبار معالجة السيرة الذاتية الخاصة في عمل مسرحي على أنها تقديرية وتمكينية.'
      },
      card4: {
        title: 'الجهة الراعية',
        text1: 'zeitgeschehen e.v.',
        text2: ''
      }
    },
    team: {
      label: 'من نحن',
      title: 'الفريق',
      group: {
        leitung: 'الإدارة الفنية',
        dramaturgie: 'الدراماتورجيا والنص',
        buehne: 'المسرح والأزياء والموسيقى',
        ensemble: 'الفرقة',
        produktion: 'الإنتاج',
        sounding: 'Sounding Board'
      },
      role: {
        regie: 'الإخراج والنص والمفهوم',
        dramaturgie: 'الدراماتورجيا (الإخراج)',
        textentwicklung: 'تطوير النص',
        buehne: 'تصميم المسرح',
        kostueme: 'الأزياء',
        musik: 'الموسيقى',
        produktionsleitung: 'إدارة الإنتاج',
        media: 'الإعلام ووسائل التواصل الاجتماعي',
        koproduktion: 'إنتاج مشترك',
        illustrationen: 'الرسوم التوضيحية',
        website: 'الموقع الإلكتروني'
      }
    },
    cta: {
      btn: 'تواصل/ي معنا',
      backtotop: 'العودة إلى الأعلى'
    },
    footer: {
      impressum: 'البيانات القانونية',
      impressumText: 'Ich au | c/o zeitgeschehen e.v. | زيورخ، سويسرا',
      datenschutz: 'حماية البيانات',
      datenschutzText1: 'يجمع هذا الموقع البيانات الشخصية حصريًا عبر نموذج الاتصال. يتم التعامل مع البيانات المرسلة (الاسم، البريد الإلكتروني، الرسالة) بسرية، ولا يتم تمريرها إلى أطراف ثالثة، وتُستخدم حصريًا للتواصل في إطار المشروع.',
      datenschutzText2: 'بإرسال النموذج، توافق/ين على معالجة بياناتك لهذا الغرض. يمكنك سحب موافقتك في أي وقت.',
      datenschutzText3: 'يستخدم هذا الموقع Cloudflare Turnstile لحماية نموذج الاتصال من سوء الاستخدام. يتم استخدام ملفات تعريف ارتباط ضرورية تقنيًا لهذا الغرض. لا يتم إجراء أي تتبع.',
      hilfe: 'المساعدة في حالات الطوارئ',
      copyright: '© 2026 Ich au. جميع الحقوق محفوظة.'
    },
    exit: { label: 'مغادرة الموقع' }
  }
}

const savedLang = localStorage.getItem('ichau-lang')

export const i18n = createI18n({
  legacy: false,
  locale: savedLang || 'de',
  fallbackLocale: 'de',
  messages
})
