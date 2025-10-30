import { defineQuery } from "next-sanity";
import Chat from "@/components/chat/Chat";
import { sanityFetch } from "@/sanity/lib/live";
import SidebarToggle from "../SidebarToggle";

const CHAT_PROFILE_QUERY = defineQuery(`*[_id == "singleton-profile"][0]{
    _id,
    _type,
    _createdAt,
    _updatedAt,
    _rev,
    firstName,
    lastName,
    headline,
    shortBio,
    email,
    phone,
    location,
    availability,
    socialLinks,
    yearsOfExperience,
    profileImage
  }`);

async function ChatWrapper() {
  const { data: profile } = await sanityFetch({ query: CHAT_PROFILE_QUERY });

  return (
    <div className="h-full w-full">
      <Chat profile={profile} />
    </div>
  );
}

export default ChatWrapper;
