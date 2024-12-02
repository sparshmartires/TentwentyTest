declare module '@seat' {
    import {ImageSourcePropType} from 'react-native';
    interface SeatType {
      image: ImageSourcePropType;
      name: string;
    }
    interface SeatRowProps {
      row: number;
      seats: number[];
      selectedSeats: string[];
      toggleSeatSelection: (row: number, seat: number) => void;
      seatTypes: Record<number, { name: string; image: any }>;
    }
  }
  