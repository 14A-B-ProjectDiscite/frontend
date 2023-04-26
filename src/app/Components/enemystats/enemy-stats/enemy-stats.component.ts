import { Component, OnInit } from '@angular/core';
import { EnemiesWithStats } from 'src/app/models/enemieswithstats.model';
import { ConfigurationService, EnemyService } from 'src/app/services';

@Component({
  selector: 'app-enemy-stats',
  templateUrl: './enemy-stats.component.html',
  styleUrls: ['./enemy-stats.component.css']
})
export class EnemyStatsComponent implements OnInit {
  enemies: EnemiesWithStats[] = [];

  constructor(private configService: ConfigurationService, private enemyService: EnemyService) { }

  ngOnInit(): void {
    this.configService.getConfig().subscribe(config => {
      this.enemyService.getEnemies().subscribe(enemiesData => {
        this.enemies = config.enemies.map(enemy => {
          const enemyData = enemiesData.find(e => e.id === enemy.id);
          return {
            id: enemy.id,
            name: enemy.name,
            health: enemy.health,
            damage: enemy.damage,
            speed: enemy.speed,
            kills: enemyData?.kills || 0,
            deaths: enemyData?.deaths || 0
          };
        });
      });
    });
  }
}