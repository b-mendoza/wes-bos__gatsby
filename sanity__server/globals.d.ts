declare module 'all:*' {
  declare const anyArray: unknown[];

  export default anyArray;
}

declare module 'part:*' {
  interface CreateScemaProps {
    name: 'default';
    types: unknown[];
  }

  type CreateScema = (props: CreateScemaProps) => void;

  declare const createSchema: CreateScema;

  export default createSchema;
}
