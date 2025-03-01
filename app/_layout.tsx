import { Stack } from "expo-router";

// This allows navigation between two routes
export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="contact-form" />
      <Stack.Screen name="home-form" />
      <Stack.Screen name="main" />
    </Stack>
  );
}
