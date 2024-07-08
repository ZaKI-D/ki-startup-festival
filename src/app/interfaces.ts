export interface ISocialContacts {
  facebook?: string;
  linkedin?: string;
  instagram?: string;
  website?: string;
  github?: string;
  x?: string;
  youtube?:string;
}

export interface ISpeaker {
  id: string;
  firstname: string;
  lastname: string;
  job?: string;
  topics?: string[];
  description?: string;
  image?: string;
  social: ISocialContacts
}

export interface IAppointment {
  time: string;
  title: string;
  description: string;
  speakerId: string;
  room?: string;
}

export interface IContent {
  speakers: ISpeaker[];
  schedule: IAppointment[];
}
