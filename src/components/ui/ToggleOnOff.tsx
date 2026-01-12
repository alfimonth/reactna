import { useState } from 'react'
import { View, Text } from 'react-native'

const ToggleOnOff = () => {
  const [isOn, setIsOn] = useState(false)

  return (
    <View>
      <Text>{isOn ? 'ON' : 'OFF'}</Text>
      <View>
        <View></View>
      </View>
    </View>
  )
}

export default ToggleOnOff
