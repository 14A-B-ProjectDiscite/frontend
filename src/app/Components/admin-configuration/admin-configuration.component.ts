import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ConfigModel } from 'src/app/models';
import { ConfigurationService } from 'src/app/services/configuration.service';
import { environment } from 'src/Enviroments/environment';

@Component({
  selector: 'app-admin-configuration',
  templateUrl: './admin-configuration.component.html',
  styleUrls: ['./admin-configuration.component.css']
})
export class AdminConfigurationComponent {
  config: ConfigModel;
  constructor(private configurationService: ConfigurationService, private toastr: ToastrService) { }
  baseUrl = environment.apiUrl;

  ngOnInit() {
    this.configurationService.getConfig().subscribe(config => {
      this.config = config;
    });
  }

  onSave() {
    this.configurationService.updateConfig(this.config).subscribe(
      () => {
        this.toastr.success('Configuration updated successfully');
        console.log('Configuration updated successfully');
      },
      error => {
        this.toastr.error('Error updating configuration', error);
        console.error('Error updating configuration', error);
      }
    );
}
}
