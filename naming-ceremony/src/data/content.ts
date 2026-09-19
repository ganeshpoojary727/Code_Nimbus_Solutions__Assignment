// ════════════════════════════════════════════
// All editable content for the Naming Ceremony site.
// Update these constants to personalize the invitation.
// ════════════════════════════════════════════

import { asset } from '../utils/assets';

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
  babyPhoto: asset('/images/baby.jpg'),
  venuePhoto: asset('/images/venue.jpg'),

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


export const TIMELINE_EVENTS = [
  { id: 1, emoji: '🎀', title: 'Welcome & Gathering', time: '10:30 am' },
  { id: 2, emoji: '🪔', title: 'Namakarana Pooja', time: '11:00 am' },
  { id: 3, emoji: '✨', title: 'Name Reveal & Aarti', time: '11:45 am' },
  { id: 4, emoji: '🍽️', title: 'Lunch', time: '12:30 pm' },
];
