import { AfterContentChecked, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { TrackRecommendationsService } from '../track-recommendations.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-track-recommendations',
  templateUrl: './track-recommendations.component.html',
  styleUrls: ['./track-recommendations.component.css']
})
export class TrackRecommendationsComponent implements OnInit, AfterContentChecked, OnDestroy {
  /**
   * Define presented table columns
   */
  tableColumns  :  string[] = ['trackTitle', 'artistName', 'albumThumbnailURL', 'albumTitle', 'albumReleaseDate', 'trackNumber', 'trackDuration'];
  dataSource = null;
  private trackRecommendationsSubscription: Subscription;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private trackRecommendationsService: TrackRecommendationsService) { }

  ngOnInit() {
    this.getTrackRecommendations();
  }

  ngAfterContentChecked() {
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy() {
    this.trackRecommendationsSubscription.unsubscribe;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getTrackRecommendations(): void {
    this.trackRecommendationsSubscription = this.trackRecommendationsService.getTrackRecommendations()
    .subscribe(trackRecommendations => {
      /**
       * Populate datasource with retrieved data from service
       */
      this.dataSource = new MatTableDataSource(trackRecommendations)
    });
  }

}
