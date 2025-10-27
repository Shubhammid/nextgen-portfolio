import { type SchemaTypeDefinition } from "sanity";
import profile from "./profile";
import project from "./project";
import skill from "./skill";
import experience from "./experience";
import education from "./education";
import testimonial from "./testimonial";
import certification from "./certification";
import achievement from "./achievement";
import blog from "./blog";
import contact from "./contact";
import navigation from "./navigation";
import service from "./service";
import siteSettings from "./siteSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    profile,
    project,
    skill,
    experience,
    education,
    testimonial,
    certification,
    achievement,
    blog,
    service,
    contact,
    siteSettings,
    navigation,
  ],
};
