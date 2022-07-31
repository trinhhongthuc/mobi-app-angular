import { Interests, InterestsEnum } from 'src/app/models';
import { v4 as uuidv4 } from 'uuid';
export const interests: Interests[] = [
  {
    id: uuidv4(),
    label: InterestsEnum.USER_INTERFACE,
  },
  {
    id: uuidv4(),
    label: InterestsEnum.USER_EXPERIENCE,
  },
  {
    id: uuidv4(),
    label: InterestsEnum.USER_RESEARCH,
  },
  {
    id: uuidv4(),
    label: InterestsEnum.UX_WRITING,
  },
  {
    id: uuidv4(),
    label: InterestsEnum.USER_TESTING,
  },
  {
    id: uuidv4(),
    label: InterestsEnum.SERVICE_DESIGN,
  },
  {
    id: uuidv4(),
    label: InterestsEnum.STRATEGY,
  },
  {
    id: uuidv4(),
    label: InterestsEnum.DESIGN_SYSTEMS,
  },
];
