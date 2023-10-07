import { Component, OnInit } from '@angular/core';
import { GoogleDocsService } from '../../Services/google-docs.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  documentContent: any;

  constructor(private googleDocsService: GoogleDocsService) {}

  ngOnInit() {
    // Initialize any data or setup needed when the component is created.
  }

  fetchDocumentContent() {
    const documentId = '1cQ_k_tbbxQikb-aulsEopNqI61pEj3sg'; // Replace with your Google Docs document ID

    this.googleDocsService.getDocumentContent(documentId).subscribe((response) => {
      this.documentContent = response;
    });
  }

}
