// ════════════════════════════════════════════
// All editable content for the Naming Ceremony site.
// Update these constants to personalize the invitation.
// ════════════════════════════════════════════

export const SITE_CONTENT = {
  // ── Parents & Baby ──
  parentA: 'Mr Nair',
  parentB: 'Mrs Nair',
  babyName: 'Vihaan',

  // ── Event Details ──
  date: '6th September 2026',
  time: '11:45 AM',
  // ISO date for countdown calculation
  ceremonyDate: new Date('2026-09-06T11:45:00'),

  // ── Venue ──
  venueName: 'Hall Complex',
  venueAddress: 'Hall Complex, 1st B Cross Road, 7th Block, Koramangala, Bengaluru, Karnataka, India',
  venueMapQuery: 'Hall+Complex+1st+B+Cross+Road+7th+Block+Koramangala+Bengaluru+Karnataka+India',

  // ── Contact ──
  phoneNumber: '+919876543210',

  // ── Hero ──
  heroInviteLine: 'warmly invite you to the',
  heroSubtitle: 'of their New born baby',

  // ── Warm Invite ──
  warmInviteMessage:
    'With hearts overflowing with gratitude and joy, Mr & Mrs Nair joyfully invite you to the naming ceremony of their little blessing. Come, celebrate this beautiful milestone with us, and shower our little Vihaan with your warmest wishes and love.',

  // ── Images ──
  babyPhoto: '/images/baby.jpg',
  venuePhoto: '/images/venue.jpg',

  // ── Video ──
  youtubeEmbedUrl: 'https://www.youtube.com/embed/BWAnHej2vH8',

  // ── Music ──
  musicSrc: "https://cdn-user.invitationnation.in/music/Can't+Help+Falling+in+Love+(Instrumental).mp3",
};

export interface Wish {
  id: number;
  name: string;
  message: string;
}

export const INITIAL_WISHES: Wish[] = [
  {
    id: 1,
    name: 'Ananya',
    message:
      'May this precious little one be blessed with a life filled with love, good health, and endless joy. Wishing your family beautiful memories as this special name begins a wonderful journey. Always!!!!!!',
  },
  {
    id: 2,
    name: 'Rahul',
    message:
      'Congratulations on this beautiful blessing! May your little one grow up to be strong, kind, and full of laughter. Sending all my love and warmest wishes to your growing family.',
  },
  {
    id: 3,
    name: 'Priya',
    message:
      'What a joyous occasion! May your baby be surrounded by love and happiness always. Here\'s to a lifetime of beautiful moments and cherished memories together as a family.',
  },
];

export const AI_WISH_TEMPLATES = [
  'May this precious little one be blessed with a life filled with love, good health, and endless joy.',
  'Wishing you all the happiness and wonder as you celebrate this beautiful milestone.',
  'May God shower countless blessings on your bundle of joy and your lovely family!',
  'Welcome to the world, little angel! May your life be filled with sweet laughter and love.',
];

export interface ScheduleItem {
  id: number;
  emoji?: string;
  name: string;
  title: string;
  time: string;
}

export const TIMELINE_EVENTS = [
  { id: 1, emoji: '🎀', name: 'Welcome & Gathering', title: 'Welcome & Gathering', time: '10:30 am' },
  { id: 2, emoji: '🪔', name: 'Namakarana Pooja', title: 'Namakarana Pooja', time: '11:00 am' },
  { id: 3, emoji: '✨', name: 'Name Reveal & Aarti', title: 'Name Reveal & Aarti', time: '11:45 am' },
  { id: 4, emoji: '🍽️', name: 'Lunch', title: 'Lunch', time: '12:30 pm' },
];

export const SCHEDULE_ITEMS = TIMELINE_EVENTS;

export interface GalleryImage {
  id: number;
  src: string;
  url: string;
  alt: string;
  caption: string;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, src: '/images/gallery-1.jpg', url: '/images/gallery-1.jpg', alt: 'Baby in traditional outfit', caption: 'Baby in traditional outfit' },
  { id: 2, src: '/images/gallery-2.jpg', url: '/images/gallery-2.jpg', alt: 'Tiny baby feet', caption: 'Tiny baby feet' },
  { id: 3, src: '/images/gallery-3.jpg', url: '/images/gallery-3.jpg', alt: 'Family portrait', caption: 'Family portrait' },
  { id: 4, src: '/images/gallery-4.jpg', url: '/images/gallery-4.jpg', alt: 'Ceremony decorations', caption: 'Ceremony decorations' },
  { id: 5, src: '/images/gallery-5.jpg', url: '/images/gallery-5.jpg', alt: 'Baby in flower basket', caption: 'Baby in flower basket' },
  { id: 6, src: '/images/gallery-6.jpg', url: '/images/gallery-6.jpg', alt: 'Celebration sweets', caption: 'Celebration sweets' },
];
