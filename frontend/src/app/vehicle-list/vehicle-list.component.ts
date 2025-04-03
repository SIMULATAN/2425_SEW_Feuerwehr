import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { DataService } from '../data.service';
import { Incident } from '../types';
import { RouterLink } from '@angular/router';
import { sortingDataAccessor } from '../utils';

@Component({
  selector: 'app-incident-list',
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.css',
  imports: [MatTableModule, MatPaginatorModule, MatSortModule, RouterLink]
})
export class VehicleListComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Incident>;
  dataSource = new MatTableDataSource<Incident>();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['station.name', 'type', 'callSign', 'radioMessage'];

  dataService = inject(DataService)

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sortingDataAccessor = sortingDataAccessor.nestedProperty;
    this.table.dataSource = this.dataSource;

    this.dataService.getVehicles()
      .subscribe(d => this.dataSource.data = d)
  }
}
