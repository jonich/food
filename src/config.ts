import { Injectable } from '@angular/core';

@Injectable()
export class Config {
  public wordpressApiUrl = 'https://demo.titaniumtemplates.com/wordpress/?json=1';
  public drupalApiUrl = 'https://demo.titaniumtemplates.com/drupal/rest/views/rest_api';

  static firebase = {
    // This is a placeholder. Replace with real values.
    apiKey: 'ABCDEFGHI',
    authDomain: 'ABCDEFGHI',
    databaseURL: 'ABCDEFGHI',
    messagingSenderId: '123456'
  };

  static mapsApiKey = 'ABCDEFGHI'; // This is a placeholder. Replace with a real value.
  static sender_id = '211377410430';
  static oneSignalAppId = '8046df2e-979e-4333-aeae-95a81bbc950e';
  static localBaseUrl = 'assets/restaurant/';

  static remoteBaseUrl = 'https://skounis.s3.amazonaws.com/mobile-apps/restaurant-ionic/';
  static backendless = {
    appId: '37DA4B50-6A41-A157-FF0D-474B488B2300',
    appKey: '582C554B-5ACC-0BAC-FFAE-4ABEF8994000'
  };
  static facebook = {
    apiUrl: 'https://graph.facebook.com/v2.8/',
    pageName: 'edesianyc',
    permanentAccessToken: 'ABCDEFGHI' // This is a placeholder. Replace with a real value.
  };

  static currency: { locale: string; code: string; display: 'symbol' | 'code' } = {
    locale: 'de',
    code: 'EUR',
    display: 'symbol'
  };
}
