import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-bithday-wish',
  imports: [CommonModule],
  templateUrl: './bithday-wish.html',
  styleUrl: './bithday-wish.css',
})
export class BithdayWish implements OnDestroy {

  // =====================================================
  // CURRENT SCREEN
  // =====================================================

  step = 1;


  // =====================================================
  // STEP 3 - NO BUTTON
  // =====================================================

  noAttempts = 0;

  noX = 0;
  noY = 0;

  noMessage = '';

  noMessages: string[] = [
    'Nice try, Madam Ji! 😎',
    'Nope! You cannot click NO! 😂',
    'Why are you chasing the button? 🤣',
    'Madam Ji, YES is the only option! 😌',
    'Okay okay... I know you want to see it! 👀'
  ];


  // =====================================================
  // STEP 5 - LIGHT
  // =====================================================

  lightOn = false;


  // =====================================================
  // STEP 6 - MUSIC
  // =====================================================

  musicPlaying = false;

  audio: HTMLAudioElement | null = null;


  // =====================================================
  // STEP 7 / 8 - BALLOONS
  // =====================================================

  balloonsFlying = false;


  // =====================================================
  // STEP 9 - CAKE
  // =====================================================

  cakeVisible = false;

  cakeCut = false;


  // =====================================================
  // STEP 10 - FINAL MESSAGE
  // =====================================================

  showMessage = false;


  // =====================================================
  // STEP 11 - MAKE A WISH
  // =====================================================

  wishMade = false;


  // =====================================================
  // CONFETTI
  // =====================================================

  confetti: number[] = [];


  // =====================================================
  // BALLOON DATA
  // =====================================================

  balloons = [

    {
      emoji: '🎈',
      left: 5,
      delay: 0,
      duration: 7
    },

    {
      emoji: '🎈',
      left: 15,
      delay: 1,
      duration: 8
    },

    {
      emoji: '🎈',
      left: 27,
      delay: 2,
      duration: 7
    },

    {
      emoji: '🎈',
      left: 40,
      delay: 0.5,
      duration: 9
    },

    {
      emoji: '🎈',
      left: 52,
      delay: 2.5,
      duration: 8
    },

    {
      emoji: '🎈',
      left: 65,
      delay: 1.5,
      duration: 7
    },

    {
      emoji: '🎈',
      left: 77,
      delay: 3,
      duration: 9
    },

    {
      emoji: '🎈',
      left: 88,
      delay: 0,
      duration: 8
    },

    {
      emoji: '🎈',
      left: 95,
      delay: 2,
      duration: 7
    }

  ];


  // =====================================================
  // STEP 1
  // START SURPRISE
  // =====================================================

  startSurprise(): void {

    console.log('Start birthday surprise');

    this.step = 2;

  }


  // =====================================================
  // STEP 2
  // CONTINUE SURPRISE
  // =====================================================

  continueSurprise(): void {

    console.log('Moving to question screen');

    this.step = 3;

  }


  // =====================================================
  // STEP 3
  // NO BUTTON ESCAPE
  // =====================================================

  escapeNoButton(): void {

    this.noAttempts++;


    // Show different funny messages

    const messageIndex = Math.min(
      this.noAttempts - 1,
      this.noMessages.length - 1
    );


    this.noMessage =
      this.noMessages[messageIndex];


    // -------------------------------------------------
    // Calculate safe area for NO button
    // -------------------------------------------------

    const maxX =
      Math.max(
        100,
        window.innerWidth - 220
      );


    const maxY =
      Math.max(
        100,
        window.innerHeight - 160
      );


    // -------------------------------------------------
    // Random position
    // -------------------------------------------------

    this.noX =
      Math.random() * maxX -
      window.innerWidth / 2 +
      110;


    this.noY =
      Math.random() * maxY -
      window.innerHeight / 2 +
      80;


    console.log(
      'NO button escaped:',
      this.noAttempts
    );

  }


  // =====================================================
  // STEP 3
  // YES BUTTON
  // STEP 4 = MADAM JI
  // =====================================================

  yesButton(): void {

    console.log('YES clicked');

    // Go to Madam Ji screen

    this.step = 4;

  }


  // =====================================================
  // STEP 4
  // MADAM JI → LIGHT
  // =====================================================

  nextToLight(): void {

    console.log('Moving to lights');

    this.step = 5;

  }


  // =====================================================
  // STEP 5
  // TURN ON LIGHT
  // STEP 6 = MUSIC
  // =====================================================

  turnOnLight(): void {

    console.log('Lights turned ON');

    this.lightOn = true;

    this.step = 6;

  }


  // =====================================================
  // STEP 6
  // PLAY MUSIC
  // STEP 7 = BALLOONS
  // =====================================================

  playMusic(): void {

    console.log('Trying to play birthday music');


    // Create audio only once

    if (!this.audio) {

      this.audio = new Audio(
        'birthday3.mp3'
      );

      this.audio.loop = true;

      this.audio.volume = 0.5;

    }


    // -------------------------------------------------
    // Try playing music
    // -------------------------------------------------

    this.audio
      .play()
      .then(() => {

        console.log('Birthday music started');

        this.musicPlaying = true;

        this.step = 7;

      })
      .catch((error) => {

        console.log(
          'Music could not start:',
          error
        );


        // Browser may block audio.
        // Continue birthday experience anyway.

        this.musicPlaying = false;

        this.step = 7;

      });

  }


  // =====================================================
  // STOP MUSIC
  // =====================================================

  stopMusic(): void {

    if (this.audio) {

      this.audio.pause();

      this.audio.currentTime = 0;

      this.audio = null;

    }

    this.musicPlaying = false;

  }


  // =====================================================
  // COMPONENT DESTROY
  // =====================================================

  ngOnDestroy(): void {

    this.stopMusic();

  }


  // =====================================================
  // STEP 7
  // FLY BALLOONS
  // STEP 8 = BALLOONS FLYING
  // =====================================================

  flyBalloons(): void {

    console.log('Balloons are flying!');

    this.balloonsFlying = true;

    this.step = 8;


    // Keep animation active for 9 seconds

    setTimeout(() => {

      this.balloonsFlying = false;

    }, 9000);

  }


  // =====================================================
  // STEP 8
  // SHOW CAKE
  // STEP 9 = CAKE
  // =====================================================

  showCake(): void {

    console.log('Moving to cake');

    this.cakeVisible = true;

    this.step = 9;

  }


  // =====================================================
  // STEP 9
  // CUT CAKE
  // STEP 10 = FINAL BIRTHDAY MESSAGE
  // =====================================================

  cutCake(): void {

    console.log('Cake cutting started');

    this.cakeCut = true;


    // Start confetti

    this.createConfetti();


    // Give cake animation time

    setTimeout(() => {

      this.showMessage = true;

      this.step = 10;

    }, 2500);

  }


  // =====================================================
  // CONFETTI
  // =====================================================

  createConfetti(): void {

    this.confetti = Array.from(
      { length: 120 },
      (_, index) => index
    );


    // Clear confetti after 6 seconds

    setTimeout(() => {

      this.confetti = [];

    }, 6000);

  }


  // =====================================================
  // STEP 10
  // GO TO MAKE A WISH
  // STEP 11
  // =====================================================

  goToWish(): void {

    console.log('Moving to Make a Wish page');

    this.step = 11;

  }


  // =====================================================
  // STEP 11
  // MAKE A WISH
  // =====================================================

  makeWish(): void {

    console.log('Birthday wish submitted');

    this.wishMade = true;


    // Create another round of confetti

    this.createConfetti();

  }

}