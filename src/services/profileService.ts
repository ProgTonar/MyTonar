import { ProfileItem, ProfileData } from '@/data/profileData'

export async function getProfiles(): Promise<ProfileItem> {
    return ProfileData[0]
}