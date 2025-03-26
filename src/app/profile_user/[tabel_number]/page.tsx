import { getProfilesUser } from "@/services/profileUserService";
import ProfileUserClient from "./client";

interface ProfileUserPageProps {
  params: { tabel_number: string };
}

const ProfileUserPage = async ({ params }: ProfileUserPageProps) => {
  const profiles = await getProfilesUser();
  const profile = profiles.find(
    (profile: { tabel_number: string }) =>
      profile.tabel_number === params.tabel_number
  );

  if (!profile) {
    return <div>Профиль не найден</div>;
  }

  return <ProfileUserClient profile={profile} />;
};

export default ProfileUserPage;
