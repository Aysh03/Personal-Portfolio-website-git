import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {



 
  // constructor(private toastr: ToastrService) {}



  
  // sendEmail() {
  //   const emailParams = {
  //     name: this.name,
  //     email: this.email,
  //     message: this.message
  //   };
  //   emailjs.send('service_8j0inzr', 'template_t6evqwn', emailParams, 'uJ30R1yQSyC96GcHq')
  //     .then(() => {
  //       this.toastr.success('Email sent successfully!', 'Success', { positionClass: 'toast-top-center' });

  //       console.log('Email sent successfully!');
  //     }, (error) => {
  //       this.toastr.error(`Error: ${error}`);
  //       console.log(`Error: ${error}`);
  //     });

  //   this.name = '';
  //   this.email = '';
  //   this.message = '';
  // }

  contactForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    });
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }



  private getSenderEmail(): string {
    return localStorage.getItem('senderEmail') || '';
  }
  
  private setSenderEmail(email: string): void {
    localStorage.setItem('senderEmail', email);
  }
  

  sendEmail() {
    if (this.contactForm.valid) {
      const emailParams = {
        name: this.name?.value,
        email: this.email?.value,
        message: this.message?.value
      };
  
      const senderEmail = this.getSenderEmail();
      if (senderEmail === this.email?.value) {
        this.toastr.warning('You have already sent an email.', 'Warning', { positionClass: 'toast-top-center' });
        return;
      }
  
      emailjs.send('service_8j0inzr', 'template_t6evqwn', emailParams, 'uJ30R1yQSyC96GcHq')
        .then(() => {
          this.toastr.success('Email sent successfully!', 'Success', { positionClass: 'toast-top-center' });
          console.log('Email sent successfully!');
          this.setSenderEmail(this.email?.value);
        })
        .catch((error) => {
          this.toastr.error(`Error: ${error}`);
          console.log(`Error: ${error}`);
        });
  
      this.contactForm.reset();
    }
  }
  





  




}
