import { AfterContentChecked, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { TrackRecommendationsService } from '../track-recommendations.service';

@Component({
  selector: 'app-track-recommendations',
  templateUrl: './track-recommendations.component.html',
  styleUrls: ['./track-recommendations.component.css']
})
export class TrackRecommendationsComponent implements OnInit, AfterContentChecked {
  /**
   * Define presented table columns
   */
  tableColumns: string[] = ['trackTitle', 'artistName', 'albumThumbnailURL', 'albumTitle', 'albumReleaseDate', 'trackNumber', 'trackDuration'];
  dataSource = null;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private trackRecommendationsService: TrackRecommendationsService) { }

  ngOnInit() {
    this.getTrackRecommendations();
  }

  ngAfterContentChecked() {
    if (this.dataSource) {
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getTrackRecommendations(): void {
    this.trackRecommendationsService.getTrackRecommendations()
      .subscribe(trackRecommendations => {
        /**
         * Populate datasource with retrieved data from service
         */
        this.dataSource = new MatTableDataSource(trackRecommendations)
      });
  }

}
