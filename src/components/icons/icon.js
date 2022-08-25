import IconAppStore from "./appstore";
import IconBookmark from "./bookmark";
import IconCodepen from "./codepen";
import IconExternal from "./external";
import IconFolder from "./folder";
import IconFork from "./fork";
import IconGitHub from "./github";
import IconInstagram from "./instagram";
import IconLinkedin from "./linkedin";
import IconPlayStore from "./playstore";
import IconStar from "./star";
import IconTwitter from "./twitter";

export const Icon = ({ name }) => {
  switch (name) {
    case "AppStore":
      return <IconAppStore />;
    case "Bookmark":
      return <IconBookmark />;
    case "Codepen":
      return <IconCodepen />;
    case "External":
      return <IconExternal />;
    case "Folder":
      return <IconFolder />;
    case "Fork":
      return <IconFork />;
    case "GitHub":
      return <IconGitHub />;
    case "Instagram":
      return <IconInstagram />;
    case "Linkedin":
      return <IconLinkedin />;
    case "PlayStore":
      return <IconPlayStore />;
    case "Star":
      return <IconStar />;
    case "Twitter":
      return <IconTwitter />;
    default:
      return <IconExternal />;
  }
};
