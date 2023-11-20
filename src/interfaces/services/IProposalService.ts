import Xdc3 from 'xdc3';
import { ProposalVotes } from '../models/IProposal';
import EventEmitter from 'eventemitter3';

export default interface IProposalService {
  emitter: EventEmitter;
  provider: Xdc3;
  chainId: number;

  createProposal(
    targets: string[],
    values: number[],
    calldatas: string[],
    description: string,
    account: string,
  ): Promise<number | Error>;

  castVote(
    proposalId: string,
    account: string,
    support: string,
  ): Promise<number | Error>;

  executeProposal(
    targets: string[],
    values: number[],
    calldatas: string[],
    description: string,
    account: string,
  ): Promise<number | Error>;

  queueProposal(
    targets: string[],
    values: number[],
    calldatas: string[],
    description: string,
    account: string,
  ): Promise<number | Error>;

  viewProposalState(proposalId: string, account: string): Promise<string>;

  nextAcceptableProposalTimestamp(account: string): Promise<number>;

  getVBalance(account: string): Promise<number>;

  hasVoted(proposalId: string, account: string): Promise<boolean>;

  quorum(blockNumber: string): Promise<number>;

  proposalVotes(proposalId: string): Promise<ProposalVotes>;

  proposalThreshold(): Promise<number>;

  setChainId(chainId: number): void;

  setProvider(provider: Xdc3): void;
}
