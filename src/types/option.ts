export type Plugin = {
  name: string;
  version: string;
  register: (server: any, options: any) => Promise<void>;
};
