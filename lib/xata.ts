// Generated by Xata Codegen 0.23.5. Please do not edit.
import type { BaseClientOptions, SchemaInference, XataRecord } from '@xata.io/client';
import { buildClient } from '@xata.io/client';

const tables = [{ name: 'users', columns: [{ name: 'name', type: 'string' }] }] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Users = InferredTypes['users'];
export type UsersRecord = Users & XataRecord;

export type DatabaseSchema = {
  users: UsersRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL: 'https://Tim-O-Connell-s-workspace-ioem4u.eu-west-1.xata.sh/db/sandbox',
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient({
    // need to set no-cache to avoid Vercel caching the db response (it's very stubborn!)
    fetch: (input, init) => fetch(input, { ...init, cache: 'no-cache' }),
  });
  return instance;
};
