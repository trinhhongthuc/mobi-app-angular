export interface userLogin {
  email: string;
  password: string;
}

export interface userSignIn extends userLogin {
  confirmPassword: string;
}

export interface Interests {
  id: string;
  label: string;
}

export enum InterestsEnum {
  USER_INTERFACE = 'User Interface',
  USER_EXPERIENCE = 'User Experience',
  USER_RESEARCH = 'User Research',
  UX_WRITING = 'UX Writing',
  USER_TESTING = 'User Testing',
  SERVICE_DESIGN = 'Service Design',
  STRATEGY = 'Strategy',
  DESIGN_SYSTEMS = 'Design Systems',
}
