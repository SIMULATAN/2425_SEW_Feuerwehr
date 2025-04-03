import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { RadioMessage } from '../types';
import { RouterLink } from '@angular/router';
import { RadioMessageSocket } from '../sockets';

@Component({
  selector: 'app-radiomessage-list',
  templateUrl: './radiomessage-list.component.html',
  styleUrl: './radiomessage-list.component.css',
  imports: [MatTableModule, MatPaginatorModule, MatSortModule, RouterLink]
})
export class RadiomessageListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<RadioMessage>;
  dataSource = new MatTableDataSource<RadioMessage>();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['timestamp', 'vehicle', 'code'];

  @Input() radioMessages!: RadioMessage[]
  @Input() dataSocketService?: RadioMessageSocket;

  ngOnInit() {
    this.dataSource.data = this.radioMessages;
    this.dataSocketService?.receiveRadioMessages()
      .subscribe(msg => {
        this.dataSource.data = [...this.dataSource.data, msg];
      });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
