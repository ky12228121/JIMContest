import React from 'react';
export interface PreResult {
  result: string;
  penalty: string;
}
export interface PreResultCardProps {
  no: number;
  result: PreResult;
}
export interface AltFlag {
  flag: boolean;
  event: React.KeyboardEvent | null;
}
export interface ContestParams {
  type: string;
}
interface Record {
  name: string;
  type: string;
  result: PreResult[];
  best: string;
  average: string;
}
interface RankingRecord {
  name: string;
  type: string;
  time: string;
  contest: string;
}
export interface ResultTableProps {
  data: Record[];
}
export interface RankingTableProps {
  data: RankingRecord[];
  recordType: string;
}

export interface PastRecordTableProps {
  type: string;
}
