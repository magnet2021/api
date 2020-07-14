export interface ICategorization {
  project: string;
  type: string;
  status: string;
  instruction: string;
  params: {
    attachmentType: string;
    attachment: string;
    taximonies: Object;
  };
  urgency: string;
  response: {
    taxonomies?: Object;
    comments?: string;
  };
  completedAt?: string;
}
