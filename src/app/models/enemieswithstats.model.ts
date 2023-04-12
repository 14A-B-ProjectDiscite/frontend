import { Enemy } from "./config.model";


export interface EnemiesWithStats extends Enemy {
    kills: number;
    deaths: number;
  }