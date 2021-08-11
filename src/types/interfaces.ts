import React from 'react';
export interface Result {
  result: string;
  penalty: string;
}
export interface PreResultCardProps {
  no: number;
  result: Result;
}
export interface AltFlag {
  flag: boolean;
  event: React.KeyboardEvent | null;
}
export interface ContestParams {
  type: string;
}
