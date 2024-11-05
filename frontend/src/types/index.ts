/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Section {
  id: string;
  name: string;
  structure: any[];
  content?: Record<string, any>;
}

export interface ComponentProps {
  type: string;
  name: string;
  required: boolean;
  value: any;
  onChange: (value: any) => void;
}