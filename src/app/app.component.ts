import { CommonModule } from "@angular/common"
import { Component,  OnInit, OnDestroy,  ElementRef, ViewChild } from "@angular/core"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"

interface Photo {
  src: string
  name: string
  title: string
  message: string
}

@Component({
  selector: "app-root",
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
  title = "BirthdayWeb"
  @ViewChild("bgSong") bgSongRef!: ElementRef<HTMLAudioElement>

  showAuthOverlay = true // start me lock screen dikhana
  enteredPass = "" // user ka input
  authError = false // wrong pass msg
  private secretPass = "merishree@19"

  currentPhotoIndex = 0
  isPhotoChanging = false

  private photoInterval: any
  private countdownInterval: any

  years = 0
  days = 0
  hours = 0
  minutes = 0
  seconds = 0

  private birthDate = new Date("2006-09-27T00:00:00")

 photos: Photo[] = [
    {
      src: "/assets/pics/1.jpg",
      name: "Bunny",
      title: "Birthday Glow ✨",
      message: "You make even the simplest moments unforgettable.",
    },
    {
      src: "/assets/pics/2.jpg",
      name: "Motoo",
      title: "My Reason to Smile 💫",
      message: "Your smile is the most beautiful gift to me.",
    },
    {
      src: "/assets/pics/p3.png",
      name: "Bunny",
      title: "Cutest Memory 🍼",
      message: "Even back then, your charm was unmatched.",
    },
    {
      src: "/assets/pics/3.jpg",
      name: "Bunny",
      title: "Forever Muse 🎂",
      message: "Every glance, every pose — pure magic.",
    },
    {
      src: "/assets/pics/p6.jpg",
      name: "Motoo",
      title: "Love’s Glow 💖",
      message: "Every picture with you tells a new story.",
    },
    {
      src: "/assets/pics/4.jpg",
      name: "Motoo",
      title: "Endless Grace 🌸",
      message: "You carry elegance in the most effortless way.",
    },
    {
      src: "/assets/pics/p4.jpg",
      name: "Motoo",
      title: "Joyful Togetherness 💞",
      message: "The smiles say it all — endless happiness.",
    },
    {
      src: "/assets/pics/5.jpg",
      name: "Bunny",
      title: "Timeless Beauty 💕",
      message: "The kind of charm that never fades.",
    },
    {
      src: "/assets/pics/6.jpg",
      name: "Motoo",
      title: "Calm & Warmth 🌿",
      message: "Your presence feels like peace itself.",
    },
    {
      src: "/assets/pics/p5.jpg",
      name: "Bunny",
      title: "Wrapped in Warmth 🧣",
      message: "Your presence makes the coldest days warmer.",
    },
    {
      src: "/assets/pics/7.jpg",
      name: "Bunny",
      title: "Festive Spirit ✨",
      message: "Life feels like a celebration with you in it.",
    },
    {
      src: "/assets/pics/8.jpg",
      name: "Motoo",
      title: "Blooming Soul 🌹",
      message: "Even flowers would envy your aura.",
    },
    {
      src: "/assets/pics/p7.jpg",
      name: "Bunny",
      title: "Moments to Treasure ⏳",
      message: "Captured joy, frozen forever in time.",
    },
    {
      src: "/assets/pics/p2.png",
      name: "Motoo",
      title: "Grace in Motion 🎶",
      message: "Every step, every glance, timeless beauty.",
    },
    {
      src: "/assets/pics/p8.jpg",
      name: "Motoo",
      title: "Always by My Side 🤍",
      message: "No distance can ever dim our bond.",
    },
  ]

  floatingStars = Array.from({ length: 25 }, () => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 3,
  }))

  bottomGifts = Array.from({ length: 6 })

  get currentPhoto(): Photo {
    return this.photos[this.currentPhotoIndex]
  }

  ngOnInit(): void {
    this.startPhotoSlideshow()
    this.startCountdown()
  }

  ngOnDestroy(): void {
    if (this.photoInterval) clearInterval(this.photoInterval)
    if (this.countdownInterval) clearInterval(this.countdownInterval)
  }

  private startPhotoSlideshow(): void {
    this.photoInterval = setInterval(() => {
      this.isPhotoChanging = true
      setTimeout(() => {
        this.currentPhotoIndex = (this.currentPhotoIndex + 1) % this.photos.length
        this.isPhotoChanging = false
      }, 600)
    }, 4500)
  }

  private startCountdown(): void {
    this.updateCountdown()
    this.countdownInterval = setInterval(() => {
      this.updateCountdown()
    }, 1000)
  }

  private updateCountdown(): void {
    const now = new Date()
    let ageYears = now.getFullYear() - this.birthDate.getFullYear()
    const birthdayThisYear = new Date(now.getFullYear(), this.birthDate.getMonth(), this.birthDate.getDate())

    if (now < birthdayThisYear) {
      ageYears--
    }

    const lastBirthday = new Date(this.birthDate)
    lastBirthday.setFullYear(this.birthDate.getFullYear() + ageYears)

    const diffMs = now.getTime() - lastBirthday.getTime()
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
    const diffHours = Math.floor((diffMs / (1000 * 60 * 60)) % 24)
    const diffMinutes = Math.floor((diffMs / (1000 * 60)) % 60)
    const diffSeconds = Math.floor((diffMs / 1000) % 60)

    this.years = ageYears
    this.days = diffDays
    this.hours = diffHours
    this.minutes = diffMinutes
    this.seconds = diffSeconds
  }

  unlockApp() {
    if (this.enteredPass === this.secretPass) {
      this.showAuthOverlay = false
      this.authError = false
      this.bgSongRef.nativeElement.play() // 🎵 music play
    } else {
      this.authError = true
    }
  }
}
