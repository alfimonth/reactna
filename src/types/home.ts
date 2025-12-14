export type DetailProps = {
  title?: string;
  value?: string;
  unit?: string;
  icon?: string;
};

export type RoomProps = {
  name?: string;
  temperatur?: number;
  totalDevices?: number;
};

export type ActiveCardProps = {
  name: string;
  room: string;
  details: {
    title: string;
    type: string;
    value: string | number;
  };
};