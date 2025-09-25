import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export type Channel = 'whatsapp' | 'sms-msg91' | 'sms-twilio';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private base = '/api'; // proxy use karenge; otherwise set full URL

  constructor(private http: HttpClient) {}

  sendQuote(payload: {
    channel: Channel;
    name: string;
    phoneE164: string; // "+91xxxxxxxxxx"
    source: string;
    destination: string;
    price: number;
  }) {
    return this.http.post(`${this.base}/notify/quote`, payload);
  }
}
