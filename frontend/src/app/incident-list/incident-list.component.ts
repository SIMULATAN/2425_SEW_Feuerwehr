import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { DataService } from '../data.service';
import { Incident } from '../types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrl: './incident-list.component.css',
  imports: [MatTableModule, MatPaginatorModule, MatSortModule, RouterLink]
})
export class IncidentListComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Incident>;
  dataSource = new MatTableDataSource<Incident>();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'description', 'level'];

  dataService = inject(DataService)

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;

    this.dataService.getOpenIncidents()
      .subscribe(d => this.dataSource.data = d)
  }
}
