declare module 'text-encoding' {
    export class TextEncoder {
      readonly encoding: string;
      encode(input?: string): Uint8Array;
      encodeInto(input: string, destination: Uint8Array): { read: number; written: number };
    }
  }