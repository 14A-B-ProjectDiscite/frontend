export interface Weapon {
    id: number
    name: string
    damage: number
    speed: number
  }
  
  export interface Enemy {
    id: number
    name: string
    health: number
    damage: number
    speed: number
  }
  
  export interface Artifact {
    id: number
    name: string
    power: number
  }
  

export interface ConfigModel {
    weapons: Weapon[];
    enemies: Enemy[];
    artifacts: Artifact[];
}