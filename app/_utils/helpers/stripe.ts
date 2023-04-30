import { SUBSCRIPTION_IDS } from "@constants";

export const getStripeSubTier = (subId: string) => {
  const subTier = Object.keys(SUBSCRIPTION_IDS).find(
    (key) => SUBSCRIPTION_IDS[key as keyof typeof SUBSCRIPTION_IDS] === subId
  );
  return subTier?.split("_")[2];
};
