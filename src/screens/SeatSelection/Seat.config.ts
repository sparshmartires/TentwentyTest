import {SeatType} from '@seat';

import images from '../../assets/images';

export const seatTypes: SeatType[] = {
    0: {
      name: 'NotAvailable',
      image: images.seatSelection.unavailable,
    },
    1: {
      name: 'Selected',
      image: images.seatSelection.selected,
    },
    2: {
      name: 'Vip',
      image: images.seatSelection.vip,
    },
    3: {
      name: 'Regular',
      image: images.seatSelection.regular,
    },
    4: {
      name: 'Hide',
      // @ts-ignore
      image: null,
    },
  };

export  const seatingArraingment = [
    {
      rowNumber: 1,
      seats: [
        4, 4, 4, 0, 0, 4, 0, 3, 3, 0, 3, 0, 3, 3, 3, 0, 0, 0, 0, 3, 4, 0, 0, 4, 4,
        4,
      ],
    },
    {
      rowNumber: 2,
      seats: [
        4, 3, 3, 0, 0, 4, 0, 3, 3, 0, 3, 0, 3, 3, 3, 0, 0, 0, 0, 3, 4, 0, 0, 3, 0,
        4,
      ],
    },
    {
      rowNumber: 3,
      seats: [
        4, 0, 3, 0, 0, 4, 0, 3, 3, 0, 3, 0, 0, 3, 3, 0, 3, 3, 3, 3, 4, 0, 0, 3, 0,
        4,
      ],
    },
    {
      rowNumber: 4,
      seats: [
        4, 3, 0, 0, 0, 4, 0, 3, 3, 0, 0, 3, 3, 3, 3, 0, 3, 0, 0, 3, 4, 0, 0, 3, 3,
        4,
      ],
    },
    {
      rowNumber: 5,
      seats: [
        0, 3, 0, 0, 0, 4, 0, 3, 3, 0, 0, 0, 3, 3, 3, 0, 0, 3, 0, 3, 4, 0, 0, 3, 3,
        3,
      ],
    },
    {
      rowNumber: 6,
      seats: [
        3, 3, 0, 0, 0, 4, 0, 3, 0, 0, 0, 0, 3, 3, 3, 0, 0, 3, 0, 3, 4, 0, 0, 3, 3,
        0,
      ],
    },
    {
      rowNumber: 7,
      seats: [
        0, 3, 0, 0, 0, 4, 0, 3, 3, 0, 0, 0, 3, 3, 3, 0, 3, 0, 0, 3, 4, 0, 0, 3, 3,
        3,
      ],
    },
    {
      rowNumber: 8,
      seats: [
        3, 3, 0, 0, 0, 4, 0, 3, 3, 0, 0, 0, 3, 0, 3, 3, 0, 0, 0, 3, 4, 0, 0, 3, 3,
        3,
      ],
    },
    {
      rowNumber: 9,
      seats: [
        0, 3, 0, 0, 0, 4, 0, 3, 3, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 3, 4, 0, 0, 3, 3,
        3,
      ],
    },
    {
      rowNumber: 10,
      seats: [
        2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2,
        2,
      ],
    },
  ];

  export const SeatItemTypes = [
    { image: images.seatSelection.selected, name: 'Selected' },
    { image: images.seatSelection.unavailable, name: 'Not available' },
    { image: images.seatSelection.vip, name: 'VIP (150$)' },
    { image: images.seatSelection.regular, name: 'Regular (50$)' },
  ];