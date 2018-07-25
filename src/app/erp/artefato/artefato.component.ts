import { Component, OnInit, AfterViewInit,  ViewChild } from '@angular/core';
import { ArtefatoService, Artefato } from './artefato.service';
import { MessageService } from '../../infra/security';
import {MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-artefato',
  templateUrl: './artefato.component.html',
  styleUrls: ['./artefato.component.css']
})
export class ArtefatoComponent implements OnInit, AfterViewInit {

  dataSource: MatTableDataSource<Artefato>;
  displayedColumns = [
    'nome',
    'resourceName',
    'className',
    'classFolder',
    'tmplateTs',
    'templateHtml',
    'templateCss',
    ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor (
    private artefatoService: ArtefatoService,
    private messageService: MessageService
  ) { }

  ngOnInit() {

    this.listAll();
  }

  ngAfterViewInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  listAll() {
    this.artefatoService.listAll().subscribe(
      data => {
        this.dataSource = new MatTableDataSource<Artefato>(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  addNew () {
  }

  startEdit(cliente) {
  }

  deleteItem(o: Artefato) {
    this.artefatoService.delete(o.id)
    .subscribe( _ => this.listAll() );
  }

}
