import { Ripple } from "@/components/ui/molecules/Ripple";
import { SEARCH_LABELS } from "@/constants/SearchLabels";
import { ScrollView } from "react-native";
import { Chip } from "react-native-paper";

export const DiscoverSearchLabels = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      nestedScrollEnabled={true}
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      {SEARCH_LABELS.map((label, idx) => (
        <Ripple key={idx} onPress={() => {}} style={styles.ripple}>
          <Chip style={styles.chip}>{label}</Chip>
        </Ripple>
      ))}
    </ScrollView>
  );
};

const styles = {
  container: {
    flexGrow: 0,
  },
  content: {
    gap: 10,
  },
  chip: {},
  ripple: {
    height: 30,
    borderRadius: 20,
  },
};
