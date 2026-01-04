export type UsagesProps = {
  onSeeAll?: () => void;
  usages: UsageProps[];
};

export type UsageProps = {
  name: string;
  usage: number;
  usageTime: number;
  units: number;
  percentage: number;
};