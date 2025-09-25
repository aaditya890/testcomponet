import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

interface Photo {
  src: string;
  name: string;
  title: string;
  message: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'birthday-surprise';
  currentPhotoIndex = 0;
  displayAge = 1;
  isCountingUp = true;
  isPhotoChanging = false;

  private photoInterval: any;
  private ageInterval: any;

  photos: Photo[] = [
    {
      src: '/assets/pics/1.jpg',
      name: 'Bunny',
      title: 'Car Vibes',
      message: 'Always shining with positivity and charm.'
    },
    {
      src: '/assets/pics/2.jpg',
      name: 'Motoo',
      title: 'Sweet Smile',
      message: 'Your smile makes every moment brighter.'
    },
    {
      src: '/assets/pics/3.jpg',
      name: 'Bunny',
      title: 'Mirror Pose',
      message: 'Confidence looks so good on you.'
    },
    {
      src: '/assets/pics/4.jpg',
      name: 'Motoo',
      title: 'Blue Charm',
      message: 'Simple and beautiful, just like you.'
    },
    {
      src: '/assets/pics/5.jpg',
      name: 'Bunny',
      title: 'Elegant Glow',
      message: 'Grace and elegance in every frame.'
    },
    {
      src: '/assets/pics/6.jpg',
      name: 'Motoo',
      title: 'Balcony Vibes',
      message: 'Always spreading peaceful energy.'
    },
    {
      src: '/assets/pics/7.jpg',
      name: 'Bunny',
      title: 'Festive Mood',
      message: 'Colors and happiness suit you so well.'
    },
    {
      src: '/assets/pics/8.jpg',
      name: 'Motoo',
      title: 'Floral Look',
      message: 'Every flower envies your beauty.'
    },
    {
      src: '/assets/pics/9.jpg',
      name: 'Bunny',
      title: 'Bright Smile',
      message: 'Happiness looks perfect on you.'
    },
    {
      src: '/assets/pics/10.jpg',
      name: 'Motoo',
      title: 'Brown Dress',
      message: 'Charm in every little detail.'
    },
    {
      src: '/assets/pics/p1.jpg',
      name: 'Bunny',
      title: 'Little Angel',
      message: 'Cutest beginnings of a beautiful soul.'
    },
    {
      src: '/assets/pics/p2.jpg',
      name: 'Motoo',
      title: 'Togetherness',
      message: 'Bonding that speaks louder than words.'
    },
    {
      src: '/assets/pics/p3.jpg',
      name: 'Bunny',
      title: 'Childhood Duo',
      message: 'Adorable days of innocence.'
    },
    {
      src: '/assets/pics/p4.jpg',
      name: 'Motoo',
      title: 'Happy Pair',
      message: 'Smiles that light up every corner.'
    },
    {
      src: '/assets/pics/p5.jpg',
      name: 'Bunny',
      title: 'Cool Hoodie',
      message: 'Stylish yet humble vibes.'
    },
    {
      src: '/assets/pics/p6.jpg',
      name: 'Motoo',
      title: 'Fun Filters',
      message: 'Playful moments captured forever.'
    },
    {
      src: '/assets/pics/p7.jpg',
      name: 'Bunny',
      title: 'Cute Together',
      message: 'Shared smiles are the best smiles.'
    },
    {
      src: '/assets/pics/p8.jpg',
      name: 'Motoo',
      title: 'Warm Hug',
      message: 'Closeness that feels like home.'
    }
  ];

  floatingStars = Array.from({ length: 25 }, (_, i) => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 3
  }));

  bottomGifts = Array.from({ length: 6 });

  get currentPhoto(): Photo {
    return this.photos[this.currentPhotoIndex];
  }

  ngOnInit(): void {
    this.startPhotoSlideshow();
    this.startAgeCounter();
  }

  ngOnDestroy(): void {
    if (this.photoInterval) {
      clearInterval(this.photoInterval);
    }
    if (this.ageInterval) {
      clearInterval(this.ageInterval);
    }
  }

  private startPhotoSlideshow(): void {
    this.photoInterval = setInterval(() => {
      this.isPhotoChanging = true;

      setTimeout(() => {
        this.currentPhotoIndex = (this.currentPhotoIndex + 1) % this.photos.length;
        this.isPhotoChanging = false;
      }, 600);
    }, 4500);
  }

  private startAgeCounter(): void {
    this.ageInterval = setInterval(() => {
      if (this.isCountingUp && this.displayAge < 19) {
        this.displayAge++;
      } else if (this.displayAge === 19) {
        this.isCountingUp = false;
        if (this.ageInterval) {
          clearInterval(this.ageInterval);
        }
      }
    }, 180);
  }
}