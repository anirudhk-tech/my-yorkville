import { BusinessImage } from "@/components/features/business/BusinessImage";
import { BusinessPage } from "@/components/features/business/BusinessPage";
import { Screen } from "@/components/ui/templates/Screen";
import { ScrollView } from "react-native";

export default function BusinessScreen() {
  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BusinessImage />
        <BusinessPage />
      </ScrollView>
    </Screen>
  );
}
