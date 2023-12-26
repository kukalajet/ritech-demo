import { Text } from '@tamagui/core'
import { UserDetailScreen } from 'app/features/user/detail-screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'User',
        }}
      />
      <Text>Native Test</Text>
      <UserDetailScreen />
    </>
  )
}
