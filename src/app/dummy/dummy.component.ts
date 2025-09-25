import { Component } from '@angular/core';
import { NotificationService } from '../notification.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dummy',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './dummy.component.html',
  styleUrl: './dummy.component.scss'
})
export class DummyComponent {
  status = '';
  f = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    message: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private notify: NotificationService) { }

  private toE164(p: string) {
    const d = p.replace(/\D/g, '');
    if (d.startsWith('+')) return d;
    if (d.startsWith('91')) return '+' + d;
    return '+91' + d; // default India
  }

  send(channel: 'whatsapp' | 'sms-msg91' | 'sms-twilio') {
    if (this.f.invalid) { this.status = 'Fill all fields'; return; }
    const { name, phone, message } = this.f.value!;
    const [source = '', destination = ''] = (message || '').split(' to ');
    const price = 499; // dummy fare

    this.status = 'Sending...';

    this.notify.sendQuote({
      channel,
      name: name!,
      phoneE164: this.toE164(phone!),
      source: source || 'Pickup',
      destination: destination || 'Drop',
      price
    }).subscribe({
      next: () => this.status = `Sent via ${channel}!`,
      error: (e) => this.status = `Failed: ${e?.error?.error || 'error'}`
    });
  }
}
