import getProperty from "@/services/getPropertyService";
import ProfileCLient from "./client";
import { getProfiles } from "@/services/profileService";

const PageProfile = async () => {
  const profiles = await getProfiles();
  const property = await getProperty(profiles.tabel_number);
  return <ProfileCLient profile={profiles} property={property} />;
};

export default PageProfile;
