import { Weapon } from "./config.model";

export interface WeaponsWithStats extends Weapon {
    seen: number;
    picked: number;
  }