import ICollateralPool from '../models/ICollateralPool';
import EventEmitter from 'eventemitter3';
import { DefaultProvider } from '../../types';
import { BigNumber } from 'fathom-ethers';

export default interface IPositionService {
  emitter: EventEmitter;
  provider: DefaultProvider;
  chainId: number;

  openPosition(
    address: string,
    pool: ICollateralPool,
    collateral: string,
    fathomToken: string,
  ): Promise<number | Error>;

  openPositionERC20(
    address: string,
    pool: ICollateralPool,
    collateral: string,
    fathomToken: string,
  ): Promise<number | Error>;

  topUpPositionAndBorrow(
    address: string,
    pool: ICollateralPool,
    collateral: string,
    fathomToken: string,
    positionId: string,
  ): Promise<number | Error>;

  topUpPositionAndBorrowERC20(
    address: string,
    pool: ICollateralPool,
    collateral: string,
    fathomToken: string,
    positionId: string,
  ): Promise<number | Error>;

  topUpPosition(
    address: string,
    pool: ICollateralPool,
    collateral: string,
    positionId: string,
  ): Promise<number | Error>;

  topUpPositionERC20(
    address: string,
    pool: ICollateralPool,
    collateral: string,
    positionId: string,
  ): Promise<number | Error>;

  createProxyWallet(address: string): Promise<string | Error>;

  getProxyWallet(address: string): Promise<string>;

  closePosition(
    positionId: string,
    pool: ICollateralPool,
    address: string,
    collateral: string,
  ): Promise<number | Error>;

  closePositionERC20(
    positionId: string,
    pool: ICollateralPool,
    address: string,
    collateral: string,
  ): Promise<number | Error>;

  approve(address: string, tokenAddress: string): Promise<number | Error>;

  approvalStatus(
    address: string,
    tokenAddress: string,
    collateral: string,
  ): Promise<boolean>;

  balanceStableCoin(address: string): Promise<BigNumber>;

  approveStableCoin(address: string): Promise<number | Error>;

  approvalStatusStableCoin(amount: string, address: string): Promise<boolean>;

  partiallyClosePosition(
    positionId: string,
    pool: ICollateralPool,
    address: string,
    debt: string,
    collateralValue: string,
  ): Promise<number | Error>;

  partiallyClosePositionERC20(
    positionId: string,
    pool: ICollateralPool,
    address: string,
    debt: string,
    collateralValue: string,
  ): Promise<number | Error>;

  getDebtValue(debtShare: number, poolId: string): Promise<string>;

  getPositionDebtCeiling(poolId: string): Promise<string>;

  isWhitelisted(address: string): Promise<boolean>;

  isDecentralizedMode(): Promise<boolean>;

  setChainId(chainId: number): void;

  setProvider(provider: DefaultProvider): void;
}
