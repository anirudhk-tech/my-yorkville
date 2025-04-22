import { BusinessImage } from "@/components/features/business/BusinessImage";
import { BusinessPage } from "@/components/features/business/BusinessPage";
import { SafeAreaScreen } from "@/components/ui/templates/SafeAreaScreen";
import { ScrollView } from "react-native";

export interface BusinessScreenProps {
  stacked: boolean;
}

export default function BusinessScreen({ stacked }: BusinessScreenProps) {
  return (
    <SafeAreaScreen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BusinessImage stacked={stacked} />
        <BusinessPage />
      </ScrollView>
    </SafeAreaScreen>
  );
}
