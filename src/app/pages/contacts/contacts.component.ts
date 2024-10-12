import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  head:string[] = ["Register ID", "Name", "Age", "Email", "Phone", "City", "zip Code"]
  users: any[] = [
    {
      "regetid":2456,
      "name":"Khaled",
      "age":26,
      "maile":"Khaled@gmail.com",
      "phone":1277245626,
      "city":"Egypt",
      "zip":2226
    },
    {
      "regetid":2458,
      "name":"Omar",
      "age":28,
      "maile":"Omar@gmail.com",
      "phone":1277245628,
      "city":"Egypt",
      "zip":2228
    },
    {
      "regetid":2457,
      "name":"Amr",
      "age":37,
      "maile":"Amr@gmail.com",
      "phone":1277245637,
      "city":"Egypt",
      "zip":2237
    },
    {
      "regetid":2459,
      "name":"Ahmed",
      "age": 29,
      "maile":"Ahmed@gmail.com",
      "phone": 1277245629,
      "city":"Egypt",
      "zip":2437
    },
    {
      "regetid":2460,
      "name":"Mina",
      "age": 30,
      "maile":"Mina@gmail.com",
      "phone": 1277245630,
      "city":"Riyadh",
      "zip":2530
    },
    {
      "regetid":2461,
      "name":"Abeer",
      "age": 31,
      "maile":"Abeer@gmail.com",
      "phone": 1277245631,
      "city":"Riyadh",
      "zip":2631
    },
    {
      "regetid":2462,
      "name":"Asma",
      "age": 32,
      "maile":"Asma@gmail.com",
      "phone": 1277245632,
      "city":"Riyadh",
      "zip":2762
    },
    {
      "regetid":2463,
      "name":"Nagham",
      "age": 43,
      "maile":"Nagham@gmail.com",
      "phone": 1277245643,
      "city":"Riyadh",
      "zip":2863
    },
    {
      "regetid":2464,
      "name":"Abanoub",
      "age": 26,
      "maile":"Abanoub@gmail.com",
      "phone": 1277245626,
      "city":"Riyadh",
      "zip":2964
    },
    {
      "regetid":2465,
      "name":"Emaad",
      "age": 35,
      "maile":"Emaad@gmail.com",
      "phone": 1277245635,
      "city":"Riyadh",
      "zip":3065
    },
    {
      "regetid":2466,
      "name":"Nader",
      "age": 36,
      "maile":"Nader@gmail.com",
      "phone": 1277245636,
      "city":"Riyadh",
      "zip":3166
    },
  ]
}
