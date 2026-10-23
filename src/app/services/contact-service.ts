import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  public dernierContact: Contact | null = null;

  public enregistrerContact(contact: Contact) {
    this.dernierContact = contact;
  }
}
