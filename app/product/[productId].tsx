import { ProductImage } from "@/components/features/product/ProductImage";
import { ProductPage } from "@/components/features/product/ProductPage";
import { SafeAreaScreen } from "@/components/ui/templates/SafeAreaScreen";
import { Stack } from "expo-router";
import { ScrollView } from "react-native";

export default function ProductScreen() {
  return (
    <SafeAreaScreen>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProductImage />
        <ProductPage />
      </ScrollView>
    </SafeAreaScreen>
  );
}
