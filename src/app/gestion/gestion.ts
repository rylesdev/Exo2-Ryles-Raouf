import { Component } from '@angular/core';
import { ContactService } from '../services/contact-service';
import { Contact } from '../interfaces/interfaces';
import { Page404 } from '../page404/page404';

@Component({
  selector: 'app-gestion',
  imports: [
    Page404
  ],
  templateUrl: './gestion.html',
  styleUrl: './gestion.scss'
})
export class Gestion {
  public dernierContact: Contact | null = null;

  constructor(private contactService: ContactService) {
    this.dernierContact = this.contactService.dernierContact;
  }
}
