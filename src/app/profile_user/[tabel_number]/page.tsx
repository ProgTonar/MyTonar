import { getProfilesUser } from "@/services/profileUserService";
import ProfileUserClient from "./client";

interface ProfileUserPageProps {
  params: { tabel_number: string };
}

const ProfileUserPage = async ({
  params,
}: {
  params: Promise<{ tabel_number: string }>;
}) => {
  const profiles = await getProfilesUser();
  const { tabel_number } = await params;
  const profile = profiles.find(
    (profile: { tabel_number: string }) => profile.tabel_number === tabel_number
  );

  if (!profile) {
    return <div>Профиль не найден</div>;
  }

  return <ProfileUserClient profile={profile} />;
};

export default ProfileUserPage;
