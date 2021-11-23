import {Component, HostListener, OnInit} from '@angular/core';
import {MatDrawerMode} from '@angular/material/sidenav';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'caodaion-app',
  templateUrl: './caodaion-app.component.html',
  styleUrls: ['./caodaion-app.component.scss']
})
export class CaodaionAppComponent implements OnInit {
  navigation = [
    // {
    //   icon: 'home',
    //   display: 'Menu',
    //   path: '.',
    // },
    // {
    //   icon: 'dashboard',
    //   display: 'Menu Expansion',
    //   path: '.',
    //   expand: [
    //     {icon: '', display: 'Menu Sub Item', path: '.'},
    //   ]
    // },
  ];
  drawerMode: MatDrawerMode = 'push';
  drawerOpened = true;
  deferredPrompt: any;
  showDownload = false;
  currentAppLogo = 'assets/brands/logo.kinh.app.svg';
  currentAppLogoName = 'Kinh';
  currentAppPath = 'https://kinh-caodaion.github.io/';

  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {this.breakpointObserver
    .observe(['(max-width: 1024px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.drawerMode = 'over';
        this.drawerOpened = false;
      } else {
        this.drawerMode = 'side';
        this.drawerOpened = true;
      }
    });
  }

  @HostListener('window:beforeinstallprompt', ['$event'])
  onBeforeInstallPrompt(e: any): void {
    console.log(e);
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    this.deferredPrompt = e;
    this.showDownload = true;
  }

  addToHomeScreen(): void {
    // hide our user interface that shows our A2HS button
    this.showDownload = false;
    // Show the prompt
    this.deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    this.deferredPrompt.userChoice
      .then((e: any) => {
        if (e.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        this.deferredPrompt = null;
      });
  }
}
