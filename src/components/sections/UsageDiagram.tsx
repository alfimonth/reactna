import { DiagramBodyProps, DiagramFooterProps } from '@/types/diagram';
import { roundUpToNiceNumber } from '@/utils/round';
import { View, Text } from 'react-native';

const UsageDiagram = () => {
  return (
    <View>
      <View className="mb-3">
        <View className="flex-row justify-between items-baseline">
          <Text className="text-surface-2 text-body-3/semibold">
            Usage this Week
          </Text>
          <View className="flex-row gap-1 items-baseline">
            <Text className="text-surface-2 text-body-2/semibold">2500</Text>
            <Text className="text-surface-2">watt</Text>
          </View>
        </View>
      </View>
      <DiagramBody label="KwH" rows={[20, 30, 100, 50, 80, 150, 30]} />

      <DiagramFooter
        label="Day"
        cols={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
      />
    </View>
  );
};

const DiagramBody = ({
  label,
  rows,
  min = 0,
  interval = 4,
}: DiagramBodyProps) => {
  const maxDataValue = Math.max(...rows);
  const maxValue = roundUpToNiceNumber(maxDataValue);
  const step = (maxValue - min) / interval;

  return (
    <>
      <Text className="text-surface-2">{label}</Text>
      <View className="flex-row gap-3">
        <View className="flex-col-reverse gap-3 items-end">
          {Array.from({ length: interval + 1 }).map((_, i) => (
            <Text key={i} className="text-surface-2 text-caption-2/regular">
              {min + step * i}
            </Text>
          ))}
        </View>
        <View className="flex-1 justify-between py-3">
          {Array.from({ length: interval + 1 }).map((_, i) => (
            <View key={i} className="bg-surface-2 h-[1px]" />
          ))}
        </View>
      </View>
    </>
  );
};

const DiagramFooter = ({ label, cols }: DiagramFooterProps) => (
  <View className="flex-row justify-between py-2 pl-1 pr-2">
    <Text className="text-surface-2 text-caption-1/semibold">{label}</Text>
    {cols.map((col, i) => (
      <Text key={i} className="text-surface-2">
        {col}
      </Text>
    ))}
  </View>
);

export default UsageDiagram;
