import { Interests, InterestsEnum } from "src/app/models";
import { v4 as uuidv4 } from "uuid";
import { MenuType } from "../../models/index";
export const interests: Interests[] = [
  {
    id: uuidv4(),
    label: InterestsEnum.USER_INTERFACE,
    checked: false,
  },
  {
    id: uuidv4(),
    label: InterestsEnum.USER_EXPERIENCE,
    checked: false,
  },
  {
    id: uuidv4(),
    label: InterestsEnum.USER_RESEARCH,
    checked: false,
  },
  {
    id: uuidv4(),
    label: InterestsEnum.UX_WRITING,
    checked: false,
  },
  {
    id: uuidv4(),
    label: InterestsEnum.USER_TESTING,
    checked: false,
  },
  {
    id: uuidv4(),
    label: InterestsEnum.SERVICE_DESIGN,
    checked: false,
  },
  {
    id: uuidv4(),
    label: InterestsEnum.STRATEGY,
    checked: false,
  },
  {
    id: uuidv4(),
    label: InterestsEnum.DESIGN_SYSTEMS,
    checked: false,
  },
];

export const MenuSetting: MenuType[] = [
  {
    id: uuidv4(),
    title: "Saved Message",
    active: false,
    children: [
      {
        id: uuidv4(),
        title: "Saved Message 1",
        active: false,
      },
      {
        id: uuidv4(),
        title: "Saved Message 2",
        active: false,
      },
      {
        id: uuidv4(),
        title: "Saved Message 3",
        active: false,
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Recent Calls",
    children: [],
    active: false,
  },
  {
    id: uuidv4(),
    title: "Devices",
    children: [],
    active: false,
  },
  {
    id: uuidv4(),
    title: "Notifications",
    children: [],
    active: false,
  },
  {
    id: uuidv4(),
    title: "Appearance",
    children: [],
    active: false,
  },
  {
    id: uuidv4(),
    title: "Language",
    children: [],
    active: false,
  },
  {
    id: uuidv4(),
    title: "Privacy & Security",
    children: [],
    active: false,
  },
  {
    id: uuidv4(),
    title: "Storage",
    active: false,
    children: [],
  },
];
