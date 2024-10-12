import { Component } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent {

  Statistics:any[] = [
    {
      "icon": "fa-solid fa-file-pdf",
      "name": "PDF Files",
      "count": 130,
      "size": "6.5GB"
    },
    {
      "icon": "fa-solid fa-file-csv",
      "name": "CSV Files",
      "count": 99,
      "size": "2.9GB"
    },
    {
      "icon": "fa-solid fa-image",
      "name": "Images",
      "count": 115,
      "size": "3.5GB"
    },
    {
      "icon": "fa-solid fa-file-word",
      "name": "Word Files",
      "count": 110,
      "size": "3.2GB"
    }
  ]

  files:any[] = [
    {
      "name":"my-file.pdf",
      "user":"Abanoub",
      "data": "20 / 6 / 2022",
      "size":"5.5MB"
    },
    {
      "name":"my-file.pdf",
      "user":"Admin",
      "data": "16 / 5 / 2022",
      "size":"12.5MB"
    },
    {
      "name":"my-file.pdf",
      "user":"Uploader",
      "data": "20 / 5 / 2022",
      "size":"2.7MB"
    },
    {
      "name":"my-file.pdf",
      "user":"Abanoub",
      "data": "30 / 5 / 2022",
      "size":"12.7MB"
    },
    {
      "name":"my-file.pdf",
      "user":"Designer",
      "data": "30 / 6 / 2022",
      "size":"16.7MB"
    },
    {
      "name":"my-file.pdf",
      "user":"Abanoub",
      "data": "6 / 7 / 2022",
      "size":"20.5MB"
    },
    {
      "name":"my-file.pdf",
      "user":"Abanoub",
      "data": "15 / 7 / 2022",
      "size":"18.5MB"
    },
    {
      "name":"my-file.pdf",
      "user":"Coder",
      "data": "25 / 7 / 2022",
      "size":"20.5MB"
    },
    {
      "name":"my-file.pdf",
      "user":"Coder",
      "data": "30 / 7 / 2022",
      "size":"25.5MB"
    },
    {
      "name":"my-file.pdf",
      "user":"Coder",
      "data": "5 / 1 / 2023",
      "size":"20.5MB"
    },
    {
      "name":"my-file.pdf",
      "user":"Abanoub",
      "data": "30 / 1 / 2023",
      "size":"26.5MB"
    },
    {
      "name":"my-file.pdf",
      "user":"Abanoub",
      "data": "25 / 2 / 2023",
      "size":"17.5MB"
    },
    {
      "name":"my-file.pdf",
      "user":"Coder",
      "data": "15 / 3 / 2023",
      "size":"10.5MB"
    },
    {
      "name":"my-file.pdf",
      "user":"Uploader",
      "data": "20 / 3 / 2023",
      "size":"17.5MB"
    },
    {
      "name":"my-file.pdf",
      "user":"Abanoub",
      "data": "30 / 3 / 2023",
      "size":"18.5MB"
    },
    {
      "name":"my-file.pdf",
      "user":"Abanoub",
      "data": "5 / 5 / 2023",
      "size":"27.5MB"
    },
  ]
}
