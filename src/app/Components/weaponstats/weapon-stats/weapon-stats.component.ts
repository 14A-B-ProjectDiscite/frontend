import { Component, OnInit } from '@angular/core';
import { WeaponsWithStats } from 'src/app/models/weaponswithstats.model';
import { ConfigurationService, WeaponService } from 'src/app/services';

@Component({
  selector: 'app-weapon-stats',
  templateUrl: './weapon-stats.component.html',
  styleUrls: ['./weapon-stats.component.css']
})
export class WeaponStatsComponent implements OnInit {
  weapons: WeaponsWithStats[] = [];

  constructor(private configService: ConfigurationService, private weaponService: WeaponService) { }

  ngOnInit(): void {
    this.configService.getConfig().subscribe(config => {
      this.weaponService.getWeapons().subscribe(weaponsData => {
        this.weapons = config.weapons.map(weapon => {
          const weaponData = weaponsData.find(w => w.id === weapon.id);
          return {
            id: weapon.id,
            name: weapon.name,
            damage: weapon.damage,
            speed: weapon.speed,
            seen: weaponData?.seen || 0,
            picked: weaponData?.picked || 0
          };
        });
      });
    });
  }
}

