import { Interests, InterestsEnum } from "src/app/models";
import { v4 as uuidv4 } from "uuid";
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
