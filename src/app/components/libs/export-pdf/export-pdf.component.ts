import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Table} from '../../../core/models/Table.model.';
import {TrackingService} from '../../../core/services/tracking.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-export-pdf',
  templateUrl: './export-pdf.component.html',
  styleUrls: ['./export-pdf.component.scss']
})
export class ExportPdfComponent implements OnInit{
  loadingTable = true;
  data: Table;
  beginDate: Date
  endDate: Date
  contributionType
  paymentMethod
  constructor(private activatedRoute: ActivatedRoute,
              private trackingService: TrackingService) {
  }
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.beginDate = params['beginDate'];
      this.endDate = params['endDate'];
      this.contributionType = params['contributionType'];
      this.paymentMethod = params['paymentMethod'];
      this.getRecordTable();
      console.log('params',this.beginDate,this.endDate,this.contributionType,this.paymentMethod );
    });
  }
  getRecordTable(): void{
    this.loadingTable = true;
    this.trackingService.listExportRecords()
      .subscribe((table) => {
        this.data = table;
        this.loadingTable = false;
      });
  }

  public openPDF(): void {
    const DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      const fileWidth = 208;
      const fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      const PDF = new jsPDF('p', 'mm', 'a4');
      const position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('contributor-record.pdf');
    });
  }
}
