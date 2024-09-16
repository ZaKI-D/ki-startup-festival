export interface ISocialContacts {
  facebook: string | string[];
  linkedin: string | string[];
  xing: string | string[];
  instagram: string | string[];
  website: string | string[];
  github: string | string[];
  x: string | string[];
  youtube: string | string[];
}

export interface ISpeaker {
  id: string;
  enabled: boolean;
  firstname: string;
  lastname: string;
  img?: string;
  job?: string;
  company?: string;
  topics?: string[];
  description?: string;
  image?: string;
  social: ISocialContacts
}

export interface IAppointment {
  enabled?: boolean;
  time: string;
  title: string;
  description: string;
  speakerId: string;
  room?: string;
}

export interface ICompany {
  enabled: boolean;
  img: string;
  url: string;
  name: string;
}

export interface IAddress {
  name: string;
  street: string;
  number: string;
  zip: string;
  city: string;
}

export interface IContent {
  speakers: ISpeaker[];
  speakerModeMoreTba: boolean;
  schedule: IAppointment[];
  ticketUrl: string;
  eventDate: string;
  startTime: string;
  endTime: string;
  thisUrl: string;
  zakidUrl: string;
  zakidMail: string;
  imprintUrl: string;
  address: IAddress;
  companies: ICompany[];
  poweredBy: ICompany[];
}
